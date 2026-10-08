import { Section } from "@/components/ui/section"
import { dictionary } from "@/data/dictionary"
import { stackGroups } from "@/data/stack"
import type { Locale } from "@/lib/i18n"

export function Stack({ locale }: { locale: Locale }) {
  const t = dictionary[locale].stack

  return (
    <Section id="stack" title={t.title} lead={t.lead}>
      <dl data-reveal className="mt-12 border-b border-line">
        {stackGroups.map((group) => (
          <div key={group.name.en} className="grid gap-x-10 gap-y-3 border-t border-line py-7 lg:grid-cols-12">
            <dt className="lg:col-span-4">
              <span className="block text-heading">{group.name[locale]}</span>
              <span className="mt-2 block max-w-xs text-sm text-text-2">{group.summary[locale]}</span>
            </dt>
            <dd className="lg:col-span-8">
              <ul className="gap-x-10 text-bone sm:columns-2">
                {group.items[locale].map((item) => (
                  <li key={item} className="mb-2 break-inside-avoid">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
