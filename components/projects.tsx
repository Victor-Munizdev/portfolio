"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Carioca Bartender - Portfólio",
    description: "Cartão de visitas digital focado na apresentação do catálogo de drinks e serviços para eventos.",
    tags: ["React", "Tailwind", "Vercel"],
    image: "/website/carioca_bartender.png",
    previewVideo: "/website/carioca-bartender.mp4",
    link: "https://carioca-bartender.vercel.app",
  },
  {
    title: "Doce Manhã",
    description: "Site institucional para confeitaria artesanal com foco em apresentação visual e cardápio digital.",
    tags: ["React", "Tailwind", "Vercel"],
    image: "/website/doce_manha.png",
    previewVideo: "/website/doce-manha.mp4",
    link: "https://doce-manha.vercel.app",
  },
  {
    title: "Exposoft Alcina - 39ª Edição",
    description: "Plataforma oficial para exposição de projetos acadêmicos de TI com histórico e detalhes das edições.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/website/exposoft_alcina.png",
    previewVideo: "/website/exposoft.mp4",
    link: "https://exposoftalcina.com",
  },
  {
    title: "Hells Brindes - Landing Page",
    description: "Página de conversão voltada para venda de brindes corporativos com navegação direta para orçamento.",
    tags: ["React", "Tailwind", "Vercel"],
    image: "/website/hellsbrindes.png",
    previewVideo: "/website/hellsbrindes.mp4",
    link: "https://hellsbrindes.com.br",
  },
]

function ProjectPreview({
  title,
  image,
  previewVideo,
  isPlaying,
}: {
  title: string
  image: string
  previewVideo: string | null
  isPlaying: boolean
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video || !previewVideo) return

    const freezeOnFirstFrame = () => {
      if (video.readyState >= 2) {
        video.currentTime = 0.05
        video.pause()
      }
    }

    if (video.readyState >= 2) {
      freezeOnFirstFrame()
    } else {
      video.addEventListener("loadeddata", freezeOnFirstFrame, { once: true })
    }

    return () => {
      video.removeEventListener("loadeddata", freezeOnFirstFrame)
    }
  }, [previewVideo])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !previewVideo) return

    if (isPlaying) {
      if (video.paused) {
        video.currentTime = 0
        void video.play().catch(() => {})
      }
    } else {
      video.pause()
      if (video.readyState >= 2) {
        video.currentTime = 0.05
      }
    }
  }, [isPlaying, previewVideo])

  if (!previewVideo) {
    return (
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
        loading="lazy"
      />
    )
  }

  return (
    <div className="h-full w-full">
      <video
        ref={videoRef}
        src={previewVideo}
        poster={image}
        className="h-full w-full object-cover object-top transition-transform duration-500"
        muted
        loop
        playsInline
        preload="auto"
      />
    </div>
  )
}

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const displayedProjects = showAll ? projects : projects.slice(0, 4)

  return (
    <section id="projects" className="px-4 py-14 md:px-6 md:py-24">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[2.3rem] border border-black/10 bg-[linear-gradient(180deg,#fffaf6_0%,#f7efe8_100%)] px-5 py-8 text-[#111111] shadow-[0_35px_120px_rgba(15,23,42,0.12)] md:px-8 md:py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#ff5a1f]">Featured works</p>
            <h2 className="mt-4 text-[clamp(2.6rem,7vw,5.8rem)] font-semibold leading-[0.96] tracking-[-0.05em]">
              Projetos com
              <br />
              personalidade.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-black/62 md:pt-3 md:text-lg">
            Uma sele&ccedil;&atilde;o de trabalhos onde eu combinei clareza visual, performance e uma camada de movimento bem dosada.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.article
                key={project.title}
                className="cursor-pointer overflow-hidden rounded-[2rem] border border-black/10 bg-white/78 text-[#111111] shadow-[0_20px_80px_rgba(15,23,42,0.08)] transition-[border-color,box-shadow] duration-300 hover:border-[#ff5a1f]/50 hover:shadow-[0_28px_90px_rgba(255,90,31,0.12)]"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -6, scale: 1.01 }}
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="grid gap-0">
                  <div className="relative min-h-[260px] overflow-hidden border-b border-black/10 md:min-h-[300px]">
                    <ProjectPreview
                      title={project.title}
                      image={project.image}
                      previewVideo={project.previewVideo}
                      isPlaying={hoveredProject === project.title}
                    />
                  </div>

                  <div className="flex flex-col justify-between gap-8 p-5 md:p-7">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-xs uppercase tracking-[0.35em] text-[#ff5a1f]">Projeto</p>
                        <span className="text-xs uppercase tracking-[0.35em] text-black/35">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-4 max-w-lg text-sm leading-relaxed text-black/62 md:text-base">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-5">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="rounded-full border-black/12 bg-[#fffaf6] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-black/62"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button
                        className="w-full rounded-full bg-[#111111] text-[#f7efe8] hover:bg-[#252525] md:w-auto md:px-6"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          Abrir projeto
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {projects.length > 4 && (
          <div className="mt-8 flex justify-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              className="rounded-full border border-black/12 bg-[#111111] px-6 text-white hover:bg-[#252525]"
            >
              {showAll ? "Ver menos" : "Ver mais projetos"}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
