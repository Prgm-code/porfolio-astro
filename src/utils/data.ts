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
import NestJSIcon from "../icons/NestJS.astro";

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
};

export const PROJECTS = [
  {
    title: "Aplicación REL",
    description: `Aplicación para la digitalización de procesos del laboratorio de la empresa Gelymar.
Esta aplicación permite la gestión de análisis de laboratorio, contemplando el uso de fórmulas especiales para cada tipo de análisis, además del control de los instrumentos utilizados, las técnicas de análisis y la validación de resultados según el cumplimiento de estándares predefinidos.
La aplicación funciona junto con el sistema legacy de la empresa y utiliza una base de datos MS SQL.
Fue desarrollada con Next.js y NestJS.`,
    // image: "https://via.placeholder.com/150",
    tags: [TAGS.REACT, TAGS.NODEJS, TAGS.JAVASCRIPT, TAGS.NESTJS],
  },
  {
    title: "Geop",
    description:
      "Sistema de gestión geográfica desarrollado para Naviera La Península. Utiliza tecnologías modernas para la localización y control de operaciones logísticas, ayudando a mejorar la eficiencia en la gestión de rutas y recursos.",
    // image: "https://via.placeholder.com/150",
    tags: [TAGS.NEXTJS, TAGS.TYPESCRIPT, TAGS.MONGODB],
  },
  {
    title: "Yo-Leo",
    description:
      "Aplicación para la gestion y control de prestamos de libros de la empresa La Península.",
    // image: "https://via.placeholder.com/150",
    tags: [TAGS.REACT, TAGS.NODEJS, TAGS.JAVASCRIPT],
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
    date: "Enero 2025 - Presente",
    title: "Full Stack Software Engineer Freelance",
    description: `Como desarrollador freelance, he creado aplicaciones web enfocadas en la automatización de procesos, la optimización del flujo de información y la gestión segura de datos operativos. He trabajado en soluciones que, automatizan tareas repetitivas en plataformas digitales y centralizan la administración de credenciales, utilizando tecnologías como Next.js, NestJS, React, PostgreSQL, MongoDB, Docker, GCP, AWS y Cloudflare.

`,
  },

  {
    date: "Enero 2024 - Diciembre 2024",
    title: "Full Stack Software Engineer at Sotex",
    description: `Desarrollé diversas soluciones web orientadas a la automatización de procesos, gestión de datos, trazabilidad y visualización en tiempo real. Implementé funcionalidades avanzadas como cálculos automáticos, clasificación con inteligencia artificial, notificaciones y mapas interactivos, utilizando tecnologías modernas como Next.js, NestJS, SQL Server, PostgreSQL, TursoDB, y servicios en la nube como AWS y Vercel.`,
  },

  {
    date: "Febrero 2009 - Enero 2023",
    title: "Field Engineer at Claro Chile S.A.",
    description: `Desempeñé labores relacionadas con la operación y mantenimiento de telecomunicaciones en infraestructuras de data center,
fibra óptica, enlaces microondas y redes de comunicación.
Lideré proyectos operativos de infraestructura y servicios de telefonía y datos en zonas remotas y de difícil acceso durante más
de 6 años, garantizando altos niveles de cumplimiento normativo y tasas de SLA satisfactorias.`,
  },
];
