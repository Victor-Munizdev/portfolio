"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Carioca Bartender - Portfólio",
    description: "Cartão de visitas digital focado na apresentação do catálogo de drinks e serviços para eventos. Desenvolvido para facilitar o contato direto e exibir o trabalho profissional de mixologia.",
    tags: ["React", "Tailwind", "Vercel"],
    status: "Publicado",
    image: "/website/carioca_bartender.png",
    link: "https://carioca-bartender.vercel.app",
  },
  {
    title: "Doce Manhã",
    description: "Site institucional para confeitaria artesanal, com foco na exibição visual dos produtos e organização do cardápio digital para encomendas locais.",
    tags: ["React", "Tailwind", "Vercel"],
    status: "Publicado",
    image: "/website/doce_manha.png",
    link: "https://doce-manha.vercel.app",
  },
  {
    title: "Exposoft Alcina - 39ª Edição",
    description: "Plataforma oficial para a exposição de projetos acadêmicos de TI. Organiza o histórico do evento, detalhes dos trabalhos dos alunos e informações sobre as edições atuais e anteriores.",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "Publicado",
    image: "/website/exposoft_alcina.png",
    link: "https://exposoftalcina.com",
  },
  {
    title: "Hells Brindes - Landing Page",
    description: "Página de conversão voltada para a venda de brindes corporativos, focada em carregamento rápido e navegação intuitiva para geração de orçamentos.",
    tags: ["React", "Tailwind", "Vercel"],
    status: "Publicado",
    image: "/website/hellsbrindes.png",
    link: "https://hellsbrindes-landing.vercel.app",
  },
  {
    title: "Nasli - Sistema de Relatórios e Gestão de Vistoria Veicular",
    description: "Ferramenta administrativa para controle de laudos vistorias. Gerencia o fluxo de dados entre vistorias realizadas e a geração automática de relatórios técnicos para frotas.",
    tags: ["React", "Tailwind"],
    status: "Publicado",
    image: "/website/nasli.png",
    link: "https://sistema-relatorios-gruponasli.vercel.app",
  },
  {
    title: "Nexus API - Portal Centralizado de APIs",
    description: "Repositório técnico que cataloga e documenta APIs externas. Facilita o acesso a documentações, exemplos de código e testes rápidos para outros desenvolvedores.",
    tags: ["React", "Tailwind"],
    status: "Publicado",
    image: "/website/nexus_api.png",
    link: "https://nexus-api-gamma.vercel.app",
  },
  {
    title: "Sistema Médico - NexisMed",
    description: "Interface para clínicas médicas com módulos de agendamento, prontuário eletrônico de pacientes e organização de faturamento administrativo.",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    status: "Concluído",
    image: "/website/nexismed.png",
    link: "https://limegreen-partridge-570568.hostingersite.com",
  },
  {
    title: "Synergy Quasar",
    description: "Portal administrativo para gestão interna de processos empresariais, com foco no monitoramento de fluxos de trabalho e indicadores de desempenho.",
    tags: ["React", "Tailwind", "Enterprise"],
    status: "Publicado",
    image: "/website/synergy_quasar.png",
    link: "https://www.synergy-quasar.com",
  },
  {
    title: "Synergy Quasar - Finance",
    description: "Painel de controle financeiro para fluxo de caixa, registro de entradas/saídas e geração de balanços mensais simplificados para pequenas empresas.",
    tags: ["React", "Tailwind", "Finance"],
    status: "Publicado",
    image: "/website/synergy_finance.png",
    link: "https://finance.synergy-quasar.com",
  },
  {
    title: "Synergy Quasar - Logistic",
    description: "Dashboard para acompanhamento de pedidos e estoque. Centraliza o status de entregas em tempo real e a movimentação de mercadorias no armazém.",
    tags: ["React", "Tailwind", "Logistics"],
    status: "Publicado",
    image: "/website/synergy_logistic.png",
    link: "https://logistic.synergy-quasar.com",
  },
  {
    title: "VextoTech - Institucional",
    description: "Site para apresentação de serviços de desenvolvimento de software, com seções dedicadas ao portfólio da empresa e metodologias de trabalho.",
    tags: ["React", "Tailwind"],
    status: "Publicado",
    image: "/website/vextotech_institucional.png",
    link: "https://www.vextotech.com",
  },
  {
    title: "VextoTech Components",
    description: "Biblioteca de componentes para React baseada em figma, documentando padrões visuais e códigos reutilizáveis para projetos de front-end.",
    tags: ["React", "Tailwind", "Documentation"],
    status: "Publicado",
    image: "/website/vextotech_components.png",
    link: "https://components.vextotech.com",
  },
  {
    title: "VextoTech Mail",
    description: "Protótipo de cliente de e-mail focado na organização de pastas e integração de contatos internos para comunicação corporativa.",
    tags: ["React", "Tailwind", "TypeScript"],
    status: "Publicado",
    image: "/website/vextotech_mail.png",
    link: "https://mail.vextotech.com",
  },
  {
    title: "VextoTech Shop",
    description: "E-commerce para venda de produtos digitais, com fluxo de carrinho, integração de pagamentos e painel de usuário para downloads.",
    tags: ["React", "Tailwind", "Vite"],
    status: "Publicado",
    image: "/website/vextotechecommerce.png",
    link: "https://shop.vextotech.com",
  },
  {
    title: "VextoTech SMS",
    description: "Painel para disparo de mensagens em massa via API, com logs de entrega e painel de créditos para campanhas de marketing.",
    tags: ["React", "Tailwind", "API"],
    status: "Publicado",
    image: "/website/vextotech_sms.png",
    link: "https://sms.vextotech.com",
  },
]

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  const [expandedTags, setExpandedTags] = useState<Set<string>>(new Set())
  const displayedProjects = showAll ? projects : projects.slice(0, 2)

  const toggleTags = (projectTitle: string) => {
    setExpandedTags((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(projectTitle)) {
        newSet.delete(projectTitle)
      } else {
        newSet.add(projectTitle)
      }
      return newSet
    })
  }

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
                        {(expandedTags.has(project.title) ? project.tags : project.tags.slice(0, 3)).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs border-purple-500/30 text-purple-300 hover:bg-purple-500/10 px-1.5 py-0.5">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400/50 px-1.5 py-0.5 cursor-pointer transition-all duration-200"
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleTags(project.title)
                            }}
                          >
                            {expandedTags.has(project.title) ? "Ver menos" : `+${project.tags.length - 3}`}
                          </Badge>
                        )}
                      </div>
                      {/* Mobile button - always visible on mobile */}
                      <div className="mt-3 md:hidden">
                        <Button
                          size="sm"
                          className="w-full bg-purple-600 hover:bg-purple-700 text-white border-0 shadow-lg text-xs"
                          asChild
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Ver Projeto
                          </a>
                        </Button>
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
