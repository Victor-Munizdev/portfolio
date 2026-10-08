import type { Metadata } from "next"
import { dictionary } from "@/data/dictionary"
import { role, site } from "@/data/site"
import { htmlLang, type Locale, localePath } from "@/lib/i18n"

const ogLocale: Record<Locale, string> = { pt: "pt_BR", en: "en_US" }

export function buildMetadata(locale: Locale): Metadata {
  const { title, description } = dictionary[locale].meta
  const other: Locale = locale === "pt" ? "en" : "pt"

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    applicationName: site.name,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    alternates: {
      canonical: localePath[locale],
      languages: {
        [htmlLang.pt]: localePath.pt,
        [htmlLang.en]: localePath.en,
        "x-default": localePath.en,
      },
    },
    openGraph: {
      type: "profile",
      url: localePath[locale],
      siteName: site.name,
      title,
      description,
      locale: ogLocale[locale],
      alternateLocale: [ogLocale[other]],
      firstName: "Victor",
      lastName: "Muniz",
    },
    twitter: { card: "summary_large_image", title, description },
    icons: { icon: "/logo.png", apple: "/logo.png" },
    robots: { index: true, follow: true },
  }
}

/** JSON-LD: a página é um perfil profissional (ProfilePage → Person). */
export function buildJsonLd(locale: Locale) {
  const url = new URL(localePath[locale], site.url).toString()

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url,
    inLanguage: htmlLang[locale],
    name: dictionary[locale].meta.title,
    description: dictionary[locale].meta.description,
    mainEntity: {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
      image: new URL("/logo.png", site.url).toString(),
      jobTitle: role[locale],
      email: `mailto:${site.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        addressCountry: "BR",
      },
      sameAs: [site.linkedin, site.github, site.instagram],
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "NestJS",
        "Node.js",
        "Prisma",
        "PostgreSQL",
        "REST APIs",
        "Docker",
        "Linux",
        "Nginx",
        "CI/CD",
        "Software architecture",
        "Web application security",
      ],
    },
  }
}
