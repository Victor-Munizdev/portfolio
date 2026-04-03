"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDownRight, ArrowUpRight, Award, Briefcase, Code } from "lucide-react"

const stats = [
  { icon: Code, value: "12+", label: "Projetos lançados" },
  { icon: Briefcase, value: "3+", label: "Anos criando produtos" },
  { icon: Award, value: "5", label: "Certificações e formações" },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-10 pt-28 md:px-6 md:pb-16 md:pt-36">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          className="rounded-[2.2rem] border border-black/10 bg-[#f7efe8] px-5 pb-8 pt-5 shadow-[0_30px_120px_rgba(15,23,42,0.18)] md:px-8 md:pb-10 md:pt-7"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-4 text-[11px] uppercase tracking-[0.35em] text-black/45 md:pb-5">
            <span>DESENVOLVEDOR WEB e MOBILE</span>
          </div>

          <div className="grid gap-8 pt-6 md:grid-cols-[1.15fr_0.85fr] md:items-center md:pt-8">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.4em] text-[#ff5a1f]">Victor Muniz</p>
                <h1 className="max-w-4xl text-[clamp(3rem,8vw,7.6rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-[#111111]">
                  Full-stack
                  <br />
                  com impacto
                  <br />
                  visual.
                </h1>
              </div>

              <p className="max-w-2xl text-base leading-relaxed text-black/62 md:text-xl">
                Eu crio experi&ecirc;ncias digitais com cara de produto premium:
                interfaces r&aacute;pidas, anima&ccedil;&otilde;es com presen&ccedil;a, sites e tamb&eacute;m apps
                que fazem a marca parecer maior no primeiro scroll.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="rounded-full bg-[#111111] px-6 text-[#f7efe8] hover:bg-[#222222]"
                  onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Ver projetos
                  <ArrowDownRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-black/15 bg-transparent px-6 text-[#111111] hover:bg-black hover:text-[#f7efe8]"
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Let's talk
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <motion.div
              className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[linear-gradient(160deg,#fffdf8_0%,#fff5ee_58%,#ffd9c5_100%)] p-6 text-[#111111] md:min-h-[520px] md:p-8"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="absolute -right-14 top-8 h-64 w-64 rounded-full bg-[#ff5a1f]/14 blur-3xl" />
              <div className="absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-white/60 blur-3xl" />
              <div className="absolute -left-10 bottom-8 h-44 w-44 rounded-full bg-[#111111]/7 blur-3xl" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#ff5a1f]">Destaque</p>
                  <h2 className="mt-5 max-w-[9ch] text-[clamp(2.7rem,5.5vw,5rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-[#111111]">
                    Design,
                    <br />
                    c&oacute;digo
                    <br />
                    e ritmo.
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-[1.08fr_0.92fr] md:items-end">
                  <div className="max-w-[22rem] rounded-[1.7rem] border border-black/10 bg-white/68 p-5 shadow-[0_16px_45px_rgba(255,255,255,0.24)] backdrop-blur-md">
                    <p className="text-xs uppercase tracking-[0.3em] text-black/45">Perfil</p>
                    <p className="mt-3 text-lg leading-[1.18] text-black/80 md:text-[1.75rem]">
                      Sites, landing pages, dashboards e experi&ecirc;ncias front-end com acabamento forte.
                    </p>
                  </div>

                  <div className="min-h-[220px] rounded-[1.7rem] bg-[#111111] p-5 text-white shadow-[0_24px_60px_rgba(17,17,17,0.22)] md:p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/55">Assinatura</p>
                    <div className="mt-4 text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-white/94">
                      Victor
                      <br />
                      Muniz
                    </div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#ff5a1f]/10 to-transparent" />
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                className="rounded-[1.8rem] border border-black/10 bg-white/70 p-5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.08 }}
              >
                <Icon className="h-5 w-5 text-[#ff5a1f]" />
                <div className="mt-5 text-4xl font-semibold tracking-tight text-[#111111]">{stat.value}</div>
                <p className="mt-2 text-sm text-black/60">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
