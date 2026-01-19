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
import HadoopIcon from "../icons/HadoopIcon.svg?raw";
import JupyterIcon from "../icons/JupyterIcon.svg?raw";
import CodeIcon from "../icons/Code.svg?raw";
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
import CloudIcon from "../icons/CloudIcon.svg?raw"; // Icono genérico para cloud
import ToolIcon from "../icons/ToolIcon.svg?raw"; // Icono genérico para herramientas
import MobileIcon from "../icons/MobileIcon.svg?raw"; // Icono genérico para móvil

// Importar imágenes de proyectos
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

import chronusCrearBoleta from "../assets/images/chronus/crear-boleta.webp";
import chronusCrearCliente from "../assets/images/chronus/crear-cliente.webp";
import chronusInicio from "../assets/images/chronus/inicio.webp";

import relCalculo from "../assets/images/rel/calculo.webp";
import relControlFormulas from "../assets/images/rel/control-formulas.webp";
import relListadoAnalisis from "../assets/images/rel/listado-analisis-claro.webp";
import relListadoClaro from "../assets/images/rel/listado-claro.webp";
import relListadoAnalisisOscuro from "../assets/images/rel/listado-analisis-oscuro.webp";
import relPestañas from "../assets/images/rel/pestañas.webp";

// ============================================
// HERO SECTION DATA
// ============================================
export const HERO_DATA = {
  greeting: "Hola, soy",
  name: "Patricio",
  title: "Desarrollador Full Stack JavaScript",
  description:
    "Desarrollo aplicaciones web con JavaScript, TypeScript y React. Mi enfoque es crear soluciones digitales que optimicen procesos y generen valor para empresas y usuarios.",
  image: "https://lh3.googleusercontent.com/a/ACg8ocIf0myyzMZRN1n-QDW78FORANENdNp9Ck9TdAKOWsECzw=s256-c",
  social: {
    github: "https://github.com/Prgm-code",
    linkedin: "https://www.linkedin.com/in/prgm/",
    email: "contacto@prgm.cl",
    whatsapp: "https://wa.me/56976990163",
  },
};

// ============================================
// ABOUT SECTION DATA
// ============================================
export const ABOUT_DATA = {
  title: "Sobre Mí",
  description:
    "Soy Ingeniero Electrónico de la Universidad de la Frontera y cuento con un Máster en Desarrollo Web Full Stack de Three Points en Barcelona. Trabajé más de 14 años en telecomunicaciones antes de dedicarme al desarrollo web. Actualmente construyo aplicaciones fullstack, desde el diseño hasta el desarrollo y despliegue.",
  image: "https://avatars.githubusercontent.com/u/107218376?v=4",
  details: [
    { label: "Nombre", value: "Patricio Gómez" },
    { label: "Email", value: "pgomez.meneses@gmail.com" },
    { label: "Teléfono", value: "+56 9 7699 0163" },
    { label: "Ubicación", value: "Puerto Montt, Chile" },
    { label: "Experiencia", value: "3+ años dev" },
    { label: "Disponibilidad", value: "Disponible para proyectos" },
  ],
};

// ============================================
// SERVICES DATA
// ============================================
export const SERVICES = [
  {
    icon: CodeIcon,
    title: "Desarrollo Web",
    description:
      "Creación de sitios web rápidos y responsivos utilizando tecnologías modernas como React, Next.js y Astro.",
  },
  {
    icon: ReactIcon,
    title: "UI/UX Design",
    description:
      "Diseño de interfaces intuitivas y experiencias de usuario que enganchan y convierten visitantes en clientes.",
  },
  {
    icon: MobileIcon,
    title: "Mobile First",
    description:
      "Desarrollo de diseños responsivos que funcionan perfectamente en todos los dispositivos y tamaños de pantalla.",
  },
  {
    icon: ToolIcon,
    title: "SEO & Performance",
    description:
      "Implementación de mejores prácticas de SEO para mejorar rankings y optimización para tiempos de carga ultra rápidos.",
  },
  {
    icon: CloudIcon,
    title: "Cloud & DevOps",
    description:
      "Despliegue y gestión de aplicaciones en la nube con AWS, GCP, Vercel y Cloudflare.",
  },
  {
    icon: DatabaseIcon,
    title: "Soporte & Mantenimiento",
    description:
      "Mantenimiento continuo y soporte para asegurar que tus aplicaciones estén siempre actualizadas y funcionando.",
  },
];

const TAGS = {
  NEXTJS: {
    name: "Next.js",
    icon: NextJSIcon,
    class: "size-4",
  },
  REACT: {
    name: "React",
    icon: ReactIcon,
    class: "size-4",
  },
  TAILWIND: {
    name: "Tailwind CSS",
    icon: TailwindIcon,
    class: "size-4",
  },
  TYPESCRIPT: {
    name: "TypeScript",
    icon: TypeScriptIcon,
    class: "size-4",
  },
  WEBPACK: {
    name: "Webpack",
    icon: WebpackIcon,
    class: "size-4",
  },
  HTML: {
    name: "HTML",
    icon: HTMLIcon,
    class: "size-4",
  },
  CSS: {
    name: "CSS",
    icon: CSSIcon,
    class: "size-4",
  },
  JAVASCRIPT: {
    name: "JavaScript",
    icon: JavaScriptIcon,
    class: "size-4",
  },
  ASTRO: {
    name: "Astro",
    icon: AstroIcon,
    class: "size-4",
  },
  NODEJS: {
    name: "Node.js",
    icon: NodeJSIcon,
    class: "size-4",
  },
  TURSO: {
    name: "TursoDB",
    icon: TursoIcon,
    class: "size-4",
  },
  MONGODB: {
    name: "MongoDB",
    icon: MongoDBIcon,
    class: "size-4",
  },
  HADOOP: {
    name: "Hadoop",
    icon: HadoopIcon,
    class: "size-4",
  },
  JUPYTER: {
    name: "Jupyter",
    icon: JupyterIcon,
    class: "size-4",
  },
  NESTJS: {
    name: "NestJS",
    icon: NestJSIcon,
    class: "size-4",
  },
  POSTGRESQL: {
    name: "PostgreSQL",
    icon: PostgreSQLIcon,
    class: "size-4",
  },
  PRISMA: {
    name: "Prisma",
    icon: PrismaIcon,
    class: "size-4",
  },
  CLERK: {
    name: "Clerk",
    icon: ClerkIcon,
    class: "size-4",
  },
  PLAYWRIGHT: {
    name: "Playwright",
    icon: PlaywrightIcon,
    class: "size-4",
  },
  CLOUDFLARE: {
    name: "Cloudflare",
    icon: CloudflareIcon,
    class: "size-4",
  },
  GCP: {
    name: "Google Cloud",
    icon: GoogleCloudIcon,
    class: "size-4",
  },
  VERCEL: {
    name: "Vercel",
    icon: VercelIcon,
    class: "size-4",
  },
  PWA: {
    name: "PWA",
    icon: ReactIcon,
    class: "size-4",
  },
  DOCKER: {
    name: "Docker",
    icon: ToolIcon,
    class: "size-4",
  },
  GIT: {
    name: "Git",
    icon: GitIcon,
    class: "size-4",
  },
  AWS: {
    name: "AWS",
    icon: AWSIcon,
    class: "size-4",
  },
  PYTHON: {
    name: "Python",
    icon: PythonIcon,
    class: "size-4",
  },
  OPENAI: {
    name: "OpenAI",
    icon: OpenAIIcon,
    class: "size-4",
  },
  DIGITALOCEAN: {
    name: "DigitalOcean",
    icon: DigitalOceanIcon,
    class: "size-4",
  },
  REACTNATIVE: {
    name: "React Native",
    icon: ReactNativeIcon,
    class: "size-4",
  },
  EXPO: {
    name: "Expo",
    icon: ExpoIcon,
    class: "size-4",
  },
};

export const PROJECTS = [
  {
    title: "Vlm360.com",
    description:
      "Plataforma para reporte de inspecciones submarinas mediante sónar. Gestiona trabajos, reportes personalizados y almacenamiento de archivos con control de roles.",
    link: "https://vlm360.com",
    image: Vlm360Portada,
    images: [Vlm360Portada, Vlm360Contenido],
    tags: [TAGS.NEXTJS, TAGS.POSTGRESQL, TAGS.GCP, TAGS.CLOUDFLARE],
  },
  {
    title: "Index0.cc - Hackathon Clerk",
    description:
      "Gestión inteligente de documentos con AutoRAG. Almacena textos e imágenes y permite búsquedas semánticas mediante chat.",
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
    title: "Plataforma de Automatización Chronus",
    description:
      "Automatización de tareas repetitivas: documentos, citas y costos. Backend NestJS, frontend Next.js con Playwright para automatización.",
    image: chronusInicio,
    images: [chronusInicio, chronusCrearCliente, chronusCrearBoleta],
    tags: [TAGS.NEXTJS, TAGS.NESTJS, TAGS.PLAYWRIGHT, TAGS.CLERK],
  },
  {
    title: "Landing Page ReactiveSpa.cl",
    description:
      "Sitio web con diseño responsive y efectos visuales interactivos usando particles.js y Three.js.",
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
    title: "Landing Page RosemarieJara.cl",
    description:
      "Sitio web profesional para servicios de psicología. Diseño accesible optimizado para conversión.",
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
    title: "Registro Electrónico de Laboratorios (REL)",
    description:
      "Digitalización de laboratorio químico con +3.000 ingresos mensuales. Trazabilidad de parámetros, instrumentos y cálculos automáticos.",
    image: relListadoAnalisis,
    images: [
      relListadoAnalisis,
      relListadoClaro,
      relListadoAnalisisOscuro,
      relPestañas,
      relControlFormulas,
      relCalculo,
      relListadoAnalisisOscuro,
    ],
    tags: [TAGS.NEXTJS, TAGS.NESTJS, TAGS.TYPESCRIPT],
  },
  {
    title: "PWA Mantenimiento Naval",
    description:
      "Control de mantenimiento naval. Trazabilidad de fallas, gestión de roles y notificaciones por área.",
    image: "/projects/sotex-logo.webp",
    images: ["/projects/sotex-logo.webp"],
    tags: [TAGS.NEXTJS, TAGS.PWA, TAGS.POSTGRESQL],
  },
  {
    title: "Sistema GPS Embarcaciones",
    description:
      "Seguimiento GPS de embarcaciones en tiempo real. Mapas interactivos con capas KMZ.",
    image: "/projects/sotex-logo.webp",
    images: [geopMapaEscritorio, geopMapaMovil, geopMapaDrawer, geopMapa],
    tags: [TAGS.NEXTJS, TAGS.PWA, TAGS.TURSO],
  },
  {
    title: "Big Data Analytics Platform",
    description:
      "Proyecto final de máster. Análisis de Big Data con clúster Hadoop, Node.js, React y JupyterHub.",
    image: "/projects/TFM.webp",
    images: ["/projects/TFM.webp"],
    tags: [TAGS.NODEJS, TAGS.REACT, TAGS.HADOOP, TAGS.JUPYTER],
  },
];

export const EXPERIENCE = [
  {
    date: "2024 - Actualidad",
    title: "Desarrollador de Aplicaciones Web | Independiente",
    description:
      "Desarrollo de aplicaciones web escalables para diversos clientes. Soluciones de automatización, gestión documental y sistemas de inspección submarina.",
    more: "Proyectos destacados:\n• Vlm360.com - Inspecciones submarinas con sónar (Next.js, PostgreSQL, GCP)\n• Chronus - Automatización de gestión con Playwright (Next.js, NestJS)\n• Index0.cc - Gestión documental con búsquedas semánticas (Next.js, Clerk)\n• REL Gelymar - Actualización de gestión de equipamiento (Next.js, NestJS)",
  },
  {
    date: "Enero 2024 - Diciembre 2024",
    title: "Desarrollador Full Stack | Sotex",
    description:
      "Digitalización de procesos empresariales para laboratorios, mantenimiento naval y gestión bibliotecaria. Sistemas con +3.000 ingresos mensuales.",
    more: "Proyectos desarrollados:\n• Laboratorio de análisis químico con trazabilidad completa (Next.js, NestJS)\n• PWA mantenimiento naval con gestión de roles (Next.js, PostgreSQL)\n• Sistema de préstamos de libros con IA (Next.js, TursoDB, OpenAI)\n• GPS de embarcaciones en tiempo real (Next.js, TursoDB, Leaflet)",
  },
  {
    date: "Febrero 2009 - Enero 2023",
    title: "Ingeniero de Campo | Claro Chile SA",
    description:
      "Operación y mantenimiento de infraestructura de telecomunicaciones: data centers, fibra óptica, microondas y redes celulares.",
    more: "Responsabilidades:\n• Mantenimiento de infraestructura crítica\n• Gestión de proyectos en zonas remotas\n• Cumplimiento de normativas y SLA\n• Resolución de incidentes técnicos\n• Coordinación de equipos",
  },
];

export const SKILLS = [
  {
    title: "Lenguajes y Frameworks",
    icon: CodeIcon,
    skills: [
      { name: "JavaScript", icon: JavaScriptIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Next.js", icon: NextJSIcon },
      { name: "React", icon: ReactIcon },
      { name: "NestJS", icon: NestJSIcon },
      { name: "Node.js", icon: NodeJSIcon },
    ],
  },
  {
    title: "Frontend y UI",
    icon: HTMLIcon,
    skills: [
      { name: "Tailwind CSS", icon: TailwindIcon },
      { name: "HTML", icon: HTMLIcon },
      { name: "CSS", icon: CSSIcon },
      { name: "React", icon: ReactIcon },
    ],
  },
  {
    title: "Backend y Bases de Datos",
    icon: DatabaseIcon,
    skills: [
      { name: "PostgreSQL", icon: PostgreSQLIcon },
      { name: "MongoDB", icon: MongoDBIcon },
      { name: "Prisma", icon: PrismaIcon },
      { name: "TursoDB", icon: TursoIcon },
    ],
  },
  {
    title: "Cloud e Infraestructura",
    icon: CloudIcon,
    skills: [
      { name: "Google Cloud", icon: GoogleCloudIcon },
      { name: "AWS", icon: AWSIcon },
      { name: "Cloudflare", icon: CloudflareIcon },
      { name: "Vercel", icon: VercelIcon },
      { name: "DigitalOcean", icon: DigitalOceanIcon },
    ],
  },
  {
    title: "Herramientas y Tecnologías",
    icon: ToolIcon,
    skills: [
      { name: "Clerk", icon: ClerkIcon },
      { name: "Playwright", icon: PlaywrightIcon },
      { name: "PWA", icon: ReactIcon },
      { name: "Docker", icon: ToolIcon },
      { name: "Git", icon: GitIcon },
    ],
  },
  {
    title: "Móvil y Otros",
    icon: MobileIcon,
    skills: [
      { name: "React Native", icon: ReactNativeIcon },
      { name: "Expo", icon: ExpoIcon },
      { name: "Python", icon: PythonIcon },
      { name: "OpenAI", icon: OpenAIIcon },
    ],
  },
];

export const EDUCATION = [
  {
    title: "Máster en Desarrollo Web Full Stack",
    institution: "Three Points (Inesdi)",
    location: "Barcelona, España",
    year: "2022 – 2023",
    description:
      "Formación especializada en desarrollo web con enfoque en tecnologías modernas y metodologías ágiles.",
    achievements: [
      "Desarrollo de plataforma de Big Data con Hadoop",
      "Integración de Node.js, React y JupyterHub",
      "Gestión de análisis de datos a gran escala",
    ],
  },
  {
    title: "Ingeniería Electrónica",
    institution: "Universidad de la Frontera",
    location: "Temuco, Chile",
    year: "2001 - 2007",
    description:
      "Formación en ingeniería electrónica con énfasis en sistemas de telecomunicaciones y control.",
    achievements: [
      "Fundamentos sólidos en electrónica digital y analógica",
      "Conocimientos en protocolos industriales",
      "Base técnica para transición al desarrollo de software",
    ],
  },
];

export const CERTIFICATIONS = [
  {
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    year: "2023",
  },
  {
    title: "Kubernetes",
    issuer: "Platzi",
    year: "2023",
  },
  {
    title: "React Unit Testing with Jest",
    issuer: "Platzi",
    year: "2023",
  },
  {
    title: "Linux Server Administration",
    issuer: "Platzi",
    year: "2022",
  },
  {
    title: "Cloud Security Technician",
    issuer: "Certificación Profesional",
    year: "2022",
  },
  {
    title: "BackEnd con Node.js: Autenticación con Passport.js y JWT",
    issuer: "Platzi",
    year: "2022",
  },
  {
    title: "NestJs: Microservicios con NestJs, AWS, Docker",
    issuer: "Platzi",
    year: "2022",
  },
  {
    title: "Introduction to Information Security",
    issuer: "Certificación Profesional",
    year: "2021",
  },
  {
    title: "Fundamentals of Cloud Computing",
    issuer: "Certificación Profesional",
    year: "2019",
  },
  {
    title: "Fundamentals of Virtualization",
    issuer: "Certificación Profesional",
    year: "2019",
  },
];
