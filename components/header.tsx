"use client"

import { useState, useEffect } from "react"
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

 

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-lg">Victor Muniz</span>
        </div>

        <Button
          variant="ghost"
          size="default"
          onClick={() => {
            setIsMenuOpen(true)
            setHasAnimated(false)
          }}
          className="text-white hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300 px-4 py-2 rounded-lg border border-transparent hover:border-purple-500/30"
        >
          <span className="text-white mr-2 font-mono text-sm">Menu</span>
          <Menu className="h-5 w-5" />
        </Button>
      </header>

      {/* Full Screen Menu */}
      {(isMenuOpen || isClosing) && (
        <div className={`fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}>
          <div className="flex h-full">
            {/* Left side - blurred background */}
            <div className="hidden md:block flex-1 relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent blur-3xl ${isClosing ? 'animate-slide-out-left' : 'animate-slide-in-left'}`} />
            </div>

            {/* Right side - menu */}
            <div className={`w-full md:w-[500px] bg-gradient-to-b from-black/90 to-purple-900/80 backdrop-blur-md flex flex-col justify-between p-12 border-l border-purple-500/20 ${isClosing ? 'animate-slide-out-right' : 'animate-slide-in-right'}`}>
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
                className="self-end text-white hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300 px-4 py-2 rounded-lg border border-transparent hover:border-purple-500/30"
              >
                <span className="text-white mr-2 font-mono text-sm">Close</span>
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
                    <span className="text-purple-500 font-mono text-sm">{item.number}</span>
                    <span className="text-5xl md:text-6xl font-bold font-sans tracking-tight">{item.label}</span>
                  </a>
                ))}
              </nav>

            
            </div>
          </div>
        </div>
      )}
    </>
  )
}
