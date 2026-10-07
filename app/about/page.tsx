import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Compass, GraduationCap, HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react";
import { PageHero, SectionHeading, SourceLink, StatStrip } from "@/components/ui";
import { images } from "@/data/assets";
import { officialSources } from "@/data/updates";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata("About FISAT — Our Purpose & Vision", "Explore FISAT's history, published vision and mission, leadership, Angamaly campus and verified institutional accreditations.");

const values = ["Inclusiveness", "Nurturing", "Social commitment", "Professionalism", "Integrity", "Respect", "Excellence"];
const milestones = [
  { year: "2002", title: "A purpose takes shape", body: "Federal Institute of Science and Technology is established by the Federal Bank Officers’ Association Educational Society." },
  { year: "2018", title: "Research begins to grow", body: "The Interdisciplinary Research Cell begins at the institution." },
  { year: "2023", title: "A research cell evolves", body: "The Interdisciplinary Research Cell is renamed the Research and Development Cell." },
  { year: "2025", title: "An autonomous chapter", body: "UGC grants FISAT autonomous status for ten years, according to the institution profile." }
];
const credentials = [
  { icon: GraduationCap, title: "Autonomous institution", text: "UGC autonomous status granted in 2025 for ten years.", link: officialSources.institution },
  { icon: ShieldCheck, title: "NAAC A+", text: "Reaccredited with an A+ grade in the second cycle; official profile reports a 3.45 CGPA.", link: officialSources.institution },
  { icon: Compass, title: "KTU affiliated", text: "Academic programmes are affiliated with APJ Abdul Kalam Technological University.", link: officialSources.institution },
  { icon: Lightbulb, title: "AICTE approved", text: "FISAT is approved by the All India Council for Technical Education.", link: officialSources.institution },
  { icon: HeartHandshake, title: "ISO 21001:2018", text: "The institution lists an ISO 21001:2018 certification.", link: officialSources.institution },
  { icon: ShieldCheck, title: "NBA accredited", text: "Six B.Tech programmes are accredited by the National Board of Accreditation.", link: officialSources.institution }
];

export default function AboutPage() {
  return <>
    <PageHero eyebrow="The institution" title="Built on purpose." description="An engineering education with room for character, curiosity and a deeper sense of what the future can become." image={images.campusMain} crumbs={[{ label: "About" }]} />
    <div className="values-band" aria-label="FISAT core values">{values.map((value) => <span className="value-chip" key={value}>{value}</span>)}</div>
    <section className="section section--spacious"><div className="container about-lead"><div><p className="eyebrow"><span/>Federal Institute of Science and Technology</p><h2>Made for minds<br/>that move things <em>forward.</em></h2></div><div className="about-lead__copy"><p>FISAT was founded in 2002 at Hormis Nagar, Angamaly, Kerala. Rooted in professional education, it brings academic departments, research activity and a connected campus community into the same learning experience.</p><SourceLink href={officialSources.institution}/></div></div><div className="container about-stat"><StatStrip items={[{ value:"2002", label:"Founded" },{ value:"3,200+", label:"Students", note:"Official homepage figure" },{ value:"₹12 Cr+", label:"Scholarships", note:"Official homepage figure" },{ value:"40 acres", label:"Campus", note:"Official campus-life page" }]}/></div></section>

    <section className="section section--paper"><div className="container"><SectionHeading eyebrow="An institution in motion" title="A story still being written." description="Milestones drawn from FISAT’s published institutional and research information."/><div className="timeline">{milestones.map((item)=><div className="timeline-item" key={item.year}><span className="timeline-dot"/><time>{item.year}</time><h3>{item.title}</h3><p>{item.body}</p></div>)}</div></div></section>

    <section className="section"><div className="container vision-grid"><div className="vision-image"><img src={images.campusAerial} alt="FISAT’s campus among the green landscape of Angamaly" loading="lazy"/><span>Hormis Nagar · Angamaly, Kerala</span></div><div className="vision-copy"><p className="eyebrow"><span/>What guides us</p><h2>A future shaped by purpose.</h2><div className="vision-statement"><span>Our vision</span><p>To evolve into a world-class professional institute committed to excellence in education, fostering holistic development, and empowering socially responsible global technocrats to drive sustainable growth through leadership in industry, innovation, research, and community engagement.</p></div><div className="vision-statement"><span>Our mission</span><p>To deliver high-quality professional education that promotes academic excellence, fosters the right attitude, cultivates essential skills, and encourages innovation and global competence through an industry-aligned curriculum and advanced research.</p><p>To nurture socially responsible technocrats, impactful leaders, and accomplished management professionals, by promoting holistic growth, upholding ethical values, and championing sustainable practices for the advancement of both industry and society.</p></div><SourceLink href={officialSources.vision} label="Read FISAT’s full vision and mission"/></div></div></section>

    <section className="section section--paper"><div className="container"><SectionHeading eyebrow="A campus to become part of" title="Learning in the everyday." description="A 40-acre campus in Angamaly connects academic spaces to student life."/><div className="about-gallery"><img src={images.campusCollege} alt="Academic building at Federal Institute of Science and Technology" loading="lazy"/><img src={images.library} alt="Students in the FISAT library" loading="lazy"/><img src={images.arts} alt="Student activity at FISAT" loading="lazy"/><img src={images.hostel} alt="FISAT hostel block" loading="lazy"/></div></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Trust, built over time" title="Standards that matter." description="Institutional credentials and affiliations as currently stated by FISAT."/><div className="credential-grid">{credentials.map(({icon:Icon,title,text,link})=><a href={link} target="_blank" rel="noreferrer" className="credential-card" key={title}><span><Icon size={21}/></span><h3>{title}</h3><p>{text}</p><span className="credential-link">Official source<ArrowUpRight size={14}/></span></a>)}</div></div></section>

    <section className="section section--paper"><div className="container"><SectionHeading eyebrow="People behind FISAT" title="Leadership with purpose." description="Names and roles are drawn from FISAT’s published governing-body and principal pages."/><div className="leadership-grid"><article className="leadership-card"><p className="eyebrow"><span/>Governing Body</p><h3>Mr. Shimith P R</h3><p>Chairman, FISAT</p><a className="text-link" href="https://fisat.ac.in/governing-body/" target="_blank" rel="noreferrer">Meet the governing body<ArrowUpRight size={14}/></a></article><article className="leadership-card"><p className="eyebrow"><span/>The Principal</p><h3>Dr. Jacob Thomas V</h3><p>Principal, FISAT · Joined 1 January 2024</p><a className="text-link" href="https://fisat.ac.in/principal/" target="_blank" rel="noreferrer">Read the official profile<ArrowUpRight size={14}/></a></article></div></div></section>
  </>;
}
