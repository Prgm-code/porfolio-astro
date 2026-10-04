# Verify the Astro portfolio

Use this skill to capture runtime evidence for product-source changes.

1. Build and launch an isolated preview:
   ```bash
   pnpm build
   pnpm preview --host 127.0.0.1 --port 4324
   ```
2. Drive the real UI with `playwright-cli` using Chrome. Cover:
   - `/`, `/en/`, `/proyectos/`, `/en/proyectos/`;
   - ES/EN switching and stored `prgm:lang`;
   - mobile menu open, Escape and restored focus;
   - hero/project carousels;
   - Formspree only through a mocked route;
   - both public CV links;
   - rendered canonical, hreflang, OG and one `h1`.
3. Capture at least one desktop screenshot, the open mobile menu and the mocked form result.
4. Check `playwright-cli console error`; local preview should have no Analytics 404 because Analytics is Vercel-only.
5. Never deploy or send a real form submission during verification.
