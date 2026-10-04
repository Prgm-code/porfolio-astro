import type { Lang } from "./types";

// ============================================
// CASO DE ESTUDIO: CHRONUS
// Datos verificados contra el repositorio de producción (chronus_front_end)
// y el servicio de boletas (agenda-rose-backend2).
// ============================================

interface CaseFact {
  value: string;
  label: string;
}

interface CaseService {
  name: string;
  detail: string;
}

interface CaseDecision {
  title: string;
  body: string;
}

export interface CaseStudy {
  meta: { title: string; description: string };
  kicker: string;
  lead: string;
  summary: { label: string; value: string }[];
  facts: CaseFact[];
  problem: { title: string; body: string };
  architecture: {
    title: string;
    caption: string;
    client: { label: string; name: string; detail: string };
    core: { label: string; name: string; items: string[] };
    servicesLabel: string;
    services: CaseService[];
  };
  decisions: { title: string; items: CaseDecision[] };
  quality: { title: string; items: string[] };
  gallery: { title: string };
  cta: { visit: string; back: string; contact: string };
}

const es: CaseStudy = {
  meta: {
    title: "Chronus.cl · Caso de estudio | Patricio Gómez Meneses",
    description:
      "Cómo está construido Chronus, SaaS para profesionales de la salud: Next.js, Convex, NestJS, Google Calendar, WhatsApp, boletas en el SII y un agente de IA.",
  },
  kicker: "Caso de estudio · Reactive SpA",
  lead: "SaaS para profesionales de la salud que reúne agenda, recordatorios, cobros, boletas de honorarios y un asistente de IA en una sola aplicación.",
  summary: [
    { label: "Rol", value: "Fundador y desarrollador full stack" },
    {
      label: "Stack",
      value: "Next.js 16, React 19, Convex, NestJS, Clerk, Cloudflare R2",
    },
    { label: "Sitio", value: "chronus.cl" },
  ],
  facts: [
    { value: "~70", label: "tablas en Convex, en 12 módulos de dominio" },
    { value: "25", label: "herramientas del agente de IA" },
    { value: "117", label: "archivos de test con Vitest" },
    { value: "7", label: "integraciones externas" },
  ],
  problem: {
    title: "El problema",
    body: "Un profesional de la salud independiente suele llevar la agenda en Google Calendar, confirmar citas por WhatsApp, anotar los pagos en una planilla y emitir cada boleta de honorarios a mano en el portal del SII. Chronus reúne esas tareas y automatiza las que se repiten.",
  },
  architecture: {
    title: "Arquitectura",
    caption:
      "La aplicación web habla solo con Convex. Convex concentra datos, lógica y tareas programadas, y se comunica con los servicios externos.",
    client: {
      label: "Cliente",
      name: "Next.js 16 · React 19",
      detail: "App web, FullCalendar, shadcn/ui",
    },
    core: {
      label: "Backend",
      name: "Convex",
      items: [
        "Queries reactivas",
        "Mutations y actions",
        "Cron y scheduler",
        "Colas de emisión",
        "Agente de IA",
      ],
    },
    servicesLabel: "Servicios externos",
    services: [
      { name: "Clerk", detail: "Autenticación · webhook" },
      { name: "Google Calendar", detail: "OAuth · Calendar API v3" },
      { name: "WhatsApp", detail: "API oficial de Meta · webhook" },
      { name: "Resend", detail: "Email transaccional" },
      { name: "Cloudflare R2", detail: "Archivos · URLs firmadas" },
      { name: "OpenAI", detail: "Vercel AI SDK · 25 herramientas" },
      { name: "NestJS → SII", detail: "Playwright · boletas de honorarios" },
    ],
  },
  decisions: {
    title: "Decisiones técnicas",
    items: [
      {
        title: "Convex como backend",
        body: "Base de datos, funciones del servidor y tiempo real en un mismo lugar: la agenda se actualiza en todos los dispositivos sin recargar. El esquema se divide en 12 módulos por dominio (agenda, facturación, WhatsApp, pacientes, entre otros) con cerca de 70 tablas.",
      },
      {
        title: "Boletas en un servicio aparte",
        body: "La emisión de boletas de honorarios corre en un servicio NestJS que opera el portal del SII con Playwright. Convex lo invoca desde colas de trabajo, así la emisión no bloquea la interfaz y se reintenta si el portal falla.",
      },
      {
        title: "Sincronización con Google Calendar",
        body: "Conexión por OAuth con los tokens cifrados. Los cambios hechos en Chronus se envían a Google y los eventos de Google se importan a pedido.",
      },
      {
        title: "Agente de IA con herramientas definidas",
        body: "El asistente usa el componente de agentes de Convex y el Vercel AI SDK. Trabaja con 25 herramientas, 16 en la app y 9 en WhatsApp, para buscar pacientes, revisar la agenda, ver el resumen financiero, listar boletas y proponer acciones.",
      },
      {
        title: "WhatsApp y email",
        body: "API oficial de WhatsApp de Meta con plantillas, bandeja de entrada y recordatorios de pago programados. El email transaccional sale por Resend, con adjuntos desde Cloudflare R2.",
      },
    ],
  },
  quality: {
    title: "Calidad y despliegue",
    items: [
      "117 archivos de test con Vitest y convex-test.",
      "El servicio NestJS se despliega con GitHub Actions en un runner propio y corre con PM2. También tiene una imagen Docker basada en la de Playwright.",
      "Migración en curso a TanStack Start, con el mismo backend en Convex.",
    ],
  },
  gallery: { title: "Capturas" },
  cta: {
    visit: "Visitar chronus.cl",
    back: "Todos los proyectos",
    contact: "Contacto",
  },
};

const en: CaseStudy = {
  meta: {
    title: "Chronus.cl · Case study | Patricio Gómez Meneses",
    description:
      "How Chronus, a SaaS for healthcare professionals, is built: Next.js, Convex, NestJS, Google Calendar, WhatsApp, tax receipts through Chile's SII and an AI agent.",
  },
  kicker: "Case study · Reactive SpA",
  lead: "A SaaS for healthcare professionals that brings scheduling, reminders, payments, tax receipts and an AI assistant into one application.",
  summary: [
    { label: "Role", value: "Founder and full stack developer" },
    {
      label: "Stack",
      value: "Next.js 16, React 19, Convex, NestJS, Clerk, Cloudflare R2",
    },
    { label: "Site", value: "chronus.cl" },
  ],
  facts: [
    { value: "~70", label: "Convex tables across 12 domain modules" },
    { value: "25", label: "AI agent tools" },
    { value: "117", label: "Vitest test files" },
    { value: "7", label: "external integrations" },
  ],
  problem: {
    title: "The problem",
    body: "An independent healthcare professional often keeps their schedule in Google Calendar, confirms appointments over WhatsApp, tracks payments in a spreadsheet and issues every tax receipt by hand on the Chilean tax authority's (SII) portal. Chronus brings those tasks together and automates the repetitive ones.",
  },
  architecture: {
    title: "Architecture",
    caption:
      "The web app only talks to Convex. Convex holds data, logic and scheduled jobs, and talks to the external services.",
    client: {
      label: "Client",
      name: "Next.js 16 · React 19",
      detail: "Web app, FullCalendar, shadcn/ui",
    },
    core: {
      label: "Backend",
      name: "Convex",
      items: [
        "Reactive queries",
        "Mutations and actions",
        "Cron and scheduler",
        "Issuing queues",
        "AI agent",
      ],
    },
    servicesLabel: "External services",
    services: [
      { name: "Clerk", detail: "Authentication · webhook" },
      { name: "Google Calendar", detail: "OAuth · Calendar API v3" },
      { name: "WhatsApp", detail: "Meta's official API · webhook" },
      { name: "Resend", detail: "Transactional email" },
      { name: "Cloudflare R2", detail: "Files · signed URLs" },
      { name: "OpenAI", detail: "Vercel AI SDK · 25 tools" },
      { name: "NestJS → SII", detail: "Playwright · tax receipts" },
    ],
  },
  decisions: {
    title: "Technical decisions",
    items: [
      {
        title: "Convex as the backend",
        body: "Database, server functions and real-time updates in one place: the schedule updates on every device without reloading. The schema is split into 12 domain modules (scheduling, billing, WhatsApp, patients and others) with about 70 tables.",
      },
      {
        title: "Receipts in a separate service",
        body: "Tax receipts are issued by a NestJS service that operates the SII portal with Playwright. Convex calls it from work queues, so issuing never blocks the interface and is retried if the portal fails.",
      },
      {
        title: "Google Calendar sync",
        body: "OAuth connection with encrypted tokens. Changes made in Chronus are pushed to Google, and Google events are imported on demand.",
      },
      {
        title: "AI agent with defined tools",
        body: "The assistant uses Convex's agent component and the Vercel AI SDK. It works with 25 tools, 16 in the app and 9 on WhatsApp, to search patients, check the schedule, view the financial summary, list receipts and propose actions.",
      },
      {
        title: "WhatsApp and email",
        body: "Meta's official WhatsApp API with templates, an inbox and scheduled payment reminders. Transactional email goes through Resend, with attachments from Cloudflare R2.",
      },
    ],
  },
  quality: {
    title: "Quality and deployment",
    items: [
      "117 test files with Vitest and convex-test.",
      "The NestJS service deploys with GitHub Actions on a self-hosted runner and runs under PM2. It also has a Docker image based on Playwright's.",
      "Ongoing migration to TanStack Start, keeping the same Convex backend.",
    ],
  },
  gallery: { title: "Screenshots" },
  cta: {
    visit: "Visit chronus.cl",
    back: "All projects",
    contact: "Contact",
  },
};

export const CHRONUS_CASE = { es, en } as const satisfies Record<
  Lang,
  CaseStudy
>;
