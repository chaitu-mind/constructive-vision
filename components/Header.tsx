"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/nav";
import { site, founders, telLink } from "@/lib/site";

export function Logo() {
  return (
    <span className="logo">
      <svg viewBox="0 0 96 96" fill="none" aria-hidden="true">
        <polyline points="12,50 26,64 54,22 82,50 82,78" stroke="currentColor"
          strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="logo__txt">
        <b>Constructive</b>
        <i>Vision</i>
      </span>
    </span>
  );
}

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const current = (href: string) =>
    href === "/" ? path === "/" : path.startsWith(href.replace(/\/$/, ""));

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar__in">
          <span className="topbar__item">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.5a4.6 4.6 0 0 0-4.6 4.6C3.4 9.6 8 14.5 8 14.5s4.6-4.9 4.6-8.4A4.6 4.6 0 0 0 8 1.5Zm0 6.3a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4Z" fill="currentColor" /></svg>
            Head office {site.city} · {site.region}
          </span>
          <span className="topbar__item topbar__hide">
            <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.3" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M8 4.5V8l2.4 1.6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
            Mon – Sat · 9:00 am – 7:00 pm
          </span>
          <a className="topbar__item topbar__push" href={`mailto:${site.email}`}>
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1.5 3.5h13v9h-13z" fill="none" stroke="currentColor" strokeWidth="1.4" /><path d="m1.5 3.8 6.5 5 6.5-5" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>
            {site.email}
          </a>
          <a className="topbar__item topbar__phone" href={telLink()}>
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4.2 1.6 6 4.9 4.7 6.4a8.6 8.6 0 0 0 4.9 4.9L11.1 10l3.3 1.8-.6 2.5c-.2.6-.7 1-1.4 1A12 12 0 0 1 .7 3.6c0-.7.4-1.2 1-1.4l2.5-.6Z" fill="currentColor" /></svg>
            {site.phone}
          </a>
          <a className="topbar__item topbar__phone topbar__second" href={telLink(founders[1].phone)}>
            {founders[1].phone}
          </a>
        </div>
      </div>

      <header className={`hdr${scrolled ? " hdr--scrolled" : ""}`}>
        <div className="wrap hdr__in">
          <Link className="mark" href="/" aria-label={`${site.name} — home`}>
            <Logo />
          </Link>

          <nav className="nav" aria-label="Primary">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} aria-current={current(n.href) ? "page" : undefined}>
                {n.label}
              </Link>
            ))}
          </nav>

          <Link className="btn btn--sm hdr__cta" href="/contact/">Free estimate</Link>

          <button className="navtoggle" type="button" aria-expanded={open}
            aria-controls="mobile-nav" onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}>
            {open ? (
              <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" /></svg>
            ) : (
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1 3.5h14M1 8h14M1 12.5h14" stroke="currentColor" strokeWidth="1.8" /></svg>
            )}
          </button>
        </div>

        {open && (
          <div className="navdrawer" id="mobile-nav">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} aria-current={current(n.href) ? "page" : undefined}>
                {n.label}
              </Link>
            ))}
            <Link className="btn" href="/contact/">Get a free estimate</Link>
          </div>
        )}
      </header>
    </>
  );
}
