import type { ProjectBase, Tag } from "./types";

import TypeScriptIcon from "../icons/TypeScript.svg?raw";
import AstroIcon from "../icons/AstroIcon.svg?raw";
import WebpackIcon from "../icons/WebPack.svg?raw";
import NextJSIcon from "../icons/NextJS.svg?raw";
import ReactIcon from "../icons/React.svg?raw";
import TailwindIcon from "../icons/Tailwind.svg?raw";
import HTMLIcon from "../icons/HTML.svg?raw";
import CSSIcon from "../icons/CSS.svg?raw";
import JavaScriptIcon from "../icons/JavaScript.svg?raw";
import NodeJSIcon from "../icons/NodeJS.svg?raw";
import TursoIcon from "../icons/TursoIcon.svg?raw";
import MongoDBIcon from "../icons/MongoDBIcon.svg?raw";
import HadoopIconUrl from "../icons/hadoop.webp?url";
import JupyterIconUrl from "../icons/Jupyter_logo.svg.png?url";
import DatabaseIcon from "../icons/DatabaseIcon.svg?raw";
import NestJSIcon from "../icons/NestJS.svg?raw";
import ExpoIcon from "../icons/ExpoIcon.svg?raw";
import PostgreSQLIcon from "../icons/PostgreSQL.svg?raw";
import PrismaIcon from "../icons/PrismaIcon.svg?raw";
import GitIcon from "../icons/GitIcon.svg?raw";
import AWSIcon from "../icons/AWSIcon.svg?raw";
import GoogleCloudIcon from "../icons/GoogleCloudIcon.svg?raw";
import VercelIcon from "../icons/VercelIcon.svg?raw";
import CloudflareIcon from "../icons/CloudflareIcon.svg?raw";
import PlaywrightIcon from "../icons/PlaywrightIcon.svg?raw";
import ClerkIcon from "../icons/ClerkIcon.svg?raw";
import PythonIcon from "../icons/PythonIcon.svg?raw";
import OpenAIIcon from "../icons/OpenAIIcon.svg?raw";
import DigitalOceanIcon from "../icons/DigitalOceanIcon.svg?raw";
import ReactNativeIcon from "../icons/ReactNativeIcon.svg?raw";
import ConvexIcon from "../icons/ConvexIcon.svg?raw";
import ToolIcon from "../icons/ToolIcon.svg?raw";

// Imágenes de proyectos
import Vlm360Portada from "../assets/images/vlm360/vlm360-portada.webp";
import Vlm360Contenido from "../assets/images/vlm360/vlm360-Contenido.webp";
import vlm360Mapa from "../assets/images/vlm360/vlm360v2_mapa.webp";
import vlm360Mosaico from "../assets/images/vlm360/vlm360v2_mosaico.webp";
import vlm360Media from "../assets/images/vlm360/vlm360v2_media.webp";
import vlm360Hallazgos from "../assets/images/vlm360/vlm360v2_hallazgos.webp";
import vlm360SonarVideo from "../assets/images/vlm360/vlm360v2_sonar-video.webp";

import Index0Portada from "../assets/images/index0/index0-portada.webp";
import Index0Contenido from "../assets/images/index0/index0-contenido.webp";
import Index0Contenido2 from "../assets/images/index0/index0-contenido2.webp";
import Index0Contenido3 from "../assets/images/index0/index0-contenido3.webp";

import geopMapaEscritorio from "../assets/images/geop/mapa-escritorio.webp";
import geopMapaMovil from "../assets/images/geop/mapa-telefono.webp";
import geopMapaDrawer from "../assets/images/geop/mapa-telefono-drawer.webp";
import geopMapa from "../assets/images/geop/vista-mapa.webp";

import reactiveSpaContacto from "../assets/images/reactivespa/reactive-contacto.webp";
import reactiveSpaHome from "../assets/images/reactivespa/reactive-home.webp";
import reactiveSpaServicios from "../assets/images/reactivespa/reactive-servicios.webp";
import reactiveSpaTecnologias from "../assets/images/reactivespa/reactive-tecnologias.webp";

import rosemarieLandingContacto from "../assets/images/rosemarie-landing/contacto.webp";
import rosemarieLandingHero from "../assets/images/rosemarie-landing/hero.webp";
import rosemarieLandingPreguntas from "../assets/images/rosemarie-landing/preguntas.webp";
import rosemarieLandingServicios from "../assets/images/rosemarie-landing/servicios.webp";
import rosemarieLandingSobreMi from "../assets/images/rosemarie-landing/sobre-mi.webp";

import activaQHero from "../assets/images/activaq/activaq_hero.webp";
import activaQHome from "../assets/images/activaq/activaq_home2.webp";
import activaQTecnologia from "../assets/images/activaq/activaq_tecnologia.webp";
import activaQContacto from "../assets/images/activaq/activaq_contacto.webp";

import chronusLanding from "../assets/images/chronus/chronus_landig.webp";
import chronusClaroHome from "../assets/images/chronus/chronus_claro_home.webp";
import chronusAgendaBlack from "../assets/images/chronus/chronus_agenda_black.webp";
import chronusOscuro from "../assets/images/chronus/chronus_oscuro_2.webp";
import chronusDetalle from "../assets/images/chronus/chronus_2.webp";

import tesloManagerLanding from "../assets/images/teslo_manager/teslo_manager_landing.webp";
import tesloManagerHome from "../assets/images/teslo_manager/teslo_manager.webp";
import tesloManagerAcreditacion from "../assets/images/teslo_manager/Teslo_manager_1.webp";
import tesloManagerDetalle from "../assets/images/teslo_manager/teslo_manager_2.webp";

import tiroScoreLanding from "../assets/images/tiro_score/tiiro_score_landig.webp";
import tiroScoreHome from "../assets/images/tiro_score/tiro_score.webp";
import tiroScorePuntajes from "../assets/images/tiro_score/tiro_score_puntajes.webp";
import tiroScoreDetalle from "../assets/images/tiro_score/tiro_score_3.webp";

import relCalculo from "../assets/images/rel/calculo.webp";
import relControlFormulas from "../assets/images/rel/control-formulas.webp";
import relListadoAnalisis from "../assets/images/rel/listado-analisis-claro.webp";
import relListadoClaro from "../assets/images/rel/listado-claro.webp";
import relListadoAnalisisOscuro from "../assets/images/rel/listado-analisis-oscuro.webp";
import relPestañas from "../assets/images/rel/pestañas.webp";

import fatFingersHero from "../assets/images/fatfingers/fatfingers_hero.webp";
import fatFingersAtajos from "../assets/images/fatfingers/fatfingers_atajos.webp";
import fatFingersIdiomas from "../assets/images/fatfingers/fatfingers_idiomas.webp";
import fatFingersProveedor from "../assets/images/fatfingers/fatfingers_proveedor.webp";

import misportLanding from "../assets/images/misport/misport_landing.webp";
import misportTesoreria from "../assets/images/misport/misport_app_tesoreria.webp";
import misportSocios from "../assets/images/misport/misport_app_socios.webp";
import misportPortal from "../assets/images/misport/misport_app_portal.webp";
import misportFunciones from "../assets/images/misport/misport_landing_features.webp";

import backupForgeDashboard from "../assets/images/backupforge/backupforge_dashboard.webp";
import backupForgeDeployment from "../assets/images/backupforge/backupforge_deployment.webp";
import backupForgeJob from "../assets/images/backupforge/backupforge_job.webp";
import backupForgeJobLogs from "../assets/images/backupforge/backupforge_job_logs.webp";
import backupForgeCrons from "../assets/images/backupforge/backupforge_crons.webp";

import sotexLogo from "../assets/projects/sotex-logo.webp";
import tfmImage from "../assets/projects/TFM.webp";

const rasterIcon = (src: string) =>
  `<img src="${src}" alt="" loading="lazy" decoding="async" />`;

// ============================================
// TAGS / STACK (nombres e iconos, sin traducir)
// ============================================
export const TAGS = {
  NEXTJS: { name: "Next.js", icon: NextJSIcon, class: "size-4" },
  REACT: { name: "React", icon: ReactIcon, class: "size-4" },
  TAILWIND: { name: "Tailwind CSS", icon: TailwindIcon, class: "size-4" },
  TYPESCRIPT: { name: "TypeScript", icon: TypeScriptIcon, class: "size-4" },
  WEBPACK: { name: "Webpack", icon: WebpackIcon, class: "size-4" },
  HTML: { name: "HTML", icon: HTMLIcon, class: "size-4" },
  CSS: { name: "CSS", icon: CSSIcon, class: "size-4" },
  JAVASCRIPT: { name: "JavaScript", icon: JavaScriptIcon, class: "size-4" },
  ASTRO: { name: "Astro", icon: AstroIcon, class: "size-4" },
  GSAP: { name: "GSAP", icon: ToolIcon, class: "size-4" },
  TANSTACK_START: { name: "TanStack Start", icon: ToolIcon, class: "size-4" },
  NODEJS: { name: "Node.js", icon: NodeJSIcon, class: "size-4" },
  TURSO: { name: "TursoDB", icon: TursoIcon, class: "size-4" },
  MONGODB: { name: "MongoDB", icon: MongoDBIcon, class: "size-4" },
  HADOOP: { name: "Hadoop", icon: rasterIcon(HadoopIconUrl), class: "size-4" },
  JUPYTER: {
    name: "Jupyter",
    icon: rasterIcon(JupyterIconUrl),
    class: "size-4",
  },
  NESTJS: { name: "NestJS", icon: NestJSIcon, class: "size-4" },
  POSTGRESQL: { name: "PostgreSQL", icon: PostgreSQLIcon, class: "size-4" },
  SQLSERVER: { name: "SQL Server", icon: DatabaseIcon, class: "size-4" },
  PRISMA: { name: "Prisma", icon: PrismaIcon, class: "size-4" },
  CLERK: { name: "Clerk", icon: ClerkIcon, class: "size-4" },
  PLAYWRIGHT: { name: "Playwright", icon: PlaywrightIcon, class: "size-4" },
  CLOUDFLARE: { name: "Cloudflare", icon: CloudflareIcon, class: "size-4" },
  GCP: { name: "Google Cloud", icon: GoogleCloudIcon, class: "size-4" },
  VERCEL: { name: "Vercel", icon: VercelIcon, class: "size-4" },
  PWA: { name: "PWA", icon: ReactIcon, class: "size-4" },
  GIT: { name: "Git", icon: GitIcon, class: "size-4" },
  AWS: { name: "AWS", icon: AWSIcon, class: "size-4" },
  PYTHON: { name: "Python", icon: PythonIcon, class: "size-4" },
  OPENAI: { name: "OpenAI", icon: OpenAIIcon, class: "size-4" },
  CONVEX: { name: "Convex", icon: ConvexIcon, class: "size-4" },
  DIGITALOCEAN: {
    name: "DigitalOcean",
    icon: DigitalOceanIcon,
    class: "size-4",
  },
  REACTNATIVE: { name: "React Native", icon: ReactNativeIcon, class: "size-4" },
  EXPO: { name: "Expo", icon: ExpoIcon, class: "size-4" },
  GO: { name: "Go", icon: ToolIcon, class: "size-4" },
  DOCKER: { name: "Docker", icon: ToolIcon, class: "size-4" },
  BETTER_AUTH: { name: "Better Auth", icon: ToolIcon, class: "size-4" },
  TAURI: { name: "Tauri", icon: ToolIcon, class: "size-4" },
  RUST: { name: "Rust", icon: ToolIcon, class: "size-4" },
} satisfies Record<string, Tag>;

// ============================================
// PROYECTOS — base no traducible
// (los textos viven en data.es.ts / data.en.ts)
//
// Para agregar un proyecto:
//   1. Agrega su entrada aquí (key, link, imágenes, tags)
//   2. Agrega sus textos en data.es.ts y data.en.ts
//      (TypeScript obliga a completar ambos idiomas)
// ============================================
export const PROJECTS_BASE = [
  {
    key: "tiro-score",
    year: "2025 – 2026",
    featured: true,
    favorite: true,
    link: "https://tiroscore.app/",
    image: tiroScoreLanding,
    images: [
      tiroScoreLanding,
      tiroScoreHome,
      tiroScorePuntajes,
      tiroScoreDetalle,
    ],
    tags: [TAGS.NEXTJS, TAGS.CONVEX, TAGS.TAILWIND, TAGS.TYPESCRIPT],
    stack: {
      frontend: [
        "Next.js 16",
        "React 19",
        "Tailwind CSS 4",
        "shadcn/ui",
        "Recharts",
      ],
      backend: ["Convex"],
      auth: ["Clerk"],
      services: ["Web Push", "React PDF", "ExcelJS"],
      quality: ["Vitest", "convex-test", "Biome"],
      infra: ["Dokku", "GitHub Actions"],
    },
  },
  {
    key: "misport",
    year: "2026",
    featured: true,
    favorite: true,
    link: "https://misport.app",
    image: misportLanding,
    images: [
      misportLanding,
      misportTesoreria,
      misportSocios,
      misportPortal,
      misportFunciones,
    ],
    tags: [TAGS.TANSTACK_START, TAGS.CONVEX, TAGS.TAILWIND, TAGS.TYPESCRIPT],
    stack: {
      frontend: [
        "TanStack Start",
        "React 19",
        "TanStack Query",
        "TanStack Table",
        "Tailwind CSS 4",
        "shadcn/ui",
      ],
      backend: ["Convex", "Convex rate limiter", "Convex migrations"],
      auth: ["Better Auth", "2FA"],
      services: [
        "Cloudflare R2",
        "Resend",
        "React Email",
        "React PDF",
        "ExcelJS",
      ],
      quality: ["Vitest", "Testing Library", "Biome"],
      infra: ["Dokku", "Railpack"],
    },
  },
  {
    key: "chronus",
    year: "2025 – 2026",
    featured: true,
    favorite: true,
    link: "https://chronus.cl",
    image: chronusLanding,
    images: [
      chronusLanding,
      chronusClaroHome,
      chronusAgendaBlack,
      chronusOscuro,
      chronusDetalle,
    ],
    caseStudy: "/proyectos/chronus",
    tags: [
      TAGS.NEXTJS,
      TAGS.NESTJS,
      TAGS.CONVEX,
      TAGS.PLAYWRIGHT,
      TAGS.CLOUDFLARE,
    ],
    stack: {
      frontend: [
        "Next.js 16",
        "TanStack Start",
        "Tailwind CSS 4",
        "FullCalendar",
      ],
      backend: ["Convex", "NestJS"],
      auth: ["Clerk"],
      services: [
        "Vercel AI SDK",
        "Google Calendar API",
        "Resend",
        "Cloudflare R2",
        "Web Push",
      ],
      quality: ["Vitest", "convex-test", "Playwright"],
    },
  },
  {
    key: "vlm360-v2",
    year: "2026",
    featured: true,
    favorite: true,
    link: "https://vlm360.com",
    image: vlm360Mapa,
    images: [
      vlm360Mapa,
      vlm360Mosaico,
      vlm360Media,
      vlm360Hallazgos,
      vlm360SonarVideo,
    ],
    tags: [TAGS.TANSTACK_START, TAGS.CONVEX, TAGS.PYTHON, TAGS.TYPESCRIPT],
    stack: {
      frontend: [
        "TanStack Start",
        "React 19",
        "TanStack Query",
        "TanStack Table",
        "Tailwind CSS 4",
        "shadcn/ui",
      ],
      backend: ["Convex", "Python workers", "Node workers"],
      data: ["MapLibre GL 5", "PMTiles", "GDAL", "Tippecanoe", "proj4"],
      auth: ["Better Auth", "2FA"],
      services: ["FFmpeg", "Cloudflare R2", "Resend", "Chromium (PDF)"],
      quality: ["Vitest", "Biome"],
      infra: ["Railpack", "GitHub Actions"],
    },
  },
  {
    key: "fatfingers",
    year: "2026",
    featured: true,
    favorite: true,
    link: "https://fatfingers.lakebed.app/",
    repo: "https://github.com/Prgm-code/FatFingers",
    image: fatFingersHero,
    images: [
      fatFingersHero,
      fatFingersAtajos,
      fatFingersIdiomas,
      fatFingersProveedor,
    ],
    tags: [TAGS.TAURI, TAGS.RUST, TAGS.REACT, TAGS.TYPESCRIPT],
    stack: {
      frontend: ["React 19", "TypeScript", "Vite 8"],
      backend: ["Rust", "Tauri 2", "reqwest", "enigo"],
      services: ["OpenAI", "OpenRouter", "MiniMax", "OpenAI-compatible"],
      data: ["keyring"],
      quality: ["Vitest", "cargo test"],
      infra: ["GitHub Actions", "AppImage / .deb / .rpm", "macOS", "Windows"],
    },
  },
  {
    key: "backupforge",
    year: "2026",
    featured: true,
    favorite: true,
    repo: "https://github.com/Prgm-code/BackupForge",
    image: backupForgeDashboard,
    images: [
      backupForgeDashboard,
      backupForgeDeployment,
      backupForgeJob,
      backupForgeJobLogs,
      backupForgeCrons,
    ],
    tags: [TAGS.GO, TAGS.TANSTACK_START, TAGS.DOCKER, TAGS.CONVEX],
    stack: {
      frontend: [
        "TanStack Start",
        "React 19",
        "TanStack Query",
        "Zustand",
        "Tailwind CSS 4",
      ],
      backend: ["Go 1.26", "chi", "GORM", "Docker SDK", "robfig/cron"],
      data: ["SQLite", "S3 / MinIO"],
      services: ["Server-Sent Events", "OpenAPI", "Convex CLI"],
      quality: ["Vitest", "Biome", "go test"],
      infra: ["Docker Compose"],
    },
  },
  {
    key: "teslo-manager",
    year: "2025 – 2026",
    featured: true,
    favorite: true,
    link: "https://manager.teslo.cl",
    image: tesloManagerLanding,
    images: [
      tesloManagerLanding,
      tesloManagerHome,
      tesloManagerAcreditacion,
      tesloManagerDetalle,
    ],
    tags: [TAGS.NEXTJS, TAGS.CONVEX, TAGS.CLOUDFLARE, TAGS.TAILWIND],
    stack: {
      frontend: ["Next.js 16", "React 19", "Tailwind CSS 4", "shadcn/ui"],
      backend: ["Convex"],
      auth: ["Better Auth", "2FA"],
      services: ["Cloudflare R2", "Resend", "React Email", "ExcelJS"],
      quality: ["Vitest", "Testing Library"],
      infra: ["Vercel"],
    },
  },
  {
    key: "activaq",
    year: "2026",
    featured: true,
    favorite: true,
    link: "https://www.activaq.cl/?p=1813",
    image: activaQHero,
    images: [activaQHero, activaQHome, activaQTecnologia, activaQContacto],
    tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.GSAP, TAGS.VERCEL],
    stack: {
      frontend: [
        "Astro 5",
        "React 19",
        "Tailwind CSS 4",
        "GSAP",
        "Three.js",
        "Lenis",
      ],
      backend: ["Strapi 5"],
      data: ["SQLite"],
      infra: ["Vercel"],
    },
  },
  {
    key: "index0",
    year: "2025",
    featured: true,
    favorite: true,
    link: "https://index0.cc",
    image: Index0Portada,
    images: [
      Index0Portada,
      Index0Contenido,
      Index0Contenido2,
      Index0Contenido3,
    ],
    tags: [TAGS.NEXTJS, TAGS.CLERK, TAGS.CLOUDFLARE, TAGS.VERCEL],
    stack: {
      frontend: [
        "Next.js 15",
        "React 19",
        "TanStack Query",
        "Motion",
        "next-intl",
      ],
      auth: ["Clerk"],
      services: ["Cloudflare AutoRAG", "AI SDK", "OpenAI", "Cloudflare R2"],
      infra: ["Vercel", "Cloudflare"],
    },
  },
  {
    key: "vlm360",
    year: "2025 – 2026",
    featured: true,
    favorite: true,
    image: Vlm360Portada,
    images: [Vlm360Portada, Vlm360Contenido],
    tags: [TAGS.NEXTJS, TAGS.TAILWIND, TAGS.TYPESCRIPT],
    stack: {
      frontend: [
        "Next.js 16",
        "React 19",
        "TanStack Query",
        "TanStack Table",
        "Tailwind CSS 4",
        "shadcn/ui",
        "Recharts",
      ],
      backend: ["Next.js Route Handlers", "Prisma"],
      data: ["PostgreSQL", "ExcelJS / SheetJS"],
      auth: ["Clerk"],
      services: ["AWS S3"],
      quality: ["Vitest", "Playwright"],
      infra: ["Coolify", "Nixpacks"],
    },
  },
  {
    key: "reactivespa",
    year: "2025",
    featured: false,
    link: "https://reactivespa.cl",
    image: reactiveSpaHome,
    images: [
      reactiveSpaHome,
      reactiveSpaServicios,
      reactiveSpaTecnologias,
      reactiveSpaContacto,
    ],
    tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.JAVASCRIPT],
    stack: {
      frontend: [
        "Astro",
        "Tailwind CSS",
        "JavaScript",
        "Three.js",
        "particles.js",
      ],
    },
  },
  {
    key: "rosemarie",
    year: "2025 – 2026",
    featured: false,
    link: "https://rosemariejara.cl",
    image: rosemarieLandingHero,
    images: [
      rosemarieLandingHero,
      rosemarieLandingSobreMi,
      rosemarieLandingServicios,
      rosemarieLandingPreguntas,
      rosemarieLandingContacto,
    ],
    tags: [TAGS.ASTRO, TAGS.TAILWIND],
    stack: {
      frontend: ["Astro 7", "Tailwind CSS 4", "Motion"],
      infra: ["Vercel"],
    },
  },
  {
    key: "rel",
    year: "2024",
    featured: false,
    image: relListadoAnalisis,
    images: [
      relListadoAnalisis,
      relListadoClaro,
      relListadoAnalisisOscuro,
      relPestañas,
      relControlFormulas,
      relCalculo,
    ],
    tags: [TAGS.NEXTJS, TAGS.NESTJS, TAGS.SQLSERVER, TAGS.TYPESCRIPT],
    stack: {
      frontend: [
        "Next.js 14",
        "React 18",
        "TanStack Query",
        "TanStack Table",
        "shadcn/ui",
      ],
      backend: ["NestJS 11", "Sequelize"],
      data: ["SQL Server", "LIMS"],
      auth: ["NextAuth"],
      services: ["math.js", "ExcelJS"],
      quality: ["Jest"],
      infra: ["Docker", "PM2", "GitHub Actions"],
    },
  },
  {
    key: "naval-pwa",
    year: "2024",
    featured: false,
    image: sotexLogo,
    images: [sotexLogo],
    tags: [TAGS.NEXTJS, TAGS.PWA, TAGS.POSTGRESQL],
    stack: {
      frontend: ["Next.js", "PWA"],
      data: ["PostgreSQL"],
    },
  },
  {
    key: "gps",
    year: "2024",
    featured: false,
    image: sotexLogo,
    images: [geopMapaEscritorio, geopMapaMovil, geopMapaDrawer, geopMapa],
    tags: [TAGS.NEXTJS, TAGS.PWA, TAGS.TURSO],
    stack: {
      frontend: ["Next.js", "PWA"],
      data: ["TursoDB", "KMZ"],
    },
  },
  {
    key: "energy",
    year: "2023",
    featured: false,
    images: [],
    tags: [],
    stack: {},
  },
  {
    key: "big-data",
    year: "2023",
    featured: false,
    image: tfmImage,
    images: [tfmImage],
    tags: [TAGS.NODEJS, TAGS.REACT, TAGS.HADOOP, TAGS.JUPYTER],
    stack: {
      frontend: ["React"],
      backend: ["Node.js"],
      data: ["Hadoop", "JupyterHub"],
    },
  },
] as const satisfies readonly ProjectBase[];

export type ProjectKey = (typeof PROJECTS_BASE)[number]["key"];

// ============================================
// COMPARTIDO GENERAL
// ============================================
export const SITE_NAME = "Patricio Gómez";
export const FULL_NAME = "Patricio Gómez Meneses";

/** Tecnologías de uso diario; se destacan en el stack técnico. */
export const PRIMARY_STACK: readonly string[] = [
  "TypeScript",
  "Next.js",
  "TanStack Start",
  "NestJS",
  "Convex",
];

export const SOCIAL_BASE = {
  github: "https://github.com/Prgm-code",
  linkedin: "https://www.linkedin.com/in/prgm/",
  email: "mailto:contacto@prgm.cl",
} as const;

export const LOCATION = "Puerto Montt, Chile";
