import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Network } from "lucide-react";
import { CTA, PageHero, SectionHeading, SourceLink } from "@/components/ui";
import { images } from "@/data/assets";
import { researchActivities, researchDepartments, researchMilestones } from "@/data/research";
import { officialSources } from "@/data/updates";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata("FISAT Research, Innovation & Impact", "Explore FISAT's Research and Development Cell, official activities, project guidance, patent support, interdisciplinary work and MoU directory.");

export default function ResearchPage() {
  return <>
    <PageHero eyebrow="Research · Innovation" title="IDEAS INTO IMPACT." description="A research culture, project support and innovation across the FISAT academic community." image={images.ideaLab} crumbs={[{ label: "Research" }]}/>

    <section className="section"><div className="container"><div className="research-intro"><div><p className="eyebrow"><span/>FISAT Research & Development Cell</p><h2>Turn a good question<br/><em>into the next step.</em></h2></div><div><p>FISAT describes research as part of its institutional mandate. Its Research and Development Cell coordinates research activity, supports project proposals, encourages interdisciplinary work and guides patent processes. Use the official pages for live calls, project records and current contacts.</p><SourceLink href={officialSources.research} label="Read the current Research & Development Cell page"/></div></div><div className="research-timeline">{researchMilestones.map((item)=><div key={item.year}><span>{item.year}</span><p>{item.description}</p></div>)}<SourceLink href={officialSources.research} label="Official research history"/></div></div></section>

    <section className="section section--paper"><div className="container"><SectionHeading eyebrow="A connected research ecosystem" title="From a first question to the next discovery." description="Activities below reflect FISAT’s currently published Research and Development Cell remit—not unverified output counts."/><div className="research-theme-grid">{researchActivities.map(({ icon: Icon, title, text }, index) => <article key={title}><span className="research-theme-icon"><Icon size={19}/></span><small>0{index + 1}</small><h3>{title}</h3><p>{text}</p><a href={officialSources.research} target="_blank" rel="noreferrer">Official research information<ArrowUpRight size={13}/></a></article>)}</div><div className="research-source-note"><strong>What we do not assume</strong><p>FISAT's current R&D Cell page does not name a list of operating research centres or publish a current patent count, funded-project count or research-output total. This page links directly to the institution rather than inventing those figures. The Cell says it explores proposals for establishing a new research centre.</p><SourceLink href={officialSources.research} label="Check the current source"/></div></div></section>

    <section className="section"><div className="container research-mou-section"><div><p className="eyebrow"><span/>Academic and industry connections</p><h2>Collaboration,<br/><em>by department.</em></h2><p>FISAT publishes a department-organized MoU directory. The page names current departmental entry points; follow it to review the agreements and collaboration information maintained by the institution.</p><SourceLink href="https://fisat.ac.in/mous-and-collaborations/" label="Open FISAT’s MoU directory"/></div><div className="mou-department-list">{researchDepartments.map((department, index) => <a key={department} href="https://fisat.ac.in/mous-and-collaborations/" target="_blank" rel="noreferrer"><span>0{index + 1}</span>{department}<ArrowUpRight size={14}/></a>)}</div></div></section>

    <section className="section section--paper"><div className="container research-industry"><div><p className="eyebrow"><span/>Beyond the campus</p><h2>Ideas grow<br/>in good company.</h2><p>For current faculty and student research, projects, proposals, patent guidance, doctoral activity and calls for collaboration, consult the official Research and Development Cell and dated FISAT announcements.</p><SourceLink href={officialSources.news} label="Current FISAT announcements"/></div><div className="research-industry__links"><Link href="/academics/departments">Explore academic departments<ArrowRight size={15}/></Link><Link href="/academics/faculty">Meet faculty<ArrowRight size={15}/></Link><Link href="/placements">Industry and career connections<ArrowRight size={15}/></Link><a href={officialSources.research} target="_blank" rel="noreferrer"><Network size={15}/>Research and Development Cell<ArrowUpRight size={14}/></a></div></div></section>

    <section className="section"><div className="container"><CTA title="Make your next idea matter." copy="Explore a FISAT programme and find the academic community where your questions can grow." primary={{ label: "Explore programmes", href: "/academics" }} secondary={{ label: "Contact FISAT", href: "/contact" }}/></div></section>
  </>;
}
