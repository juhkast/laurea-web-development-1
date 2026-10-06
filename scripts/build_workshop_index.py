#!/usr/bin/env python3
"""Build the course landing page from the HTML files in the repository."""
import argparse
import html
import re
from pathlib import Path
from urllib.parse import quote

REPO = 'https://github.com/juhkast/laurea-web-development-1'
NAMES = {
    'WS01_HTML_basics': ('🐘', 'Workshop 01', 'HTML basics'),
    'WS02_JavaScript_Basics': ('🐼', 'Workshop 02', 'JavaScript basics'),
    'WS03_JS_events': ('🐯', 'Workshop 03', 'Events'),
    'WS04_DOM': ('🐧', 'Workshop 04', 'DOM scripting'),
    'WS05_Forms_Localstorage': ('🦊', 'Workshop 05 · Optional', 'Forms and localStorage'),
}
EXCLUDE = {'site-assets', 'scripts', 'node_modules', '_site', '__pycache__'}

def url(path):
    return quote(path, safe='/')

def label(path):
    # Keep the relative filename visible so EN/FI and demos are easy to identify.
    return path.as_posix()

def build(root, output):
    sections = []
    for folder in sorted(root.iterdir(), key=lambda p: p.name.casefold()):
        if not folder.is_dir() or folder.name.startswith('.') or folder.name in EXCLUDE:
            continue
        files = sorted((p for p in folder.rglob('*')
                        if p.is_file() and p.suffix.lower() in {'.html', '.htm'}
                        and not any(s.startswith('.') or s in EXCLUDE
                                    for s in p.relative_to(folder).parts)),
                       key=lambda p: p.as_posix().casefold())
        icon, number, title = NAMES.get(folder.name, ('🐾', 'Resources', folder.name.replace('_', ' ')))
        links = []
        for file in files:
            relative = file.relative_to(root).as_posix()
            links.append(f'<li><a href="./{url(relative)}">{html.escape(label(file.relative_to(folder)))}</a></li>')
        items = '<ul class="examples">'+''.join(links)+'</ul>' if files else ''
        repo_link = REPO + '/tree/main/' + url(folder.name)
        sections.append(f'''<li class="workshop">
<div class="animal" aria-hidden="true">{icon}</div>
<div class="workshop-content"><p class="eyebrow">{html.escape(number)}</p>
<h2>{html.escape(title)}</h2>{items}
<a class="source" href="{repo_link}">View source files on GitHub <span aria-hidden="true">↗</span></a></div>
</li>''')
    # Include any standalone HTML examples in the repository root.
    root_files = sorted(p for p in root.iterdir() if p.is_file()
                        and p.suffix.lower() in {'.html', '.htm'} and p.name != 'index.html')
    if root_files:
        items=''.join(f'<li><a href="./{url(p.name)}">{html.escape(p.name)}</a></li>' for p in root_files)
        sections.append('<li class="workshop"><div class="animal" aria-hidden="true">🐾</div><div class="workshop-content"><h2>More examples</h2><ul class="examples">'+items+'</ul></div></li>')
    page='''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Web Development 1 workshop examples and animal-themed coding practice.">
<title>Web Development 1 · Workshop collection</title>
<link rel="stylesheet" href="./site-assets/styles.css">
</head>
<body>
<a class="skip-link" href="#workshops">Skip to workshops</a>
<main>
<header class="hero">
<p class="eyebrow">Laurea University of Applied Sciences</p>
<h1>Web Development 1</h1>
<p class="intro">Small steps. Curious animals. Your first web applications.</p>
<p>Explore the workshops, try the demos and build your own project.</p>
<a class="repo-link" href="'''+REPO+'''">Course repository on GitHub <span aria-hidden="true">↗</span></a>
<div class="hero-animals" aria-hidden="true">🐘 🐼 🐧</div>
</header>
<section id="workshops" aria-labelledby="workshop-title">
<div class="section-heading"><h2 id="workshop-title">Workshops &amp; examples</h2>
<p>Choose a file to open the example. EN and FI versions are listed where available.</p></div>
<ul class="workshop-list">'''+''.join(sections)+'''</ul>
</section>
<footer><p>Juho Kastemaa · Web Development 1</p><p>Plan before you code. Build, test and learn.</p></footer>
</main>
</body>
</html>
'''
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(page, encoding='utf-8')
    print(f'Built {output} with {len(sections)} groups.')

if __name__ == '__main__':
    parser=argparse.ArgumentParser()
    parser.add_argument('--root', default='.')
    parser.add_argument('--output', default='index.html')
    args=parser.parse_args()
    build(Path(args.root).resolve(), Path(args.output).resolve())
