import Link from "next/link";
import type { ReactNode } from "react";
import { img } from "@/lib/images";
import { site, telLink } from "@/lib/site";

export function Crumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol>
        {trail.map((t, i) => (
          <li key={t.path}>
            {i > 0 && <span className="sep" aria-hidden="true">/</span>}
            {i === trail.length - 1
              ? <span aria-current="page">{t.name}</span>
              : <Link href={t.path}>{t.name}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Full-width photo banner at the top of every inner page. `bubble` is kept
 *  for compatibility with older call sites and is no longer drawn. */
export default function PageHeader({
  eyebrow, title, lede, trail, image = "slab-team",
}: {
  bubble?: string; eyebrow: string; title: string; lede?: ReactNode;
  trail: { name: string; path: string }[]; image?: string;
}) {
  return (
    <div className="phead">
      <img className="phead__bg" src={img(image)} alt="" fetchPriority="high" />
      <div className="wrap phead__in">
        <Crumbs trail={trail} />
        <p className="eyebrow eyebrow--light">{eyebrow}</p>
        <h1>{title}</h1>
        {lede && <p className="phead__lede">{lede}</p>}
      </div>
    </div>
  );
}

export function SectionHead({
  eyebrow, title, lede, as: As = "h2", center = false, light = false,
}: {
  bubble?: string; eyebrow: string; title: string; lede?: ReactNode;
  as?: "h2" | "h3"; center?: boolean; light?: boolean;
}) {
  return (
    <div className={`shead${center ? " shead--center" : ""}${light ? " shead--light" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <As>{title}</As>
      {lede && <p className="shead__lede">{lede}</p>}
    </div>
  );
}

export function Cta({ title, body, image = "tower-cranes" }: { title: string; body: string; image?: string }) {
  return (
    <section className="ctaband">
      <img className="ctaband__bg" src={img(image)} alt="" loading="lazy" />
      <div className="wrap ctaband__in">
        <div>
          <p className="eyebrow eyebrow--light">Free site visit &amp; estimate</p>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className="ctaband__side">
          <a className="ctaband__phone" href={telLink()}>
            <span>Call us directly</span>
            {site.phone}
          </a>
          <div className="cta__btns">
            <Link className="btn" href="/contact/">Get an estimate</Link>
            <Link className="btn btn--outline-light" href="/estimate/">Cost calculator</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
