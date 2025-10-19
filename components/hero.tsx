"use client"

import { Button } from "@/components/ui/button"

export function Hero() {

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />

      <div className="relative z-10 max-w-4xl w-full text-center space-y-12">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Victor Muniz
          <br />
          <span className="text-purple-400">
            Desenvolvedor Full-Stack
          </span>
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            variant="ghost"
            className="text-white hover:text-purple-400 hover:bg-purple-500/10 font-mono gap-2 border border-white/20"
            onClick={() => {
              const element = document.querySelector('#skills')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <img src="/logo.png" alt="Logo" className="h-4 w-4" />
            Skills
          </Button>
        </div>
      </div>
    </section>
  )
}
