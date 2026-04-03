"use client"

import { useState } from "react"
import { ChevronDown, Code, Server, Briefcase, Database, Cloud, PlugZap } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

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
    icon: Server,
    title: "Backend",
    skills: [
      { name: "Nest.js", description: "Framework Node.js para aplicações escaláveis" },
      { name: "PHP", description: "Linguagem server-side versátil" },
      { name: "REST APIs", description: "Integração e comunicação entre sistemas" },
      { name: "PDO", description: "Extensão PHP para acesso a bancos" },
    ],
  },
  {
    icon: Database,
    title: "Banco de Dados",
    skills: [
      { name: "MySQL", description: "Banco de dados relacional popular para aplicações web" },
      { name: "PostgreSQL", description: "Banco de dados relacional robusto para sistemas escaláveis" },
    ],
  },
  {
    icon: Briefcase,
    title: "Ferramentas",
    skills: [
      { name: "Git & GitHub", description: "Controle de versão e colaboração" },
      { name: "Docker", description: "Containerização de aplicações para ambientes consistentes e escaláveis" },
      { name: "Figma", description: "Design e prototipagem de interfaces" },
      { name: "VS Code", description: "Ambiente de desenvolvimento otimizado" },
      { name: "Postman", description: "Teste e documentação de APIs" },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Infraestrutura",
    skills: [
      { name: "Vercel", description: "Deploy moderno com foco em performance e experiência front-end" },
      { name: "Hostinger", description: "Hospedagem versátil para sites, sistemas e páginas institucionais" },
      { name: "Netlify", description: "Plataforma de deploy para aplicações estáticas e JAMstack" },
      { name: "Supabase", description: "Backend cloud com banco, autenticação e serviços para aplicações modernas" },
    ],
  },
  {
    icon: PlugZap,
    title: "APIs",
    skills: [
      { name: "Google Cloud APIs", description: "Integração com serviços e APIs do ecossistema Google Cloud" },
      { name: "Stripe", description: "Integração para pagamentos online, checkout e cobranças recorrentes" },
      { name: "Abacate Pay", description: "Gateway de pagamentos para cobranças e fluxos financeiros digitais" },
      { name: "OpenAI API", description: "Integração de IA para chat, geração de texto e automações inteligentes" },
    ],
  },
]

export function Skills() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <motion.section
      id="skills"
      className="px-4 py-14 md:px-6 md:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-[1440px] rounded-[2.2rem] border border-black/10 bg-[#f7efe8] px-5 py-8 text-[#111111] shadow-[0_24px_90px_rgba(15,23,42,0.12)] md:px-8 md:py-10">
        <div className="mb-10 text-center md:mb-14">
          <motion.p
            className="text-xs uppercase tracking-[0.4em] text-[#ff5a1f]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.p>
          <motion.h2
            className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#111111] sm:text-4xl md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            O que eu domino para construir experi&ecirc;ncias fortes.
          </motion.h2>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="space-y-4">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              const isOpen = openIndex === index

              return (
                <motion.div
                  key={category.title}
                  layout
                  className="overflow-hidden rounded-[1.6rem] border border-black/10 bg-white/70"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`group flex w-full items-center justify-between p-6 text-left transition-colors ${
                      isOpen ? "bg-[#111111] text-white" : "hover:bg-[#111111] hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`h-5 w-5 transition-colors ${isOpen ? "text-[#ff8c61]" : "text-[#ff5a1f] group-hover:text-[#ff8c61]"}`} />
                      <span className="font-sans text-xl font-semibold tracking-wide">{category.title}</span>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 transition-all ${isOpen ? "rotate-180 text-white/75" : "text-black/50 group-hover:text-white/75"}`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key={`${category.title}-content`}
                        layout
                        className="overflow-hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="space-y-4 border-t border-black/10 px-6 pb-6 pt-6">
                          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {category.skills.map((skill, skillIndex) => (
                              <motion.div
                                key={skill.name}
                                className="group rounded-[1.3rem] border border-black/10 bg-[#fffaf6] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff5a1f]/40"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.22, delay: skillIndex * 0.04 }}
                                whileHover={{ scale: 1.02 }}
                              >
                                <h4 className="mb-2 font-mono text-sm font-semibold text-[#111111] transition-colors group-hover:text-[#ff5a1f]">
                                  {skill.name}
                                </h4>
                                <p className="font-mono text-xs leading-relaxed text-black/58">
                                  {skill.description}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
