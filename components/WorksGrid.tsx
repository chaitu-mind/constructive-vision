"use client";

import { useState, type ReactNode } from "react";
import { categories, type Work } from "@/lib/works";
import WorkCard from "./WorkCard";

/* Every project stays in the DOM at all times and is only hidden by the
   filter, so the static HTML a crawler receives contains all of them. */
export default function WorksGrid({
  works, plates,
}: { works: Work[]; plates: Record<string, ReactNode> }) {
  const [active, setActive] = useState<string>("All");
  const shown = works.filter((w) => active === "All" || w.category === active);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter works by category">
        {categories.map((c) => (
          <button key={c} className="chip" type="button"
            aria-pressed={active === c} onClick={() => setActive(c)}>
            {c}
          </button>
        ))}
        <span className="filters__count">{shown.length} of {works.length} shown</span>
      </div>

      <div className="works">
        {works.map((w) => (
          <article key={w.slug} hidden={!(active === "All" || w.category === active)}>
            <WorkCard w={w} plate={plates[w.slug]} as="h2" />
          </article>
        ))}
      </div>

      {shown.length === 0 && <p className="works__empty">No projects filed under this category yet.</p>}
    </>
  );
}
