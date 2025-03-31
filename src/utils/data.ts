import TypeScriptIcon from "../icons/TypeScript.astro";
import WebpackIcon from "../icons/WebPack.astro";
import NextJSIcon from "../icons/NextJS.astro";
import ReactIcon from "../icons/React.astro";
import TailwindIcon from "../icons/Tailwind.astro";
import HTMLIcon from "../icons/HTML.astro";
import CSSIcon from "../icons/CSS.astro";
import JavaScriptIcon from "../icons/JavaScript.astro";
import NodeJSIcon from "../icons/NodeJS.astro";
import TursoIcon from "../icons/TursoIcon.astro";
import MongoDBIcon from "../icons/MongoDBIcon.astro";
import HadoopIcon from "../icons/HadoopIcon.astro";
import JupyterIcon from "../icons/JupyterIcon.astro";

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
};

export const PROJECTS = [
  {
    title: "Yo-Leo",
    description:
      "Aplicación para la digitalización de procesos educativos desarrollada para la empresa Gelymar. Esta aplicación está diseñada para mejorar la lectura en niños a través de actividades interactivas y seguimiento personalizado, actualmente en producción y en uso por distintas instituciones regionales.",
    // image: "https://via.placeholder.com/150",
    tags: [TAGS.REACT, TAGS.NODEJS, TAGS.JAVASCRIPT],
  },
  {
    title: "Geop",
    description:
      "Sistema de gestión geográfica desarrollado para Naviera La Península. Utiliza tecnologías modernas para la localización y control de operaciones logísticas, ayudando a mejorar la eficiencia en la gestión de rutas y recursos.",
    // image: "https://via.placeholder.com/150",
    tags: [TAGS.NEXTJS, TAGS.TYPESCRIPT, TAGS.MONGODB],
  },
  {
    title: "Honorarios.Plus",
    description:
      "Aplicación en desarrollo para la gestión de citas profesionales en los ámbitos de educación y psicología. Permite la programación de citas y la emisión de recibos de honorarios, usando tecnologías como Next.js, NestJS, y TursoDB.",
    link: "https://honorarios.plus",
    image: "/projects/honorariosPlus.webp",
    tags: [TAGS.NEXTJS, TAGS.TURSO],
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
    date: "January 2024 - Present",
    title: "Full Stack Software Engineer at Sotex",
    description:
      "Desarrollo de aplicaciones para la digitalización de procesos de empresas regionales. Responsable de diseñar, desarrollar e implementar soluciones, incluyendo aplicaciones como 'Yo-Leo', 'Geop', y 'GelyRel'. Utilizando tecnologías modernas de desarrollo web como React, Node.js, y MongoDB.",
  },
  {
    date: "October 2022",
    title: "Desarrollo de PWA para Claro Chile",
    description:
      "Desarrollo de una Progressive Web Application (PWA) con el stack MERN para el control de llaves de acceso y registros de sitios móviles en la zona de Los Lagos de Claro Chile.",
  },
  {
    date: "January 2023 - May 2023",
    title: "Desarrollo de Plataforma de Big Data para Proyecto de Máster",
    description:
      "Desarrollo e implementación de una plataforma de análisis de Big Data en un clúster Hadoop, integrando una aplicación Node-React-HBase para la carga de archivos y el despliegue de JupyterHub, permitiendo la ejecución de notebooks en Python para múltiples usuarios.",
  },
  {
    date: "February 2009 - January 2023",
    title: "Field Engineer at Claro Chile S.A.",
    description:
      "Realización de tareas operativas y de mantenimiento en la Red Central y Red de Acceso de Claro Chile, incluyendo la resolución de incidentes relacionados con infraestructura de switches, gestión de energía y fibra óptica.",
  },
];
