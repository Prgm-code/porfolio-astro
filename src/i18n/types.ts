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
}

export interface ProjectBase {
  key: string;
  link?: string;
  featured: boolean;
  favorite?: boolean;
  /** Ruta del caso de estudio, si existe (sin prefijo de idioma). */
  caseStudy?: string;
  /** Sin imágenes, el archivo muestra un panel tipográfico. */
  image?: ImageMetadata;
  images: readonly ImageMetadata[];
  tags: readonly Tag[];
}

export type Project = ProjectBase & ProjectText;

export interface ExperienceItem {
  date: string;
  /** Puesto vigente: se marca en la línea de tiempo. */
  current?: boolean;
  role: string;
  org: string;
  location: string;
  description: string;
  highlights: readonly string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  year: string;
  topics: readonly string[];
}

export interface StackGroup {
  title: string;
  items: readonly string[];
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface Certification {
  title: string;
  area: string;
  year: string;
}

export interface HeroData {
  name: string;
  role: string;
  supportingText: string;
  cta: { label: string; href: string };
}

export interface AboutData {
  location: string;
}

export interface SiteData {
  hero: HeroData;
  about: AboutData;
  experience: readonly ExperienceItem[];
  education: readonly EducationItem[];
  stack: readonly StackGroup[];
  languages: readonly LanguageItem[];
  certifications: readonly Certification[];
  projects: readonly Project[];
  social: {
    github: string;
    linkedin: string;
    email: string;
    whatsapp: string;
  };
}
