"""Régénère la ligne « if(MT_V2){ ... } » de src/art/sprites.js : massifs mt2_* + arbres au pied espacés."""
import numpy as np, re
from PIL import Image
X=lambda lon:(lon+4.8)/14.4*100; Y=lambda lat:(51.1-lat)/9.7*94
LON=lambda x:x/100*14.4-4.8; LAT=lambda y:51.1-y/94*9.7
M=[('vosges',6.3,47.83,8.5,1,'sapins',9),('jura',5.74,46.42,10.3,1,'sapins',9),('alpes',6.05,44.78,12,1,'sapins',11),
   ('central',2.9,44.75,16,1,'arbre',13),('pyrenees',.75,42.74,29,.8,'sapins',16),('corse',9.05,41.95,5.6,1,'sapins',5)]
puts=[];pts=[]
def add(t,x,y,sz,f):
    if any((x-a)**2+((y-b)/.6)**2<(sz*.75)**2 for a,b in pts): return  # pas de collision entre arbres
    pts.append((x,y));puts.append(f"put('{t}', {LON(x):.3f}, {LAT(y):.3f}, {sz}, {f}, 1, 0, 1);")
for n,lon,lat,w,sy,kind,k in M:
    a=np.asarray(Image.open(f'assets/sprites/mt2_{n}.webp'))[...,3]>80;H,W=a.shape
    h=w*H/W*sy;x0=X(lon)-w/2;y0=Y(lat)-.86*h
    puts.append(f"put('mt2_{n}', {lon}, {lat}, {w}"+(f", 0, {sy}" if sy!=1 else "")+");")
    for row,off,kk in [(0,.4,k),(1,1.6,k//2+1)]:
        for i,c in enumerate(np.linspace(W*.06,W*.94,kk).astype(int)):
            col=a[:,max(c-3,0):c+3].any(1)
            if not col.any(): continue
            b=H-1-col[::-1].argmax()
            t=kind if kind!='arbre' else ['arbre','arbre_automne','arbre_jaune','arbre'][i%4]
            add(t,x0+c/W*w+row*.5*w/kk,y0+b/H*h+off,1.6 if row==0 else 1.5,(i+row)%2)
    if n=='alpes':  # quelques sapins sur les flancs
        for v in (.45,.6,.72):
            for c in (.12,.9):
                add('sapins',x0+c*w,y0+v*h,1.5,int(c>.5))
puts+=["put('chalet', 6.6, 45.0, 1.9, 0, 1, 0, 1);","put('chalet', 5.5, 45.1, 1.8, 1, 1, 0, 1);","put('maison_basque', -0.9, 43.2, 1.9, 0, 1, 0, 1);","put('chalet', 1.6, 42.95, 1.8, 1, 1, 0, 1);","put('maison_pierre', 2.35, 45.0, 1.8, 0, 1, 0, 1);","put('chalet', 6.95, 47.9, 1.7, 0, 1, 0, 1);"]
line="  if(MT_V2){ "+" ".join(puts)+" } /* V2 : massifs d'un bloc + sapins, arbres et chalets au pied */"
p='src/art/sprites.js';s=open(p).read()
s,c=re.subn(r"  if\(MT_V2\)\{ put\('mt2_vosges'.*?chalets au pied \*/",lambda m:line,s);print(c,len(puts))
open(p,'w').write(s)
