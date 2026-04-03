"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Certificates } from "@/components/certificates"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const mainRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const main = mainRef.current
    if (!main) return

    const media = gsap.matchMedia()

    media.add("(min-width: 1024px)", () => {
      const panelElements = gsap.utils.toArray<HTMLElement>(".scroll-panel")

      panelElements.forEach((panel, index) => {
        const content = panel.querySelector<HTMLElement>(".panel-content")

        if (content) {
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
        }
      })
    })

    return () => {
      media.revert()
    }
  }, [])

  return (
    <>
      <Header />
      <main ref={mainRef} className="scroll-stage min-h-screen">
        <section className="scroll-panel relative overflow-clip" data-panel="home" data-theme="sunrise">
          <div className="panel-aura panel-aura-left" />
          <div className="panel-aura panel-aura-right" />
          <div className="panel-grid" />
          <div className="panel-content relative z-10">
            <Hero />
          </div>
        </section>

        <section className="scroll-panel relative overflow-clip" data-panel="projects" data-theme="paper">
          <div className="panel-content relative z-10">
            <Projects />
          </div>
        </section>

        <section className="scroll-panel relative overflow-clip" data-panel="experience" data-theme="paper">
          <div className="panel-content relative z-10">
            <Experience />
          </div>
        </section>

        <section className="scroll-panel relative overflow-clip" data-panel="skills" data-theme="paper">
          <div className="panel-content relative z-10">
            <Skills />
          </div>
        </section>

        <section className="scroll-panel relative overflow-clip" data-panel="certificates" data-theme="paper">
          <div className="panel-content relative z-10">
            <Certificates />
          </div>
        </section>

        <div className="relative z-10 panel-outro">
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  )
}
