import TypeScriptIcon from "../icons/TypeScript.astro";
import WebpackIcon from "../icons/WebPack.astro";
import NextJSIcon from "../icons/NextJS.astro";
import ReactIcon from "../icons/React.astro";
import TailwindIcon from "../icons/Tailwind.astro";
import HTMLIcon from "../icons/HTML.astro";
import CSSIcon from "../icons/CSS.astro";
import JavaScriptIcon from "../icons/JavaScript.astro";
import NodeJSIcon from "../icons/NodeJS.astro";

const TAGS = {
  NEXTJS: {
    name: "Next.js",
    icon: NextJSIcon,
    class: "size-4",
  },
  REACT: {
    name: ReactIcon,
    class: "size-4",
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "size-4",
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "size-4",
    icon: TypeScriptIcon,
  },
  WEBPACK: {
    name: "Webpack",
    class: "size-4",
    icon: WebpackIcon,
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
  NodeJS: {
    name: "Node.js",
    icon: NodeJSIcon,
    class: "size-4",
  },
};

export const PROJECTS = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc eget ultricies aliquam, nisl nisl aliquet nunc, nec aliquam nisl nisl nec nisl. Donec auctor, nunc eget ultricies aliquam, nisl nisl aliquet nunc, nec aliquam nisl nisl nec nisl.",
    
    image: "https://via.placeholder.com/150",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc eget ultricies aliquam, nisl nisl aliquet nunc, nec aliquam nisl nisl nec nisl. Donec auctor, nunc eget ultricies aliquam, nisl nisl aliquet nunc, nec aliquam nisl nisl nec nisl.",
    image: "https://via.placeholder.com/150",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
  },

  {
    title: "Typescript Webpack Clima App",
    description:
      "La aplicación de clima obtiene datos meteorológicos a través de la localización GPS actual o de una ciudad de referencia. Además, indica la dirección del viento y su velocidad, animando dinámicamente la veleta indicadora de dirección. Haciendo uso de la API gratuita de OpenWeather, esta aplicación fue creada con propósitos educativos.",
    link: "https://prgm-weather-app.netlify.app/",
    image: "/projects/projectClima.webp",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.TYPESCRIPT, TAGS.WEBPACK],
  },
];

export const EXPERIENCE = [
  {
    date: "February 2022",
    title: "Application UI code in Tailwind CSS",
    description:
      "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
    more: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit facere non vitae soluta illo commodi tempora unde facilis ex odio. Eligendi distinctio blanditiis perferendis officiis harum reprehenderit ratione aspernatur maxime.",
  },
  {
    date: "March 2022",
    title: "Marketing UI design in Figma",
    description:
      "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
    more: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit facere non vitae soluta illo commodi tempora unde facilis ex odio. Eligendi distinctio blanditiis perferendis officiis harum reprehenderit ratione aspernatur maxime. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit facere non vitae soluta illo commodi tempora unde facilis ex odio. Eligendi distinctio blanditiis perferendis officiis harum reprehenderit ratione aspernatur maxime.",
  },
  {
    date: "April 2022",
    title: "E-Commerce UI code in Tailwind CSS",
    description:
      "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
    link: "https://prgm-weather-app.netlify.app/",
  },
];
