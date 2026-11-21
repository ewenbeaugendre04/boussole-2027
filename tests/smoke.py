#!/usr/bin/env python3
"""Test rapide : la version assemblée et la version modulaire se chargent sans erreur JS.
Usage : python3 scripts/build.py && python3 tests/smoke.py"""
import pathlib, sys
from playwright.sync_api import sync_playwright
root = pathlib.Path(__file__).resolve().parent.parent
ok = True
with sync_playwright() as p:
    b = p.chromium.launch()
    for page in ['dist/index.html', 'src/index.html']:
        for vp in [(393, 852), (360, 740)]:
            pg = b.new_page(viewport={'width': vp[0], 'height': vp[1]})
            errs = []; pg.on('pageerror', lambda e: errs.append(str(e)[:200]))
            pg.goto((root / page).as_uri()); pg.wait_for_timeout(1500)
            weeks = pg.evaluate('typeof GAME !== "undefined" ? GAME.days.length : 0')
            audit = pg.evaluate('window.__boussole && window.__boussole.fxAudit ? window.__boussole.fxAudit(true).bad : -1')
            print(page, vp, 'semaines', weeks, 'objets mal placés', audit, 'erreurs', errs)
            ok = ok and not errs and weeks == 20 and audit == 0
            pg.close()
    b.close()
sys.exit(0 if ok else 1)
