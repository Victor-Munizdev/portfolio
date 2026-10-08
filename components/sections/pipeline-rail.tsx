import { dictionary } from "@/data/dictionary"
import { pipeline } from "@/data/process"
import type { Locale } from "@/lib/i18n"

/**
 * O trilho do hero: as nove etapas de uma entrega.
 * Cada etapa carrega o seu segmento do trilho; o GSAP desenha os segmentos
 * em sequência (linha única no desktop, grade 3×3 no mobile).
 */
export function PipelineRail({ locale }: { locale: Locale }) {
  const stages = pipeline[locale]
  const labelId = "pipeline-label"

  return (
    <div data-hero-rail className="relative mt-16 md:mt-24">
      <p id={labelId} className="text-label text-fog">
        {dictionary[locale].hero.pipelineLabel}
      </p>
      <ol aria-labelledby={labelId} className="mt-5 grid grid-cols-3 gap-y-5 lg:grid-cols-9">
        {stages.map((stage, index) => (
          <li key={index} data-hero-node className="relative pt-5">
            <span aria-hidden="true" className="rail-track inset-x-0 top-[3px] h-px" />
            <span
              aria-hidden="true"
              data-hero-signal
              className="rail-signal inset-x-0 top-[2.5px] h-0.5 origin-left"
              // Cada segmento mostra a sua fatia do espectro: juntos formam um sinal contínuo.
              style={{
                backgroundSize: `${stages.length * 100}% 100%`,
                backgroundPosition: `${(index / (stages.length - 1)) * 100}% 0`,
              }}
            />
            <span aria-hidden="true" className="rail-node absolute left-0 top-0" />
            <span className="block pr-2 text-label text-bone sm:text-sm">{stage}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
