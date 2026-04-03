"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Calendar, Download, Eye, ExternalLink, X } from "lucide-react"

const certificates = [
  {
    title: "Tascom Academy",
    issuer: "Tascom - Tecnologia em Saúde",
    date: "2026",
    description: (
      <ul className="space-y-1">
        <li>• Frontend: React, TypeScript, Figma</li>
        <li>• Backend: Node.js, APIs RESTful, SQL</li>
        <li>• DevOps: Docker, CI/CD, Cloud</li>
        <li>• Conceitos: Lógica, POO, HTTP/HTTPS</li>
      </ul>
    ),
    duration: "Curso Completo",
    status: null,
    skills: ["React", "TypeScript", "API RESTful", "SQL", "Docker", "CI/CD", "Cloud", "POO"],
    credentialId: "TASCOM-ACADEMY-2026",
    link: "/certificates/tascom.pdf",
    hasDownload: true,
    featured: true
  },
  {
    title: "LGPD - Lei Geral de Proteção de Dados",
    issuer: "Sebrae",
    date: "2025",
    description: "Compliance e boas práticas para tratamento de dados pessoais conforme a Lei Geral de Proteção de Dados.",
    duration: "2 horas",
    status: "Concluído",
    skills: ["LGPD", "Proteção de Dados", "Compliance"],
    credentialId: "SEBRAE-LGPD-2024",
    link: "/certificates/certificado.pdf",
    hasDownload: true
  },
  {
    title: "AI-900",
    issuer: "Senai",
    date: "2025",
    description: "Fundamentos de Cloud Computing e Inteligência Artificial na plataforma Microsoft Azure.",
    duration: "40 horas",
    status: "Concluído",
    skills: ["Azure", "IA", "Cloud Computing"],
    credentialId: "SENAI-AI-900-2025",
    link: "/certificates/AI-900.pdf",
    hasDownload: true
  },
  {
    title: "Startups for students",
    issuer: "FIAP | Prefeitura de São Caetano do sul",
    date: "2025",
    description: "Metodologias de empreendedorismo e desenvolvimento de modelos de negócio para startups.",
    duration: "10 horas",
    status: "Concluído",
    skills: ["Empreendedorismo", "Startup", "Business"],
    credentialId: "FIAP-STARTUP-2025",
    link: "/certificates/Startup.pdf",
    hasDownload: true
  },
  {
    title: "TCC - ExpoSoft",
    issuer: "Escola Técnica | Ensino Médio Técnico em T.I.",
    date: "2025",
    description: "Desenvolvimento de software e arquitetura de sistemas para a feira técnica ExpoSoft.",
    duration: "Conclusão de Curso",
    status: "Concluído",
    skills: ["T.I.", "Desenvolvimento de Software", "TCC"],
    credentialId: "EXPOSOFT-TCC-2025",
    link: "/certificates/exposoft.pdf",
    hasDownload: true
  }
]

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<(typeof certificates)[number] | null>(null)

  useEffect(() => {
    const body = document.body

    if (selectedCert) {
      body.style.overflow = "hidden"
      body.classList.add("cert-modal-open")
    } else {
      body.style.overflow = "unset"
      body.classList.remove("cert-modal-open")
    }

    return () => {
      body.style.overflow = "unset"
      body.classList.remove("cert-modal-open")
    }
  }, [selectedCert])

  return (
    <section id="certificates" className="px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1440px] rounded-[2.2rem] border border-black/10 bg-[#f7efe8] px-5 py-8 text-[#111111] shadow-[0_24px_90px_rgba(15,23,42,0.1)] md:px-8 md:py-10">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="text-[#ff5a1f] text-2xl">✦</span>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-[#111111]">Certificações</h2>
            </div>
            <p className="text-xl text-black/58 font-medium">Formação e Especializações</p>
            <p className="text-base text-black/58 max-w-2xl mx-auto text-pretty">
              Compromisso contínuo com o desenvolvimento técnico e atualização de conhecimentos em tecnologias de ponta.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="group overflow-hidden rounded-[1.8rem] border-black/10 bg-white/65 py-0 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#ff5a1f]/40 hover:shadow-[0_20px_50px_rgba(255,90,31,0.12)]"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-[#ff5a1f]" />
                        <h3 className="text-xl font-semibold text-[#111111] transition-colors">
                          {cert.title}
                        </h3>
                        {(cert as any).featured && (
                          <Badge className="bg-[#ff5a1f] text-white hover:bg-[#ff5a1f] border-none px-2 text-[10px] uppercase tracking-tighter">
                            Destaque
                          </Badge>
                        )}
                      </div>
                      <p className="font-medium text-[#ff5a1f]">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center gap-1 text-black/55">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-black/68">{cert.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-black/10 text-xs text-black/62">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-3 border-t border-black/10 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {cert.status ? (
                          <Badge variant="secondary" className="border-0 bg-[#111111] text-xs text-[#f7efe8]">
                            {cert.status}
                          </Badge>
                        ) : (
                          <Badge variant="secondary" className="border-0 bg-[#ff5a1f] text-white text-xs">
                            {cert.duration}
                          </Badge>
                        )}
                        <span className="text-xs text-black/45 font-mono">
                          {cert.status ? cert.duration : "2026"}
                        </span>
                      </div>
                      <span className="text-xs text-black/45 font-mono">
                        {cert.status ? cert.date : ""}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 rounded-full bg-[#111111] text-[#f7efe8] hover:bg-[#222222] transition-all duration-300"
                        onClick={() => setSelectedCert(cert)}
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        Visualizar
                      </Button>
                      {cert.hasDownload && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 rounded-full border-black/15 bg-transparent text-[#111111] hover:bg-[#ff5a1f] hover:border-[#ff5a1f] hover:text-white transition-all duration-300"
                          asChild
                        >
                          <a href={cert.link} download>
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* PDF Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/72 p-3 backdrop-blur-md md:p-6"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-black/10 bg-[#f7efe8] shadow-[0_30px_120px_rgba(15,23,42,0.35)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-4 border-b border-black/10 bg-white/70 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-6">
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.35em] text-[#ff5a1f]">{selectedCert.issuer}</p>
                <h3 className="mt-2 truncate text-lg font-semibold text-[#111111] md:text-2xl">{selectedCert.title}</h3>
                <p className="mt-1 text-sm text-black/50">{selectedCert.date} • {selectedCert.duration}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  className="rounded-full bg-[#111111] text-[#f7efe8] hover:bg-[#222222]"
                  asChild
                >
                  <a href={selectedCert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Abrir em nova aba
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full border-black/15 bg-white/70 text-[#111111] hover:bg-[#ff5a1f] hover:border-[#ff5a1f] hover:text-white"
                  asChild
                >
                  <a href={selectedCert.link} download>
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedCert(null)}
                  className="rounded-full border border-black/10 bg-white text-[#111111] hover:bg-black hover:text-white"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="flex-1 bg-[#efe5dc] p-3 md:p-4">
              <div className="h-full overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-inner">
                <iframe
                  src={selectedCert.link}
                  className="h-full w-full border-0"
                  title={`Certificado ${selectedCert.title}`}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
