"use client"

import { Github, Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const socialLinks = [
  { icon: Github, href: "https://github.com/Victor-Munizdev", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com/victor_munizdv", label: "Instagram" },
  { icon: Mail, href: "mailto:munizzvr@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/munizvr/", label: "LinkedIn" },
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
          <div className="grid gap-5 lg:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-black/40">Contato</p>
              <a
                href="mailto:munizzvr@gmail.com"
                className="mt-4 inline-flex max-w-full items-center gap-2 text-lg font-medium break-all hover:text-[#ff5a1f]"
              >
                munizzvr@gmail.com
                <ArrowUpRight className="h-4 w-4 shrink-0" />
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-black/40">Telefone</p>
              <a
                href="https://wa.me/5511914098185"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex max-w-full items-center gap-2 text-lg font-medium hover:text-[#ff5a1f]"
              >
                (11) 91409-8185
                <ArrowUpRight className="h-4 w-4 shrink-0" />
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-black/40">Base</p>
              <p className="mt-4 text-lg font-medium">Sao Paulo, Brasil</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
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

          <div className="mt-8 border-t border-black/10 pt-5 text-sm text-black/45">
            © 2026 Victor Muniz. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}
