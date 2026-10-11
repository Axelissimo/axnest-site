import { createFileRoute } from "@tanstack/react-router";
import { Site } from "@/components/axnest-site";
import { copy, isLang, type Lang } from "@/lib/copy";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): { lang: Lang } => ({
    lang: isLang(search.lang) ? search.lang : "en",
  }),
  head: ({ match }) => {
    const lang = isLang(match.search.lang) ? match.search.lang : "en";
    const page = copy[lang];
    return {
      meta: [
        { title: page.metaTitle },
        { name: "description", content: page.metaDescription },
      ],
    };
  },
  component: function Home() {
    const { lang } = Route.useSearch();
    return <Site lang={lang} />;
  },
});
