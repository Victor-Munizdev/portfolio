import { dictionary } from "@/data/dictionary"
import { location, site } from "@/data/site"
import type { Locale } from "@/lib/i18n"

export function Footer({ locale }: { locale: Locale }) {
  const t = dictionary[locale]

  const links = [
    { label: "LinkedIn", href: site.linkedin },
    { label: "GitHub", href: site.github },
    { label: "Instagram", href: site.instagram },
  ]

  return (
    <footer className="px-5 pb-10 md:px-10">
      <div className="mx-auto grid max-w-page gap-x-10 gap-y-8 border-t border-line-strong pt-8 text-sm md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-medium text-bone">{site.name}</p>
          <p className="mt-1 text-text-2">{t.footer.role}</p>
          <p className="mt-1 text-fog">{location[locale]}</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 md:col-span-4">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="link-line inline-block py-1 text-text-2 hover:text-bone">
                {link.label}
                <span className="sr-only"> ({t.external})</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="md:col-span-3 md:text-right">
          <a href="#top" className="link-line inline-block py-1 text-text-2 hover:text-bone">
            {t.footer.top}
          </a>
          <p className="mt-1 text-fog">© 2026 {site.name}</p>
        </div>
      </div>
    </footer>
  )
}
