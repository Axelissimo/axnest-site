import { ArrowUpRight } from "lucide-react";
import { APP_URL, LANGS, LANG_NAME, copy, type Lang } from "../lib/copy";

type Props = {
  lang: Lang;
  logoSrc: string;
  assetPrefix?: string;
  languageHref?: (lang: Lang) => string;
  onLanguageChange?: (lang: Lang) => void;
};

/** Shared markup for the application source and the lightweight static export. */
export function SiteView({
  lang,
  logoSrc,
  assetPrefix = "/",
  languageHref = (next) => `?lang=${next}`,
  onLanguageChange,
}: Props) {
  const t = copy[lang];
  const title = t.title.replace(/^AXNEST\s+[–-]\s*/, "").replace(/^\p{L}/u, (letter) => letter.toUpperCase());

  return (
    <div className="site-shell">
      <a className="skip-link" href="#content">{t.skipLink}</a>
      <header className="site-header">
        <div className="site-container header-inner">
          <a href="#top" className="brand" aria-label="AXNEST">
            <img src={logoSrc} alt="AXNEST" width="160" height="26" />
          </a>
          <span className="brand-label">{t.mark}</span>
          <nav className="language-switch" aria-label={t.languageLabel}>
            {LANGS.map((id) => (
              <a
                key={id}
                href={languageHref(id)}
                hrefLang={id}
                lang={id}
                data-language={id}
                aria-current={lang === id ? "page" : undefined}
                aria-label={LANG_NAME[id]}
                onClick={onLanguageChange ? (event) => {
                  if (event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                  event.preventDefault();
                  onLanguageChange(id);
                } : undefined}
              >
                {id.toUpperCase()}
              </a>
            ))}
          </nav>
          <a className="open-app" href={APP_URL} target="_blank" rel="noopener noreferrer">
            {t.openApp}
            <ArrowUpRight size={15} aria-hidden="true" />
            <span className="visually-hidden">. {t.newTab}</span>
          </a>
        </div>
        <div className="header-scanner" aria-hidden="true"><span className="header-scanner__light" /></div>
      </header>

      <main id="content" className="site-container site-main" tabIndex={-1}>
        <section className="site-intro" id="top" aria-labelledby="site-title">
          <p className="eyebrow">{t.workflowLabel}</p>
          <h1 id="site-title">{title}</h1>
          <p className="site-lead">{t.lead}</p>
        </section>

        <div className="principles">
          {t.sections.map((section, index) => (
            <article key={index} className="principle" aria-labelledby={`principle-${index}`}>
              <div className="principle-heading">
                <span className="principle-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h2 id={`principle-${index}`}>{section.heading}</h2>
              </div>
              <div className="principle-copy">
                {section.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 40)}>{paragraph}</p>)}
              </div>
            </article>
          ))}
        </div>

        <aside className="hosting" aria-label={t.hostingLabel}>
          <p>{t.cloud}</p>
          <div className="hosting-logos">
            <img src={`${assetPrefix}partners/upcloud.svg`} alt="UpCloud" width="84" height="20" loading="lazy" />
            <img src={`${assetPrefix}partners/amd.svg`} alt="AMD" width="54" height="18" loading="lazy" />
          </div>
        </aside>
      </main>

      <footer className="site-footer">
        <div className="site-container footer-inner">
          <p className="copyright">
            <svg viewBox="0 0 18 11" width="18" height="11" aria-hidden="true">
              <rect width="18" height="11" fill="#fff" />
              <rect width="18" height="3" y="4" fill="#003580" />
              <rect width="3" height="11" x="5" fill="#003580" />
            </svg>
            © {new Date().getFullYear()} AXNEST
          </p>
          <div className="footer-links">
            <a href="mailto:axel@axnest.com">axel@axnest.com</a>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              app.axnest.com <ArrowUpRight size={13} aria-hidden="true" />
              <span className="visually-hidden">. {t.newTab}</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
