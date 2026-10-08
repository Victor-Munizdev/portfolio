import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

/**
 * Chegada de uma seção: o hairline do topo é desenhado pelo scroll
 * (continuação do trilho) e os blocos sobem uma vez ao entrar.
 */
export function animateSection(section: HTMLElement) {
  const signal = section.querySelector("[data-section-signal]")
  if (signal) {
    gsap.fromTo(
      signal,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top 95%", end: "top 30%", scrub: true },
      },
    )
  }

  // Só esconde o que ainda está abaixo da dobra: nada visível pisca na carga.
  const fold = window.innerHeight * 0.9
  const blocks = gsap.utils
    .toArray<HTMLElement>("[data-reveal]", section)
    .filter((block) => block.getBoundingClientRect().top > fold)

  if (blocks.length > 0) {
    // Só opacidade (sem visibility): o conteúdo continua na árvore de acessibilidade.
    gsap.set(blocks, { opacity: 0, y: 24 })
    ScrollTrigger.batch(blocks, {
      start: "top 88%",
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, duration: 0.8, ease: "expo.out", stagger: 0.08, overwrite: true }),
    })
  }
}
