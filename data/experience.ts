import type { Role } from "@/types/content"

/** O primeiro item é o cargo atual e recebe o destaque da seção. */
export const roles: Role[] = [
  {
    company: "EmpreElas",
    title: {
      pt: "Desenvolvedor Full-Stack · Software Engineer",
      en: "Full-Stack Developer · Software Engineer",
    },
    period: { pt: "2026 — presente", en: "2026 — present" },
    location: { pt: "São Paulo, SP · presencial", en: "São Paulo, Brazil · on-site" },
    summary: {
      pt: "Ownership end-to-end de aplicações em produção: arquitetura, frontend, backend, banco de dados, integrações, infraestrutura, deploy, segurança e sustentação.",
      en: "End-to-end ownership of production applications: system architecture, frontend, backend services, database design, integrations, infrastructure, deployment, security and production support.",
    },
    highlights: {
      pt: [
        "Desenvolvo interfaces em Next.js e React, com Server Components e renderização no servidor.",
        "Projeto e desenvolvo serviços de backend em NestJS: APIs REST e regras de negócio no servidor.",
        "Modelo e evoluo bancos PostgreSQL com Prisma, incluindo schema e migrations.",
        "Implemento autenticação e autorização das aplicações.",
        "Projeto e mantenho integrações com APIs externas e webhooks.",
        "Cuido de deploy e infraestrutura: Docker, Linux em VPS, Nginx como reverse proxy e pipelines de CI/CD.",
        "Sustento as aplicações em produção: diagnóstico e resolução de incidentes, correções e evolução contínua.",
        "Participo das decisões de arquitetura e de segurança das aplicações.",
      ],
      en: [
        "Build interfaces in Next.js and React, with Server Components and server-side rendering.",
        "Design and develop NestJS backend services: REST APIs and business rules on the server.",
        "Design and evolve PostgreSQL databases with Prisma, including schema and migrations.",
        "Implement authentication and authorization.",
        "Design and maintain third-party integrations and webhooks.",
        "Own deployment and infrastructure: Docker, Linux on a VPS, Nginx as a reverse proxy and CI/CD pipelines.",
        "Support the applications in production: diagnosing and resolving production incidents, fixes and continuous improvement.",
        "Take part in system architecture and application security decisions.",
      ],
    },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "Linux / VPS",
      "Nginx",
      "CI/CD",
      "APIs REST",
    ],
  },
  {
    company: "Grupo Nasli",
    title: { pt: "Desenvolvedor Full-Stack", en: "Full-Stack Developer" },
    period: { pt: "2024 — 2026", en: "2024 — 2026" },
    location: { pt: "São Paulo, SP · híbrido", en: "São Paulo, Brazil · hybrid" },
    summary: {
      pt: "Desenvolvimento e manutenção dos sistemas do grupo, com destaque para o sistema de gestão de vistorias veiculares.",
      en: "Development and maintenance of the group's systems, most notably the vehicle inspection management system.",
    },
    highlights: {
      pt: [
        "Sistema de gestão de vistorias veiculares com dashboards em tempo real.",
        "Controle de usuários com níveis de permissão.",
        "Integração com a API da Tabela FIPE para automatizar a precificação técnica.",
        "Automação de fluxos administrativos.",
        "Banco de dados centralizado para gestão de ativos e clientes.",
      ],
      en: [
        "Vehicle inspection management system with real-time dashboards.",
        "User management with permission levels.",
        "Integration with the FIPE price table API to automate technical pricing.",
        "Automation of administrative workflows.",
        "Centralized database for managing assets and clients.",
      ],
    },
    stack: ["PHP", "JavaScript", "React", "Tailwind CSS", "SQL"],
  },
  {
    company: "VextoTech",
    title: { pt: "Desenvolvedor Full-Stack", en: "Full-Stack Developer" },
    period: { pt: "2025", en: "2025" },
    location: { pt: "São Paulo, SP · híbrido", en: "São Paulo, Brazil · hybrid" },
    summary: {
      pt: "Conduzi tecnicamente o site institucional e o e-commerce da empresa.",
      en: "Led the technical work on the company's website and e-commerce.",
    },
    highlights: {
      pt: [
        "E-commerce com fluxo de checkout otimizado para conversão.",
        "Chatbot com IA conversacional para automatizar o atendimento.",
        "Sistema interno de geração de código via IA para acelerar o workflow do time.",
        "Arquitetura front-end modular, com foco em performance.",
      ],
      en: [
        "E-commerce with a checkout flow optimized for conversion.",
        "Conversational AI chatbot to automate customer support.",
        "Internal AI code-generation system to speed up the team's workflow.",
        "Modular front-end architecture focused on performance.",
      ],
    },
    stack: ["React", "Vite", "Tailwind CSS", "OpenAI API"],
  },
  {
    company: "Hells Brindes",
    title: { pt: "Desenvolvedor Full-Stack", en: "Full-Stack Developer" },
    period: { pt: "2024 — 2025", en: "2024 — 2025" },
    location: { pt: "São Paulo, SP · híbrido", en: "São Paulo, Brazil · hybrid" },
    summary: {
      pt: "Arquitetura e desenvolvimento de um ERP sob medida para logística, financeiro e vendas de brindes corporativos.",
      en: "Architecture and development of a custom ERP for logistics, finance and sales of corporate gifts.",
    },
    highlights: {
      pt: [
        "App mobile em React Native para gestão de campo e força de vendas.",
        "Módulo logístico para controle de estoque e fluxo de materiais.",
        "Financeiro integrado para comissões e faturamento.",
      ],
      en: [
        "React Native mobile app for field management and the sales team.",
        "Logistics module for inventory control and material flow.",
        "Integrated finance for commissions and invoicing.",
      ],
    },
    stack: ["PHP", "React Native", "JavaScript", "SQL", "Bootstrap"],
  },
  {
    company: "Caio Bartender",
    title: { pt: "Desenvolvedor Freelance", en: "Freelance Developer" },
    period: { pt: "2025", en: "2025" },
    location: { pt: "São Paulo, SP · remoto", en: "São Paulo, Brazil · remote" },
    summary: {
      pt: "Site responsivo para apresentação de serviços de bartender, pensado para mobile e geração de leads.",
      en: "Responsive website presenting bartending services, designed for mobile and lead generation.",
    },
    highlights: { pt: [], en: [] },
    stack: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    company: "Grupo Nasli",
    title: { pt: "Analista Veicular", en: "Vehicle Analyst" },
    period: { pt: "2024", en: "2024" },
    location: { pt: "São Paulo, SP · presencial", en: "São Paulo, Brazil · on-site" },
    summary: {
      pt: "Análise técnica de frotas e emissão de laudos. É o domínio de negócio do sistema de vistorias que desenvolvi no mesmo grupo.",
      en: "Technical analysis of vehicle fleets and report issuing. It is the business domain of the inspection system I built at the same group.",
    },
    highlights: { pt: [], en: [] },
    stack: [],
  },
]
