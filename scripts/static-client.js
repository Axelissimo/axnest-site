/* Optional language preference and visibility pause; the page works without JS. */
(() => {
  'use strict';
  const pages = { en: 'index.html', es: 'es.html', de: 'de.html', fi: 'fi.html' };
  const isLang = (value) => Object.prototype.hasOwnProperty.call(pages, value);
  const current = document.documentElement.lang;
  const url = new URL(window.location.href);
  const query = url.searchParams.get('lang');
  let stored = null;
  try { stored = localStorage.getItem('axnest-lang'); } catch { /* Optional. */ }
  const browser = navigator.language.toLowerCase().split('-')[0];
  // Explicit language documents always win over stored or browser preferences.
  const landing = /(?:\/|\/index\.html)$/.test(url.pathname);
  const target = isLang(query) ? query : landing ? (isLang(stored) ? stored : isLang(browser) ? browser : 'en') : current;
  if (target !== current && isLang(target)) {
    const next = new URL(pages[target], url);
    next.search = url.search;
    next.searchParams.set('lang', target);
    next.hash = url.hash;
    window.location.replace(next.href);
    return;
  }
  try { localStorage.setItem('axnest-lang', current); } catch { /* Optional. */ }
  document.querySelectorAll('[data-language]').forEach((link) => {
    link.addEventListener('click', () => {
      try { localStorage.setItem('axnest-lang', link.dataset.language); } catch { /* Navigation still works. */ }
    });
  });
  const sync = () => { document.documentElement.dataset.suspended = String(document.hidden); };
  document.addEventListener('visibilitychange', sync);
  sync();
})();
