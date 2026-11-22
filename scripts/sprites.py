"""Écrit les SVG retouchés (couleurs) dans assets/library/svg_final, puis fabrique les sprites WebP du jeu à partir des SVG sources (assets/library/svg).
Les SVG sources restent intacts (provenance C2PA conservée). Usage : python3 scripts/sprites.py [ids...]"""
import json, re, sys, colorsys, io, os
from pathlib import Path
from PIL import Image
from playwright.sync_api import sync_playwright
ROOT = Path(__file__).resolve().parent.parent
LIB, OUT = ROOT/'assets/library', ROOT/'assets/sprites'
SIZE = 1024
ALLWHITE = {'chantier_naval'}
SNOW_OFFWHITE = {'chaine_alpes', 'chaine_pyrenees', 'massif_alpes_a'}  # neige presque blanche : sinon le retrait du fond blanc la rend transparente
RULES = json.load(open(LIB/'recolor.json'))
def recolor(svg, rules):
    def fix(m):
        r, g, b = [int(x)/255 for x in m.group(2).split(',')]
        h, l, s = colorsys.rgb_to_hls(r, g, b); hd = h*360
        for ru in rules:
            lo, hi = ru['hue']
            if not (lo <= hd <= hi and s > .15): continue
            if 'min_l' in ru and l < ru['min_l']: continue
            if 'max_l' in ru and l >= ru['max_l']: continue
            if ru['to'] is not None: h = ru['to']/360
            s = min(1, s*ru['sat']); l = max(0, min(1, l+ru['light'])); break
        r, g, b = colorsys.hls_to_rgb(h, l, s)
        return '%s"rgb(%d,%d,%d)' % (m.group(1), r*255, g*255, b*255)
    return re.sub(r'((?:fill|stop-color)=)"rgb\(([^)]*)\)', fix, svg)
def main(ids):
    OUT.mkdir(exist_ok=True)
    man = json.load(open(LIB/'manifest.json'))
    ids = ids or [x['id'] for x in man]
    with sync_playwright() as p:
        b = p.chromium.launch(); pg = b.new_page(viewport={'width': SIZE, 'height': SIZE})
        for i in ids:
            svg = (LIB/'svg'/f'{i}.svg').read_text()
            if i in RULES: svg = recolor(svg, RULES[i])
            if i in SNOW_OFFWHITE:
                def _ow(m):
                    r_, g_, b_ = [int(x) for x in m.group(2).split(',')]
                    return m.group(1) + ('"rgb(236,241,245)' if min(r_, g_, b_) > 228 else m.group(0)[len(m.group(1)):])
                k = svg.find('fill="rgb(255,255,255)"')  # 1er aplat blanc = fond : reste blanc pour être retiré
                k = svg.find('>', k) + 1 if k >= 0 else 0
                svg = svg[:k] + re.sub(r'((?:fill|stop-color)=)"rgb\(([^)]*)\)', _ow, svg[k:])
            (LIB/'svg_final').mkdir(exist_ok=True); (LIB/'svg_final'/f'{i}.svg').write_text(svg)
            vb = re.search(r'viewBox="[\d.\-]+ [\d.\-]+ ([\d.]+) ([\d.]+)"', svg)
            ar_ = float(vb.group(2)) / float(vb.group(1)) if vb else 1.0
            sw, sh = (SIZE, SIZE * ar_) if ar_ <= 1 else (SIZE / ar_, SIZE)  # garder les proportions (les SVG Recraft ont preserveAspectRatio="none")
            svg = re.sub(r'<svg ', f'<svg style="width:{sw:.0f}px;height:{sh:.0f}px" ', svg, count=1)
            svg = re.sub(r'\swidth="\d+" height="\d+"', '', svg, count=1)
            pg.set_content(f'<html><body style="margin:0;background:transparent">{svg}</body></html>')
            im = Image.open(io.BytesIO(pg.screenshot(omit_background=True, clip={'x':0,'y':0,'width':SIZE,'height':SIZE}))).convert('RGBA')
            # fond blanc -> transparent (les SVG Recraft ont un fond blanc plein)
            px = im.load(); w, h = im.size
            from collections import deque
            q = deque([(0,0),(w-1,0),(0,h-1),(w-1,h-1)]); seen = set(q)
            while q:
                x, y = q.popleft(); r, g, bl, a = px[x, y]
                if a == 0 or (r > 245 and g > 245 and bl > 245):
                    px[x, y] = (0,0,0,0)
                    for nx, ny in ((x+1,y),(x-1,y),(x,y+1),(x,y-1)):
                        if 0 <= nx < w and 0 <= ny < h and (nx,ny) not in seen: seen.add((nx,ny)); q.append((nx,ny))
            if i in ALLWHITE:  # blanc enfermé dans le dessin (ex. sous le portique) : on le retire aussi
                for yy in range(h):
                    for xx in range(w):
                        r_, g_, b_, a_ = px[xx, yy]
                        if a_ and r_ > 246 and g_ > 246 and b_ > 246: px[xx, yy] = (0, 0, 0, 0)
            im = im.crop(im.getbbox())
            im.save(OUT/f'{i}.webp', 'WEBP', quality=86, method=6)
        b.close()
    print(len(ids), 'sprites,', sum(os.path.getsize(OUT/f'{i}.webp') for i in ids)//1024, 'Ko')
if __name__ == '__main__': main(sys.argv[1:])
