import { ArrowRight, Github, Linkedin } from "lucide-react"
import { ButtonLink } from "@/components/ui/button-link"
import { PipelineRail } from "@/components/sections/pipeline-rail"
import { dictionary } from "@/data/dictionary"
import { site } from "@/data/site"
import type { Locale } from "@/lib/i18n"

export function Hero({ locale }: { locale: Locale }) {
  const t = dictionary[locale]

  return (
    <section id="top" aria-labelledby="hero-title" tabIndex={-1} className="px-5 pt-[var(--header-h)] md:px-10">
      <div className="mx-auto max-w-page pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="max-w-4xl">
          <h1 id="hero-title" className="text-display">
            <span className="block text-fog">{t.hero.titleLead}</span>
            <span className="block">
              {t.hero.titleRest.map((group) => (
                <span key={group} className="inline-block">
                  {group}&nbsp;
                </span>
              ))}
            </span>
          </h1>
          <p className="mt-8 max-w-prose text-lead text-text-2">{t.hero.lead}</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-4">
            <ButtonLink href="#cases">
              {t.hero.ctaCases}
              <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              {t.hero.ctaProject}
            </ButtonLink>
            <ul className="flex items-center gap-1 sm:ml-3">
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-control px-3 text-sm text-text-2 transition-colors duration-200 hover:bg-surface-2 hover:text-bone"
                >
                  <Linkedin aria-hidden="true" strokeWidth={1.5} className="size-4" />
                  LinkedIn
                  <span className="sr-only">({t.external})</span>
                </a>
              </li>
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-control px-3 text-sm text-text-2 transition-colors duration-200 hover:bg-surface-2 hover:text-bone"
                >
                  <Github aria-hidden="true" strokeWidth={1.5} className="size-4" />
                  GitHub
                  <span className="sr-only">({t.external})</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <PipelineRail locale={locale} />

        <dl className="mt-12 grid gap-x-10 gap-y-6 sm:grid-cols-3">
          {t.hero.counts.map((count) => (
            <div key={count.label} className="flex items-baseline gap-3">
              <dt className="order-2 text-sm text-text-2">{count.label}</dt>
              <dd className="order-1 text-heading tabular-nums">{count.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
