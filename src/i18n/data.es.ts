import type { ProjectKey } from "./data.shared";
import type {
  EducationItem,
  ExperienceItem,
  LanguageItem,
  ProjectText,
  StackGroup,
} from "./types";

// ============================================
// CONTENIDO EN ESPAÑOL
// ============================================

export const es = {
  hero: {
    role: "Desarrollador full stack",
    supportingText:
      "Ingeniero electrónico con Máster en Desarrollo Web Full Stack. Construyo aplicaciones web y plataformas de gestión para empresas de salud, transporte, laboratorios e inspección submarina, desde el análisis con el cliente hasta el despliegue y el mantenimiento. Trabajo principalmente con TypeScript, Next.js, TanStack Start, NestJS y Convex.",
    ctaLabel: "Contactar",
    whatsappHref:
      "https://wa.me/56976990163?text=Hola%20Patricio,%20quisiera%20conversar%20sobre%20un%20proyecto",
  },

  experience: [
    {
      date: "Mar 2025 - Actualidad",
      role: "Fundador y desarrollador full stack",
      org: "Reactive SpA",
      location: "Puerto Montt",
      description:
        "Fundé Reactive SpA, empresa de desarrollo de software. Diseño y construyo aplicaciones web de punta a punta, desde la necesidad del cliente y el modelo de datos hasta el frontend, el backend, CI/CD, el despliegue y la mantención.",
      highlights: [
        "Chronus.cl, SaaS para profesionales de la salud: agenda sincronizada con Google Calendar, recordatorios por email y WhatsApp, control de pagos, boletas automáticas y un agente de IA. Clean Architecture con Next.js, NestJS, Convex, Playwright y Cloudflare R2.",
        "Vlm360.com, reportes de inspecciones submarinas con sónar, con TanStack Start y Convex.",
        "Index0.cc, gestión de documentos con búsqueda mediante RAG, con Next.js y Cloudflare.",
        "Tiro Score, Teslo Manager, REL Gelymar y ActivaQ.cl.",
      ],
    },
    {
      date: "Ene - Dic 2024",
      role: "Desarrollador full stack",
      org: "Sotex",
      location: "Remoto",
      description:
        "Plataformas web y PWAs para digitalizar procesos operacionales. Lideré el equipo de desarrollo y definí los estándares de código, el flujo de ramas y las buenas prácticas.",
      highlights: [
        "Digitalización de un laboratorio químico: más de 3.000 ingresos mensuales, cálculos automáticos y traspaso del papel al registro digital.",
        "PWA de seguimiento GPS de embarcaciones en tiempo real.",
        "PWA de mantenimiento naval.",
        "Gestión de préstamos de libros.",
      ],
    },
    {
      date: "2009 - Ene 2023",
      role: "Ingeniero de campo en telecomunicaciones",
      org: "Claro Chile",
      location: "Puerto Montt",
      description:
        "Mantención, puesta en marcha y resolución de fallas en la red móvil de la Región de Los Lagos (energía, acceso y transmisión), asegurando la continuidad operacional de sitios móviles y red core.",
      highlights: [],
    },
  ] satisfies readonly ExperienceItem[],

  education: [
    {
      title: "Máster en Desarrollo Web Full Stack",
      institution: "Three Points (Inesdi) · Barcelona, España",
      year: "2022 - 2023",
      topics: [
        "JavaScript",
        "React",
        "Node.js",
        "Scrum",
        "CI/CD",
        "Seguridad",
        "AWS",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      title: "Ingeniería Electrónica",
      institution: "Universidad de La Frontera · Temuco, Chile",
      year: "2001 - 2007",
      topics: [
        "Electrónica análoga y digital",
        "Control automático",
        "Microcontroladores",
        "Telecomunicaciones",
      ],
    },
  ] satisfies readonly EducationItem[],

  stack: [
    {
      title: "Lenguajes",
      items: ["TypeScript", "JavaScript", "Python", "SQL"],
    },
    {
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "TanStack Start",
        "Astro",
        "React Native",
        "Tailwind CSS",
        "shadcn/ui",
        "TanStack Query",
        "TanStack Table",
        "GSAP",
        "Leaflet",
        "PWA",
      ],
    },
    {
      title: "Backend y datos",
      items: [
        "Node.js",
        "Bun",
        "NestJS",
        "APIs REST",
        "Prisma",
        "Convex",
        "Supabase",
        "Strapi",
        "PostgreSQL",
        "SQL Server",
        "SQLite / Turso",
        "MongoDB",
        "Clerk, Better Auth, Auth.js",
      ],
    },
    {
      title: "Arquitectura",
      items: ["Clean Architecture", "Microservicios", "SOLID"],
    },
    {
      title: "Cloud e infraestructura",
      items: [
        "Linux Server",
        "Docker",
        "Kubernetes",
        "VPS + Coolify",
        "AWS",
        "Google Cloud",
        "Cloudflare",
        "Vercel",
        "Windows Server",
        "On-premise",
      ],
    },
    {
      title: "Testing y CI/CD",
      items: ["Vitest", "Jest", "Playwright", "GitHub Actions", "Jenkins"],
    },
    {
      title: "IA",
      items: [
        "Vercel AI SDK",
        "OpenAI SDK",
        "RAG",
        "Agentes de IA en procesos de negocio",
        "Claude Code, Codex",
      ],
    },
    {
      title: "Conocimientos",
      items: [
        "Go",
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "Maven",
        "JUnit, Mockito",
        "Solidity",
      ],
    },
  ] satisfies readonly StackGroup[],

  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "C1" },
  ] satisfies readonly LanguageItem[],

  projects: {
    "tiro-score": {
      title: "Tiro Score",
      description:
        "Registro de puntajes para competencias de tiro. Jueces y participantes ven resultados y clasificación en tiempo real.",
      shortLabel: "Puntajes en tiempo real",
    },
    "teslo-manager": {
      title: "Teslo Manager",
      description:
        "Control de acreditaciones y documentos de personal para una empresa de transporte. Avisa por correo cuando un documento está por vencer.",
      shortLabel: "Acreditación de personal",
    },
    activaq: {
      title: "ActivaQ.cl",
      description:
        "Sitio en Astro con animaciones GSAP para un laboratorio de inocuidad alimentaria que analiza dioxinas y patógenos.",
      shortLabel: "Sitio para laboratorio",
    },
    chronus: {
      title: "Chronus.cl",
      description:
        "SaaS para profesionales de la salud. Agenda sincronizada con Google Calendar, recordatorios por email y WhatsApp, control de pagos, boletas automáticas y un agente de IA que responde sobre citas y pacientes.",
      shortLabel: "SaaS de agenda médica",
    },
    vlm360: {
      title: "Vlm360.com",
      description:
        "Plataforma de reportes para inspecciones submarinas hechas con sónar. Maneja trabajos, reportes y archivos con permisos por rol.",
      shortLabel: "Inspección submarina",
    },
    index0: {
      title: "Index0.cc",
      description:
        "Hecho para la hackathon de Clerk. Guarda textos e imágenes y permite buscarlos conversando, con AutoRAG de Cloudflare.",
      shortLabel: "Búsqueda en documentos",
    },
    reactivespa: {
      title: "ReactiveSpa.cl",
      description:
        "Sitio para un centro de bienestar, con efectos hechos en particles.js y Three.js.",
      shortLabel: "Sitio para centro de bienestar",
    },
    rosemarie: {
      title: "RosemarieJara.cl",
      description:
        "Sitio para una psicóloga, con sus servicios, preguntas frecuentes y contacto.",
      shortLabel: "Sitio para psicóloga",
    },
    rel: {
      title: "Registro Electrónico de Laboratorios (REL)",
      description:
        "Digitalizó el registro de un laboratorio químico. Guarda parámetros e instrumentos y calcula los resultados. Recibe más de 3.000 ingresos al mes.",
      shortLabel: "Laboratorio químico",
    },
    "naval-pwa": {
      title: "PWA Mantenimiento Naval",
      description:
        "Registro de fallas de una flota, con roles y notificaciones por área.",
      shortLabel: "Mantenimiento de flota",
    },
    gps: {
      title: "Sistema GPS Embarcaciones",
      description:
        "Posición de embarcaciones en tiempo real sobre mapas con capas KMZ.",
      shortLabel: "Seguimiento GPS",
    },
    energy: {
      title: "Gestión de energía para plantas DC",
      description:
        "Prototipo freelance de una plataforma para gestionar plantas de corriente continua y generadores.",
      shortLabel: "Prototipo freelance · 2023",
    },
    "big-data": {
      title: "Big Data Analytics Platform",
      description:
        "Proyecto final del máster. Análisis de datos sobre un clúster Hadoop con Node.js, React y JupyterHub.",
      shortLabel: "Proyecto de máster",
    },
  } satisfies Record<ProjectKey, ProjectText>,

  whatsapp:
    "https://wa.me/56976990163?text=Hola%20Patricio,%20quisiera%20contactarte",
} as const;
