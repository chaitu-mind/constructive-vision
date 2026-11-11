import type { Metadata } from "next";
import { banners } from "@/lib/images";
import PageHeader, { Cta } from "@/components/PageHeader";
import { capabilities } from "@/lib/content";
import ServiceCard from "@/components/ServiceCard";
import { site } from "@/lib/site";
import { breadcrumbJsonLd, JsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Services",
  description: `Turnkey residential construction, structural design, commercial shell and core, interiors, renovation, site development, estimation and project management across ${site.region}.`,
  alternates: { canonical: "/services/" },
};

const trail = [{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }];

export default function Services() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(trail)} />
      <PageHeader image={banners.services} eyebrow="Our services" title="What we build" trail={trail}
        lede="Nine engagements, from a compound wall to a turnkey apartment block. Some of them are contracts and some are supervision only. Where supervision serves you better, we will say so rather than sell you a contract." />
      <section className="sheet sheet--sunk">
        <div className="wrap">
          <div className="svcs">
            {capabilities.map((c) => <ServiceCard key={c.slug} c={c} long as="h2" />)}
          </div>
        </div>
      </section>
      <Cta title="Not sure which one you need?" body="Describe the plot and what you want built. We will tell you which engagement fits, including when the answer is none of them." />
    </>
  );
}
