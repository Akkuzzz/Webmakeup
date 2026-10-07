import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ProgrammeExplorer } from "@/components/ProgrammeExplorer";
import { PageHero, SectionHeading, SourceLink } from "@/components/ui";
import { images } from "@/data/assets";
import { departments } from "@/data/departments";
import { officialSources } from "@/data/updates";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata("FISAT Programmes & Academic Paths", "Explore FISAT undergraduate and postgraduate programmes, management and computer applications degrees, doctoral study and nine academic departments.");

export default function AcademicsPage() {
  return <>
    <PageHero eyebrow="Academics · Programmes" title="Find your direction." description="Start with the questions that interest you. Find a programme, a department and a path to make your mark." image={images.cse} crumbs={[{ label: "Academics" },{ label: "Programmes" }]}/>
    <section className="section"><div className="container" id="environment"><div className="academic-lead"><div><p className="eyebrow"><span/>Choose a field. Find a future.</p><h2>Curiosity is a good<br/><em>place to begin.</em></h2></div><div><p>Explore seven undergraduate B.Tech programmes, postgraduate engineering, management and computer applications options, and research pathways. For live eligibility, intake and admission details, consult FISAT’s official pages.</p><Link className="text-link" href="/admissions">How to apply<ArrowRight size={15}/></Link></div></div><div className="programme-filter-section"><ProgrammeExplorer/></div><div className="official-note"><span className="official-note__check"><ArrowUpRight size={16}/></span><div><strong>Use the current official programme information</strong><p>Programme details, intake and admission eligibility can change; follow FISAT’s official listing.</p></div><SourceLink href={officialSources.undergraduate} label="UG programmes"/><SourceLink href={officialSources.postgraduate} label="PG programmes"/></div></div></section>
    <section className="section section--paper"><div className="container"><SectionHeading eyebrow="The people behind a programme" title="Explore the departments." action={{label:"All departments",href:"/academics/departments"}}/><div className="academics-department-row">{departments.slice(0,5).map((d)=><Link key={d.slug} href={`/academics/departments/${d.slug}`}><span>{d.short}</span><strong>{d.name}</strong><ArrowRight size={15}/></Link>)}</div></div></section>
  </>;
}
