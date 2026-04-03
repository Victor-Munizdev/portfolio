"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, MapPin, Building } from "lucide-react"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    title: "Desenvolvedor Freelance",
    company: "Caio Bartender",
    location: "São Paulo, SP - Remoto",
    period: "2025",
    description: "Site desenvolvido para um bartender apresentando seu portfólio de drinks.",
    achievements: [
      "Site portfólio responsivo",
      "Apresentação de drinks e especialidades",
      "Design atrativo para gastronomia",
      "Otimização para dispositivos móveis"
    ],
    technologies: ["React", "Tailwind"]
  },
  {
    title: "Desenvolvedor Full-Stack",
    company: "VextoTech",
    location: "São Paulo, SP - Híbrido",
    period: "2025",
    description: "Site institucional completo com todas as soluções da empresa. E-commerce completo de produtos relacionados a tecnologia. IA conversacional (Chatbot). IA para desenvolvimento (Geração de códigos).",
    achievements: [
      "Desenvolvimento de site institucional responsivo",
      "Implementação de e-commerce completo",
      "Integração de IA conversacional (Chatbot)",
      "Sistema de geração automática de códigos com IA"
    ],
    technologies: ["React", "Tailwind", "Vite"]
  },
  {
    title: "Desenvolvedor Full-Stack, Suporte, QA",
    company: "Grupo Nasli",
    location: "São Paulo, SP - Híbrido",
    period: "2025",
    description: "Sistema completo para gerenciamento de vistorias veiculares, relatórios detalhes com gráficos e controle multi-usuários. Site de apresentação do sistema de relatórios detalhado acima.",
    achievements: [
      "Sistema de gestão de vistorias veiculares",
      "Relatórios detalhados com gráficos",
      "Controle multi-usuários",
      "Site institucional do sistema"
    ],
    technologies: ["PHP", "HTML", "Bootstrap", "CSS", "JavaScript", "React", "Tailwind"]
  },
  {
    title: "Desenvolvedor Full-Stack",
    company: "Hells Brindes",
    location: "São Paulo, SP - Híbrido",
    period: "2024/2025",
    description: "Sistema completo de gestão de logística, materiais, vendedores, financeiro para uma empresa de brindes corporativos. Aplicativo desenvolvido para as gestões acima!",
    achievements: [
      "Sistema completo de gestão logística",
      "Controle de materiais e vendedores",
      "Módulo financeiro integrado",
      "Aplicativo mobile para gestão"
    ],
    technologies: ["PHP", "HTML", "CSS", "Bootstrap", "JavaScript", "React Native"]
  },
  {
    title: "Desenvolvedor Freelance",
    company: "Grupo Nasli",
    location: "São Paulo, SP - Presencial",
    period: "2024",
    description: "Sistema para gerenciamento de: clientes, peças veiculares, Informações sobre cada cliente, preços de veículos FIPE e etc...",
    achievements: [
      "Sistema de gestão de clientes",
      "Controle de peças veiculares",
      "Integração com tabela FIPE",
      "Banco de dados de informações veiculares"
    ],
    technologies: ["PHP", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Analista Veicular",
    company: "Grupo Nasli",
    location: "São Paulo, SP - Presencial",
    period: "2024",
    description: "Analista veicular de grandes frotas veiculares em laudos de: Desmobilização, cautelar, e entre outros laudos.",
    achievements: [
      "Análise de grandes frotas veiculares",
      "Laudos de desmobilização",
      "Laudos cautelares",
      "Relatórios técnicos especializados"
    ],
    technologies: []
  }
]

export function Experience() {
  const [showAll, setShowAll] = useState(false)
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 2)

  return (
    <section id="experience" className="px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1440px] rounded-[2.2rem] border border-black/10 bg-[#fffaf6] px-5 py-8 text-[#111111] shadow-[0_24px_90px_rgba(15,23,42,0.1)] md:px-8 md:py-10">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-3 md:space-y-4 text-center">
            <div className="flex items-center justify-center gap-2 md:gap-3">
              <span className="text-[#ff5a1f] text-xl md:text-2xl">✦</span>
              <motion.h2
                className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-[#111111]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Experiência Profissional
              </motion.h2>
            </div>
            <motion.p
              className="text-lg md:text-xl text-black/58"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Minha trajetória profissional
            </motion.p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#111111] to-[#ff5a1f]"></div>

            <div className="space-y-12">
              <AnimatePresence>
                {displayedExperiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative flex gap-4 rounded-[1.8rem] border border-black/8 bg-white/60 p-4 md:gap-8 md:p-6"
                    initial={{ opacity: 0, x: -50, y: 20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: -50, y: -20, height: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index >= 2 ? (index - 2) * 0.15 : 0,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#111111] shadow-lg">
                      <Building className="h-4 w-4 md:h-6 md:w-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4 pb-12">
                      <div className="space-y-2">
                        <h3 className="text-xl md:text-2xl font-bold text-[#111111]">{exp.title}</h3>
                        <div className="flex flex-wrap items-center gap-2 md:gap-4 text-[#ff5a1f]">
                          <div className="flex items-center gap-1">
                            <Building className="h-3 w-3 md:h-4 md:w-4" />
                            <span className="font-medium text-sm md:text-base">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                            <span className="text-sm md:text-base">{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                            <span className="text-sm md:text-base">{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="leading-relaxed text-black/72">{exp.description}</p>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-[#111111]">Principais Conquistas:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start gap-2 text-black/65"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: (index * 0.2) + (i * 0.1) }}
                              viewport={{ once: true }}
                            >
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff5a1f] flex-shrink-0"></span>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-black/10 bg-[#111111] px-3 py-1 text-xs font-medium text-[#f7efe8]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {experiences.length > 2 && (
            <div className="flex justify-center mt-8">
              <Button
                onClick={() => setShowAll(!showAll)}
                className="rounded-full bg-[#111111] hover:bg-[#252525] text-white border-0 shadow-lg"
              >
                {showAll ? "Ver menos" : "Ver mais"}
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
