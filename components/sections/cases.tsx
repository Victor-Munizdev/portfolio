import { CaseStudy } from "@/components/sections/case-study"
import { ExternalLink } from "@/components/ui/external-link"
import { Section } from "@/components/ui/section"
import { caseStudies, compactProjects } from "@/data/cases"
import { dictionary } from "@/data/dictionary"
import type { Locale } from "@/lib/i18n"

export function Cases({ locale }: { locale: Locale }) {
  const t = dictionary[locale]

  return (
    <Section id="cases" title={t.cases.title} lead={t.cases.lead}>
      <div className="mt-14 space-y-20 md:space-y-28">
        {caseStudies.map((study) => (
          <CaseStudy key={study.slug} study={study} locale={locale} />
        ))}
      </div>

      <h3 className="mt-20 text-heading md:mt-28">{t.cases.moreTitle}</h3>
      <ul data-reveal className="mt-8">
        {compactProjects.map((project) => (
          <li
            key={project.slug}
            className="grid gap-x-10 gap-y-3 border-t border-line py-6 last:border-b lg:grid-cols-12 lg:items-baseline"
          >
            <p className="font-medium text-bone lg:col-span-3">{project.client}</p>
            <p className="text-text-2 lg:col-span-5">{project.summary[locale]}</p>
            <p className="flex items-baseline gap-2 lg:col-span-2">
              {project.metric ? (
                <>
                  <span className="text-heading tabular-nums">{project.metric.value}</span>
                  <span className="text-sm text-text-2">{project.metric.label[locale]}</span>
                </>
              ) : null}
            </p>
            <p className="lg:col-span-2 lg:text-right">
              {project.link ? (
                <ExternalLink href={project.link.href} newTabLabel={t.external}>
                  {project.link.label[locale]}
                  <span className="sr-only">: {project.client}</span>
                </ExternalLink>
              ) : null}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
