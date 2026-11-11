/* ============================================================
   Photography. Every file lives in /public/images in two widths:
   name.webp (1920px, for full-bleed backgrounds) and
   name-md.webp (900px, for cards).

   These are licensed stock photographs (Unsplash licence, free for
   commercial use). Replace them with your own site photographs as
   soon as you have them: drop the file into /public/images with the
   same name and nothing else needs to change.
   ============================================================ */

export const img = (name: string, size: "lg" | "md" = "lg") =>
  `/images/${name}${size === "md" ? "-md" : ""}.webp`;

/** Hero slideshow on the home page, in order. */
export const heroSlides = ["rebar-columns", "tower-cranes", "slab-team"];

/** Banner photograph behind each page header. */
export const banners = {
  about: "engineers-site",
  services: "rebar-overhead",
  works: "tower-cranes",
  estimate: "blueprints",
  process: "slab-team",
  faq: "excavator",
  contact: "rebar-columns",
  notFound: "excavation-aerial",
} as const;

/** One photograph per service, keyed by service slug. */
export const serviceImages: Record<string, string> = {
  "turnkey-residential": "villa-white",
  "structural-design": "rebar-overhead",
  "commercial-shell-core": "frame-floors",
  "interiors-fit-out": "interior-living",
  "renovation-retrofit": "painting-facade",
  "site-development": "excavation-aerial",
  "estimation-quantity-surveying": "blueprints",
  "project-management": "engineers-site",
  "approvals-liaison": "house-timber",
};

export const serviceImage = (slug: string) => serviceImages[slug] ?? "slab-team";
