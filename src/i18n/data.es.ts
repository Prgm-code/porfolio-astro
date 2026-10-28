import type { ProjectKey } from "./data.shared";
import type { ProjectText, StackGroup } from "./types";

// ============================================
// CONTENIDO EN ESPAÑOL
// ============================================

export const es = {
  hero: {
    role: "Desarrollador full stack",
    supportingText:
      "Construyo aplicaciones web y plataformas de gestión de punta a punta: modelo de datos, interfaz, backend y despliegue. Esta es una selección de lo que he hecho para salud, minería, laboratorios e inspección submarina.",
    ctaLabel: "Contactar",
    whatsappHref:
      "https://wa.me/56976990163?text=Hola%20Patricio,%20quisiera%20conversar%20sobre%20un%20proyecto",
  },

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

  projects: {
    "tiro-score": {
      title: "Tiro Score",
      description:
        "Registro de puntajes para competencias de tiro. Jueces y participantes ven resultados y clasificación en tiempo real.",
      shortLabel: "Puntajes en tiempo real",
      overview:
        "Federaciones y clubes de tiro deportivo llevaban los puntajes en planillas y publicaban los resultados horas después. Tiro Score centraliza inscripción, registro de disparos y clasificación, y los resultados se actualizan en vivo para jueces, tiradores y público.",
      highlights: [
        "Campeonatos de varias disciplinas: Nacional, Compak, Long Range e IDPA, cada una con sus reglas de puntaje.",
        "Tablas de clasificación y premiación que se recalculan en tiempo real con Convex.",
        "Detalle por disparo y registro de auditoría de cada cambio de puntaje.",
        "Exportación a PDF y Excel, códigos QR y notificaciones push.",
      ],
    },
    "teslo-manager": {
      title: "Teslo Manager",
      description:
        "Control de acreditaciones de personal y vehículos para contratistas mineros. Avisa por correo cuando un documento está por vencer.",
      shortLabel: "Acreditación de personal",
      overview:
        "Para entrar a una faena minera, cada trabajador y vehículo necesita documentos vigentes que cambian según el cliente y el proyecto. Teslo Manager reemplaza las carpetas compartidas por un sistema que sabe qué falta, qué vence y quién está habilitado.",
      highlights: [
        "Billetera digital de documentos por persona, reutilizable entre acreditaciones.",
        "Requisitos configurables por empresa, cliente, proyecto y cargo.",
        "Cumplimiento de flota: vehículos, asignaciones y lecturas de odómetro.",
        "Alertas de vencimiento por correo, reportes en Excel y autenticación con 2FA.",
      ],
    },
    fatfingers: {
      title: "FatFingers",
      description:
        "Asistente de escritura de escritorio, open source. Un atajo global lo abre sobre cualquier app y devuelve el texto corregido, reescrito o traducido.",
      shortLabel: "App de escritorio open source",
      overview:
        "Corregir un mensaje con IA suele implicar cambiar de ventana, pegar, esperar y volver a copiar. FatFingers es un helper flotante, al estilo Spotlight o Raycast: se abre con un atajo, mejoras el texto con Enter y con un segundo Enter queda copiado o pegado donde estabas escribiendo.",
      highlights: [
        "Acciones de escritura: corregir, profesional, acortar, amigable, respuesta rápida e instrucción propia.",
        "Idioma de salida combinable con cualquier acción: reescribe y traduce en un paso.",
        "Proveedor de IA a elección (OpenAI, OpenRouter, MiniMax, compatibles con OpenAI o HTTP propio). Las llamadas salen desde Rust, nunca desde la interfaz.",
        "La API key se guarda en el llavero del sistema. Sin telemetría ni historial por defecto.",
        "Builds para macOS, Windows y Linux, publicados desde GitHub Actions.",
      ],
    },
    activaq: {
      title: "ActivaQ.cl",
      description:
        "Sitio en Astro con animaciones GSAP para un laboratorio de inocuidad alimentaria que analiza dioxinas y patógenos.",
      shortLabel: "Sitio para laboratorio",
      overview:
        "ActivaQ es un laboratorio acreditado ISO/IEC 17025 para análisis de dioxinas. Necesitaba un sitio que transmitiera rigor técnico y que su equipo pudiera actualizar sin depender de un desarrollador.",
      highlights: [
        "Secciones de servicios, productos, tecnología e hitos, todas editables desde Strapi.",
        "Escenas 3D con Three.js y animaciones de scroll con GSAP y Lenis.",
        "Contenido de respaldo local si el CMS no responde.",
        "Sitemap e imágenes Open Graph generadas en el build.",
      ],
    },
    chronus: {
      title: "Chronus.cl",
      description:
        "SaaS para profesionales de la salud. Agenda sincronizada con Google Calendar, recordatorios por email y WhatsApp, control de pagos, boletas automáticas y un agente de IA que responde sobre citas y pacientes.",
      shortLabel: "SaaS de agenda médica",
      overview:
        "Software de gestión para profesionales que atienden pacientes: agenda, fichas, cobros y boletas en un solo lugar, con un agente de IA que conoce la consulta.",
      highlights: [
        "Agenda con disponibilidad y sincronización con Google Calendar.",
        "Recordatorios por WhatsApp, email y push.",
        "Pagos y boletas de honorarios automáticas.",
        "Agente de IA que consulta y propone acciones sobre citas y pacientes.",
      ],
    },
    vlm360: {
      title: "Vlm360.com",
      description:
        "Plataforma de reportes para inspecciones submarinas hechas con sónar. Maneja trabajos, reportes y archivos con permisos por rol.",
      shortLabel: "Inspección submarina",
      overview:
        "VLM escanea el fondo marino con sónar y recupera los objetos que encuentra. Las cuadrillas en terreno registran su avance y los clientes ven los datos de sus zonas sobre un mapa, cada uno con los permisos de su rol.",
      highlights: [
        "Reportes con mapa, mosaico de sónar, hallazgos y cálculo de áreas.",
        "Bitácoras de terreno y reportes diarios generados automáticamente.",
        "Capas GIS (KMZ, Shapefile, PMTiles) sobre MapLibre.",
        "Workers en Python que procesan los datos de sónar y la cartografía.",
      ],
    },
    index0: {
      title: "Index0.cc",
      description:
        "Hecho para la hackathon de Clerk. Guarda textos e imágenes y permite buscarlos conversando, con AutoRAG de Cloudflare.",
      shortLabel: "Búsqueda en documentos",
      overview:
        "Proyecto para la hackathon de Clerk: un espacio privado para guardar documentos y encontrarlos preguntando en lenguaje natural, en vez de recordar nombres de archivo.",
      highlights: [
        "Carga por arrastrar y soltar, carpetas y límites de almacenamiento.",
        "Búsqueda semántica y chat RAG que cita los fragmentos de origen.",
        "Vista previa de PDF y documentos de Office en el navegador.",
        "Interfaz en varios idiomas e invitaciones con Clerk.",
      ],
    },
    reactivespa: {
      title: "ReactiveSpa.cl",
      description:
        "Sitio para un centro de bienestar, con efectos hechos en particles.js y Three.js.",
      shortLabel: "Sitio para centro de bienestar",
      overview:
        "Sitio institucional para un centro de bienestar, con una identidad visual animada que lo distingue de las plantillas habituales del rubro.",
      highlights: [
        "Fondos animados con particles.js y Three.js.",
        "Secciones de servicios, tecnologías y contacto.",
        "Sitio estático en Astro, liviano y rápido de cargar.",
      ],
    },
    rosemarie: {
      title: "RosemarieJara.cl",
      description:
        "Sitio para una psicóloga, con sus servicios, preguntas frecuentes y contacto.",
      shortLabel: "Sitio para psicóloga",
      overview:
        "Landing para una psicóloga y psicopedagoga que trabaja con TDAH, autismo y trastornos del aprendizaje. El objetivo era explicar su enfoque con claridad y facilitar el primer contacto.",
      highlights: [
        "Secciones de presentación, servicios, preguntas frecuentes y contacto.",
        "Textos y metadatos SEO centralizados en un solo archivo.",
        "Animaciones suaves con Motion sobre un sitio estático.",
      ],
    },
    rel: {
      title: "Registro Electrónico de Laboratorios (REL)",
      description:
        "Digitalizó el registro de un laboratorio químico. Guarda parámetros e instrumentos y calcula los resultados. Recibe más de 3.000 ingresos al mes.",
      shortLabel: "Laboratorio químico",
      overview:
        "El laboratorio de calidad registraba sus análisis en papel y calculaba los resultados a mano. REL pasó ese proceso a un sistema con fórmulas configurables, conectado a la base de datos LIMS existente.",
      highlights: [
        "Más de 3.000 ingresos de análisis al mes.",
        "Parámetros, equipos y fórmulas configurables, evaluadas con math.js.",
        "Integración con la base LIMS existente en SQL Server.",
        "Historial, cola de pendientes, auditoría y avisos por email y Discord.",
      ],
    },
    "naval-pwa": {
      title: "PWA Mantenimiento Naval",
      description:
        "Registro de fallas de una flota, con roles y notificaciones por área.",
      shortLabel: "Mantenimiento de flota",
      overview:
        "Aplicación instalable para que las tripulaciones reporten fallas desde la embarcación y cada área de mantenimiento reciba solo lo que le corresponde.",
      highlights: [
        "Registro de fallas por embarcación y por sistema.",
        "Roles y notificaciones por área de mantenimiento.",
        "PWA instalable en el teléfono de la tripulación.",
      ],
    },
    gps: {
      title: "Sistema GPS Embarcaciones",
      description:
        "Posición de embarcaciones en tiempo real sobre mapas con capas KMZ.",
      shortLabel: "Seguimiento GPS",
      overview:
        "Seguimiento de una flota en el mar: la posición de cada embarcación sobre mapas con las capas KMZ de las zonas de operación.",
      highlights: [
        "Posición de embarcaciones en tiempo real.",
        "Capas KMZ de concesiones y zonas de trabajo.",
        "Vista de escritorio y vista móvil con panel lateral.",
      ],
    },
    energy: {
      title: "Gestión de energía para plantas DC",
      description:
        "Prototipo de una plataforma para gestionar plantas de corriente continua y generadores.",
      shortLabel: "Prototipo · 2023",
      overview:
        "Prototipo freelance de una plataforma para gestionar plantas de corriente continua y generadores.",
      highlights: [],
    },
    "big-data": {
      title: "Big Data Analytics Platform",
      description:
        "Análisis de datos sobre un clúster Hadoop con Node.js, React y JupyterHub.",
      shortLabel: "Plataforma de datos",
      overview:
        "Plataforma para lanzar y revisar análisis sobre un clúster Hadoop desde una interfaz web, sin entrar al servidor.",
      highlights: [
        "Clúster Hadoop con notebooks de JupyterHub.",
        "API en Node.js y panel en React para lanzar y ver análisis.",
      ],
    },
  } satisfies Record<ProjectKey, ProjectText>,

  whatsapp:
    "https://wa.me/56976990163?text=Hola%20Patricio,%20quisiera%20contactarte",
} as const;
