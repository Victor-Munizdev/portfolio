import type { MetadataRoute } from "next"
import { site } from "@/data/site"
import { htmlLang, locales, localePath } from "@/lib/i18n"

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((locale) => [htmlLang[locale], `${site.url}${localePath[locale]}`]))

  return locales.map((locale) => ({
    url: `${site.url}${localePath[locale]}`,
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }))
}
