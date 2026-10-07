import type { Metadata } from "next";
import { EventsExplorer } from "@/components/EventsExplorer";
import { PageHero, SourceLink } from "@/components/ui";
import { images } from "@/data/assets";
import { officialSources } from "@/data/updates";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata =pageMetadata("FISAT Events & Campus Calendar","Browse dated FISAT event announcements by academic, technical, cultural, sports, career and research categories, with an archive of published events.");
export default function EventsPage(){return <><PageHero eyebrow="Campus calendar" title="Come for the ideas. Stay for the energy." description="Discover what brings the FISAT campus together. Published past announcements appear in the archive; upcoming dates are never guessed." image={images.events} crumbs={[{label:"Campus Life",href:"/campus-life"},{label:"Events"}]}/><section className="section"><div className="container"><div className="events-page-lead"><div><p className="eyebrow"><span/>Academic · Technical · Cultural</p><h2>Put campus life<br/><em>on the calendar.</em></h2></div><div><p>Filter the verified announcements, browse by category or tap a dated event in the calendar. All items link to their original FISAT source.</p><SourceLink href={officialSources.news} label="See current FISAT announcements"/></div></div><EventsExplorer/></div></section></>;}
