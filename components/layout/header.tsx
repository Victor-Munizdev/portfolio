import Image from "next/image"
import { LocaleSwitch } from "@/components/layout/locale-switch"
import { MobileNav } from "@/components/layout/mobile-nav"
import { ButtonLink } from "@/components/ui/button-link"
import { dictionary } from "@/data/dictionary"
import { site } from "@/data/site"
import type { Locale } from "@/lib/i18n"

export function Header({ locale }: { locale: Locale }) {
  const t = dictionary[locale]

  const items = [
    { href: "#cases", label: t.nav.cases },
    { href: "#experience", label: t.nav.experience },
    { href: "#process", label: t.nav.process },
    { href: "#stack", label: t.nav.stack },
    { href: "#services", label: t.nav.services },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas/90 px-5 backdrop-blur-md md:px-10">
      <div className="mx-auto flex h-[var(--header-h)] max-w-page items-center justify-between gap-6">
        <a href="#top" className="flex min-h-11 items-center gap-3">
          <Image src="/logo.png" alt="" width={28} height={23} className="h-[23px] w-7" />
          <span className="font-medium tracking-[-0.01em] text-bone">{site.name}</span>
        </a>

        <nav aria-label={t.nav.label} className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="link-line text-sm text-text-2 transition-colors duration-200 hover:text-bone">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitch locale={locale} label={t.nav.language} />
          <ButtonLink href="#contact" className="hidden sm:inline-flex">
            {t.nav.cta}
          </ButtonLink>
          <MobileNav
            items={[...items, { href: "#contact", label: t.nav.contact }]}
            labels={{ open: t.nav.openMenu, close: t.nav.closeMenu, nav: t.nav.label }}
          />
        </div>
      </div>
    </header>
  )
}
