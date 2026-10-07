import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, SectionHeading, SourceLink } from "@/components/ui";
import { facilities, facilitySource } from "@/data/facilities";
import { images } from "@/data/assets";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata("FISAT Campus Facilities & Services", "Explore FISAT campus facilities including library, hostel, cafeterias, sports, laboratories, IDEA Lab, robotics, computing and transportation.");

export default function FacilitiesPage() {
  const groups=[...new Set(facilities.map(({group})=>group))];
  return <><PageHero eyebrow="Campus facilities" title="EVERYTHING YOU NEED TO THRIVE." description="Find the learning spaces, campus services and places to live well at FISAT." image={images.campusAerial} crumbs={[{label:"Facilities"}]}/><section className="section"><div className="container"><div className="facility-hub-lead"><div><p className="eyebrow"><span/>The campus, considered</p><h2>Spaces that support<br/><em>what comes next.</em></h2></div><p>Explore the campus by place and purpose. Facility details link to FISAT’s source pages, with unverified timetables and equipment left to the institution.</p></div>{groups.map((group)=><section className="facility-group" key={group}><div className="facility-group__heading"><span>{group}</span><i/></div><div className="facility-grid">{facilities.filter((item)=>item.group===group).map((item,index)=><Link className="facility-tile" href={`/facilities/${item.slug}`} key={item.slug}><img src={item.image} alt={`${item.title} at FISAT`} loading="lazy"/><div className="facility-tile__copy"><div><small>{item.eyebrow}</small><h3>{item.title}</h3></div><span className="bento-arrow"><ArrowRight size={15}/></span></div></Link>)}</div></section>)}<div className="facility-hub-bottom"><span>Need specific information?</span><p>Contact the FISAT office for current access, schedules, routes and services.</p><SourceLink href={facilitySource} label="Official facilities directory"/></div></div></section></>;
}
