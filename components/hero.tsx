"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full mix-blend-screen filter blur-3xl transition-all duration-1000 top-1/2 left-1/2 cursor-pointer hover:scale-110 animate-pulse"
          style={{
            transform: 'translate(-50%, -50%)',
            background: 'linear-gradient(45deg, rgba(37, 99, 235, 0.3), rgba(147, 51, 234, 0.3))',
            animation: 'pulse-color 2s infinite'
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        />
        <div
          className={`absolute w-96 h-96 bg-green-600/20 rounded-full mix-blend-screen filter blur-3xl transition-all duration-1000 animation-delay-2000 ${
            isHovering ? 'top-1/4 left-1/4' : 'top-1/2 left-1/2'
          }`}
          style={{ transform: 'translate(-50%, -50%)' }}
        />
        <div
          className={`absolute w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl transition-all duration-1000 animation-delay-4000 ${
            isHovering ? 'top-1/3 right-1/4' : 'top-1/2 left-1/2'
          }`}
          style={{ transform: 'translate(-50%, -50%)' }}
        />
        <div
          className={`absolute w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl transition-all duration-1000 animation-delay-6000 ${
            isHovering ? 'bottom-1/4 left-1/3' : 'top-1/2 left-1/2'
          }`}
          style={{ transform: 'translate(-50%, -50%)' }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl w-full text-center space-y-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Victor Muniz
          <br />
          <motion.span
            className="text-purple-400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Desenvolvedor Full Stack
          </motion.span>
        </motion.h1>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
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
        </motion.div>
      </motion.div>
    </section>
  )
}
