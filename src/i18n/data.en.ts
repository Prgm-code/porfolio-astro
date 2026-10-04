import type { ProjectKey } from "./data.shared";
import type {
  EducationItem,
  ExperienceItem,
  LanguageItem,
  ProjectText,
  StackGroup,
} from "./types";

// ============================================
// ENGLISH CONTENT
// ============================================

export const en = {
  hero: {
    role: "Full stack developer",
    supportingText:
      "Electronic engineer with a Master's in Full Stack Web Development. I build web applications and management platforms for companies in healthcare, transport, laboratories and underwater inspection, from the first client conversation through deployment and maintenance. I work mainly with TypeScript, Next.js, TanStack Start, NestJS and Convex.",
    ctaLabel: "Get in touch",
    whatsappHref:
      "https://wa.me/56976990163?text=Hi%20Patricio,%20I%27d%20like%20to%20talk%20about%20a%20project",
  },

  experience: [
    {
      date: "Mar 2025 - Present",
      role: "Founder and full stack developer",
      org: "Reactive SpA",
      location: "Puerto Montt",
      description:
        "I founded Reactive SpA, a software development company. I design and build web applications end to end, from the client's need and the data model to frontend, backend, CI/CD, deployment and maintenance.",
      highlights: [
        "Chronus.cl, a SaaS for healthcare professionals: scheduling synced with Google Calendar, email and WhatsApp reminders, payment tracking, automated receipts and an AI agent. Clean Architecture with Next.js, NestJS, Convex, Playwright and Cloudflare R2.",
        "Vlm360.com, sonar-based underwater inspection reporting, built with TanStack Start and Convex.",
        "Index0.cc, document management with RAG search, built with Next.js and Cloudflare.",
        "Tiro Score, Teslo Manager, REL Gelymar and ActivaQ.cl.",
      ],
    },
    {
      date: "Jan - Dec 2024",
      role: "Full stack developer",
      org: "Sotex",
      location: "Remote",
      description:
        "Web platforms and PWAs that digitized operational processes. I led the development team and set the code standards, branching workflow and best practices.",
      highlights: [
        "Digitized a chemical laboratory: over 3,000 entries a month, automated calculations and the move from paper to digital records.",
        "PWA for real-time vessel GPS tracking.",
        "PWA for naval maintenance.",
        "Library loan management.",
      ],
    },
    {
      date: "2009 - Jan 2023",
      role: "Telecommunications field engineer",
      org: "Claro Chile",
      location: "Puerto Montt",
      description:
        "Maintenance, commissioning and troubleshooting of the mobile network in the Los Lagos region (power, access and transmission), keeping mobile sites and the core network running.",
      highlights: [],
    },
  ] satisfies readonly ExperienceItem[],

  education: [
    {
      title: "Master's in Full Stack Web Development",
      institution: "Three Points (Inesdi) · Barcelona, Spain",
      year: "2022 - 2023",
      topics: [
        "JavaScript",
        "React",
        "Node.js",
        "Scrum",
        "CI/CD",
        "Security",
        "AWS",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      title: "Electronic Engineering",
      institution: "Universidad de La Frontera · Temuco, Chile",
      year: "2001 - 2007",
      topics: [
        "Analog and digital electronics",
        "Automatic control",
        "Microcontrollers",
        "Telecommunications",
      ],
    },
  ] satisfies readonly EducationItem[],

  stack: [
    {
      title: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "SQL"],
    },
    {
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "TanStack Start",
        "Astro",
        "React Native",
        "Tailwind CSS",
        "shadcn/ui",
        "TanStack Query",
        "TanStack Table",
        "GSAP",
        "Leaflet",
        "PWA",
      ],
    },
    {
      title: "Backend and data",
      items: [
        "Node.js",
        "Bun",
        "NestJS",
        "REST APIs",
        "Prisma",
        "Convex",
        "Supabase",
        "Strapi",
        "PostgreSQL",
        "SQL Server",
        "SQLite / Turso",
        "MongoDB",
        "Clerk, Better Auth, Auth.js",
      ],
    },
    {
      title: "Architecture",
      items: ["Clean Architecture", "Microservices", "SOLID"],
    },
    {
      title: "Cloud and infrastructure",
      items: [
        "Linux Server",
        "Docker",
        "Kubernetes",
        "VPS + Coolify",
        "AWS",
        "Google Cloud",
        "Cloudflare",
        "Vercel",
        "Windows Server",
        "On-premise",
      ],
    },
    {
      title: "Testing and CI/CD",
      items: ["Vitest", "Jest", "Playwright", "GitHub Actions", "Jenkins"],
    },
    {
      title: "AI",
      items: [
        "Vercel AI SDK",
        "OpenAI SDK",
        "RAG",
        "AI agents in business workflows",
        "Claude Code, Codex",
      ],
    },
    {
      title: "Working knowledge",
      items: [
        "Go",
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "Maven",
        "JUnit, Mockito",
        "Solidity",
      ],
    },
  ] satisfies readonly StackGroup[],

  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "C1" },
  ] satisfies readonly LanguageItem[],

  projects: {
    "tiro-score": {
      title: "Tiro Score",
      description:
        "Scoring for shooting competitions. Judges and participants see results and rankings in real time.",
      shortLabel: "Real-time scoring",
    },
    "teslo-manager": {
      title: "Teslo Manager",
      description:
        "Personnel accreditation and document control for a transport company. It emails a warning when a document is about to expire.",
      shortLabel: "Personnel accreditation",
    },
    activaq: {
      title: "ActivaQ.cl",
      description:
        "Astro site with GSAP animations for a food safety laboratory that tests for dioxins and pathogens.",
      shortLabel: "Laboratory site",
    },
    chronus: {
      title: "Chronus.cl",
      description:
        "SaaS for healthcare professionals. Scheduling synced with Google Calendar, email and WhatsApp reminders, payment tracking, automated receipts and an AI agent that answers questions about appointments and patients.",
      shortLabel: "Medical scheduling SaaS",
    },
    vlm360: {
      title: "Vlm360.com",
      description:
        "Reporting platform for sonar-based underwater inspections. It handles jobs, reports and files with role-based permissions.",
      shortLabel: "Underwater inspection",
    },
    index0: {
      title: "Index0.cc",
      description:
        "Built for the Clerk hackathon. It stores text and images and lets you search them by chatting, using Cloudflare AutoRAG.",
      shortLabel: "Document search",
    },
    reactivespa: {
      title: "ReactiveSpa.cl",
      description:
        "Site for a wellness center, with effects built in particles.js and Three.js.",
      shortLabel: "Wellness center site",
    },
    rosemarie: {
      title: "RosemarieJara.cl",
      description:
        "Site for a psychologist, with her services, FAQ and contact details.",
      shortLabel: "Psychologist site",
    },
    rel: {
      title: "Electronic Laboratory Registry (REL)",
      description:
        "Digitized the records of a chemical laboratory. It stores parameters and instruments and calculates results. Over 3,000 entries a month.",
      shortLabel: "Chemical laboratory",
    },
    "naval-pwa": {
      title: "Naval Maintenance PWA",
      description:
        "Failure log for a fleet, with roles and notifications per area.",
      shortLabel: "Fleet maintenance",
    },
    gps: {
      title: "Vessel GPS System",
      description: "Real-time vessel positions on maps with KMZ layers.",
      shortLabel: "GPS tracking",
    },
    energy: {
      title: "Energy management for DC plants",
      description:
        "Freelance prototype of a platform for managing direct current plants and generators.",
      shortLabel: "Freelance prototype · 2023",
    },
    "big-data": {
      title: "Big Data Analytics Platform",
      description:
        "Master's final project. Data analysis on a Hadoop cluster with Node.js, React and JupyterHub.",
      shortLabel: "Master's project",
    },
  } satisfies Record<ProjectKey, ProjectText>,

  whatsapp:
    "https://wa.me/56976990163?text=Hi%20Patricio,%20I%27d%20like%20to%20get%20in%20touch",
} as const;
