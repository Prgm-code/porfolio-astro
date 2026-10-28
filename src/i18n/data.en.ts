import type { ProjectKey } from "./data.shared";
import type { ProjectText, StackGroup } from "./types";

// ============================================
// ENGLISH CONTENT
// ============================================

export const en = {
  hero: {
    role: "Full stack developer",
    supportingText:
      "I build web applications and management platforms end to end: data model, interface, backend and deployment. This is a selection of my work for healthcare, mining, laboratories and underwater inspection.",
    ctaLabel: "Get in touch",
    whatsappHref:
      "https://wa.me/56976990163?text=Hi%20Patricio,%20I%27d%20like%20to%20talk%20about%20a%20project",
  },

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

  projects: {
    "tiro-score": {
      title: "Tiro Score",
      description:
        "Scoring for shooting competitions. Judges and participants see results and rankings in real time.",
      shortLabel: "Real-time scoring",
      overview:
        "Sport-shooting federations and clubs kept scores in spreadsheets and published results hours later. Tiro Score brings registration, shot entry and rankings into one place, and results update live for judges, shooters and spectators.",
      highlights: [
        "Championships across several disciplines: Nacional, Compak, Long Range and IDPA, each with its own scoring rules.",
        "Leaderboards and awards recalculated in real time with Convex.",
        "Per-shot detail and an audit log of every score change.",
        "PDF and Excel exports, QR codes and push notifications.",
      ],
    },
    misport: {
      title: "MiSport.app",
      description:
        "ERP for sports clubs: members, dues collection, treasury with bank reconciliation, competitions and a portal for every member.",
      shortLabel: "ERP for sports clubs",
      overview:
        "Sports clubs tend to keep members, dues and finances in separate spreadsheets, and the treasurer reconciles the bank statement by hand every month. MiSport brings it all into one multi-club platform: the board runs the club and each member sees their status, credential and competitions in their own portal.",
      highlights: [
        "Bank statements with suggested matches per member, booked to accounts and cost centers.",
        "General ledger, income statement, period closes, expense reports and a vault, with Excel and PDF exports.",
        "Member registry with dues status, automated email collection and PDF receipts.",
        "Competitions by discipline (Trap, Skeet, IPSC, Compak, Long Range) with entries and results.",
        "Member portal with a digital credential and verifiable QR, calendar and reminders.",
        "Multi-club, with read and write permissions per module and per role.",
      ],
    },
    "teslo-manager": {
      title: "Teslo Manager",
      description:
        "Personnel and vehicle accreditation for mining contractors. It emails a warning when a document is about to expire.",
      shortLabel: "Personnel accreditation",
      overview:
        "To enter a mining site, every worker and vehicle needs valid documents, and the requirements change by client and project. Teslo Manager replaces shared folders with a system that knows what is missing, what is expiring and who is cleared.",
      highlights: [
        "A digital wallet of documents per person, reused across accreditations.",
        "Requirements configurable by company, client, project and role.",
        "Fleet compliance: vehicles, assignments and meter readings.",
        "Expiry alerts by email, Excel reports and 2FA sign-in.",
      ],
    },
    fatfingers: {
      title: "FatFingers",
      description:
        "Open source desktop writing assistant. A global shortcut opens it over any app and returns your text corrected, rewritten or translated.",
      shortLabel: "Open source desktop app",
      overview:
        "Fixing a message with AI usually means switching windows, pasting, waiting and copying back. FatFingers is a floating helper in the style of Spotlight or Raycast: open it with a shortcut, press Enter to improve the text, and a second Enter copies or pastes it where you were typing.",
      highlights: [
        "Writing actions: correct, professional, shorten, friendly, quick reply and a custom instruction.",
        "Output language combinable with any action: rewrite and translate in one step.",
        "Bring your own AI provider (OpenAI, OpenRouter, MiniMax, OpenAI-compatible or custom HTTP). Calls go out from Rust, never from the UI.",
        "The API key lives in the system keychain. No telemetry and no history by default.",
        "Builds for macOS, Windows and Linux, released from GitHub Actions.",
      ],
    },
    backupforge: {
      title: "BackupForge",
      description:
        "Open source control plane for backing up Convex deployments: manual or scheduled backups in Docker containers, with S3 storage and live logs.",
      shortLabel: "Open source backups",
      overview:
        "Backups for self-hosted systems are often loose scripts: scattered credentials, lost logs and nobody sure the last backup can be downloaded. BackupForge turns them into a control plane: the server owns identity, policies and state, and each backup runs in a container that lives only as long as the job.",
      highlights: [
        "Manual or scheduled backups with cron and time zones, and configurable retention.",
        "Each job runs convex export in an ephemeral Docker container and uploads backup.zip, manifest.json and logs.txt to S3 or MinIO.",
        "A state machine per job (queued, exporting, uploading, verifying…) with retries.",
        "Status, logs and artifacts reach the UI live through Server-Sent Events.",
        "Secrets encrypted with AES-GCM, admin, operator and viewer roles, and an API documented with OpenAPI.",
      ],
    },
    activaq: {
      title: "ActivaQ.cl",
      description:
        "Astro site with GSAP animations for a food safety laboratory that tests for dioxins and pathogens.",
      shortLabel: "Laboratory site",
      overview:
        "ActivaQ is an ISO/IEC 17025 accredited laboratory for dioxin analysis. It needed a site that conveyed technical rigor and that its team could update without a developer.",
      highlights: [
        "Services, products, technology and milestones sections, all editable in Strapi.",
        "3D scenes with Three.js and scroll animations with GSAP and Lenis.",
        "Local fallback content if the CMS is unavailable.",
        "Sitemap and Open Graph images generated at build time.",
      ],
    },
    chronus: {
      title: "Chronus.cl",
      description:
        "SaaS for healthcare professionals. Scheduling synced with Google Calendar, email and WhatsApp reminders, payment tracking, automated receipts and an AI agent that answers questions about appointments and patients.",
      shortLabel: "Medical scheduling SaaS",
      overview:
        "Practice-management software for professionals who see patients: scheduling, records, payments and receipts in one place, with an AI agent that knows the practice.",
      highlights: [
        "Scheduling with availability and Google Calendar sync.",
        "Reminders by WhatsApp, email and push.",
        "Payments and automated fee receipts.",
        "An AI agent that looks up and proposes actions on appointments and patients.",
      ],
    },
    "vlm360-v2": {
      title: "Vlm360 v2",
      description:
        "Reporting platform for sonar-based underwater inspections: maps with GIS layers, sonar mosaics, findings with photos and videos, and field logbooks.",
      shortLabel: "Underwater inspection",
      overview:
        "VLM scans the seabed under fish farms with sonar and recovers the objects it finds. Version 2, rebuilt from scratch, turns each inspection into a report on a map: cage and station layers, the georeferenced sonar mosaic, every finding with its evidence and the videos of each pass. Field crews log their progress and each client sees only what has been published for their sites.",
      highlights: [
        "Report builder on MapLibre: cage, station, finding and media layers, with satellite, light and dark basemaps.",
        "KML, KMZ and shapefile imports: a Python worker with GDAL and Tippecanoe turns them into PMTiles.",
        "Sonar mosaic positioned from TFW files, with opacity, rotation, scale or field GPS adjustments, and export of the composite.",
        "V4LOG logs from Tritech sonars rebuilt as polar sweeps and encoded to MP4 with FFmpeg.",
        "Findings with an evidence gallery, and media records with photos and videos up to 4 GB converted on the server.",
        "Offline-capable field logbooks, an approval workflow and a daily PDF report.",
      ],
    },
    index0: {
      title: "Index0.cc",
      description:
        "Built for the Clerk hackathon. It stores text and images and lets you search them by chatting, using Cloudflare AutoRAG.",
      shortLabel: "Document search",
      overview:
        "A Clerk hackathon project: a private space to store documents and find them by asking in plain language, instead of remembering file names.",
      highlights: [
        "Drag-and-drop upload, folders and storage limits.",
        "Semantic search and a RAG chat that cites its source fragments.",
        "In-browser preview of PDF and Office documents.",
        "Multilingual interface and invitations with Clerk.",
      ],
    },
    vlm360: {
      title: "Vlm360 v1",
      description:
        "The first version of VLM's platform: underwater inspection reports per company, objects placed on each site's image, client files and field logbooks.",
      shortLabel: "Underwater inspection",
      overview:
        "VLM scans the seabed under fish farms with sonar and recovers the objects it finds. Version 1 replaced spreadsheets and email with a web app: the team builds each report with its nodes and objects, uploads the inspection files, and each client company signs in to see only its own data.",
      highlights: [
        "Reports per company organized in nodes, with objects placed on the site's georeferenced image.",
        "Object and coordinate imports from Excel.",
        "Per-report file browser on S3, with folders for the client.",
        "Field logbook and a fuel log with hour meters, deliveries and consumption.",
        "Invitation-based users with Clerk, account approval and permissions by role and company.",
      ],
    },
    reactivespa: {
      title: "ReactiveSpa.cl",
      description:
        "Site for a wellness center, with effects built in particles.js and Three.js.",
      shortLabel: "Wellness center site",
      overview:
        "A site for a wellness center, with an animated visual identity that sets it apart from the usual templates in its field.",
      highlights: [
        "Animated backgrounds with particles.js and Three.js.",
        "Services, technology and contact sections.",
        "Static Astro site, light and fast to load.",
      ],
    },
    rosemarie: {
      title: "RosemarieJara.cl",
      description:
        "Site for a psychologist, with her services, FAQ and contact details.",
      shortLabel: "Psychologist site",
      overview:
        "A landing page for a psychologist and educational therapist who works with ADHD, autism and learning disorders. The goal was to explain her approach clearly and make the first contact easy.",
      highlights: [
        "About, services, FAQ and contact sections.",
        "Copy and SEO metadata kept in a single file.",
        "Subtle Motion animations on a static site.",
      ],
    },
    rel: {
      title: "Electronic Laboratory Registry (REL)",
      description:
        "Digitized the records of a chemical laboratory. It stores parameters and instruments and calculates results. Over 3,000 entries a month.",
      shortLabel: "Chemical laboratory",
      overview:
        "The quality laboratory recorded its analyses on paper and calculated results by hand. REL moved that process into a system with configurable formulas, connected to the existing LIMS database.",
      highlights: [
        "Over 3,000 analysis entries a month.",
        "Configurable parameters, equipment and formulas, evaluated with math.js.",
        "Integration with the existing LIMS database on SQL Server.",
        "History, a pending queue, audit log and alerts by email and Discord.",
      ],
    },
    "naval-pwa": {
      title: "Naval Maintenance PWA",
      description:
        "Failure log for a fleet, with roles and notifications per area.",
      shortLabel: "Fleet maintenance",
      overview:
        "An installable app so crews can report failures from the vessel and each maintenance area receives only what concerns it.",
      highlights: [
        "Failure log by vessel and by system.",
        "Roles and notifications per maintenance area.",
        "PWA installable on the crew's phones.",
      ],
    },
    gps: {
      title: "Vessel GPS System",
      description: "Real-time vessel positions on maps with KMZ layers.",
      shortLabel: "GPS tracking",
      overview:
        "Fleet tracking at sea: the position of each vessel on maps with KMZ layers for the operating zones.",
      highlights: [
        "Real-time vessel positions.",
        "KMZ layers for concessions and work zones.",
        "Desktop view and a mobile view with a side drawer.",
      ],
    },
    energy: {
      title: "Energy management for DC plants",
      description:
        "Prototype of a platform for managing direct current plants and generators.",
      shortLabel: "Prototype · 2023",
      overview:
        "Freelance prototype of a platform for managing direct current plants and generators.",
      highlights: [],
    },
    "big-data": {
      title: "Big Data Analytics Platform",
      description:
        "Data analysis on a Hadoop cluster with Node.js, React and JupyterHub.",
      shortLabel: "Data platform",
      overview:
        "A platform to run and review analyses on a Hadoop cluster from a web interface, without logging into the server.",
      highlights: [
        "Hadoop cluster with JupyterHub notebooks.",
        "Node.js API and React dashboard to run and view analyses.",
      ],
    },
  } satisfies Record<ProjectKey, ProjectText>,

  whatsapp:
    "https://wa.me/56976990163?text=Hi%20Patricio,%20I%27d%20like%20to%20get%20in%20touch",
} as const;
