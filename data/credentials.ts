import type { Credential } from "@/types/content"

export const credentials: Credential[] = [
  {
    title: { pt: "Tascom Academy", en: "Tascom Academy" },
    issuer: { pt: "Tascom · Tecnologia em Saúde", en: "Tascom · Health technology" },
    year: "2026",
    detail: {
      pt: "React, TypeScript, Node.js, APIs REST, SQL, Docker, CI/CD e cloud",
      en: "React, TypeScript, Node.js, REST APIs, SQL, Docker, CI/CD and cloud",
    },
    file: "/certificates/tascom.pdf",
  },
  {
    title: { pt: "Técnico em T.I. · TCC ExpoSoft", en: "IT technical degree · ExpoSoft capstone" },
    issuer: { pt: "Ensino Médio Técnico em T.I.", en: "Technical high school, IT" },
    year: "2025",
    file: "/certificates/exposoft.pdf",
  },
  {
    title: { pt: "AI-900 · fundamentos de IA e cloud no Azure", en: "AI-900 · AI and cloud fundamentals on Azure" },
    issuer: { pt: "Senai", en: "Senai" },
    year: "2025",
    detail: { pt: "40 horas", en: "40 hours" },
    file: "/certificates/AI-900.pdf",
  },
  {
    title: { pt: "LGPD · Lei Geral de Proteção de Dados", en: "LGPD · Brazilian data protection law" },
    issuer: { pt: "Sebrae", en: "Sebrae" },
    year: "2025",
    detail: { pt: "2 horas", en: "2 hours" },
    file: "/certificates/certificado.pdf",
  },
  {
    title: { pt: "Startups for Students", en: "Startups for Students" },
    issuer: {
      pt: "FIAP · Prefeitura de São Caetano do Sul",
      en: "FIAP · City of São Caetano do Sul",
    },
    year: "2025",
    detail: { pt: "10 horas", en: "10 hours" },
    file: "/certificates/Startup.pdf",
  },
]
