import TypeScriptIcon from "../icons/TypeScript.astro";
import WebpackIcon from "../icons/WebPack.astro";
import NextJSIcon from "../icons/NextJS.astro";
import ReactIcon from "../icons/React.astro";
import TailwindIcon from "../icons/Tailwind.svg";
import HTMLIcon from "../icons/HTML.astro";
import CSSIcon from "../icons/CSS.astro";
import JavaScriptIcon from "../icons/JavaScript.svg";
import NodeJSIcon from "../icons/NodeJS.astro";
import TursoIcon from "../icons/TursoIcon.astro";
import MongoDBIcon from "../icons/MongoDBIcon.astro";
import HadoopIcon from "../icons/HadoopIcon.astro";
import JupyterIcon from "../icons/JupyterIcon.astro";
import CodeIcon from "../icons/Code.astro";
import NestJSIcon from "../icons/NestJS.svg";
import PostgreSQLIcon from "../icons/PostgreSQL.astro";
import PrismaIcon from "../icons/PrismaIcon.astro";
import DockerIcon from "../icons/DockerIcon.astro";
import GitIcon from "../icons/GitIcon.astro";
import AWSIcon from "../icons/AWSIcon.astro";
import GoogleCloudIcon from "../icons/GoogleCloudIcon.astro";
import VercelIcon from "../icons/VercelIcon.astro";
import CloudflareIcon from "../icons/CloudflareIcon.astro";
import PlaywrightIcon from "../icons/PlaywrightIcon.astro";
import ClerkIcon from "../icons/ClerkIcon.astro";
import PythonIcon from "../icons/PythonIcon.astro";
import OpenAIIcon from "../icons/OpenAIIcon.astro";
import DigitalOceanIcon from "../icons/DigitalOceanIcon.astro";
import ReactNativeIcon from "../icons/ReactNativeIcon.astro";
import ExpoIcon from "../icons/ExpoIcon.astro";
import DatabaseIcon from "../icons/PostgreSQL.astro"; // Icono genérico para bases de datos
import CloudIcon from "../icons/GoogleCloudIcon.astro"; // Icono genérico para cloud
import ToolIcon from "../icons/DockerIcon.astro"; // Icono genérico para herramientas
import MobileIcon from "../icons/ReactNativeIcon.astro"; // Icono genérico para móvil

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
    icon: DockerIcon,
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
      "Plataforma completa para el reporte de inspecciones submarinas mediante sónar. Centraliza el manejo de información detallada de trabajos, permite diseño de reportes personalizados y gestiona almacenamiento de imágenes y archivos con control de roles de usuario.",
    link: "https://vlm360.com",
    image: "/projects/TFM.webp", // Placeholder temporal
    tags: [TAGS.NEXTJS, TAGS.POSTGRESQL, TAGS.GCP, TAGS.CLOUDFLARE],
  },
  {
    title: "Index0.cc - Hackathon Clerk",
    description:
      "Plataforma para gestión inteligente de documentos desarrollada en la Hackathon de Clerk. Permite almacenamiento de textos e imágenes con servicio de 'autorag' para crear embeddings, habilitando consultas y búsquedas semánticas a través de chat.",
    link: "https://index0.cc",
    image: "/projects/TFM2.webp", // Placeholder temporal
    tags: [TAGS.NEXTJS, TAGS.CLERK, TAGS.CLOUDFLARE, TAGS.VERCEL],
  },
  {
    title: "Plataforma de Automatización de Gestión",
    description:
      "Solución completa para optimizar tareas repetitivas incluyendo administración de documentos, citas y costos. Utiliza Playwright para automatización, backend en NestJS y frontend en Next.js con validaciones de usuario mediante Clerk.",
    image: "/projects/sotex-logo.webp", // Placeholder temporal
    tags: [TAGS.NEXTJS, TAGS.NESTJS, TAGS.PLAYWRIGHT, TAGS.CLERK],
  },
  {
    title: "Laboratorio Químico Digital - Sotex",
    description:
      "Digitalización y automatización de laboratorio de análisis químico con más de 3.000 ingresos mensuales. Garantiza trazabilidad completa de parámetros, instrumentos, usuarios y métodos, con cálculos automáticos integrados.",
    image: "/projects/sotex-logo.webp", // Placeholder temporal
    tags: [TAGS.NEXTJS, TAGS.NESTJS, TAGS.TYPESCRIPT],
  },
  {
    title: "PWA Mantenimiento Naval",
    description:
      "Aplicación PWA para control de mantenimiento de equipamiento naval. Permite trazabilidad de reportes de fallas y solicitudes, con gestión de roles, validación por personal de control y sistema de notificaciones por área.",
    image: "/projects/sotex-logo.webp", // Placeholder temporal
    tags: [TAGS.NEXTJS, TAGS.PWA, TAGS.POSTGRESQL],
  },
  {
    title: "Sistema GPS Embarcaciones",
    description:
      "Plataforma PWA para seguimiento GPS de embarcaciones en tiempo real utilizando API de servicios de localización. Muestra datos en vivo sobre mapas interactivos con capas de información adicional mediante archivos KMZ.",
    image: "/projects/sotex-logo.webp", // Placeholder temporal
    tags: [TAGS.NEXTJS, TAGS.PWA, TAGS.TURSO],
  },
  {
    title: "Big Data Analytics Platform",
    description:
      "Plataforma de análisis de Big Data desarrollada como proyecto final de máster, utilizando un clúster Hadoop. Integra Node.js, React, y JupyterHub para la gestión y análisis de datos a gran escala, permitiendo el procesamiento colaborativo de datos.",
    image: "/projects/TFM.webp",
    tags: [TAGS.NODEJS, TAGS.REACT, TAGS.HADOOP, TAGS.JUPYTER],
  },
];

export const EXPERIENCE = [
  {
    date: "2024 - Actualidad",
    title: "Desarrollador de Aplicaciones Web | Independiente",
    description:
      "Diseño y despliegue completo de aplicaciones web escalables para diversos clientes. Desarrollo de soluciones innovadoras incluyendo plataformas de automatización, gestión inteligente de documentos y sistemas de inspección submarina.",
    more: "Proyectos destacados:\n• Vlm360.com - Plataforma para reporte de inspecciones submarinas mediante sónar con gestión de roles y reportes personalizados (Next.js, PostgreSQL, GCP, Cloudflare)\n• Plataforma de automatización de gestión con Playwright para optimizar tareas repetitivas (Next.js, NestJS, Playwright, Clerk, GCP)\n• Index0.cc - Aplicación para gestión inteligente de documentos con búsquedas semánticas mediante AutoRAG (Next.js, Clerk, Cloudflare, Vercel)\n• Actualización de aplicación REL para Gelymar con nuevas funcionalidades de gestión de equipamiento (Next.js, NestJS, MS SQL Server)",
  },
  {
    date: "Enero 2024 - Diciembre 2024",
    title: "Desarrollador Full Stack | Sotex",
    description:
      "Digitalización y automatización de procesos empresariales, desarrollando soluciones de alta recurrencia para laboratorios, mantenimiento naval y gestión bibliotecaria. Manejo de más de 3.000 ingresos mensuales en sistemas críticos.",
    more: "Proyectos desarrollados:\n• Digitalización de laboratorio de análisis químico con trazabilidad completa de parámetros, instrumentos y métodos (Next.js, NestJS, SQL Server, Math.js)\n• PWA para control de mantenimiento de equipamiento naval con gestión de roles y notificaciones (Next.js, PWA, PostgreSQL, Resend)\n• PWA para gestión de préstamos de libros con alertas automáticas y clasificación de imágenes mediante IA (Next.js, TursoDB, Cloudinary, OpenAI, AWS EC2)\n• Plataforma PWA para seguimiento GPS de embarcaciones en tiempo real con mapas interactivos y capas KMZ (Next.js, TursoDB, Leaflet, AWS)",
  },
  {
    date: "Febrero 2009 - Enero 2023",
    title: "Ingeniero de Campo | Claro Chile SA",
    description:
      "Gestión de operación y mantenimiento de infraestructura de telecomunicaciones incluyendo data centers, fibra óptica, enlaces microondas y redes celulares. Liderazgo de proyectos operativos en zonas remotas garantizando altos niveles de SLA.",
    more: "Responsabilidades principales:\n• Mantenimiento de infraestructura crítica de telecomunicaciones\n• Gestión de proyectos operativos en zonas remotas\n• Cumplimiento de normativas y estándares de calidad\n• Resolución de incidentes técnicos complejos\n• Coordinación con equipos multidisciplinarios",
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
      { name: "Docker", icon: DockerIcon },
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
