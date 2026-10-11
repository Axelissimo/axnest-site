import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import logo from "@/assets/axnest.svg?url";
import { isLang, type Lang } from "@/lib/copy";
import { SiteView } from "./axnest-site-view";

export function Site({ lang }: { lang: Lang }) {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.lang = lang;
    const params = new URLSearchParams(window.location.search);
    let stored: string | null = null;
    // Language selection must still work when browser storage is unavailable.
    try {
      if (isLang(params.get("lang"))) {
        localStorage.setItem("axnest-lang", lang);
        return;
      }
      stored = localStorage.getItem("axnest-lang");
    } catch { /* The URL remains the source of truth. */ }
    if (isLang(params.get("lang"))) return;
    const browserLang = navigator.language.toLowerCase().split("-")[0];
    const guess: Lang = isLang(stored) ? stored : isLang(browserLang) ? browserLang : "en";
    if (guess !== lang) {
      void navigate({ to: "/", search: { lang: guess }, replace: true, resetScroll: false });
    }
  }, [lang, navigate]);

  useEffect(() => {
    const sync = () => { document.documentElement.dataset.suspended = String(document.hidden); };
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      document.removeEventListener("visibilitychange", sync);
      delete document.documentElement.dataset.suspended;
    };
  }, []);

  function pickLang(next: Lang) {
    try { localStorage.setItem("axnest-lang", next); } catch { /* Optional preference. */ }
    void navigate({ to: "/", search: { lang: next }, replace: true, resetScroll: false });
  }

  return <SiteView lang={lang} logoSrc={logo} onLanguageChange={pickLang} />;
}
