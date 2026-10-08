import type { Localized } from "@/lib/i18n"
import type { ProcessStep } from "@/types/content"

/** O caminho completo de uma entrega; aparece como trilho no hero. */
export const pipeline: Localized<string[]> = {
  pt: [
    "Problema",
    "Arquitetura",
    "Implementação",
    "Banco de dados",
    "Integrações",
    "Deploy",
    "Produção",
    "Monitoramento",
    "Manutenção",
  ],
  en: [
    "Problem",
    "Architecture",
    "Implementation",
    "Database",
    "Integrations",
    "Deployment",
    "Production",
    "Monitoring",
    "Maintenance",
  ],
}

export const processSteps: ProcessStep[] = [
  {
    id: "understand",
    name: { pt: "Entender", en: "Understand" },
    description: {
      pt: "Começo pelo problema, pelas restrições e pelas regras de negócio, antes de escolher tecnologia.",
      en: "I start with the problem, the constraints and the business rules, before choosing any technology.",
    },
    outputs: {
      pt: ["Escopo", "Regras de negócio", "Riscos"],
      en: ["Scope", "Business rules", "Risks"],
    },
  },
  {
    id: "architect",
    name: { pt: "Arquitetar", en: "Architect" },
    description: {
      pt: "Defino arquitetura, modelo de dados, integrações e a responsabilidade de cada parte do sistema.",
      en: "I define the system architecture, database design, integrations and what each part of the system owns.",
    },
    outputs: {
      pt: ["Modelo de dados", "Contratos de API", "Integrações"],
      en: ["Data model", "API contracts", "Integrations"],
    },
  },
  {
    id: "build",
    name: { pt: "Construir", en: "Build" },
    description: {
      pt: "Implemento frontend, backend e infraestrutura como um sistema só, com a regra de negócio no servidor.",
      en: "I implement frontend, backend services and infrastructure as one system, with business rules on the server.",
    },
    outputs: {
      pt: ["Next.js", "NestJS", "PostgreSQL"],
      en: ["Next.js", "NestJS", "PostgreSQL"],
    },
  },
  {
    id: "ship",
    name: { pt: "Publicar", en: "Ship" },
    description: {
      pt: "Automatizo build e deploy e levo para produção com um processo repetível.",
      en: "I automate build and deployment and take it to production through a repeatable process.",
    },
    outputs: {
      pt: ["Docker", "CI/CD", "VPS e Nginx"],
      en: ["Docker", "CI/CD pipelines", "VPS and Nginx"],
    },
  },
  {
    id: "operate",
    name: { pt: "Operar", en: "Operate" },
    description: {
      pt: "Monitoro, corrijo incidentes, mantenho e evoluo o que está no ar.",
      en: "I monitor, resolve production incidents, maintain and keep improving what is live.",
    },
    outputs: {
      pt: ["Monitoramento", "Incidentes", "Evolução"],
      en: ["Monitoring", "Incident response", "Iteration"],
    },
  },
]
