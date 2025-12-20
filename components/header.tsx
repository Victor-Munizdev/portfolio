"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Github, Linkedin, Instagram, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isMenuOpen || isClosing) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen, isClosing])

  useEffect(() => {
    if (isMenuOpen && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true)
      }, 1500) // Tempo suficiente para completar todas as animações
      return () => clearTimeout(timer)
    }
  }, [isMenuOpen, hasAnimated])

  const menuItems = [
    { number: "01", label: "INITIAL", href: "#home" },
    { number: "02", label: "HABILYTIES", href: "#skills" },
    { number: "03", label: "EXPERIENCE", href: "#experience" },
    { number: "04", label: "MY PROJECTS", href: "#projects" },
    { number: "05", label: "CERTIFICATES", href: "#certificates" },
    { number: "06", label: "CONTACTS", href: "#contact" },
  ]

  // Matrix characters
  const matrixChars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const getRandomChar = () => matrixChars[Math.floor(Math.random() * matrixChars.length)]
  
  // Generate matrix columns
  const matrixColumns = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: (i * 3.3) + "%",
    delay: Math.random() * 8,
    speed: Math.random() * 4 + 3,
    chars: Array.from({ length: Math.floor(Math.random() * 20) + 15 }, () => getRandomChar()),
  }))

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 md:px-12 md:py-6 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center gap-2 md:gap-3">
          <span className="text-white font-bold text-sm md:text-lg">Victor Muniz</span>
        </div>

        <Button
          variant="ghost"
          size="default"
          onClick={() => {
            setIsMenuOpen(true)
            setHasAnimated(false)
          }}
          className="text-white hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300 px-3 py-1 md:px-4 md:py-2 rounded-lg border border-transparent hover:border-purple-500/30"
        >
          <span className="text-white mr-2 font-mono text-xs">Menu</span>
          <Menu className="h-5 w-5" />
        </Button>
      </header>

      {/* Full Screen Menu */}
      {(isMenuOpen || isClosing) && (
        <div className={`fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}>
          <div className="flex h-full">
            {/* Left side - blurred background */}
            <div className="hidden lg:block flex-1 relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent blur-3xl ${isClosing ? 'animate-slide-out-left' : 'animate-slide-in-left'}`} />
            </div>

            {/* Right side - menu */}
            <div className={`w-full lg:w-[500px] backdrop-blur-md flex flex-col justify-between p-6 md:p-12 border-l border-purple-500/20 relative overflow-hidden ${isClosing ? 'animate-slide-out-right' : 'animate-slide-in-right'}`}>
              {/* Base gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-purple-900/80" />
              
              {/* Matrix rain effect */}
              {!isClosing && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {matrixColumns.map((column) => (
                    <motion.div
                      key={column.id}
                      className="absolute top-0 font-mono text-[10px] leading-tight"
                      style={{
                        left: column.x,
                        color: "#a855f7",
                        textShadow: "0 0 3px rgba(168, 85, 247, 0.9), 0 0 6px rgba(168, 85, 247, 0.7), 0 0 9px rgba(168, 85, 247, 0.5)",
                      }}
                      initial={{ y: "-100%" }}
                      animate={{ y: "200%" }}
                      transition={{
                        duration: column.speed,
                        repeat: Infinity,
                        delay: column.delay,
                        ease: "linear",
                      }}
                    >
                      {column.chars.map((char, idx) => (
                        <div
                          key={idx}
                          className="block"
                          style={{
                            opacity: idx === 0 ? 1 : Math.max(0.1, 1 - idx * 0.08),
                            color: idx === 0 ? "#ec4899" : idx < 3 ? "#c084fc" : "#a855f7",
                            textShadow: idx === 0 
                              ? "0 0 5px rgba(236, 72, 153, 1), 0 0 10px rgba(236, 72, 153, 0.8)"
                              : "0 0 3px rgba(168, 85, 247, 0.8)",
                          }}
                        >
                          {char}
                        </div>
                      ))}
                    </motion.div>
                  ))}
                </div>
              )}
              
              {/* Content with relative positioning */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 md:mb-12">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Victor Muniz</h3>
                    <p className="text-sm text-white/60 font-mono">Desenvolvedor Full-Stack</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="default"
                    onClick={() => {
                      setIsClosing(true)
                      setTimeout(() => {
                        setIsMenuOpen(false)
                        setIsClosing(false)
                      }, 500)
                    }}
                    className="text-white hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300 px-3 py-1 md:px-4 md:py-2 rounded-lg border border-transparent hover:border-purple-500/30"
                  >
                    <X className="h-5 w-5 transition-transform hover:rotate-90" />
                  </Button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 flex flex-col justify-center gap-6 md:gap-8">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.number}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        setIsClosing(true)
                        setTimeout(() => {
                          setIsMenuOpen(false)
                          setIsClosing(false)
                          const element = document.querySelector(item.href)
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' })
                          }
                        }, 500)
                      }}
                      className={`group flex items-center gap-4 text-white hover:text-purple-400 transition-all duration-300 hover:translate-x-2 cursor-pointer py-2 ${isClosing ? 'animate-fade-out' : ''}`}
                      style={{ animationDelay: isClosing ? '0ms' : `${index * 100}ms` }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <span className="text-purple-500 font-mono text-sm md:text-base min-w-[40px]">{item.number}</span>
                      <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-sans tracking-tight border-b border-transparent group-hover:border-purple-400/50 transition-all duration-300">
                        {item.label}
                      </span>
                    </motion.a>
                  ))}
                </nav>

                {/* Footer - Social Links */}
                <div className="mt-auto pt-8 border-t border-white/10">
                  <div className="space-y-4">
                    <p className="text-xs text-white/60 font-mono mb-3">Redes Sociais</p>
                    <div className="flex flex-wrap gap-3">
                      <motion.a
                        href="https://github.com/Victor-Munizdev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300 group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="h-4 w-4 text-white/60 group-hover:text-purple-400 transition-colors" />
                      </motion.a>
                      <motion.a
                        href="https://www.linkedin.com/in/victor-muniz-56a64b337/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300 group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin className="h-4 w-4 text-white/60 group-hover:text-purple-400 transition-colors" />
                      </motion.a>
                      <motion.a
                        href="https://instagram.com/victor_munizdv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300 group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Instagram className="h-4 w-4 text-white/60 group-hover:text-purple-400 transition-colors" />
                      </motion.a>
                      <motion.a
                        href="mailto:munizzvr@gmail.com"
                        className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300 group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Mail className="h-4 w-4 text-white/60 group-hover:text-purple-400 transition-colors" />
                      </motion.a>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/50 font-mono pt-2">
                      <MapPin className="h-3 w-3" />
                      <span>São Paulo, Brasil</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
