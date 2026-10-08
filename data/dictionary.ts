import type { Locale } from "@/lib/i18n"

const pt = {
  meta: {
    title: "Victor Muniz — Desenvolvedor Full-Stack e Software Engineer · Next.js, NestJS",
    description:
      "Desenvolvedor full-stack e software engineer em São Paulo. Assumo aplicações web de ponta a ponta com Next.js, NestJS, Prisma e PostgreSQL, da arquitetura ao deploy e à sustentação em produção.",
    ogTitle: "Do problema à produção, e o que vem depois.",
    ogTagline: "Full-Stack Developer / Software Engineer · Next.js · NestJS · PostgreSQL",
  },
  skip: "Pular para o conteúdo",
  nav: {
    label: "Navegação principal",
    cases: "Cases",
    experience: "Experiência",
    process: "Processo",
    stack: "Stack",
    services: "Serviços",
    contact: "Contato",
    cta: "Falar sobre um projeto",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    language: "Idioma",
  },
  hero: {
    titleLead: "Desenvolvedor full-stack.",
    titleRest: ["Do problema à produção,", "e o que vem depois."],
    lead: "Sou Victor Muniz, Full-Stack Developer / Software Engineer. Assumo aplicações web de ponta a ponta: Next.js no frontend; NestJS, Prisma e PostgreSQL no backend; APIs, integrações, autenticação e autorização; CI/CD, Docker e Linux em VPS; segurança e sustentação em produção.",
    ctaCases: "Ver cases",
    ctaProject: "Falar sobre um projeto",
    pipelineLabel: "O caminho que eu cubro em uma entrega",
    counts: [
      { value: "12+", label: "projetos lançados" },
      { value: "3+", label: "anos desenvolvendo produtos" },
      { value: "5+", label: "sistemas e MVPs entregues" },
    ],
  },
  proof: {
    title: "Resultados medidos, com a origem de cada número.",
    lead: "Poucos números, todos com contexto. Onde não houve medição, descrevo o impacto sem inventar precisão.",
    metricColumn: "Resultado",
    contextColumn: "Onde e quando",
    note: "Métricas medidas por mim nos períodos indicados. Não foram auditadas por terceiros.",
  },
  cases: {
    title: "Sistemas e produtos que eu construí e coloquei no ar.",
    lead: "Cada case mostra o problema, o que foi construído, a minha parte e as decisões técnicas.",
    problem: "Problema",
    solution: "Solução",
    role: "Minha responsabilidade",
    architecture: "Arquitetura e desafios",
    stack: "Stack",
    result: "Resultado",
    moreTitle: "Outros projetos com resultado medido",
  },
  experience: {
    title: "Experiência",
    lead: "Hoje atuo com ownership end-to-end sobre aplicações em produção: do código à infraestrutura e à sustentação.",
    earlier: "Antes disso",
  },
  process: {
    title: "Como eu trabalho",
    lead: "O mesmo caminho em toda entrega, do primeiro entendimento à operação em produção.",
  },
  stack: {
    title: "Stack",
    lead: "A stack do meu trabalho atual, organizada pelo papel que cada parte cumpre em um sistema em produção.",
  },
  services: {
    title: "Tem um produto para construir ou um sistema para estabilizar?",
    lead: "Trabalho com founders e empresas que precisam de alguém para assumir uma entrega crítica ou o produto inteiro: arquitetura, frontend, backend, banco de dados, integrações, deploy e sustentação em produção.",
    cta: "Me conte o problema",
    ctaWhatsapp: "Chamar no WhatsApp",
  },
  credentials: {
    title: "Formação e certificações",
    lead: "Complemento ao trabalho acima.",
    view: "Ver PDF",
  },
  contact: {
    title: "Me conte o problema.",
    lead: "Uma vaga de Full-Stack / Software Engineer, um produto para tirar do papel ou uma aplicação em produção que precisa de dono. Respondo em até 24 horas.",
    email: "E-mail",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  footer: {
    role: "Desenvolvedor Full-Stack · Software Engineer",
    top: "Voltar ao topo",
  },
  external: "abre em nova aba",
}

export type Dictionary = typeof pt

const en: Dictionary = {
  meta: {
    title: "Victor Muniz — Full-Stack Developer & Software Engineer · Next.js, NestJS",
    description:
      "Full-stack developer and software engineer based in São Paulo, Brazil. End-to-end ownership of production web applications with Next.js, NestJS, Prisma and PostgreSQL, from system architecture to deployment and production support.",
    ogTitle: "From problem to production, and everything after.",
    ogTagline: "Full-Stack Developer / Software Engineer · Next.js · NestJS · PostgreSQL",
  },
  skip: "Skip to content",
  nav: {
    label: "Main navigation",
    cases: "Case studies",
    experience: "Experience",
    process: "Process",
    stack: "Stack",
    services: "Services",
    contact: "Contact",
    cta: "Discuss a project",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  hero: {
    titleLead: "Full-stack developer.",
    titleRest: ["From problem to production,", "and everything after."],
    lead: "I'm Victor Muniz, a Full-Stack Developer / Software Engineer. I take end-to-end ownership of web applications: Next.js on the frontend; NestJS, Prisma and PostgreSQL on the backend; APIs, third-party integrations, authentication and authorization; CI/CD pipelines, Docker and Linux on a VPS; security and production support.",
    ctaCases: "See case studies",
    ctaProject: "Discuss a project",
    pipelineLabel: "The path I cover in a delivery",
    counts: [
      { value: "12+", label: "projects shipped" },
      { value: "3+", label: "years building products" },
      { value: "5+", label: "systems and MVPs delivered" },
    ],
  },
  proof: {
    title: "Measured results, with the source of every number.",
    lead: "A few numbers, each with context. Where nothing was measured, I describe the impact without inventing precision.",
    metricColumn: "Result",
    contextColumn: "Where and when",
    note: "Metrics measured by me over the periods shown. They were not audited by a third party.",
  },
  cases: {
    title: "Systems and products I built and took to production.",
    lead: "Each case study covers the problem, what was built, my part in it and the technical decisions.",
    problem: "Problem",
    solution: "Solution",
    role: "My responsibility",
    architecture: "Architecture and challenges",
    stack: "Stack",
    result: "Outcome",
    moreTitle: "Other projects with a measured outcome",
  },
  experience: {
    title: "Experience",
    lead: "Today I work with end-to-end ownership of production applications: from code to infrastructure and production support.",
    earlier: "Before that",
  },
  process: {
    title: "How I work",
    lead: "The same path on every delivery, from first understanding to running in production.",
  },
  stack: {
    title: "Stack",
    lead: "The stack behind my current work, organized by the job each part does in a production system.",
  },
  services: {
    title: "Have a product to build or a system to stabilize?",
    lead: "I work with founders and companies that need someone to own a critical delivery or the whole product: system architecture, frontend, backend services, database design, integrations, deployment and production support.",
    cta: "Tell me the problem",
    ctaWhatsapp: "Message on WhatsApp",
  },
  credentials: {
    title: "Education and certifications",
    lead: "A complement to the work above.",
    view: "View PDF",
  },
  contact: {
    title: "Tell me the problem.",
    lead: "A Full-Stack / Software Engineer role, a product to get off the ground or a production application that needs an owner. I reply within 24 hours.",
    email: "Email",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  footer: {
    role: "Full-Stack Developer · Software Engineer",
    top: "Back to top",
  },
  external: "opens in a new tab",
}

export const dictionary: Record<Locale, Dictionary> = { pt, en }
