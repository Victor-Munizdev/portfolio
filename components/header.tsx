"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
  { number: "01", label: "Início", href: "#home" },
  { number: "02", label: "Skills", href: "#skills" },
  { number: "03", label: "Experiência", href: "#experience" },
  { number: "04", label: "Projetos", href: "#projects" },
  { number: "05", label: "Certificados", href: "#certificates" },
  { number: "06", label: "Contato", href: "#contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    const originalTouchAction = document.body.style.touchAction

    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.touchAction = "none"
    } else {
      document.body.style.overflow = originalOverflow
      document.body.style.touchAction = originalTouchAction
    }

    return () => {
      document.body.style.overflow = originalOverflow
      document.body.style.touchAction = originalTouchAction
    }
  }, [isMenuOpen])

  const scrollTo = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <header className="site-header fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between rounded-[2rem] border border-black/10 bg-[#f7efe8]/92 px-4 py-3 shadow-[0_24px_90px_rgba(15,23,42,0.18)] backdrop-blur-xl md:px-8 md:py-5">
          <button
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-3 text-left"
            aria-label="Ir para o início"
          >
            <img src="/logo.png" alt="Logo Victor Muniz" className="h-7 w-7 rounded-full object-cover" />
            <span className="text-lg font-semibold tracking-tight text-[#111111] md:text-2xl">
              Victor Muniz
            </span>
          </button>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => scrollTo("#contact")}
              className="hidden rounded-full bg-[#111111] px-5 text-sm text-[#f7efe8] shadow-none hover:bg-[#202020] md:inline-flex"
            >
              Vamos conversar
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(true)}
              className="rounded-full border border-black/10 bg-white/80 text-[#111111] hover:bg-white"
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[#0f0604]/72 p-3 backdrop-blur-md md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="mx-auto flex h-full max-w-[1440px] flex-col rounded-[2rem] bg-[#f7efe8] p-6 text-[#111111] md:p-10"
              initial={{ y: 32, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-black/45">Navigation</p>
                  <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Explore meu trabalho</h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full border border-black/10 bg-white text-[#111111] hover:bg-black hover:text-white"
                  aria-label="Fechar menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="grid gap-4 md:mt-6">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => {
                      setIsMenuOpen(false)
                      setTimeout(() => scrollTo(item.href), 120)
                    }}
                    className="group flex items-center justify-between rounded-[1.5rem] border border-black/10 bg-white/55 px-5 py-5 text-left transition-colors hover:bg-[#ff5a1f] hover:text-white md:px-7 md:py-6"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <span className="text-xs uppercase tracking-[0.35em] text-black/40 group-hover:text-white/70">
                        {item.number}
                      </span>
                      <span className="text-2xl font-medium tracking-tight md:text-5xl">
                        {item.label}
                      </span>
                    </div>
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:h-6 md:w-6" />
                  </motion.button>
                ))}
              </nav>

              <div className="mt-auto grid gap-6 pt-10 md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-black/45">Contato</p>
                  <p className="mt-3 text-xl md:text-3xl">munizzvr@gmail.com</p>
                </div>
                <div className="md:text-right">
                  <p className="text-xs uppercase tracking-[0.35em] text-black/45">Base</p>
                  <p className="mt-3 text-xl md:text-3xl">Sao Paulo, Brasil</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
