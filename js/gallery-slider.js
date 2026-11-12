/*
  Gallery Slider: pilarna bläddrar ett kort i taget (annotation i Figma).

  Raden fungerar utan skriptet (svep, styrplatta, tangentbord). Skriptet visar
  pilarna och räknar ut stegen: varje kort i kolumn 1, och sist slutet av
  raden, där sista kortet ligger mot högerkanten. En pil som inte kan användas
  får aria-disabled, inte disabled, så att fokus stannar kvar på knappen.
*/
for (const slider of document.querySelectorAll(".gallery-slider")) {
  const track = slider.querySelector(".gallery-slider__track");
  const controls = slider.querySelector(".gallery-slider__controls");
  const prev = slider.querySelector(".gallery-slider__button--prev");
  const next = slider.querySelector(".gallery-slider__button--next");
  const cards = [...track.children];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const maxScroll = () => track.scrollWidth - track.clientWidth;

  // Rullpositionerna där ett kort ligger i kolumn 1, högst slutet av raden.
  function stops() {
    const start = track.getBoundingClientRect().left + parseFloat(getComputedStyle(track).scrollPaddingLeft);
    const max = maxScroll();
    return cards.map((card) => Math.min(max, Math.max(0, track.scrollLeft + card.getBoundingClientRect().left - start)));
  }

  function go(direction) {
    const current = track.scrollLeft;
    const list = stops();
    const target = direction > 0 ? list.find((stop) => stop > current + 1) : list.findLast((stop) => stop < current - 1);
    if (target === undefined) return;
    track.scrollTo({ left: target, behavior: reduceMotion.matches ? "auto" : "smooth" });
  }

  function update() {
    prev.setAttribute("aria-disabled", String(track.scrollLeft <= 1));
    next.setAttribute("aria-disabled", String(track.scrollLeft >= maxScroll() - 1));
  }

  prev.addEventListener("click", () => go(-1));
  next.addEventListener("click", () => go(1));
  track.addEventListener("scroll", update, { passive: true });
  new ResizeObserver(update).observe(track);

  controls.hidden = false;
  update();
}
