#!/usr/bin/env python3
"""Assemble src/ en un seul fichier dist/index.html (pour GitHub Pages et les aperçus).
Usage : python3 scripts/build.py"""
import re, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
src = root / 'src'
html = (src / 'index.html').read_text(encoding='utf-8')
def css(m): return '<style>\n' + (src / m.group(1)).read_text(encoding='utf-8').replace('../assets/', 'assets/') + '</style>'
def js(m):  return '<script>\n' + (src / m.group(1)).read_text(encoding='utf-8') + '</script>'
html = re.sub(r'<link rel="stylesheet" href="([^"]+)">', css, html)
html = re.sub(r'<script src="([^"]+)"></script>', js, html)
out = root / 'dist'; out.mkdir(exist_ok=True)
(out / 'index.html').write_text(html, encoding='utf-8')
import shutil
for d in ('sprites', 'fonts'):
    shutil.rmtree(out / 'assets' / d, ignore_errors=True)
    shutil.copytree(root / 'assets' / d, out / 'assets' / d)
print('dist/index.html', len(html) // 1024, 'Ko')
