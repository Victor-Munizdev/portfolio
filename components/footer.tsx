"use client"

import { Github, Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const socialLinks = [
  { icon: Github, href: "https://github.com/Victor-Munizdev", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com/victor_munizdv", label: "Instagram" },
  { icon: Mail, href: "mailto:munizzvr@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/munizvr/", label: "LinkedIn" },
]

const footerHighlights = [
  "Landing pages e sites institucionais",
  "Dashboards e sistemas internos",
  "Apps, integrações e experiências completas",
]

export function Footer() {
  return (
    <footer className="px-4 pb-4 pt-6 md:px-6 md:pb-6 md:pt-10">
      <div className="mx-auto grid max-w-[1440px] gap-4 md:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-black/10 bg-[#111111] px-5 py-7 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] md:px-8 md:py-8">
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">Victor Muniz</p>
          <motion.h2
            className="mt-5 max-w-[12ch] text-[clamp(2.8rem,6vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Criando produtos digitais com mais presença.
          </motion.h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/62 md:text-lg">
            Desenvolvimento full-stack com foco em interface, performance e uma apresentação visual que valoriza o produto.
          </p>
        </div>

        <div className="rounded-[2rem] border border-black/10 bg-[#f7efe8] px-5 py-7 text-[#111111] shadow-[0_24px_80px_rgba(15,23,42,0.1)] md:px-8 md:py-8">

          <div className="mt-8 rounded-[1.6rem] border border-black/10 bg-white/55 p-4">
            <p className="text-xs uppercase tracking-[0.35em] text-black/40">Atuação</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {footerHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 bg-[#fffaf6] px-3 py-2 text-[0.78rem] uppercase tracking-[0.14em] text-black/62"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/52">
              Aberto para projetos freelance, evolução de produto, integrações e experiências digitais com mais qualidade de entrega.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-black/72 transition-colors hover:border-[#ff5a1f]/30 hover:text-[#ff5a1f]"
                  whileHover={{ y: -2 }}
                >
                  <Icon className="h-4 w-4" />
                  <span>{social.label}</span>
                </motion.a>
              )
            })}
          </div>

          <div className="mt-6 flex flex-col gap-4 border-t border-black/10 pt-4 md:flex-row md:items-center md:justify-between ">
            <p className="text-sm text-black/65 font-medium">Desenvolvedor Full Stack focado em performance e experi&ecirc;ncia do usu&aacute;rio.</p>
            <div className="text-sm text-black/45">
              © 2026 Victor Muniz. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
