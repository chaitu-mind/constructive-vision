import Link from "next/link";
import { site, founders, telLink, waLink } from "@/lib/site";
import { capabilities } from "@/lib/content";
import { nav } from "@/lib/nav";
import { Logo } from "./Header";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__grid">
          <div className="foot__brand">
            <Link href="/" className="mark" aria-label={`${site.name} — home`}><Logo /></Link>
            <p>
              Civil engineering and construction across {site.region}. Turnkey homes,
              commercial buildings, structural design and interiors, built to a published
              specification with stage-wise billing.
            </p>

          </div>

          <div>
            <h3>Company</h3>
            <ul>{nav.map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}</ul>
          </div>

          <div>
            <h3>Services</h3>
            <ul>
              {capabilities.slice(0, 6).map((c) => (
                <li key={c.slug}><Link href={`/services/${c.slug}/`}>{c.title}</Link></li>
              ))}
            </ul>
          </div>

          <div className="foot__contact">
            <h3>Contact</h3>
            <a href={telLink()} className="foot__phone">{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={waLink(`Hello ${site.name}, I would like an estimate.`)} target="_blank" rel="noopener">WhatsApp us</a>
            <ul className="foot__people">
              {founders.map((f) => (
                <li key={f.name}><span>{f.name.split(" ")[0]}</span><a href={telLink(f.phone)}>{f.phone}</a></li>
              ))}
            </ul>
            <span>{site.street}, {site.city} {site.postal}</span>
            <span>Mon – Sat · 9:00 am – 7:00 pm</span>
          </div>
        </div>

        <div className="foot__bar">
          <span>© {site.founded} {site.legal}. All rights reserved.</span>
          <span>{site.gst}</span>
          <span>Rev {site.revision} — {site.revNote}</span>
        </div>
      </div>
    </footer>
  );
}
