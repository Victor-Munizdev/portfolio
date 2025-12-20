"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Sistema Médico - NexisMed",
    description: "Plataforma completa que revoluciona o atendimento médico com tecnologia de ponta, integrando telemedicina, receituário digital, localizador de clínicas e analytics médico desenvolvido em PHP, HTML, CSS e JavaScript.",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    status: "Concluído",
    image: "/website/nexismed.png",
    link: "https://limegreen-partridge-570568.hostingersite.com",
  },
  {
    title: "VextoTech - Institucional",
    description: "Site institucional da VextoTech apresentando serviços de desenvolvimento web, design e soluções tecnológicas.",
    tags: ["React", "Tailwind"],
    status: "Publicado",
    image: "/website/vextotech_institucional.png",
    link: "https://www.vextotech.com",
  },
  {
    title: "VextoTech Shop",
    description: "Loja online da VextoTech com produtos digitais, templates e soluções para desenvolvedores.",
    tags: ["React", "Tailwind", "Vite"],
    status: "Publicado",
    image: "/website/vextotechecommerce.png",
    link: "https://shop.vextotech.com",
  },
  {
    title: "Nasli - Sistema de Relatórios e Gestão de Vistoria Veicular",
    description: "Sistema completo para gestão de vistorias veiculares, relatórios detalhados e controle administrativo para empresas do setor automotivo.",
    tags: ["React", "Tailwind"],
    status: "Publicado",
    image: "/website/nasli.png",
    link: "https://sistema-relatorios-gruponasli.vercel.app",
  },
  {
    title: "VextoTech Mail",
    description: "Plataforma de email profissional da VextoTech com interface moderna, gerenciamento de contas e recursos avançados de comunicação empresarial.",
    tags: ["React", "Tailwind", "TypeScript"],
    status: "Publicado",
    image: "/website/vextotech_mail.png",
    link: "https://mail.vextotech.com",
  },
  {
    title: "VextoTech SMS",
    description: "Sistema de envio de SMS empresarial com API integrada, dashboard de controle e relatórios detalhados de campanhas de mensagens.",
    tags: ["React", "Tailwind", "API"],
    status: "Publicado",
    image: "/website/vextotech_sms.png",
    link: "https://sms.vextotech.com",
  },
  {
    title: "VextoTech Components",
    description: "Biblioteca de componentes reutilizáveis e documentação completa para desenvolvedores, com exemplos práticos e código aberto.",
    tags: ["React", "Tailwind", "Documentation"],
    status: "Publicado",
    image: "/website/vextotech_components.png",
    link: "https://components.vextotech.com",
  },
  {
    title: "Hells Brindes - Landing Page",
    description: "Landing page moderna e responsiva para empresa de brindes corporativos, com design atrativo e foco em conversão de leads.",
    tags: ["React", "Tailwind", "Vercel"],
    status: "Publicado",
    image: "/website/hellsbrindes.png",
    link: "https://hellsbrindes-landing.vercel.app",
  },
  {
    title: "Doce Manhã",
    description: "Site institucional para confeitaria e doces artesanais, apresentando produtos, cardápio e informações de contato com design doce e acolhedor.",
    tags: ["React", "Tailwind", "Vercel"],
    status: "Publicado",
    image: "/website/doce_manha.png",
    link: "https://doce-manha.vercel.app",
  },
  {
    title: "Synergy Quasar",
    description: "Plataforma corporativa da Synergy Quasar apresentando soluções empresariais, serviços e tecnologias inovadoras para automação de processos.",
    tags: ["React", "Tailwind", "Enterprise"],
    status: "Publicado",
    image: "/website/synergy_quasar.png",
    link: "https://www.synergy-quasar.com",
  },
  {
    title: "Synergy Quasar - Logistic",
    description: "Sistema completo de gestão logística com controle de estoque, rastreamento de entregas, otimização de rotas e dashboard em tempo real.",
    tags: ["React", "Tailwind", "Logistics"],
    status: "Publicado",
    image: "/website/synergy_logistic.png",
    link: "https://logistic.synergy-quasar.com",
  },
  {
    title: "Synergy Quasar - Finance",
    description: "Plataforma de controle financeiro inteligente com gestão de contas, relatórios financeiros, análise de dados e automação de processos contábeis.",
    tags: ["React", "Tailwind", "Finance"],
    status: "Publicado",
    image: "/website/synergy_finance.png",
    link: "https://finance.synergy-quasar.com",
  },
]

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? projects : projects.slice(0, 2)

  return (
    <section id="projects" className="px-6 py-20 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-purple-400 text-2xl">✦</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Portfólio</h2>
            </div>
            <p className="text-xl text-white/60">Projetos em Destaque</p>
            <p className="text-base text-white/60 max-w-2xl text-pretty">
              Uma coleção dos meus trabalhos mais recentes.
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1">
            <AnimatePresence>
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, height: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index >= 2 ? (index - 2) * 0.1 : 0,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  <Card
                    className="group overflow-hidden bg-white/5 border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="aspect-[24/7] overflow-hidden bg-muted relative group-hover:shadow-lg transition-shadow duration-300">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-white text-xs font-semibold">Ver Projeto</p>
                          <Button
                            size="sm"
                            className="bg-purple-600 hover:bg-purple-700 text-white border-0 shadow-lg text-xs h-7"
                            asChild
                          >
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Acessar
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 space-y-2 flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors line-clamp-1 flex-1">
                          {project.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs bg-purple-500/20 text-purple-300 border-purple-500/30 flex-shrink-0">
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed text-pretty line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs border-purple-500/30 text-purple-300 hover:bg-purple-500/10 px-1.5 py-0.5">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs border-purple-500/30 text-purple-300 px-1.5 py-0.5">
                            +{project.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {projects.length > 2 && (
            <div className="flex justify-center">
              <Button
                onClick={() => setShowAll(!showAll)}
                className="bg-purple-600 hover:bg-purple-700 text-white border-0 shadow-lg"
              >
                {showAll ? "Ver menos" : "Ver mais"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
