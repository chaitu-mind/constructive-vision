import Link from "next/link";
import type { Capability } from "@/lib/content";
import { img, serviceImage } from "@/lib/images";

export default function ServiceCard({ c, long = false, as: As = "h3" }: { c: Capability; long?: boolean; as?: "h2" | "h3" }) {
  return (
    <Link className="svc" href={`/services/${c.slug}/`}>
      <span className="svc__img">
        <img src={img(serviceImage(c.slug), "md")} alt="" loading="lazy" />
        <span className="svc__no">{c.ref.replace("C.", "")}</span>
      </span>
      <span className="svc__body">
        <As>{c.title}</As>
        <p>{long ? c.desc : c.short}</p>
        {long && <ul className="taglist">{c.tags.map((t) => <li key={t}>{t}</li>)}</ul>}
        <span className="more">Read more <span aria-hidden="true">→</span></span>
      </span>
    </Link>
  );
}
