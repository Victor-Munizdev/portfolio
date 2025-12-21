"use client"

import { useState } from "react"
import { ChevronDown, Code, Palette, Briefcase } from "lucide-react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    skills: [
      { name: "React", description: "Biblioteca para interfaces de usuário" },
      { name: "TypeScript", description: "Programação tipada para maior confiabilidade" },
      { name: "Tailwind CSS", description: "Estilização utilitária e responsiva" },
      { name: "HTML5 & CSS3", description: "Fundamentos web modernos" },
      { name: "JavaScript", description: "Programação avançada e assíncrona" },
    ],
  },
  {
    icon: Palette,
    title: "Backend",
    skills: [
      { name: "Next.js", description: "Framework React full-stack" },
      { name: "PHP", description: "Linguagem server-side versátil" },
      { name: "MySQL", description: "Banco de dados relacional popular" },
      { name: "REST APIs", description: "Integração e comunicação entre sistemas" },
      { name: "PDO", description: "Extensão PHP para acesso a bancos" },
    ],
  },
  {
    icon: Briefcase,
    title: "Ferramentas",
    skills: [
      { name: "Git & GitHub", description: "Controle de versão e colaboração" },
      { name: "Vercel", description: "Plataforma de deploy e hospedagem" },
      { name: "Figma", description: "Design e prototipagem de interfaces" },
      { name: "VS Code", description: "Ambiente de desenvolvimento otimizado" },
      { name: "Postman", description: "Teste e documentação de APIs" },
      { name: "Google Cloud APIs", description: "Integração com serviços e APIs do Google Cloud" },
    ],
  },
]

export function Skills() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <motion.section
      id="skills"
      className="px-4 py-16 md:px-6 md:py-32 bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 md:mb-16 tracking-tight text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Minhas Habilidades
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              const isOpen = openIndex === index

              return (
                <motion.div
                  key={category.title}
                  className="border border-white/10 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-white/60" />
                      <span className="text-xl font-semibold text-white font-sans tracking-wide">{category.title}</span>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-white/60 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isOpen && (
                    <motion.div
                      className="px-6 pb-6 space-y-4 border-t border-white/10 pt-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300 group"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <h4 className="font-semibold text-white font-mono text-sm mb-2 group-hover:text-purple-400 transition-colors">
                              {skill.name}
                            </h4>
                            <p className="text-xs text-white/60 font-mono leading-relaxed">
                              {skill.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
