"use client"

import { Mail, Phone, MapPin, Instagram } from "lucide-react"
import { motion } from "framer-motion"

const contactInfo = [
  {
    icon: Mail,
    label: "munizzvr@gmail.com",
    href: "mailto:munizzvr@gmail.com",
  },
  {
    icon: Phone,
    label: "(11) 91409-8185",
    href: "tel:+5511914098185",
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
];

export const Contact = () => {
  return (
    <section id="contact" className="px-4 py-16 md:px-6 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12 md:space-y-16">
          <motion.div
            className="space-y-3 md:space-y-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 md:gap-3">
              <span className="text-purple-400 text-xl md:text-2xl">✦</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">Entre em Contato</h2>
            </div>
            <p className="text-lg md:text-xl text-white/60">Vamos Conversar</p>
            <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto text-pretty">
              Pronto para transformar suas ideias em realidade digital? Entre em contato por qualquer um dos canais abaixo.
            </p>
          </motion.div>

          {/* Contact Info - Centered */}
          <div className="max-w-xl mx-auto">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Informações de Contato</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:bg-white/10 group"
                      >
                        <div className="p-2 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                          <info.icon className="h-5 w-5 text-purple-400" />
                        </div>
                        <span className="text-sm md:text-base text-white/80 group-hover:text-purple-400 transition-colors">
                          {info.label}
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                          <info.icon className="h-5 w-5 text-purple-400" />
                        </div>
                        <span className="text-sm md:text-base text-white/80">{info.label}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
