#!/usr/bin/env node
/** Generate buildless GitHub Pages files from the same content and React view. */
import { mkdir, readFile, writeFile, copyFile, mkdtemp, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import ts from 'typescript';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const out = join(root, 'github-pages');
const temporary = await mkdtemp(join(root, '.static-export-'));
const escape = (text) => text.replace(/[&<>"']/g, (character) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));

try {
  for (const [source, destination] of [
    ['src/lib/copy.ts', 'copy.mjs'],
    ['src/components/axnest-site-view.tsx', 'view.mjs'],
  ]) {
    const text = await readFile(join(root, source), 'utf8');
    const result = ts.transpileModule(text, { compilerOptions: {
      target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext,
      jsx: ts.JsxEmit.ReactJSX,
    }});
    await writeFile(join(temporary, destination), result.outputText.replace('"../lib/copy"', '"./copy.mjs"'));
  }
  const { copy, LANGS } = await import(pathToFileURL(join(temporary, 'copy.mjs')));
  const { SiteView } = await import(pathToFileURL(join(temporary, 'view.mjs')));
  const filenames = { en: 'index.html', fi: 'fi.html', es: 'es.html', de: 'de.html' };
  await mkdir(join(out, 'fonts'), { recursive: true });
  await mkdir(join(out, 'partners'), { recursive: true });
  const css = (await readFile(join(root, 'src/styles.css'), 'utf8'))
    .replace('@import "tailwindcss";', '')
    .replace('@theme {', ':root {')
    .replaceAll('url("/fonts/', 'url("./fonts/');
  await writeFile(join(out, 'style.css'), css);
  for (const lang of LANGS) {
    const t = copy[lang];
    const body = renderToStaticMarkup(createElement(SiteView, {
      lang, logoSrc: './axnest.svg', assetPrefix: './',
      languageHref: (next) => './' + filenames[next] + '?lang=' + next,
    }));
    const alternates = LANGS.map((code) => `<link rel="alternate" hreflang="${code}" href="./${filenames[code]}">`).join('\n');
    const html = `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(t.metaTitle)}</title>
<meta name="description" content="${escape(t.metaDescription)}">
<meta name="theme-color" content="#0a0a0a">
<meta property="og:title" content="${escape(t.metaTitle)}">
<meta property="og:description" content="${escape(t.metaDescription)}">
<meta property="og:type" content="website">
<meta property="og:image" content="https://axnest.com/og.jpg">
<link rel="icon" href="./favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="./style.css">
${alternates}
<link rel="alternate" hreflang="x-default" href="./index.html">
<script src="./app.js" defer></script>
</head>
<body>${body}</body>
</html>\n`;
    await writeFile(join(out, filenames[lang]), html);
  }
  for (const filename of ['font-0.woff2', 'font-2.woff2', 'font-3.woff2']) {
    await copyFile(join(root, 'public/fonts', filename), join(out, 'fonts', filename));
  }
  for (const filename of ['upcloud.svg', 'amd.svg']) {
    await copyFile(join(root, 'public/partners', filename), join(out, 'partners', filename));
  }
  await copyFile(join(root, 'src/assets/axnest.svg'), join(out, 'axnest.svg'));
  for (const filename of ['favicon.svg', 'og.jpg']) {
    await copyFile(join(root, 'public', filename), join(out, filename));
  }
  await copyFile(join(root, 'scripts/static-client.js'), join(out, 'app.js'));
  await writeFile(join(out, '.nojekyll'), '');
  await writeFile(join(out, 'CNAME'), 'axnest.com\n');
  console.log('Static export: github-pages/ — four complete language pages, no framework JavaScript.');
} finally {
  await rm(temporary, { recursive: true, force: true });
}
