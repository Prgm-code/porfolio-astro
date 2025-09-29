import TypeScriptIcon from "../icons/TypeScript.svg";
import WebpackIcon from "../icons/WebPack.svg";
import NextJSIcon from "../icons/NextJS.svg";
import ReactIcon from "../icons/React.svg";
import TailwindIcon from "../icons/Tailwind.svg";
import HTMLIcon from "../icons/HTML.svg";
import CSSIcon from "../icons/CSS.svg";
import JavaScriptIcon from "../icons/JavaScript.svg";
import NodeJSIcon from "../icons/NodeJS.svg";
import TursoIcon from "../icons/TursoIcon.svg";
import MongoDBIcon from "../icons/MongoDBIcon.svg";
import HadoopIcon from "../icons/HadoopIcon.svg";
import JupyterIcon from "../icons/JupyterIcon.svg";
import CodeIcon from "../icons/Code.svg";
import DatabaseIcon from "../icons/DatabaseIcon.svg";
import NestJSIcon from "../icons/NestJS.svg";
import ExpoIcon from "../icons/ExpoIcon.svg";
import PostgreSQLIcon from "../icons/PostgreSQL.svg";
import PrismaIcon from "../icons/PrismaIcon.svg";
import GitIcon from "../icons/GitIcon.svg";
import AWSIcon from "../icons/AWSIcon.svg";
import GoogleCloudIcon from "../icons/GoogleCloudIcon.svg";
import VercelIcon from "../icons/VercelIcon.svg";
import CloudflareIcon from "../icons/CloudflareIcon.svg";
import PlaywrightIcon from "../icons/PlaywrightIcon.svg";
import ClerkIcon from "../icons/ClerkIcon.svg";
import PythonIcon from "../icons/PythonIcon.svg";
import OpenAIIcon from "../icons/OpenAIIcon.svg";
import DigitalOceanIcon from "../icons/DigitalOceanIcon.svg";
import ReactNativeIcon from "../icons/ReactNativeIcon.svg";
import CloudIcon from "../icons/CloudIcon.svg"; // Icono genérico para cloud
import ToolIcon from "../icons/ToolIcon.svg"; // Icono genérico para herramientas
import MobileIcon from "../icons/MobileIcon.svg"; // Icono genérico para móvil

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
    icon: CodeIcon,
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
      "Plataforma completa para el reporte de inspecciones submarinas mediante sónar. Centraliza el manejo de información detallada de trabajos, permite diseño de reportes personalizados y gestiona almacenamiento de imágenes y archivos con control de roles de usuario.",
    link: "https://vlm360.com",
    image: Vlm360Portada,
    images: [Vlm360Portada, Vlm360Contenido],
    tags: [TAGS.NEXTJS, TAGS.POSTGRESQL, TAGS.GCP, TAGS.CLOUDFLARE],
  },
  {
    title: "Index0.cc - Hackathon Clerk",
    description:
      "Plataforma para gestión inteligente de documentos desarrollada en la Hackathon de Clerk. Permite almacenamiento de textos e imágenes con servicio de 'autorag' para crear embeddings, habilitando consultas y búsquedas semánticas a través de chat.",
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
    title: "Plataforma de Automatización de Gestión Chronus",
    description:
      "Solución completa para optimizar tareas repetitivas incluyendo administración de documentos, citas y costos. Utiliza Playwright para automatización, backend en NestJS y frontend en Next.js con validaciones de usuario mediante Clerk.",
    image: chronusInicio,
    images: [chronusInicio, chronusCrearCliente, chronusCrearBoleta],
    tags: [TAGS.NEXTJS, TAGS.NESTJS, TAGS.PLAYWRIGHT, TAGS.CLERK],
  },
  {
    title: "Landing Page ReactiveSpa.cl",
    description:
      "Landing page moderna para la empresa ReactiveSpa.cl. Diseño responsive y funcional con efectos visuales interactivos utilizando particles.js y Three.js para crear una experiencia inmersiva y atractiva.",
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
      "Sitio web profesional para servicios de psicología y terapia. Diseño elegante y accesible que transmite confianza y profesionalismo, optimizado para conversión y experiencia de usuario.",
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
    title: "Registro Electronico de Laboratorios (REL) - Gelymar",
    description:
      "Digitalización y automatización de laboratorio de análisis químico con más de 3.000 ingresos mensuales. Garantiza trazabilidad completa de parámetros, instrumentos, usuarios y métodos, con cálculos automáticos integrados.",
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
    title: "PWA Mantenimiento Naval ",
    description:
      "Aplicación PWA para control de mantenimiento de equipamiento naval. Permite trazabilidad de reportes de fallas y solicitudes, con gestión de roles, validación por personal de control y sistema de notificaciones por área.",
    image: "/projects/sotex-logo.webp", // Placeholder temporal
    images: ["/projects/sotex-logo.webp"],
    tags: [TAGS.NEXTJS, TAGS.PWA, TAGS.POSTGRESQL],
  },
  {
    title: "Sistema GPS Embarcaciones",
    description:
      "Plataforma PWA para seguimiento GPS de embarcaciones en tiempo real utilizando API de servicios de localización. Muestra datos en vivo sobre mapas interactivos con capas de información adicional mediante archivos KMZ.",
    image: "/projects/sotex-logo.webp", // Placeholder temporal
    images: [geopMapaEscritorio, geopMapaMovil, geopMapaDrawer, geopMapa],
    tags: [TAGS.NEXTJS, TAGS.PWA, TAGS.TURSO],
  },
  {
    title: "Big Data Analytics Platform",
    description:
      "Plataforma de análisis de Big Data desarrollada como proyecto final de máster, utilizando un clúster Hadoop. Integra Node.js, React, y JupyterHub para la gestión y análisis de datos a gran escala, permitiendo el procesamiento colaborativo de datos.",
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
