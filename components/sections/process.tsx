import { dictionary } from "@/data/dictionary"
import { processSteps } from "@/data/process"
import type { Locale } from "@/lib/i18n"

/**
 * "Como eu trabalho". No desktop o palco inteiro é fixado pelo ScrollTrigger
 * e o trilho avança com o scroll; no mobile o trilho é vertical e acompanha
 * a leitura sem pin. Sem JS, tudo já está desenhado e legível.
 */
export function Process({ locale }: { locale: Locale }) {
  const t = dictionary[locale].process

  return (
    <section id="process" aria-labelledby="process-title" tabIndex={-1} className="px-5 md:px-10">
      <div data-process-stage className="relative mx-auto max-w-page pb-20 pt-16 md:pb-28 md:pt-20">
        <span aria-hidden="true" className="rail-track inset-x-0 top-0 h-px" />
        <span aria-hidden="true" data-section-signal className="rail-draw inset-x-0 top-0 h-px origin-left" />
        <header className="max-w-3xl">
          <h2 id="process-title" className="text-title">
            {t.title}
          </h2>
          <p className="mt-4 max-w-prose text-lead text-text-2">{t.lead}</p>
        </header>

        <div data-process-rail className="relative mt-14">
          <span aria-hidden="true" className="rail-track bottom-0 left-[3px] top-0 w-px lg:inset-x-0 lg:bottom-auto lg:top-[3px] lg:h-px lg:w-auto" />
          <span
            aria-hidden="true"
            data-process-signal="y"
            className="rail-signal rail-signal--y bottom-0 left-[3px] top-0 w-0.5 origin-top lg:hidden"
          />
          <span
            aria-hidden="true"
            data-process-signal="x"
            className="rail-signal inset-x-0 top-[3px] hidden h-0.5 origin-left lg:block"
          />
          <ol className="grid gap-y-10 lg:grid-cols-5 lg:gap-x-8">
            {processSteps.map((step, index) => (
              <li key={step.id} data-process-step className="relative pl-8 lg:pl-0 lg:pt-8">
                <span aria-hidden="true" className="rail-node absolute left-0 top-2 lg:top-0" />
                <h3 className="text-heading">
                  <span className="mr-2 text-fog tabular-nums">{index + 1}</span>
                  {step.name[locale]}
                </h3>
                <p className="mt-3 max-w-prose text-text-2">{step.description[locale]}</p>
                <ul className="mt-4 space-y-1 text-sm text-fog">
                  {step.outputs[locale].map((output) => (
                    <li key={output}>{output}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
