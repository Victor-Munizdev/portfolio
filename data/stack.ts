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
      pt: ["NestJS", "Node.js", "APIs REST", "Webhooks", "Autenticação e autorização", "PHP"],
      en: ["NestJS", "Node.js", "REST APIs", "Webhooks", "Authentication and authorization", "PHP"],
    },
  },
  {
    name: { pt: "Dados", en: "Data" },
    summary: {
      pt: "Modelagem que aguenta a evolução do produto.",
      en: "Database design that holds up as the product evolves.",
    },
    items: {
      pt: ["PostgreSQL", "Prisma", "SQL", "Modelagem de dados", "Migrations", "MySQL"],
      en: ["PostgreSQL", "Prisma", "SQL", "Data modeling", "Migrations", "MySQL"],
    },
  },
  {
    name: { pt: "Infraestrutura", en: "Infrastructure" },
    summary: {
      pt: "Do container ao domínio, com deploy automatizado.",
      en: "From container to domain, with automated deployment.",
    },
    items: {
      pt: ["Docker", "Linux", "VPS", "Nginx e reverse proxy", "CI/CD", "Vercel"],
      en: ["Docker", "Linux", "VPS", "Nginx and reverse proxy", "CI/CD pipelines", "Vercel"],
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
        "Integrações: pagamentos (Stripe, AbacatePay) e IA (OpenAI, Gemini)",
        "Monitoramento e resposta a incidentes",
      ],
      en: [
        "System architecture",
        "Web application security",
        "Production debugging",
        "Third-party integrations: payments (Stripe, AbacatePay) and AI (OpenAI, Gemini)",
        "Monitoring and incident response",
      ],
    },
  },
]
