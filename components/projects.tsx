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
]

export function Projects() {
  return (
    <section id="projects" className="px-4 py-16 md:px-6 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-2 md:gap-3">
              <span className="text-purple-400 text-xl md:text-2xl">✦</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">Portfólio</h2>
            </div>
            <p className="text-lg md:text-xl text-white/60">Projetos em Destaque</p>
            <p className="text-sm md:text-base text-white/60 max-w-2xl text-pretty">
              Uma coleção dos meus trabalhos mais recentes.
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="group overflow-hidden bg-white/5 border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden bg-muted max-h-48 md:max-h-64 relative group-hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-lg font-semibold">Ver Projeto</p>
                      <Button
                        size="sm"
                        className="bg-purple-600 hover:bg-purple-700 text-white border-0 shadow-lg"
                        asChild
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Acessar
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg md:text-xl font-semibold text-white/80 group-hover:text-white transition-colors">
                          {project.title}
                      </h3>
                    </div>
                    <Badge variant="secondary" className="text-xs bg-purple-500/20 text-purple-300 border-purple-500/30">
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
