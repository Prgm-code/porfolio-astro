import { UI, type UiDict } from "./ui";
import { es } from "./data.es";
import { en } from "./data.en";
import {
  ABOUT_BASE,
  CERTIFICATIONS,
  PROJECTS_BASE,
  SITE_NAME,
  SOCIAL_BASE,
} from "./data.shared";
import type { Lang, Project, SiteData } from "./types";

export type { Lang, Project, SiteData, UiDict };

export const LANGS: readonly Lang[] = ["es", "en"];
export const DEFAULT_LANG: Lang = "es";

const LANG_DATA = { es, en } as const;

// ============================================
// ROUTING HELPERS
// ============================================

/** "Next.js" → "next-js". Valor del filtro `?stack=` del archivo. */
export function techSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function isLang(value: string): value is Lang {
  return value === "es" || value === "en";
}

export function getLangFromUrl(url: URL): Lang {
  return url.pathname === "/en" || url.pathname.startsWith("/en/")
    ? "en"
    : "es";
}

export function localePrefix(lang: Lang): string {
  return lang === "en" ? "/en" : "";
}

function normalizeRoute(path: string): string {
  const pathname = `/${path}`.replace(/\/{2,}/g, "/");
  if (pathname === "/") return pathname;
  return `${pathname.replace(/\/+$/, "")}/`;
}

/** "/proyectos" → "/proyectos/" (es) | "/en/proyectos/" (en) */
export function localePath(lang: Lang, path: string): string {
  const normalized = normalizeRoute(path);
  if (lang === "es") return normalized;
  return normalized === "/" ? "/en/" : normalizeRoute(`/en${normalized}`);
}

/** Enlace a una sección de la página principal localizada. */
export function localeSectionPath(lang: Lang, section: string): string {
  return `${localePath(lang, "/")}#${section.replace(/^#/, "")}`;
}

/** Rutas equivalentes en ambos idiomas para hreflang y el toggle. */
export function alternateUrls(pathname: string): { es: string; en: string } {
  const base = normalizeRoute(pathname.replace(/^\/en(?=\/|$)/, "") || "/");
  return {
    es: base,
    en: base === "/" ? "/en/" : normalizeRoute(`/en${base}`),
  };
}

// ============================================
// CONTENT
// ============================================

export function getUi(lang: Lang): UiDict {
  return UI[lang];
}

export function getProjects(lang: Lang): readonly Project[] {
  const texts = LANG_DATA[lang].projects;
  return PROJECTS_BASE.map((base) => ({
    ...base,
    ...texts[base.key],
  }));
}

export function getData(lang: Lang): SiteData {
  const d = LANG_DATA[lang];
  return {
    hero: {
      name: SITE_NAME,
      role: d.hero.role,
      supportingText: d.hero.supportingText,
      cta: { label: d.hero.ctaLabel, href: "#contacto" },
    },
    about: {
      location: ABOUT_BASE.location,
    },
    experience: d.experience,
    education: d.education,
    stack: d.stack,
    languages: d.languages,
    certifications: CERTIFICATIONS[lang],
    projects: getProjects(lang),
    social: { ...SOCIAL_BASE, whatsapp: d.whatsapp },
  };
}
