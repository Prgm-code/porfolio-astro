const initializedCarousels = new WeakSet<Element>();
const carouselTimers = new WeakMap<Element, number>();

export function initProjectCarousels(root: ParentNode = document) {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const supportsHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;

  root
    .querySelectorAll<HTMLElement>("[data-project-carousel]")
    .forEach((carousel) => {
      if (initializedCarousels.has(carousel)) return;
      initializedCarousels.add(carousel);

      const slides = Array.from(
        carousel.querySelectorAll<HTMLElement>("[data-project-slide]"),
      );
      const dots = Array.from(
        carousel.querySelectorAll<HTMLElement>("[data-project-dot]"),
      );
      const trigger = carousel.closest<HTMLElement>(
        "[data-project-carousel-trigger]",
      );
      let activeIndex = 0;

      function setActiveSlide(index = 0) {
        activeIndex = index;

        slides.forEach((slide, slideIndex) => {
          const isActive = slideIndex === activeIndex;
          slide.classList.toggle("is-active", isActive);
          slide.setAttribute("aria-hidden", String(!isActive));
          slide.inert = !isActive;
        });

        dots.forEach((dot, dotIndex) => {
          dot.classList.toggle("is-active", dotIndex === activeIndex);
        });
      }

      function stopCarousel() {
        const timer = carouselTimers.get(carousel);
        if (timer) {
          window.clearInterval(timer);
          carouselTimers.delete(carousel);
        }
        setActiveSlide(0);
      }

      function startCarousel() {
        if (reducedMotion || !supportsHover || slides.length < 2) return;
        stopCarousel();
        carouselTimers.set(
          carousel,
          window.setInterval(() => {
            setActiveSlide((activeIndex + 1) % slides.length);
          }, 1400),
        );
      }

      setActiveSlide(0);
      trigger?.addEventListener("pointerenter", startCarousel);
      trigger?.addEventListener("pointerleave", stopCarousel);
    });
}
