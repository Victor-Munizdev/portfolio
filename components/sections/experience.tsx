import { Section } from "@/components/ui/section"
import { TagList } from "@/components/ui/tag-list"
import { dictionary } from "@/data/dictionary"
import { roles } from "@/data/experience"
import type { Locale } from "@/lib/i18n"
import type { Role } from "@/types/content"

function CurrentRole({ role, locale }: { role: Role; locale: Locale }) {
  const t = dictionary[locale]
  return (
    <article className="mt-14 grid gap-x-10 gap-y-8 border-t border-line-strong pt-10 lg:grid-cols-12">
      <header data-reveal className="lg:col-span-4">
        <h3 className="text-heading">
          {role.title[locale].split(" · ").map((part) => (
            <span key={part} className="block">
              {part}
            </span>
          ))}
        </h3>
        <p className="mt-2 text-bone">{role.company}</p>
        <p className="mt-1 text-sm text-text-2">
          <span className="whitespace-nowrap tabular-nums">{role.period[locale]}</span>
          <span aria-hidden="true"> · </span>
          {role.location[locale]}
        </p>
        <TagList items={role.stack} label={t.cases.stack} className="mt-6" />
      </header>
      <div data-reveal className="lg:col-span-8">
        <p className="max-w-prose text-lead text-bone">{role.summary[locale]}</p>
        <ul className="mt-8">
          {role.highlights[locale].map((item) => (
            <li key={item} className="border-t border-line py-4 text-text-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

function EarlierRole({ role, locale }: { role: Role; locale: Locale }) {
  const highlights = role.highlights[locale]
  return (
    <li className="grid gap-x-10 gap-y-3 border-t border-line py-7 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <h4 className="font-medium text-bone">{role.company}</h4>
        <p className="mt-1 text-sm text-text-2">{role.title[locale]}</p>
        <p className="mt-1 text-sm text-fog">
          <span className="whitespace-nowrap tabular-nums">{role.period[locale]}</span>
          <span aria-hidden="true"> · </span>
          {role.location[locale]}
        </p>
      </div>
      <div className="lg:col-span-8">
        <p className="max-w-prose text-bone">{role.summary[locale]}</p>
        {highlights.length > 0 ? (
          <ul className="mt-3 max-w-prose space-y-1.5 text-text-2">
            {highlights.map((item) => (
              <li key={item} className="relative pl-4">
                <span aria-hidden="true" className="absolute left-0 top-[0.7em] h-px w-2 bg-fog" />
                {item}
              </li>
            ))}
          </ul>
        ) : null}
        {role.stack.length > 0 ? <p className="mt-3 text-sm text-fog">{role.stack.join(" · ")}</p> : null}
      </div>
    </li>
  )
}

export function Experience({ locale }: { locale: Locale }) {
  const t = dictionary[locale]
  const [current, ...earlier] = roles

  return (
    <Section id="experience" title={t.experience.title} lead={t.experience.lead}>
      <CurrentRole role={current} locale={locale} />
      <h3 className="mt-16 text-heading">{t.experience.earlier}</h3>
      <ul data-reveal className="mt-6 border-b border-line">
        {earlier.map((role) => (
          <EarlierRole key={`${role.company}-${role.title.en}`} role={role} locale={locale} />
        ))}
      </ul>
    </Section>
  )
}
