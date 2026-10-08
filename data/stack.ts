import type { StackGroup } from "@/types/content"

export const stackGroups: StackGroup[] = [
  {
    name: { pt: "Frontend", en: "Frontend" },
    summary: {
      pt: "Interfaces renderizadas no servidor, rápidas e acessíveis.",
      en: "Server-rendered interfaces that are fast and accessible.",
    },
    items: {
      pt: ["Next.js", "React", "TypeScript", "Server Components e SSR", "Tailwind CSS", "React Native"],
      en: ["Next.js", "React", "TypeScript", "Server Components and SSR", "Tailwind CSS", "React Native"],
    },
  },
  {
    name: { pt: "Backend", en: "Backend" },
    summary: {
      pt: "APIs e regras de negócio que vivem no servidor.",
      en: "APIs and business rules that live on the server.",
    },
    items: {
      pt: ["NestJS", "Node.js", "APIs REST", "Webhooks", "Autenticação e autorização", "Integrações com APIs externas"],
      en: ["NestJS", "Node.js", "REST APIs", "Webhooks", "Authentication and authorization", "Third-party integrations"],
    },
  },
  {
    name: { pt: "Dados", en: "Data" },
    summary: {
      pt: "Modelagem que aguenta a evolução do produto.",
      en: "Database design that holds up as the product evolves.",
    },
    items: {
      pt: ["PostgreSQL", "Prisma", "SQL", "Modelagem de dados", "Migrations"],
      en: ["PostgreSQL", "Prisma", "SQL", "Database design", "Migrations"],
    },
  },
  {
    name: { pt: "Infraestrutura", en: "Infrastructure" },
    summary: {
      pt: "Do container ao domínio, com deploy automatizado.",
      en: "From container to domain, with automated deployment.",
    },
    items: {
      pt: ["Docker", "Linux em VPS", "Nginx e reverse proxy", "CI/CD", "Deploy em produção", "Vercel"],
      en: ["Docker", "Linux on a VPS", "Nginx and reverse proxy", "CI/CD pipelines", "Production deployment", "Vercel"],
    },
  },
  {
    name: { pt: "Engenharia", en: "Engineering" },
    summary: {
      pt: "O que mantém um sistema de pé depois do lançamento.",
      en: "What keeps a system standing after launch.",
    },
    items: {
      pt: [
        "Arquitetura de software",
        "Segurança de aplicações web",
        "Debugging em produção",
        "Sustentação e resposta a incidentes",
        "Pagamentos (Stripe, AbacatePay) e IA (OpenAI, Gemini)",
      ],
      en: [
        "System architecture",
        "Web application security",
        "Production debugging",
        "Production support and incident response",
        "Payments (Stripe, AbacatePay) and AI (OpenAI, Gemini)",
      ],
    },
  },
]
