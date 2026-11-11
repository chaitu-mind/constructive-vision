import type { Metadata } from "next";
import { banners } from "@/lib/images";
import PageHeader, { Cta } from "@/components/PageHeader";
import WorksGrid from "@/components/WorksGrid";
import Elevation from "@/components/drawings/Elevation";
import { works } from "@/lib/works";
import { site } from "@/lib/site";
import { breadcrumbJsonLd, JsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Works",
  description: `Completed and ongoing construction projects by ${site.name} across ${site.region}, filed with configuration, built-up area and structure.`,
  alternates: { canonical: "/works/" },
};

const trail = [{ name: "Home", path: "/" }, { name: "Works", path: "/works/" }];

export default function Works() {
  // Drawings are rendered on the server, then handed to the client grid as
  // ready-made markup, so filtering costs no extra JavaScript.
  const plates = Object.fromEntries(works.map((w) => [w.slug, <Elevation key={w.slug} work={w} />]));

  const listLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Works by ${site.name}`,
    numberOfItems: works.length,
    itemListElement: works.map((w, i) => ({
      "@type": "ListItem", position: i + 1, name: w.name, url: `${site.url}/works/${w.slug}/`,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(trail)} />
      <JsonLd data={listLd} />
      <PageHeader image={banners.works} eyebrow="Our projects" title="Projects & works" trail={trail}
        lede="Every project is filed with its configuration, built-up area and structure. Completed and ongoing work across Andhra Pradesh and Karnataka." />
      <section className="sheet">
        <div className="wrap">
          <WorksGrid works={works} plates={plates} />
          <div className="notice">
            <b>Note</b>
            <span>Entries marked <strong>Sample</strong> are illustrations showing how a finished project reads here. They are excluded from the site&rsquo;s structured data, so they are never presented to a search engine as completed work.</span>
          </div>
        </div>
      </section>
      <Cta title="Your project could be next" body="Send the plot details and what you want built. The first visit and the outline estimate cost nothing." />
    </>
  );
}
