"use client"

import { useEffect } from "react"

export function ScrollEffects() {
  useEffect(() => {
    let cleanup: (() => void) | undefined

    const setup = async () => {
      if (!window.matchMedia("(min-width: 1024px)").matches) return

      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ])

      gsap.registerPlugin(ScrollTrigger)

      const media = gsap.matchMedia()

      media.add("(min-width: 1024px)", () => {
        const panelElements = gsap.utils.toArray<HTMLElement>(".scroll-panel")

        panelElements.forEach((panel, index) => {
          const content = panel.querySelector<HTMLElement>(".panel-content")

          if (!content) return

          gsap.fromTo(
            content,
            { opacity: index === 0 ? 1 : 0.82, y: index === 0 ? 0 : 48 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                start: index === 0 ? "top top" : "top 84%",
                toggleActions: "play none none reverse",
              },
            }
          )
        })
      })

      cleanup = () => media.revert()
    }

    void setup()

    return () => {
      cleanup?.()
    }
  }, [])

  return null
}
