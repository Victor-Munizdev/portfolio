export const locales = ["pt", "en"] as const

export type Locale = (typeof locales)[number]

/** Texto obrigatório nos dois idiomas: o compilador acusa tradução faltando. */
export type Localized<T = string> = Record<Locale, T>

export const htmlLang: Localized = { pt: "pt-BR", en: "en" }

export const localeLabel: Localized = { pt: "Português", en: "English" }

/** Cada idioma tem a sua URL, para ser indexado separadamente (hreflang). */
export const localePath: Localized = { pt: "/", en: "/en" }
