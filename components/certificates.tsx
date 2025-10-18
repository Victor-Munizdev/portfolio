"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Calendar, Download, Eye, X } from "lucide-react"

const certificates = [
  {
    title: "LGPD - Lei Geral de Proteção de Dados",
    issuer: "Sebrae",
    date: "2025",
    description: "Curso completo sobre a Lei Geral de Proteção de Dados, compliance e boas práticas para tratamento de dados pessoais.",
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
    description: "Aprendendo a utilizar a plataforma da azure e sabendo diferenciar tipos de Inteligências Artificiais",
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
    description: "Criação de uma startup com o intuito de ajudar estudantes a se tornarem empreendedores",
    duration: "10 horas",
    status: "Concluído",
    skills: ["Empreendedorismo", "Startup", "Business"],
    credentialId: "FIAP-STARTUP-2025",
    link: "/certificates/Startup.pdf",
    hasDownload: true
  }
]

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null)

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedCert])

  return (
    <section id="certificates" className="px-6 py-20 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="text-purple-400 text-2xl">✦</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Certificações</h2>
            </div>
            <p className="text-xl text-white/60">Minha jornada de aprendizado</p>
            <p className="text-base text-white/60 max-w-2xl mx-auto text-pretty">
              Compromisso contínuo com o desenvolvimento profissional e atualização de conhecimentos.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-white/5 border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-purple-400" />
                        <h3 className="text-xl font-semibold text-white group-hover:text-white transition-colors">
                          {cert.title}
                        </h3>
                      </div>
                      <p className="text-purple-400 font-medium">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center gap-1 text-white/60">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                  </div>

                  <p className="text-white/80 text-sm leading-relaxed">{cert.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs bg-green-500/20 text-green-300 border-green-500/30">
                          {cert.status}
                        </Badge>
                        <span className="text-xs text-white/50 font-mono">
                          {cert.duration}
                        </span>
                      </div>
                      <span className="text-xs text-white/50 font-mono">
                        {cert.date}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-white/30 text-white bg-transparent hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all duration-300 hover:scale-105"
                        onClick={() => setSelectedCert(cert.link)}
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        Visualizar
                      </Button>
                      {cert.hasDownload && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-white/30 text-white bg-transparent hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all duration-300 hover:scale-105"
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
        <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl h-[90vh] bg-white rounded-lg overflow-hidden border border-gray-200 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900">Certificado</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedCert(null)}
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="h-full bg-white">
              <iframe
                src={selectedCert}
                className="w-full h-full border-0"
                title="Certificado PDF"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
