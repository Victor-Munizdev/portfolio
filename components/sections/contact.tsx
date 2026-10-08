import { ArrowUpRight } from "lucide-react"
import { ButtonLink } from "@/components/ui/button-link"
import { dictionary } from "@/data/dictionary"
import { mailto, site, whatsappLink } from "@/data/site"
import type { Locale } from "@/lib/i18n"

export function Contact({ locale }: { locale: Locale }) {
  const t = dictionary[locale]

  const channels = [
    { label: t.contact.whatsapp, value: site.phoneLabel, href: whatsappLink(locale) },
    { label: t.contact.linkedin, value: "in/munizvr", href: site.linkedin },
    { label: t.contact.github, value: "Victor-Munizdev", href: site.github },
  ]

  return (
    <section id="contact" aria-labelledby="contact-title" tabIndex={-1} className="px-5 md:px-10">
      <div className="relative mx-auto max-w-page pb-20 pt-16 md:pb-28 md:pt-24">
        <span aria-hidden="true" className="rail-track inset-x-0 top-0 h-px" />
        <span aria-hidden="true" data-section-signal className="rail-draw inset-x-0 top-0 h-px origin-left" />
        <div className="grid gap-x-10 gap-y-12 lg:grid-cols-12">
          <div data-reveal className="lg:col-span-7">
            <h2 id="contact-title" className="text-display">
              {t.contact.title}
            </h2>
            <p className="mt-6 max-w-prose text-lead text-text-2">{t.contact.lead}</p>
            <ButtonLink href={mailto(locale)} className="mt-10 max-w-full">
              <span className="truncate">{site.email}</span>
            </ButtonLink>
          </div>

          <ul data-reveal className="self-end border-b border-line lg:col-span-5">
            {channels.map((channel) => (
              <li key={channel.label} className="border-t border-line">
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-16 items-center justify-between gap-6 py-4 transition-colors duration-200 hover:bg-surface"
                >
                  <span className="text-sm text-fog">{channel.label}</span>
                  <span className="flex items-center gap-2 text-bone">
                    <span className="link-line">{channel.value}</span>
                    <ArrowUpRight
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className="size-4 text-fog transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-bone"
                    />
                    <span className="sr-only">({t.external})</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
