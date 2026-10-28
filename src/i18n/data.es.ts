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
    misport: {
      title: "MiSport.app",
      description:
        "ERP para clubes deportivos: socios, cobranza, tesorería con conciliación bancaria, competencias y un portal para cada socio.",
      shortLabel: "ERP para clubes deportivos",
      overview:
        "Los clubes deportivos suelen llevar socios, cuotas y finanzas en planillas separadas, y el tesorero cuadra la cartola a mano cada mes. MiSport reúne todo en una plataforma multi-club: la directiva administra y cada socio ve su estado, su credencial y las competencias desde su propio portal.",
      highlights: [
        "Cartolas bancarias con conciliación sugerida por socio, imputación a cuentas contables y centros de costo.",
        "Libro mayor, estado de resultados, cierres de periodo, rendiciones y bóveda, con exportación a Excel y PDF.",
        "Padrón de socios con estado de cuotas, cobranza automática por email y comprobantes en PDF.",
        "Competencias por disciplina (Trap, Skeet, IPSC, Compak, Long Range) con inscripciones y resultados.",
        "Portal del socio con credencial digital y QR verificable, calendario y recordatorios.",
        "Multi-club, con permisos de lectura y escritura por módulo y por rol.",
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
    backupforge: {
      title: "BackupForge",
      description:
        "Panel open source para respaldar despliegues de Convex: respaldos manuales o programados en contenedores Docker, con almacenamiento S3 y logs en vivo.",
      shortLabel: "Respaldos open source",
      overview:
        "Los respaldos de sistemas autoalojados suelen ser scripts sueltos: credenciales repartidas, logs que se pierden y nadie sabe si el último respaldo se puede descargar. BackupForge los convierte en un panel de control: el servidor maneja identidad, políticas y estado, y cada respaldo corre en un contenedor que vive solo lo que dura el trabajo.",
      highlights: [
        "Respaldos manuales o programados con cron y zona horaria, con retención configurable.",
        "Cada trabajo corre convex export en un contenedor Docker efímero y sube backup.zip, manifest.json y logs.txt a S3 o MinIO.",
        "Máquina de estados por trabajo (en cola, exportando, subiendo, verificando…) con reintentos.",
        "Estado, logs y artefactos llegan a la interfaz en vivo mediante Server-Sent Events.",
        "Secretos cifrados con AES-GCM, roles admin, operador y lector, y API documentada con OpenAPI.",
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
    "vlm360-v2": {
      title: "Vlm360 v2",
      description:
        "Plataforma de reportes para inspecciones submarinas con sónar: mapas con capas GIS, mosaicos de sónar, hallazgos con fotos y videos, y bitácoras de terreno.",
      shortLabel: "Inspección submarina",
      overview:
        "VLM escanea el fondo marino de centros de cultivo con sónar y recupera los objetos que encuentra. La v2, reescrita desde cero, convierte cada inspección en un informe sobre un mapa: capas de jaulas y estaciones, el mosaico de sónar georreferenciado, cada hallazgo con su evidencia y los videos de las pasadas. Las cuadrillas registran su avance en terreno y cada cliente ve solo lo publicado para sus centros.",
      highlights: [
        "Constructor de informes sobre MapLibre: capas de jaulas, estaciones, hallazgos y registros multimedia, con mapas base satelital, claro y oscuro.",
        "Importación de KML, KMZ y shapefiles: un worker en Python con GDAL y Tippecanoe los convierte en PMTiles.",
        "Mosaico de sónar posicionado con archivos TFW, con ajuste de opacidad, rotación, escala o GPS de terreno, y exportación del compuesto.",
        "Registros V4LOG de sonares Tritech reconstruidos como barridos polares y codificados a MP4 con FFmpeg.",
        "Hallazgos con galería de evidencia, y registros con fotos y videos de hasta 4 GB convertidos en el servidor.",
        "Bitácoras de terreno que funcionan sin conexión, flujo de aprobación y reporte diario en PDF.",
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
    vlm360: {
      title: "Vlm360 v1",
      description:
        "Primera versión de la plataforma de VLM: reportes de inspecciones submarinas por empresa, objetos ubicados sobre la imagen de cada centro, archivos para el cliente y bitácoras de terreno.",
      shortLabel: "Inspección submarina",
      overview:
        "VLM escanea el fondo marino de centros de cultivo con sónar y recupera los objetos que encuentra. La v1 reemplazó planillas y correos por una aplicación web: el equipo arma cada reporte con sus nodos y objetos, carga los archivos de la inspección y cada empresa cliente entra a ver solo lo suyo.",
      highlights: [
        "Reportes por empresa organizados en nodos, con objetos ubicados sobre la imagen georreferenciada del centro.",
        "Importación de objetos y coordenadas desde Excel.",
        "Explorador de archivos por reporte sobre S3, con carpetas para el cliente.",
        "Bitácora de terreno y libro de petróleo con horómetros, recepciones y consumo.",
        "Usuarios por invitación con Clerk, aprobación de cuentas y permisos por rol y empresa.",
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
