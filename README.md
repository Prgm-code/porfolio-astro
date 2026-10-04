# prgm.cl · Portfolio bilingüe

Portfolio profesional de Patricio Gómez, desarrollado con Astro y TypeScript. Presenta experiencia, capacidades, proyectos y vías de contacto en español e inglés.

## Rutas

- `/` — landing en español.
- `/en/` — landing en inglés.
- `/proyectos/` — archivo completo de proyectos en español.
- `/en/proyectos/` — archivo completo de proyectos en inglés.

El dominio canónico configurado es [`https://prgm.cl`](https://prgm.cl). Antes de publicar, Vercel/DNS debe redirigir `www.prgm.cl` hacia el dominio raíz, no al revés.

## Stack

- Astro 7 y TypeScript.
- Tailwind CSS 4 mediante Vite.
- `astro:assets` y Sharp para imágenes responsive.
- `@astrojs/sitemap` para sitemap y alternates regionales.
- Playwright y axe para verificaciones end-to-end.
- Vercel Analytics, cargado únicamente durante builds ejecutados en Vercel.

## Desarrollo

Requisitos:

- Node.js 22.12 o superior.
- pnpm 11.12.

```bash
pnpm install
pnpm dev
```

Comandos principales:

```bash
pnpm format        # aplica Prettier
pnpm format:check  # comprueba formato
pnpm check         # ejecuta astro check
pnpm build         # genera dist/
pnpm test:e2e      # ejecuta Playwright contra astro preview
pnpm verify        # formato + check + build + E2E
```

## Internacionalización

La UI y el contenido se separan bajo `src/i18n/`:

- `ui.ts`: navegación, metadatos, formularios y etiquetas accesibles.
- `data.es.ts` / `data.en.ts`: contenido editorial por idioma.
- `data.shared.ts`: enlaces, imágenes, tecnologías y datos compartidos.
- `types.ts`: contratos TypeScript.
- `index.ts`: composición del contenido y helpers de rutas.

Para añadir un proyecto:

1. Añadir su base compartida a `PROJECTS_BASE` en `data.shared.ts`.
2. Añadir sus textos con la misma `key` en `data.es.ts`.
3. Añadir sus textos con la misma `key` en `data.en.ts`.
4. Ejecutar `pnpm check`; TypeScript exige que ambos idiomas estén completos.

## CV

El sitio no ofrece descarga del CV. Las fuentes editables y los PDF están en `documents/cv/` y no se publican.

Después de editar los HTML/CSS, se pueden regenerar con Chrome en modo headless:

```bash
google-chrome --headless --disable-gpu --allow-file-access-from-files \
  --no-pdf-header-footer \
  --print-to-pdf=documents/cv/cv-patricio-gomez-es.pdf \
  file://$PWD/documents/cv/cv-es.html

google-chrome --headless --disable-gpu --allow-file-access-from-files \
  --no-pdf-header-footer \
  --print-to-pdf=documents/cv/cv-patricio-gomez-en.pdf \
  file://$PWD/documents/cv/cv-en.html
```

## SEO y publicación

`astro.config.mjs` define el origen canónico. El layout reutiliza `Astro.site` para canonical, hreflang, Open Graph y JSON-LD. El build genera sitemap para las cuatro rutas y `public/robots.txt` referencia el índice correspondiente.

Este repositorio no realiza despliegues automáticamente durante el desarrollo local. Antes de publicar se debe ejecutar `pnpm verify` y comprobar que el dominio raíz sea el destino canónico real en Vercel/DNS.
