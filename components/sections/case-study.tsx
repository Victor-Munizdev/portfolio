import Image from "next/image"
import { ExternalLink } from "@/components/ui/external-link"
import { TagList } from "@/components/ui/tag-list"
import { dictionary } from "@/data/dictionary"
import type { Locale } from "@/lib/i18n"
import type { CaseStudy as CaseStudyData } from "@/types/content"
import { cn } from "@/lib/utils"

interface FieldProps {
  term: string
  children: React.ReactNode
  className?: string
}

function Field({ term, children, className }: FieldProps) {
  return (
    <div className={cn("border-t border-line pt-4", className)}>
      <dt className="text-label font-medium text-fog">{term}</dt>
      <dd className="mt-2 text-text-2">{children}</dd>
    </div>
  )
}

export function CaseStudy({ study, locale }: { study: CaseStudyData; locale: Locale }) {
  const t = dictionary[locale]
  const titleId = `case-${study.slug}`

  return (
    <article aria-labelledby={titleId} data-case className="grid gap-x-10 gap-y-10 border-t border-line-strong pt-10 lg:grid-cols-12">
      <header data-reveal className="lg:col-span-4">
        <h3 id={titleId} className="text-heading text-bone md:text-[1.75rem] md:leading-[1.2]">
          {study.title[locale]}
        </h3>
        <p className="mt-3 text-sm text-text-2">
          <span className="font-medium text-bone">{study.client}</span>
          <span aria-hidden="true"> · </span>
          {study.kind[locale]}
          {study.period ? <span className="mt-1 block tabular-nums">{study.period[locale]}</span> : null}
        </p>

        <div className="mt-8 border-t border-line pt-4">
          <p className="text-label font-medium text-fog">{t.cases.result}</p>
          {study.metric ? (
            <p className="mt-3 flex items-baseline gap-3">
              <span className="text-figure tabular-nums">{study.metric.value}</span>
              <span className="text-bone">{study.metric.label[locale]}</span>
            </p>
          ) : null}
          <p className="mt-2 text-text-2">{study.result[locale]}</p>
        </div>

        {study.link ? (
          <ExternalLink href={study.link.href} newTabLabel={t.external} className="mt-6">
            {study.link.label[locale]}
          </ExternalLink>
        ) : null}
      </header>

      <div className="lg:col-span-8">
        {study.image ? (
          <figure
            className={cn(
              "mb-10 overflow-hidden rounded-frame border border-line",
              study.image.tone === "light" ? "bg-[#f4f6fa]" : "bg-surface",
            )}
          >
            <Image
              src={study.image.src}
              alt={study.image.alt[locale]}
              width={study.image.width}
              height={study.image.height}
              sizes="(min-width: 1280px) 780px, (min-width: 1024px) 62vw, 100vw"
              className="h-auto w-full"
            />
            {study.image.caption ? (
              <figcaption className="border-t border-line bg-canvas px-4 py-3 text-sm text-text-2">
                {study.image.caption[locale]}
              </figcaption>
            ) : null}
          </figure>
        ) : null}

        <dl data-reveal className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          <Field term={t.cases.problem}>{study.problem[locale]}</Field>
          <Field term={t.cases.solution}>{study.solution[locale]}</Field>
          <Field term={t.cases.role}>{study.role[locale]}</Field>
          <Field term={t.cases.architecture}>
            <ul className="space-y-2">
              {study.architecture[locale].map((item) => (
                <li key={item} className="relative pl-4">
                  <span aria-hidden="true" className="absolute left-0 top-[0.7em] h-px w-2 bg-fog" />
                  {item}
                </li>
              ))}
            </ul>
          </Field>
          <Field term={t.cases.stack} className="sm:col-span-2">
            <TagList items={study.stack} label={t.cases.stack} className="mt-1" />
          </Field>
        </dl>
      </div>
    </article>
  )
}
