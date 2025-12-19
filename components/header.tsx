"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
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
              <div className="relative z-10 flex flex-col justify-between h-full">
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
                className="self-end text-white hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300 px-3 py-1 md:px-4 md:py-2 rounded-lg border border-transparent hover:border-purple-500/30"
              >
                <span className="text-white mr-2 font-mono text-xs">Close</span>
                <X className="h-5 w-5 transition-transform hover:rotate-90" />
              </Button>

              <nav className="flex-1 flex flex-col justify-center gap-8">
                {menuItems.map((item, index) => (
                  <a
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
                    className={`group flex items-baseline gap-4 text-white hover:text-purple-400 transition-all duration-300 hover:translate-x-2 cursor-pointer ${isClosing ? 'animate-fade-out' : 'animate-cube-rotate'}`}
                    style={{ animationDelay: isClosing ? '0ms' : `${index * 200}ms` }}
                  >
                    <span className="text-purple-500 font-mono text-xs">{item.number}</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-sans tracking-tight">{item.label}</span>
                  </a>
                ))}
              </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
