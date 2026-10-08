import { Section } from "@/components/ui/section"
import { metrics } from "@/data/cases"
import { dictionary } from "@/data/dictionary"
import type { Locale } from "@/lib/i18n"

export function Proof({ locale }: { locale: Locale }) {
  const t = dictionary[locale].proof

  return (
    <Section id="proof" title={t.title} lead={t.lead}>
      <table data-reveal className="mt-12 w-full border-collapse border-b border-line text-left">
        <caption className="sr-only">{t.title}</caption>
        <thead className="sr-only">
          <tr>
            <th scope="col">{t.metricColumn}</th>
            <th scope="col">{t.contextColumn}</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((metric) => (
            <tr
              key={metric.context.pt}
              className="grid grid-cols-1 gap-x-10 gap-y-2 border-t border-line py-6 md:grid-cols-12 md:items-baseline"
            >
              <th scope="row" className="flex items-baseline gap-4 font-normal md:col-span-6">
                <span className="text-figure tabular-nums">{metric.value}</span>
                <span className="text-lead text-bone">{metric.label[locale]}</span>
              </th>
              <td className="text-text-2 md:col-span-6">{metric.context[locale]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p data-reveal className="mt-5 max-w-prose text-sm text-fog">
        {t.note}
      </p>
    </Section>
  )
}
