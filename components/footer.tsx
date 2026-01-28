"use client"

import { Github, Mail, Instagram } from "lucide-react"
import { motion } from "framer-motion"

const socialLinks = [
  { icon: Github, href: "https://github.com/Victor-Munizdev", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com/victor_munizdv", label: "Instagram" },
  { icon: Mail, href: "mailto:munizzvr@gmail.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="px-6 py-12 md:py-16 border-t border-white/10 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white">Victor Muniz</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Desenvolvedor Full-Stack especializado em criar soluções digitais inovadoras e de alta qualidade.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Skills", href: "#skills" },
                { label: "Experiência", href: "#experience" },
                { label: "Projetos", href: "#projects" },
                { label: "Certificados", href: "#certificates" },
                { label: "Contato", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.querySelector(link.href)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="text-sm text-white/60 hover:text-purple-400 transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">Redes Sociais</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 text-white/60 group-hover:text-purple-400 transition-colors" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Victor Muniz. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
