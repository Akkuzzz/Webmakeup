import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { AdmissionsGuide } from "@/components/AdmissionsGuide";
import { CTA, PageHero, SectionHeading, SourceLink } from "@/components/ui";
import { images } from "@/data/assets";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata("FISAT Admissions — Your Next Steps", "Compare FISAT B.Tech, M.Tech, MCA, MBA and research pathways; confirm current eligibility and documents directly with the admissions office.");

export default function AdmissionsPage() {
  return <><PageHero eyebrow="Admissions" title="Your journey starts here." description="A practical guide to finding a FISAT programme, understanding the current criteria and reaching the official application route." image={images.campusMain} crumbs={[{label:"Admissions"}]}/>
    <div className="admission-apply-strip"><span><strong>Have a question?</strong> Speak with FISAT admissions.</span><a href="tel:+916282906237"><Phone size={15}/>+91 62829 06237</a><Link className="button button--blue" href="#admission-steps">Start your journey<ArrowRight size={15}/></Link></div>
    <section className="section"><div className="container"><div className="admissions-lead"><div><p className="eyebrow"><span/>A clear way forward</p><h2>Five steps.<br/><em>One future at a time.</em></h2></div><div><p>FISAT offers multiple routes into professional education. The details below keep the next action close while sending mutable eligibility, deadlines and documents to the institution’s current official source.</p><SourceLink href="https://fisat.ac.in/admission/" label="Current FISAT admissions page"/></div></div><div id="admission-steps"><AdmissionsGuide/></div></div></section>
    <section className="section section--paper"><div className="container"><SectionHeading eyebrow="Choose your path" title="Start with what you want to study."/><div className="pathway-cards"><Link href="/academics?level=undergraduate"><span>01</span><strong>Undergraduate</strong><small>B.Tech programmes</small><ArrowUpRight size={15}/></Link><Link href="/academics?level=postgraduate"><span>02</span><strong>Postgraduate</strong><small>M.Tech, MCA and MBA</small><ArrowUpRight size={15}/></Link><a href="https://fisat.ac.in/college-research-cell/" target="_blank" rel="noreferrer"><span>03</span><strong>Research</strong><small>Doctoral pathways and R&D</small><ArrowUpRight size={15}/></a></div></div></section>
    <section className="section"><div className="container"><CTA title="Start with the official details." copy="Admission criteria and timelines change. FISAT’s current admissions page is the source for your next step." primary={{label:"Open admissions",href:"https://fisat.ac.in/admission/"}} secondary={{label:"Explore programmes",href:"/academics"}}/></div></section>
  </>;
}
