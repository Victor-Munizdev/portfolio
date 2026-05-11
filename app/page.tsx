import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ScrollEffects } from "@/components/scroll-effects"

const Projects = dynamic(() => import("@/components/projects").then((mod) => mod.Projects))
const Experience = dynamic(() => import("@/components/experience").then((mod) => mod.Experience))
const Skills = dynamic(() => import("@/components/skills").then((mod) => mod.Skills))
const Certificates = dynamic(() => import("@/components/certificates").then((mod) => mod.Certificates))
const Contact = dynamic(() => import("@/components/contact").then((mod) => mod.Contact))
const Footer = dynamic(() => import("@/components/footer").then((mod) => mod.Footer))

export default function Home() {
  return (
    <>
      <Header />
      <ScrollEffects />
      <main className="scroll-stage min-h-screen">
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
