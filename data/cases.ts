import type { CaseStudy, CompactProject, Metric } from "@/types/content"

/**
 * Para adicionar um case: inclua um objeto em `caseStudies`.
 * Métrica só entra com origem e período em `context`.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "grupo-nasli-vistorias",
    client: "Grupo Nasli",
    title: {
      pt: "Sistema de gestão de vistorias veiculares",
      en: "Vehicle inspection management system",
    },
    kind: { pt: "Sistema interno", en: "Internal system" },
    period: { pt: "2024 — 2026", en: "2024 — 2026" },
    problem: {
      pt: "A operação de vistorias do grupo precisava de um sistema único para registrar vistorias, controlar quem acessa o quê e acompanhar o trabalho com dados atualizados.",
      en: "The group's inspection operation needed a single system to record inspections, control who can access what, and track the work with up-to-date data.",
    },
    solution: {
      pt: "Sistema de gestão de vistorias com dashboards em tempo real, controle de usuários por nível de permissão, base centralizada de ativos e clientes e precificação automatizada pela Tabela FIPE.",
      en: "An inspection management system with real-time dashboards, permission-based user access, a centralized database of assets and clients, and automated pricing through the FIPE vehicle price table.",
    },
    role: {
      pt: "Desenvolvimento e manutenção do sistema de ponta a ponta: interface, regras de negócio, banco de dados, controle de acesso e integração externa.",
      en: "End-to-end development and maintenance of the system: interface, business rules, database, access control and third-party integration.",
    },
    architecture: {
      pt: [
        "Controle de acesso por níveis de permissão",
        "Integração com a API da Tabela FIPE para automatizar a precificação técnica",
        "Banco de dados centralizado para ativos e clientes",
        "Dashboards com dados da operação em tempo real",
      ],
      en: [
        "Access control based on permission levels",
        "Integration with the FIPE price table API to automate technical pricing",
        "Centralized database for assets and clients",
        "Dashboards with real-time operational data",
      ],
    },
    result: {
      pt: "Sistema em produção, usado na gestão de vistorias do grupo.",
      en: "System in production, used to manage the group's inspections.",
    },
    stack: ["PHP", "JavaScript", "React", "Tailwind CSS", "SQL"],
    image: {
      src: "/website/nasli.webp",
      width: 1920,
      height: 1013,
      tone: "light",
      alt: {
        pt: "Página pública de apresentação do sistema de relatórios de vistoria do Grupo Nasli",
        en: "Public presentation page for Grupo Nasli's inspection reporting system",
      },
      caption: {
        pt: "Página pública de apresentação da solução. O sistema interno não é exibido por conter dados da operação.",
        en: "Public overview page for the solution. The internal system is not shown because it holds operational data.",
      },
    },
    link: {
      href: "https://apresentacao-sistema-relatorios.sistemansl.com",
      label: { pt: "Ver apresentação pública", en: "View public overview" },
    },
  },
  {
    slug: "hells-brindes-erp",
    client: "Hells Brindes",
    title: {
      pt: "ERP de logística, financeiro e vendas",
      en: "ERP for logistics, finance and sales",
    },
    kind: { pt: "ERP sob medida e app mobile", en: "Custom ERP and mobile app" },
    period: { pt: "2024 — 2025", en: "2024 — 2025" },
    problem: {
      pt: "A empresa, de brindes corporativos, precisava gerir logística, financeiro e vendas em um só sistema, incluindo o time que vende em campo.",
      en: "The company, which sells corporate gifts, needed to run logistics, finance and sales in one system, including the team selling in the field.",
    },
    solution: {
      pt: "ERP personalizado com módulo logístico de estoque e fluxo de materiais, financeiro integrado para comissões e faturamento e app mobile em React Native para a força de vendas.",
      en: "A custom ERP with a logistics module for inventory and material flow, integrated finance for commissions and invoicing, and a React Native mobile app for the sales team.",
    },
    role: {
      pt: "Arquitetura e desenvolvimento do ERP, da interface administrativa ao aplicativo mobile.",
      en: "Architecture and development of the ERP, from the admin interface to the mobile app.",
    },
    architecture: {
      pt: [
        "Módulos separados por domínio: logística, financeiro e vendas",
        "Financeiro integrado às vendas para comissões e faturamento",
        "App React Native para gestão de campo e força de vendas",
        "Interface administrativa desenhada para produtividade",
      ],
      en: [
        "Modules split by domain: logistics, finance and sales",
        "Finance tied to sales for commissions and invoicing",
        "React Native app for field management and the sales team",
        "Admin interface designed for productivity",
      ],
    },
    result: {
      pt: "ERP entregue cobrindo logística, financeiro e vendas da operação.",
      en: "ERP delivered covering the operation's logistics, finance and sales.",
    },
    stack: ["PHP", "React Native", "JavaScript", "SQL", "Bootstrap"],
  },
  {
    slug: "doce-manha",
    client: "Doce Manhã",
    title: {
      pt: "Catálogo digital com pedidos via WhatsApp",
      en: "Digital catalog with WhatsApp ordering",
    },
    kind: { pt: "Produto web", en: "Web product" },
    problem: {
      pt: "A marca, de cestas e presentes artesanais, precisava de um catálogo digital que conduzisse a compra e organizasse os pedidos que chegam pelo WhatsApp.",
      en: "The brand, which sells handmade gift baskets, needed a digital catalog that guides the purchase and organizes the orders arriving through WhatsApp.",
    },
    solution: {
      pt: "Catálogo digital mobile-first, com foco na experiência de compra e triagem automatizada dos pedidos via WhatsApp.",
      en: "A mobile-first digital catalog focused on the buying experience, with automated triage of orders sent through WhatsApp.",
    },
    role: {
      pt: "Projeto completo: UX, desenvolvimento em Next.js, publicação e medição do resultado após o lançamento.",
      en: "The full project: UX, development in Next.js, deployment and measuring the outcome after launch.",
    },
    architecture: {
      pt: [
        "Next.js com abordagem mobile-first",
        "Triagem de pedidos automatizada via WhatsApp",
        "Publicação na Vercel",
      ],
      en: [
        "Next.js with a mobile-first approach",
        "Automated order triage through WhatsApp",
        "Deployed on Vercel",
      ],
    },
    result: {
      pt: "Ticket médio 15% maior nos primeiros 30 dias após o lançamento.",
      en: "Average order value up 15% in the first 30 days after launch.",
    },
    metric: {
      value: "+15%",
      label: { pt: "ticket médio", en: "average order value" },
      context: {
        pt: "Doce Manhã · primeiros 30 dias após o lançamento",
        en: "Doce Manhã · first 30 days after launch",
      },
    },
    stack: ["Next.js", "React", "Vercel"],
    image: {
      src: "/website/doce-manha.webp",
      width: 1920,
      height: 1010,
      tone: "dark",
      alt: {
        pt: "Página inicial do catálogo da Doce Manhã, com cestas e presentes artesanais",
        en: "Home page of the Doce Manhã catalog, showing handmade gift baskets",
      },
    },
    link: {
      href: "https://doce-manha.vercel.app",
      label: { pt: "Abrir o site", en: "Open the site" },
    },
  },
]

export const compactProjects: CompactProject[] = [
  {
    slug: "carioca-bartender",
    client: "Carioca Bartender",
    summary: {
      pt: "Reestruturação do site de um serviço de bartender para eventos premium, com UX orientada por dados de comportamento.",
      en: "Rebuild of a premium-event bartending service website, with UX decisions driven by behavior data.",
    },
    metric: {
      value: "+30%",
      label: { pt: "conversão", en: "conversion" },
      context: {
        pt: "Carioca Bartender · 45 dias após a reestruturação",
        en: "Carioca Bartender · 45 days after the rebuild",
      },
    },
    stack: ["Next.js", "React"],
    image: {
      src: "/website/carioca-bartender.webp",
      width: 1280,
      height: 674,
      tone: "dark",
      alt: {
        pt: "Página inicial do site Carioca Bartender",
        en: "Home page of the Carioca Bartender website",
      },
    },
    link: {
      href: "https://carioca-bartender.vercel.app",
      label: { pt: "Abrir o site", en: "Open the site" },
    },
  },
  {
    slug: "exposoft-alcina",
    client: "Exposoft Alcina",
    summary: {
      pt: "Plataforma da exposição de projetos de TI da escola, criada para eliminar gargalos operacionais do evento. Foi meu trabalho de conclusão do curso técnico.",
      en: "Platform for a school's IT project exhibition, built to remove the event's operational bottlenecks. It was my technical-degree capstone project.",
    },
    metric: {
      value: "+200",
      label: { pt: "acessos simultâneos", en: "concurrent users" },
      context: {
        pt: "Exposoft Alcina · com a plataforma estável",
        en: "Exposoft Alcina · with the platform stable",
      },
    },
    stack: ["HTML", "CSS", "JavaScript"],
    image: {
      src: "/website/exposoft.webp",
      width: 1280,
      height: 676,
      tone: "dark",
      alt: {
        pt: "Página inicial da plataforma Exposoft Alcina",
        en: "Home page of the Exposoft Alcina platform",
      },
    },
    link: {
      href: "https://exposoftalcina.com",
      label: { pt: "Abrir o site", en: "Open the site" },
    },
  },
]

/** Todas as métricas publicadas, na ordem em que aparecem na prova. */
export const metrics: Metric[] = [...caseStudies, ...compactProjects].flatMap((item) =>
  item.metric ? [item.metric] : [],
)
