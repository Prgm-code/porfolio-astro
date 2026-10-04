// ============================================
// UI STRINGS (interfaz) — ES / EN
// ============================================

const es = {
  skipLink: "Saltar al contenido",

  nav: {
    projects: "Proyectos",
    experience: "Experiencia",
    profile: "Perfil",
    stack: "Stack",
    contact: "Contacto",
    ariaMain: "Navegación principal",
    ariaMobile: "Navegación móvil",
    ariaOpenMenu: "Abrir menú",
    ariaCloseMenu: "Cerrar menú",
    ariaHome: "Ir al inicio",
    languageLabel: "Idioma",
    themeLabel: "Modo oscuro",
  },

  hero: {
    pipelineLabel: "Ejemplo de pipeline de despliegue",
    pipelineTitle: "deploy · main",
    pipelineStatus: {
      pending: "En espera",
      running: "En curso",
      done: "Listo",
    },
  },

  projects: {
    title: "Proyectos",
    count: (shown: number, total: number) => `${shown} de ${total}`,
    regionLabel: "Proyectos destacados",
    listLabel: "Elegir proyecto",
    archiveCta: (total: number) => `Ver los ${total} proyectos`,
    openProject: (title: string) => `Abrir ${title}`,
    screenshotAlt: (index: number, title: string) =>
      `Captura ${index} del proyecto ${title}`,
    caseStudy: "Leer caso de estudio",
  },

  experience: {
    title: "Experiencia",
  },

  about: {
    title: "Perfil",
    educationHeading: "Formación",
    certificationsHeading: "Certificaciones",
    languagesHeading: "Idiomas",
  },

  services: {
    title: "Stack técnico",
  },

  contact: {
    title: "Contacto",
    whatsappCta: "Escribir por WhatsApp",
    emailCta: "Enviar email",
    formTitle: "Formulario de contacto",
    labelName: "Nombre",
    labelEmail: "Email",
    labelProject: "Mensaje",
    placeholderName: "Tu nombre",
    placeholderEmail: "tu@email.com",
    placeholderProject: "Qué necesitas y para cuándo.",
    submit: "Enviar",
    sending: "Enviando...",
    successTitle: "Mensaje enviado",
    successText: "Gracias por escribir. Te respondo por email.",
    errorText: "No se pudo enviar. Intenta por WhatsApp o email directo.",
  },

  archive: {
    title: "Todos los proyectos",
    summary:
      "Algunos son sistemas internos de clientes y no tienen enlace público.",
    backCta: "Volver al inicio",
    contactCta: "Contacto",
    filterLabel: "Filtrar por tecnología",
    filterAll: "Todos",
    resultsCount: (count: number) =>
      count === 1 ? "1 proyecto" : `${count} proyectos`,
    stackLabel: "Stack",
    view: "Ver sitio",
    talk: "Preguntar por este proyecto",
    caseStudy: "Caso de estudio",
    noScreenshots: "Sin capturas públicas",
    openProject: (title: string) => `Abrir ${title}`,
    screenshotAlt: (index: number, title: string) =>
      `Captura ${index} del proyecto ${title}`,
  },

  meta: {
    homeTitle: "Patricio Gómez Meneses · Desarrollador full stack",
    homeDescription:
      "Patricio Gómez Meneses, desarrollador full stack TypeScript en Puerto Montt, Chile. Aplicaciones web con Next.js, NestJS, Convex y PostgreSQL.",
    archiveTitle: "Proyectos | Patricio Gómez",
    archiveDescription:
      "Proyectos de Patricio Gómez para clientes de salud, transporte, laboratorios e inspección submarina.",
    keywords:
      "desarrollador full stack, Next.js, React, TypeScript, NestJS, Node.js, desarrollo web, aplicaciones web, Chile",
    ogImageAlt: "Patricio Gómez, desarrollador full stack en prgm.cl",
    ogLocale: "es_CL",
    ogLocaleAlternate: "en_US",
  },
};

export type UiDict = typeof es;

const en: UiDict = {
  skipLink: "Skip to content",

  nav: {
    projects: "Projects",
    experience: "Experience",
    profile: "Profile",
    stack: "Stack",
    contact: "Contact",
    ariaMain: "Main navigation",
    ariaMobile: "Mobile navigation",
    ariaOpenMenu: "Open menu",
    ariaCloseMenu: "Close menu",
    ariaHome: "Go to homepage",
    languageLabel: "Language",
    themeLabel: "Dark mode",
  },

  hero: {
    pipelineLabel: "Example deployment pipeline",
    pipelineTitle: "deploy · main",
    pipelineStatus: { pending: "Pending", running: "Running", done: "Done" },
  },

  projects: {
    title: "Projects",
    count: (shown: number, total: number) => `${shown} of ${total}`,
    regionLabel: "Featured projects",
    listLabel: "Choose a project",
    archiveCta: (total: number) => `See all ${total} projects`,
    openProject: (title: string) => `Open ${title}`,
    screenshotAlt: (index: number, title: string) =>
      `Screenshot ${index} of project ${title}`,
    caseStudy: "Read case study",
  },

  experience: {
    title: "Experience",
  },

  about: {
    title: "Profile",
    educationHeading: "Education",
    certificationsHeading: "Certifications",
    languagesHeading: "Languages",
  },

  services: {
    title: "Tech stack",
  },

  contact: {
    title: "Contact",
    whatsappCta: "Message on WhatsApp",
    emailCta: "Send email",
    formTitle: "Contact form",
    labelName: "Name",
    labelEmail: "Email",
    labelProject: "Message",
    placeholderName: "Your name",
    placeholderEmail: "you@email.com",
    placeholderProject: "What you need and by when.",
    submit: "Send",
    sending: "Sending...",
    successTitle: "Message sent",
    successText: "Thanks for writing. I'll reply by email.",
    errorText: "Could not send. Please try WhatsApp or direct email.",
  },

  archive: {
    title: "All projects",
    summary: "Some are internal client systems with no public link.",
    backCta: "Back to home",
    contactCta: "Contact",
    filterLabel: "Filter by technology",
    filterAll: "All",
    resultsCount: (count: number) =>
      count === 1 ? "1 project" : `${count} projects`,
    stackLabel: "Stack",
    view: "Visit site",
    talk: "Ask about this project",
    caseStudy: "Case study",
    noScreenshots: "No public screenshots",
    openProject: (title: string) => `Open ${title}`,
    screenshotAlt: (index: number, title: string) =>
      `Screenshot ${index} of project ${title}`,
  },

  meta: {
    homeTitle: "Patricio Gómez Meneses · Full stack developer",
    homeDescription:
      "Patricio Gómez Meneses, full stack TypeScript developer in Puerto Montt, Chile. Web applications with Next.js, NestJS, Convex and PostgreSQL.",
    archiveTitle: "Projects | Patricio Gómez",
    archiveDescription:
      "Projects by Patricio Gómez for clients in healthcare, transport, laboratories and underwater inspection.",
    keywords:
      "full stack developer, Next.js, React, TypeScript, NestJS, Node.js, web development, web applications, Chile",
    ogImageAlt: "Patricio Gómez, full stack developer at prgm.cl",
    ogLocale: "en_US",
    ogLocaleAlternate: "es_CL",
  },
};

export const UI = { es, en } as const;
