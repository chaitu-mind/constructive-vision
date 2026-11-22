"use client";
import { useEffect, useState } from "react";

// Cross-fading photo slideshow for a work card. Pauses on hover; static for reduced-motion users.
export default function CardSlides({ slides, delay = 0 }: { slides: { src: string; alt: string }[]; delay?: number }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = slides.length;

  useEffect(() => {
    if (n < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setI((k) => (k + 1) % n), i === 0 && delay ? 3200 + delay : 3200);
    return () => clearTimeout(id);
  }, [i, n, paused, delay]);

  return (
    <span className="cslides" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {slides.map((s, k) => (
        <img key={s.src} src={s.src} alt={k === i ? s.alt : ""} loading={k === 0 ? "lazy" : "lazy"} className={k === i ? "is-on" : ""} />
      ))}
      {n > 1 && (
        <span className="cslides__dots" aria-hidden="true">
          {slides.map((s, k) => <i key={s.src} className={k === i ? "is-on" : ""} />)}
        </span>
      )}
    </span>
  );
}
