// Entrada progresiva de los elementos `.reveal`.
//
// - Los elementos que entran juntos aparecen en orden de lectura, con un
//   escalonado corto y acotado, y la secuencia continúa entre tandas.
// - Con scroll rápido la entrada es breve y sin desplazamiento.
// - Lo que quedó por encima del viewport (saltos de ancla, scroll muy rápido)
//   aparece sin animación.
// Si falta JavaScript o IntersectionObserver, el contenido queda visible.

const DURATION = 650;
const QUICK_DURATION = 220;
const STAGGER = 90;
const MAX_STEPS = 4;
const MAX_CARRY = 2 * STAGGER;
// px/ms; sobre este valor se considera scroll rápido.
const FAST_SCROLL = 2.5;

type Mode = "stagger" | "quick" | "instant";

export function initReveal() {
  const pending = new Set(
    Array.from(document.querySelectorAll<HTMLElement>(".reveal")),
  );
  if (!pending.size || !("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  pending.forEach((element) => element.classList.add("is-reveal-pending"));

  let queue: HTMLElement[] = [];
  let flushFrame = 0;
  let chainEnd = 0;
  let velocity = 0;
  let lastY = window.scrollY;
  let lastTime = performance.now();

  function settle(element: HTMLElement, after: number) {
    window.setTimeout(() => {
      element.classList.remove(
        "is-reveal-pending",
        "is-visible",
        "is-quick",
        "is-instant",
      );
      element.style.removeProperty("--reveal-delay");
    }, after);
  }

  function reveal(element: HTMLElement, mode: Mode, delay = 0) {
    if (!pending.delete(element)) return;
    observer.unobserve(element);

    if (mode === "quick") element.classList.add("is-quick");
    if (mode === "instant") element.classList.add("is-instant");
    if (delay) element.style.setProperty("--reveal-delay", `${delay}ms`);
    element.classList.add("is-visible");

    const total =
      mode === "instant"
        ? 0
        : mode === "quick"
          ? QUICK_DURATION
          : delay + DURATION;
    settle(element, total + 60);
  }

  function readingOrder(a: HTMLElement, b: HTMLElement) {
    const ra = a.getBoundingClientRect();
    const rb = b.getBoundingClientRect();
    // Misma fila visual (tolerancia de 8px): de izquierda a derecha.
    return Math.abs(ra.top - rb.top) > 8 ? ra.top - rb.top : ra.left - rb.left;
  }

  function flush() {
    flushFrame = 0;
    const batch = queue.sort(readingOrder);
    queue = [];

    // La velocidad solo cuenta si el scroll sigue activo.
    const scrolling = performance.now() - lastTime < 150;
    if (scrolling && velocity > FAST_SCROLL) {
      batch.forEach((element) => reveal(element, "quick"));
      chainEnd = 0;
      return;
    }

    const now = performance.now();
    const carry = Math.min(Math.max(chainEnd - now, 0), MAX_CARRY);
    let lastDelay = carry;

    batch.forEach((element, index) => {
      lastDelay = carry + Math.min(index, MAX_STEPS) * STAGGER;
      reveal(element, "stagger", lastDelay);
    });

    chainEnd = now + lastDelay + STAGGER;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          queue.push(element);
        } else if (entry.boundingClientRect.bottom <= 0) {
          reveal(element, "instant");
        }
      });
      if (queue.length && !flushFrame) {
        flushFrame = requestAnimationFrame(flush);
      }
    },
    { rootMargin: "0px 0px -6% 0px" },
  );

  pending.forEach((element) => observer.observe(element));

  // Velocidad de scroll y elementos que el observer no alcanzó a ver
  // porque cruzaron el viewport entre dos frames.
  let scrollFrame = 0;
  window.addEventListener(
    "scroll",
    () => {
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0;
        const now = performance.now();
        const elapsed = Math.max(now - lastTime, 1);
        velocity = Math.abs(window.scrollY - lastY) / elapsed;
        lastY = window.scrollY;
        lastTime = now;

        pending.forEach((element) => {
          if (element.getBoundingClientRect().bottom <= 0) {
            reveal(element, "instant");
          }
        });
      });
    },
    { passive: true },
  );
}
