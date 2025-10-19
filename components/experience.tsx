"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
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
  }
]

export function Experience() {
  return (
    <section id="experience" className="px-4 py-16 md:px-6 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          >
          <div className="space-y-3 md:space-y-4 text-center">
            <div className="flex items-center justify-center gap-2 md:gap-3">
              <span className="text-purple-400 text-xl md:text-2xl">✦</span>
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Experiência Profissional
              </motion.h2>
            </div>
            <motion.p
              className="text-lg md:text-xl text-white/60"
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
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-purple-600"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative flex gap-4 md:gap-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-purple-600 shadow-lg">
                    <Building className="h-4 w-4 md:h-6 md:w-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4 pb-12">
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 md:gap-4 text-purple-400">
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

                    <p className="text-white/80 leading-relaxed">{exp.description}</p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-white">Principais Conquistas:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-2 text-white/70"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: (index * 0.2) + (i * 0.1) }}
                            viewport={{ once: true }}
                          >
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}