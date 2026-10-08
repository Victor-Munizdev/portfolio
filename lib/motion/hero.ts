import gsap from "gsap"

/** Entrada do hero: o trilho se desenha uma vez e acende cada etapa ao passar por ela. */
export function playHeroRail(desktop: boolean) {
  const signals = gsap.utils.toArray<HTMLElement>("[data-hero-signal]")
  const nodes = gsap.utils.toArray<HTMLElement>("[data-hero-node]")
  if (signals.length === 0 || nodes.length === 0) return

  // O GSAP assume: desliga o failsafe em CSS.
  gsap.set([...signals, ...nodes], { animation: "none" })

  // Segmentos em sequência com ease none = um traço contínuo.
  const segment = (desktop ? 1.5 : 1.1) / signals.length

  gsap
    .timeline({ delay: 0.15 })
    .fromTo(signals, { scaleX: 0 }, { scaleX: 1, duration: segment, ease: "none", stagger: segment }, 0)
    .fromTo(nodes, { opacity: 0.35 }, { opacity: 1, duration: 0.3, ease: "power1.out", stagger: segment }, 0)
}
