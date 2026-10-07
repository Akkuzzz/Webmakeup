import type { Metadata } from "next";
import { Coffee, Utensils } from "lucide-react";
import { FacilityTabs } from "@/components/FacilityTabs";
import { PageHero, SectionHeading, SourceLink } from "@/components/ui";
import { images } from "@/data/assets";
import { pageMetadata } from "@/data/seo";

const source = "https://fisat.ac.in/facility/cafeteria/";

export const metadata: Metadata = pageMetadata(
  "FISAT Cafeteria — Campus Dining & Community",
  "Find FISAT cafeteria information, including campus canteen location, meals and refreshments, kitchen preparation and seating for students and employees."
);

const tabs = [
  { label: "Dining", heading: "Meals and refreshments on campus.", copy: "FISAT describes its cafeteria as a campus canteen serving meals and refreshments.", source, sourceLabel: "Official cafeteria page" },
  { label: "Kitchen", heading: "Prepared on campus.", copy: "The official cafeteria page states that meals and refreshments are prepared in campus kitchens. Menu items are not reproduced here because a verified current menu was not available.", source },
  { label: "Seating", heading: "A place between classes.", copy: "FISAT's source describes cafeteria seating for students and staff. Confirm current hours and arrangements directly with the institution.", source },
  { label: "Current details", heading: "Ask FISAT what is available today.", copy: "Hours, prices, menu items and operating arrangements can change. Contact the institution for current details.", source: "https://fisat.ac.in/contact/", sourceLabel: "Contact FISAT" }
];

export default function CafeteriaPage() {
  return <>
    <PageHero eyebrow="Facilities · Campus dining" title="GOOD FOOD. GOOD COMPANY." description="The campus canteen brings meals, refreshments and a place to pause into the student day." image={images.cafeteria} crumbs={[{ label: "Facilities", href: "/facilities" }, { label: "Cafeteria" }]} />
    <section className="section">
      <div className="container">
        <div className="cafeteria-story">
          <div className="cafeteria-story__image">
            <img src={images.cafeteria} alt="FISAT campus cafeteria seating area" loading="lazy" decoding="async" />
            <span>Dining · Conversation · Campus life</span>
          </div>
          <div>
            <p className="eyebrow"><span />At the heart of the day</p>
            <h2>Good food.<br /><em>Better company.</em></h2>
            <p>FISAT describes a canteen near the departments, with meals and refreshments prepared in campus kitchens and seating for students and staff. For the latest menu, prices or operating hours, contact the institution.</p>
            <SourceLink href={source} label="Official FISAT cafeteria information" />
          </div>
        </div>
        <div className="cafeteria-quick-facts">
          <div><span><Coffee size={18} /></span><strong>Campus canteen</strong><small>Near departments, per the official page</small></div>
          <div><span><Utensils size={18} /></span><strong>Meals & refreshments</strong><small>Prepared in campus kitchens</small></div>
          <div><span><Coffee size={18} /></span><strong>Seating</strong><small>For students and employees</small></div>
        </div>
        <div className="facility-tabs-section">
          <SectionHeading eyebrow="What to know" title="A little more about the space." />
          <FacilityTabs tabs={tabs} />
        </div>
      </div>
    </section>
  </>;
}
