"use client"

import { Mail, Phone, MapPin, Instagram, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const contactInfo = [
  {
    icon: Mail,
    label: "munizzvr@gmail.com",
    href: "mailto:munizzvr@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp: (11) 91409-8185",
    href: "https://wa.me/5511914098185",
  },
  {
    icon: Instagram,
    label: "@victor_munizdv",
    href: "https://instagram.com/victor_munizdv",
  },
  {
    icon: MapPin,
    label: "São Paulo, Brasil",
    href: null,
  },
]

export const Contact = () => {
  return (
    <section id="contact" className="px-4 py-10 md:px-6 md:py-14">
      <div className="mx-auto max-w-[1440px] rounded-[2.3rem] border border-black/10 bg-[#f7efe8] px-5 py-8 text-[#111111] shadow-[0_30px_120px_rgba(15,23,42,0.12)] md:px-8 md:py-10">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#111111]/5 px-3 py-1 text-xs font-medium text-[#111111]">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              Dispon&iacute;vel para novos projetos &bull; Respondo em at&eacute; 24h
            </div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#ff5a1f]">Contact</p>
            <h2 className="mt-4 text-[clamp(2.8rem,7vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.06em]">
              Vamos conversar 
              <br />
              sobre o seu
              <br />
              projeto.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-black/60 md:text-lg">
              Construindo produtos digitais com foco em performance, convers&atilde;o e experi&ecirc;ncia.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-4 md:grid-cols-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex h-full min-h-[160px] flex-col justify-between rounded-[1.8rem] border border-black/10 bg-white/65 p-5 transition-colors hover:bg-[#111111] hover:text-white"
                  >
                    <div className="flex items-center justify-between">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#111111] text-[#f7efe8] group-hover:bg-[#ff5a1f]">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-black/35 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white/75" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-black/40 group-hover:text-white/45">Canal</p>
                      <p className="mt-3 text-lg leading-tight md:text-2xl">{info.label}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex h-full min-h-[160px] flex-col justify-between rounded-[1.8rem] border border-black/10 bg-white/65 p-5">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#111111] text-[#f7efe8]">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-black/40">Base</p>
                      <p className="mt-3 text-lg leading-tight md:text-2xl">{info.label}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
