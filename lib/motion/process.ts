import gsap from "gsap"

// Etapas ainda não alcançadas ficam atenuadas, mas legíveis (texto secundário ≥ 4.5:1).
const DIM = 0.75
const LIT = "#fffdf9"

/**
 * "Como eu trabalho": uma única timeline dirigida pelo scroll.
 * O trilho é um tween contínuo de 0 a 1 (ease none); cada etapa acende
 * no ponto em que o trilho alcança o seu marcador.
 * Desktop: palco fixado. Compacto (ou tela baixa demais): sem pin.
 */
export function animateProcess(section: HTMLElement, desktop: boolean) {
  const stage = section.querySelector<HTMLElement>("[data-process-stage]")
  const rail = section.querySelector<HTMLElement>("[data-process-rail]")
  if (!stage || !rail) return

  const steps = gsap.utils.toArray<HTMLElement>("[data-process-step]", section)
  const header = document.querySelector("header")?.getBoundingClientRect().height ?? 0
  const pinned = desktop && stage.offsetHeight <= window.innerHeight - header
  // Centraliza o palco na área útil abaixo do header enquanto está fixado.
  const pinStart = () => header + Math.max(0, (window.innerHeight - header - stage.offsetHeight) / 2)

  const signal = section.querySelector(`[data-process-signal="${desktop ? "x" : "y"}"]`)
  if (!signal) return

  const timeline = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: pinned
      ? {
          trigger: section,
          start: () => `top ${pinStart()}px`,
          end: "+=110%",
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      : { trigger: rail, start: "top 72%", end: "bottom 60%", scrub: true },
  })

  timeline.fromTo(signal, desktop ? { scaleX: 0 } : { scaleY: 0 }, { scaleX: 1, scaleY: 1, duration: 1 }, 0)

  steps.forEach((step, index) => {
    const node = step.querySelector(".rail-node")
    if (index === 0) {
      gsap.set(node, { backgroundColor: LIT })
      return
    }
    const reached = index / steps.length - 0.02
    timeline.fromTo(step, { opacity: DIM }, { opacity: 1, duration: 0.05 }, reached)
    timeline.to(node, { backgroundColor: LIT, duration: 0.05 }, reached)
  })

  // Pequena pausa com tudo aceso antes de o pin soltar a próxima seção.
  if (pinned) timeline.to({}, { duration: 0.08 })
}
