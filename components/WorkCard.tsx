import Link from "next/link";
import type { ReactNode } from "react";
import type { Work } from "@/lib/works";

export default function WorkCard({ w, plate, as: As = "h3" }: { w: Work; plate?: ReactNode; as?: "h2" | "h3" }) {
  return (
    <Link className="work" href={`/works/${w.slug}/`}>
      <span className="work__plate">
        {w.photo ? <img src={w.photo} alt={`${w.name}, ${w.location}`} loading="lazy" /> : plate}
        <span className={`status ${w.status === "Ongoing" ? "status--ongoing" : "status--done"}`}>{w.status}</span>
        {w.sample && <span className="work__stamp">Sample</span>}
      </span>
      <span className="work__body">
        <span className="work__cat">{w.category}</span>
        <As>{w.name}</As>
        <span className="work__loc">{w.location}</span>
        <span className="work__data"><span>{w.area}</span><span>{w.config}</span><span>{w.year}</span></span>
      </span>
    </Link>
  );
}
