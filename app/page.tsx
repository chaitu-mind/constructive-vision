import Link from "next/link";
import type { Metadata } from "next";
import { SectionHead, Cta } from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import WorkCard from "@/components/WorkCard";
import { site, founders, telLink } from "@/lib/site";
import { capabilities, assurance, method } from "@/lib/content";
import { works } from "@/lib/works";
import { img, heroSlides } from "@/lib/images";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const pillars = [
  { k: "IS 456:2000", v: "Structural design to code" },
  { k: "Stage-wise", v: "Pay only for finished work" },
  { k: "Weekly", v: "Dated site photo reports" },
  { k: "12 months", v: "Defect liability after handover" },
];

export default function Home() {
  const featured = works.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__slides" aria-hidden="true">
          {heroSlides.map((s, i) => (
            <img key={s} src={img(s)} alt="" fetchPriority={i === 0 ? "high" : "low"}
              loading={i === 0 ? "eager" : "lazy"} style={{ animationDelay: `${i * 6}s` }} />
          ))}
        </div>
        <div className="wrap hero__in">
          <p className="eyebrow eyebrow--light">Civil engineering &amp; construction<span className="hide-sm"> · {site.region}</span></p>
          <h1 className="hero__title">
            Homes and buildings, <span>engineered to last.</span>
          </h1>
          <p className="hero__lede">
            Turnkey houses, apartments, commercial buildings and interiors across {site.region}.
            Engineered to code, built to a published specification, and billed only
            against work you can see finished on site.
          </p>
          <div className="hero__cta">
            <Link className="btn btn--lg" href="/contact/">Get a free estimate</Link>
            <Link className="btn btn--lg btn--outline-light" href="/estimate/">Calculate your build cost</Link>
          </div>
          <a className="hero__call" href={telLink()}>
            <span className="hero__callicon" aria-hidden="true">
              <svg viewBox="0 0 16 16"><path d="M4.2 1.6 6 4.9 4.7 6.4a8.6 8.6 0 0 0 4.9 4.9L11.1 10l3.3 1.8-.6 2.5c-.2.6-.7 1-1.4 1A12 12 0 0 1 .7 3.6c0-.7.4-1.2 1-1.4l2.5-.6Z" fill="currentColor" /></svg>
            </span>
            <span><small>Talk to a founder</small>{site.phone}</span>
          </a>
        </div>
      </section>

      {/* Pillars strip */}
      <section className="pillars" aria-label="Our commitments">
        <div className="wrap pillars__in">
          {pillars.map((p) => (
            <div className="pillar" key={p.k}>
              <b>{p.k}</b>
              <span>{p.v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="sec">
        <div className="wrap split">
          <div className="split__media">
            <img className="split__main" src={img("worker-hardhat", "md")} alt="Site engineer in a hard hat checking an electrical installation" loading="lazy" />
            <img className="split__inset" src={img("blueprints", "md")} alt="Construction drawings being marked up" loading="lazy" />
            <div className="split__badge">
              <b>{site.founded}</b>
              <span>Founded in {site.city}</span>
            </div>
          </div>
          <div className="split__body">
            <SectionHead eyebrow={`About ${site.name}`} title="Three founders. One vision. Every build accountable." />
            <p className="lead">
              <b>{site.name}</b> exists to turn what you picture for your plot into a
              structure engineered to last, and to let you check every step of the way.
            </p>
            <p>
              We are three brothers, and each of us owns one side of your project: the
              design and your agreement, the site and its execution, the cost and the
              schedule. Three people accountable for three things means nothing falls
              between the cracks, and the build stays on drawing, on budget and on time.
            </p>
            <ul className="checks">
              {founders.map((f) => (
                <li key={f.name}><b>{f.name}</b> — {f.vertex}</li>
              ))}
            </ul>
            <div className="cta__btns">
              <Link className="btn" href="/about/">More about us</Link>
              <Link className="btn btn--ghost" href="/process/">How we build</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="sec sec--grey">
        <div className="wrap">
          <div className="sec__head">
            <SectionHead eyebrow="What we do" title="Construction services under one roof"
              lede="From a compound wall to a turnkey apartment block. Where supervision serves you better than a contract, we will say so." />
            <Link className="btn btn--ghost" href="/services/">All {capabilities.length} services</Link>
          </div>
          <div className="svcs">
            {capabilities.slice(0, 6).map((c) => <ServiceCard key={c.slug} c={c} />)}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="why">
        <img className="why__bg" src={img("rebar-overhead")} alt="" loading="lazy" />
        <div className="wrap why__in">
          <SectionHead light eyebrow="Why choose us" title="What we commit to in writing"
            lede="We are a new practice, so we give you the means to check us against any established firm on the things that matter." />
          <div className="why__grid">
            {assurance.map((a, i) => (
              <div className="why__item" key={a.title}>
                <span className="why__no">{String(i + 1).padStart(2, "0")}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="sec">
        <div className="wrap">
          <SectionHead center eyebrow="Our process" title="From empty plot to handing you the keys"
            lede="Six stages, always in this order. Each one ends with a document you keep." />
          <ol className="flow">
            {method.map((m) => (
              <li key={m.no}>
                <span className="flow__no">{m.no}</span>
                <h3>{m.title}</h3>
                <p>{m.out}</p>
              </li>
            ))}
          </ol>
          <div className="center"><Link className="btn btn--ghost" href="/process/">See every stage in detail</Link></div>
        </div>
      </section>

      {/* Projects */}
      <section className="sec sec--grey">
        <div className="wrap">
          <div className="sec__head">
            <SectionHead eyebrow="Our projects" title="Recent works"
              lede="Each project is filed with its configuration, built-up area and structure." />
            <Link className="btn btn--ghost" href="/works/">View all projects</Link>
          </div>
          <div className="works">
            {featured.map((w) => <WorkCard key={w.slug} w={w} />)}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="sec">
        <div className="wrap">
          <SectionHead center eyebrow="Leadership" title="Meet the founders"
            lede="No sales team. You speak directly to whichever of us owns the part of the job you are asking about." />
          <div className="team">
            {founders.map((f) => (
              <article className="member" key={f.name}>
                <span className="member__avatar" aria-hidden="true">
                  {f.name.split(" ").map((p) => p[0]).join("")}
                </span>
                <h3>{f.name}</h3>
                <p className="member__role">{f.role}</p>
                <p>{f.bio}</p>
                <a className="member__phone" href={telLink(f.phone)}>{f.phone}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Cta title="Planning to build? Start with a free site visit."
        body="Tell us where the plot is and what you want built. The first visit and the outline estimate cost nothing." />
    </>
  );
}
