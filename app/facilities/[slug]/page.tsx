import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";
import { PageHero, SectionHeading, SourceLink } from "@/components/ui";
import { facilities, specialFacilitySlugs } from "@/data/facilities";
import { facilityDetails } from "@/data/facilityDetails";
import { pageMetadata } from "@/data/seo";

export const dynamicParams = false;

const genericFacilities=facilities.filter((facility)=>!(specialFacilitySlugs as readonly string[]).includes(facility.slug));
export function generateStaticParams(){return genericFacilities.map(({slug})=>({slug}));}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}): Promise<Metadata>{const {slug}=await params;const item=genericFacilities.find((facility)=>facility.slug===slug);return item?pageMetadata(`FISAT ${item.title} | Campus Facilities`,item.description):pageMetadata("Facility not found","This FISAT facility page was not found.");}

export default async function FacilityDetailPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const facility=genericFacilities.find((item)=>item.slug===slug);if(!facility)notFound();const details=facilityDetails[slug];const related=facilities.filter((item)=>item.slug!==slug&&item.group===facility.group).slice(0,4);
 return <><PageHero eyebrow={`Facilities · ${facility.group}`} title={facility.title} description={facility.description} image={facility.image} crumbs={[{label:"Facilities",href:"/facilities"},{label:facility.title}]}/><section className="section"><div className="container"><div className="facility-intro"><div className="narrow-copy"><p className="eyebrow"><span/>{facility.eyebrow}</p><h2>{details?.headline ?? "A space to learn, work and grow."}</h2><p>{facility.description}</p><p>For current availability, detailed services and access information, use FISAT’s official facilities directory.</p><SourceLink href={facility.officialUrl}/></div><aside className="facility-info-card"><span className="facility-info-card__icon"><Building2 size={20}/></span><p className="eyebrow"><span/>At FISAT</p><h3>{facility.title}</h3><p>{details?.summary ?? "This facility is listed in FISAT’s official campus information."}</p><SourceLink href={facility.officialUrl} label="Check current details"/></aside></div><div className="facility-highlights section--paper"><SectionHeading eyebrow="Explore the context" title="Part of a connected campus."/><div className="facility-bullet-grid">{(details?.highlights ?? ["Check the FISAT source for current facility details.","Contact the institution about access and availability.","Find related spaces and services on campus."]).map((item,index)=><div key={item}><span>0{index+1}</span><div><h3>{index===0?"On campus":index===1?"Current details":"Further discovery"}</h3><p>{item}</p></div></div>)}</div></div></div></section>{related.length>0&&<section className="section section--paper"><div className="container"><SectionHeading eyebrow="More on campus" title="Explore nearby spaces."/><div className="facility-related">{related.map((item)=><Link href={`/facilities/${item.slug}`} key={item.slug}>{item.title}<ArrowRight size={14}/></Link>)}</div></div></section>}<section className="section"><div className="container"><Link className="text-link" href="/facilities">Back to all facilities<ArrowRight size={15}/></Link></div></section></>;
}
