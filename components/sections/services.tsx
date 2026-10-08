import { ArrowRight } from "lucide-react"
import { ButtonLink } from "@/components/ui/button-link"
import { Section } from "@/components/ui/section"
import { dictionary } from "@/data/dictionary"
import { services } from "@/data/services"
import { mailto, whatsappLink } from "@/data/site"
import type { Locale } from "@/lib/i18n"

export function Services({ locale }: { locale: Locale }) {
  const t = dictionary[locale]

  return (
    <Section id="services" title={t.services.title} lead={t.services.lead}>
      <div className="mt-12 grid gap-x-10 gap-y-12 lg:grid-cols-12">
        <dl data-reveal className="border-b border-line lg:col-span-8">
          {services.map((service) => (
            <div key={service.name.en} className="grid gap-x-10 gap-y-1 border-t border-line py-5 sm:grid-cols-8">
              <dt className="font-medium text-bone sm:col-span-3">{service.name[locale]}</dt>
              <dd className="text-text-2 sm:col-span-5">{service.description[locale]}</dd>
            </div>
          ))}
        </dl>
        <div data-reveal className="flex flex-col items-start gap-3 lg:col-span-4 lg:border-t lg:border-line lg:pt-5">
          <ButtonLink href={mailto(locale)}>
            {t.services.cta}
            <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4" />
          </ButtonLink>
          <ButtonLink href={whatsappLink(locale)} variant="secondary" target="_blank" rel="noopener noreferrer">
            {t.services.ctaWhatsapp}
            <span className="sr-only">({t.external})</span>
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}
