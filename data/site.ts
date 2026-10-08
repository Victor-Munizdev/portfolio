import type { Localized } from "@/lib/i18n"

/** Domínio de produção; NEXT_PUBLIC_SITE_URL sobrescreve se o site mudar de endereço. */
const PRODUCTION_URL = "https://munizvr.vercel.app"

function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
  return PRODUCTION_URL
}

export const site = {
  name: "Victor Muniz",
  url: resolveSiteUrl(),
  email: "munizzvr@gmail.com",
  whatsapp: "5511914098185",
  phoneLabel: "+55 (11) 91409-8185",
  github: "https://github.com/Victor-Munizdev",
  linkedin: "https://www.linkedin.com/in/munizvr/",
  instagram: "https://instagram.com/victor_munizdv",
} as const

export const role: Localized = {
  pt: "Desenvolvedor Full-Stack / Software Engineer",
  en: "Full-Stack Developer / Software Engineer",
}

export const location: Localized = {
  pt: "São Paulo, Brasil · remoto",
  en: "São Paulo, Brazil · remote",
}

export function mailto(locale: "pt" | "en"): string {
  const subject = locale === "pt" ? "Projeto: " : "Project: "
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`
}

export function whatsappLink(locale: "pt" | "en"): string {
  const text =
    locale === "pt"
      ? "Olá, Victor. Vi seu portfólio e quero falar sobre um projeto."
      : "Hi Victor, I saw your portfolio and would like to talk about a project."
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
}
