import { getCollection, type CollectionEntry } from "astro:content";
import type { EntryType } from "perf_hooks";

export async function GET({ params, request }) {
  const id = params.id;
  const lang = params.lang;
  const entries: CollectionEntry<"fiches">[] = await getCollection("fiches");
  const filteredEntries: CollectionEntry<"fiches">[] = entries
    .filter((entry) => entry.data.language === lang)
    .filter((entry) => entry.data.published)
    .filter((entry) => entry.data.refID === params.id);
  if (entries && filteredEntries.length > 1) {
    throw new Error("Duplicate ID on `Fiches`.");
  }
  const entry = filteredEntries[0];
  const [_lang, ...slug] = entry.slug.split("/");
  return new Response(
    JSON.stringify({
      id: id,
      lang: lang,
      title: entry.data.title,
      slug: `/${import.meta.env.PUBLIC_BASE !== "" ? import.meta.env.PUBLIC_BASE + "/" : ""}fr/${entry.collection}/${slug}`,
    }),
  );
}

export async function getStaticPaths() {
  const entries = await getCollection("fiches");
  const paths = entries
    .filter((entry) =>
      import.meta.env.MODE === "development" ? "true" : entry.data.published,
    )
    .map((entry) => {
      const [lang, ...slug] = entry.slug.split("/");
      return {
        params: {
          lang,
          id: entry.data.refID,
        },
        props: { entry, entries },
      };
    });

  return paths;
}
