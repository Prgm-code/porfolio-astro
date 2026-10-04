import type { Certification, Lang, ProjectBase, Tag } from "./types";

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
  },
  {
    key: "teslo-manager",
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
  },
  {
    key: "activaq",
    featured: true,
    favorite: true,
    link: "https://www.activaq.cl/?p=1813",
    image: activaQHero,
    images: [activaQHero, activaQHome, activaQTecnologia, activaQContacto],
    tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.GSAP, TAGS.VERCEL],
  },
  {
    key: "chronus",
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
  },
  {
    key: "vlm360",
    featured: true,
    favorite: true,
    link: "https://vlm360.com",
    image: Vlm360Portada,
    images: [Vlm360Portada, Vlm360Contenido],
    tags: [TAGS.TANSTACK_START, TAGS.CONVEX, TAGS.TYPESCRIPT],
  },
  {
    key: "index0",
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
  },
  {
    key: "reactivespa",
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
  },
  {
    key: "rosemarie",
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
  },
  {
    key: "rel",
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
  },
  {
    key: "naval-pwa",
    featured: false,
    image: sotexLogo,
    images: [sotexLogo],
    tags: [TAGS.NEXTJS, TAGS.PWA, TAGS.POSTGRESQL],
  },
  {
    key: "gps",
    featured: false,
    image: sotexLogo,
    images: [geopMapaEscritorio, geopMapaMovil, geopMapaDrawer, geopMapa],
    tags: [TAGS.NEXTJS, TAGS.PWA, TAGS.TURSO],
  },
  {
    key: "energy",
    featured: false,
    images: [],
    tags: [],
  },
  {
    key: "big-data",
    featured: false,
    image: tfmImage,
    images: [tfmImage],
    tags: [TAGS.NODEJS, TAGS.REACT, TAGS.HADOOP, TAGS.JUPYTER],
  },
] as const satisfies readonly ProjectBase[];

export type ProjectKey = (typeof PROJECTS_BASE)[number]["key"];

// ============================================
// CERTIFICACIONES (títulos propios, sin traducir)
// ============================================
export const CERTIFICATIONS = {
  es: [
    { title: "Fundamentos de Java", area: "Desarrollo", year: "2026" },
    {
      title: "Google Cloud Computing Foundations",
      area: "Cloud e infraestructura",
      year: "2025",
    },
    {
      title: "Microservicios con NestJS, AWS y Docker",
      area: "Desarrollo",
      year: "2023",
    },
    {
      title: "Backend con Node.js, Passport.js y JWT",
      area: "Desarrollo",
      year: "2022",
    },
    { title: "React Unit Testing with Jest", area: "Desarrollo", year: "2022" },
    {
      title: "Bootcamp en Solidity",
      area: "Web3 · contratos inteligentes en redes compatibles con Ethereum",
      year: "2022",
    },
  ],
  en: [
    { title: "Java Fundamentals", area: "Development", year: "2026" },
    {
      title: "Google Cloud Computing Foundations",
      area: "Cloud and infrastructure",
      year: "2025",
    },
    {
      title: "Microservices with NestJS, AWS and Docker",
      area: "Development",
      year: "2023",
    },
    {
      title: "Node.js Backend with Passport.js and JWT",
      area: "Development",
      year: "2022",
    },
    {
      title: "React Unit Testing with Jest",
      area: "Development",
      year: "2022",
    },
    {
      title: "Solidity Bootcamp",
      area: "Web3 · smart contracts on Ethereum-compatible networks",
      year: "2022",
    },
  ],
} as const satisfies Record<Lang, readonly Certification[]>;

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

export const ABOUT_BASE = {
  location: "Puerto Montt, Chile",
} as const;
