"use client";
import { useEffect, useRef, useState } from "react";

export interface Slide { src: string; alt: string }

export default function WorkCarousel({ slides, caption }: { slides: Slide[]; caption: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = slides.length;

  const go = (k: number) => {
    const t = track.current; if (!t) return;
    const idx = (k + n) % n;
    t.scrollTo({ left: idx * t.clientWidth, behavior: "smooth" });
    setI(idx);
  };
  // Auto-advance every 4s; pauses on hover, focus or touch, and is off for reduced-motion users.
  useEffect(() => {
    if (n < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => go(i + 1), 4000);
    return () => clearTimeout(id);
  }); // eslint-disable-line react-hooks/exhaustive-deps

  const onScroll = () => {
    const t = track.current; if (!t) return;
    setI(Math.round(t.scrollLeft / t.clientWidth));
  };

  return (
    <figure className="wcar" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)} onTouchStart={() => setPaused(true)} onTouchEnd={() => setPaused(false)} aria-roledescription="carousel" aria-label={caption}
      onKeyDown={(e) => { if (e.key === "ArrowRight") go(i + 1); if (e.key === "ArrowLeft") go(i - 1); }}>
      <div className="wcar__stage">
        <div className="wcar__track" ref={track} onScroll={onScroll} tabIndex={0}>
          {slides.map((s, k) => (
            <img key={s.src} src={s.src} alt={s.alt} className="wcar__slide"
              loading={k === 0 ? "eager" : "lazy"} aria-hidden={k !== i} />
          ))}
        </div>
        {n > 1 && (
          <>
            <button type="button" className="wcar__btn wcar__btn--prev" onClick={() => go(i - 1)} aria-label="Previous photo">‹</button>
            <button type="button" className="wcar__btn wcar__btn--next" onClick={() => go(i + 1)} aria-label="Next photo">›</button>
            <span className="wcar__count">{i + 1} / {n}</span>
          </>
        )}
      </div>
      {n > 1 && (
        <div className="wcar__thumbs">
          {slides.map((s, k) => (
            <button key={s.src} type="button" className={k === i ? "is-on" : ""} onClick={() => go(k)} aria-label={`Show photo ${k + 1}`}>
              <img src={s.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
