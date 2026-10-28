import type { ImageMetadata } from "astro";

export type Lang = "es" | "en";

export interface Tag {
  name: string;
  icon: string;
  class: string;
}

export interface ProjectText {
  title: string;
  description: string;
  shortLabel: string;
  /** Contexto del proyecto: para quién es y qué problema resuelve. */
  overview: string;
  /** Lo que se construyó, en frases cortas. */
  highlights: readonly string[];
}

/** Capa del stack de un proyecto; la etiqueta se traduce en ui.ts. */
export type StackLayer =
  "frontend" | "backend" | "data" | "auth" | "services" | "infra" | "quality";

export interface ProjectBase {
  key: string;
  /** Año o periodo del proyecto. */
  year: string;
  link?: string;
  /** Repositorio público, si el código es abierto. */
  repo?: string;
  featured: boolean;
  favorite?: boolean;
  /** Ruta del caso de estudio, si existe (sin prefijo de idioma). */
  caseStudy?: string;
  /** Sin imágenes, el archivo muestra un panel tipográfico. */
  image?: ImageMetadata;
  images: readonly ImageMetadata[];
  tags: readonly Tag[];
  /** Stack completo por capa, con versiones cuando importan. */
  stack: Partial<Record<StackLayer, readonly string[]>>;
}

export type Project = ProjectBase & ProjectText;

export interface StackGroup {
  title: string;
  items: readonly string[];
}

export interface HeroData {
  name: string;
  role: string;
  supportingText: string;
  cta: { label: string; href: string };
}

export interface SiteData {
  hero: HeroData;
  location: string;
  stack: readonly StackGroup[];
  projects: readonly Project[];
  social: {
    github: string;
    linkedin: string;
    email: string;
    whatsapp: string;
  };
}
