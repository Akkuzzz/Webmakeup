import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatedStats } from "@/components/AnimatedStats";
import { CampusExplorer } from "@/components/CampusExplorer";
import { HomeHero } from "@/components/HomeHero";
import { ProgrammeExplorer } from "@/components/ProgrammeExplorer";
import { SectionHeading, SourceLink } from "@/components/ui";
import { images } from "@/data/assets";
import { officialNews, officialSources } from "@/data/updates";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata("Build What Comes Next at FISAT | Kerala", "Find your direction at FISAT: engineering, management and computer applications programmes, a connected campus and ambitious futures in Angamaly, Kerala.");

const bento = [
  { title: "HOSTEL", label: "A place to belong", image: images.hostel, href: "/facilities/hostel", className: "bento-card--large", alt: "FISAT hostel block" },
  { title: "LIBRARY", label: "Room to explore", image: images.library, href: "/facilities/library", className: "", alt: "The FISAT Library and Information Centre" },
  { title: "SPORTS", label: "Find your field", image: images.sports, href: "/facilities/sports", className: "", alt: "FISAT campus sport and games" },
  { title: "CAFETERIA", label: "Good food. Good company.", image: images.cafeteria, href: "/facilities/cafeteria", className: "", alt: "FISAT campus canteen" },
  { title: "FITNESS", label: "Train hard. Live well.", image: images.fitness, href: "/facilities/fitness", className: "", alt: "FISAT fitness facilities" },
  { title: "TRANSPORT", label: "The road to campus", image: images.campusCollege, href: "/facilities/transportation", className: "", alt: "FISAT campus and approach" },
  { title: "LABORATORIES", label: "Make ideas tangible", image: images.ideaLab, href: "/facilities/laboratories", className: "", alt: "The FISAT IDEA Lab and prototyping spaces" },
  { title: "STUDENT LIFE", label: "Find your people", image: images.community, href: "/student-life", className: "bento-card--wide", alt: "FISAT students and campus community" }
];

const featuredRecruiters = ["Amazon", "TCS", "SAP", "Tata Elxsi", "Cadence", "Federal Bank"];

export default function HomePage() {
  return <>
    <HomeHero />

    <section className="home-stats" aria-label="FISAT at a glance">
      <div className="home-stats__inner">
        <div className="home-stats__intro">A campus shaped by curiosity.<br/>A future shaped by you.</div>
        <AnimatedStats />
      </div>
    </section>

    <section className="section section--spacious">
      <div className="container home-intro">
        <div className="home-intro__image"><img src={images.campusAerial} alt="Aerial photograph of the FISAT campus surrounded by green spaces" loading="lazy"/><span className="home-intro__caption">Hormis Nagar · Angamaly</span></div>
        <div className="home-intro__copy"><p className="eyebrow"><span/>A place to become</p><h2>MORE THAN A CAMPUS.<br/><em>A PLACE TO BECOME.</em></h2><p>At FISAT, an engineering education opens into a bigger landscape: a close-knit campus, a culture of making, and the confidence to take your learning further.</p><Link className="text-link" href="/about">Discover the FISAT story<ArrowRight size={15}/></Link><div className="home-intro__meta"><span>Founded 2002</span><span>Focus on Excellence</span></div></div>
      </div>
    </section>

    <section className="section programme-preview"><div className="container"><SectionHeading eyebrow="Choose your direction" title="Learn by asking what if." description="Explore FISAT’s current undergraduate, postgraduate, management and computer applications programmes." action={{ label: "Browse all programmes", href: "/academics" }}/><ProgrammeExplorer featured/></div></section>

    <section className="section section--dark campus-bento"><div className="container"><SectionHeading eyebrow="Life at FISAT" title="A campus for the whole of you." description="Find the places that make learning, living and meeting people part of the same story." action={{ label: "Explore campus life", href: "/campus-life" }}/><div className="bento-grid">{bento.map((tile) => <Link className={`bento-card ${tile.className}`} key={tile.title} href={tile.href}><img src={tile.image} alt={tile.alt} loading="lazy"/><div className="bento-card__copy"><div><small>{tile.label}</small><h3>{tile.title}</h3></div><span className="bento-arrow"><ArrowUpRight size={17}/></span></div></Link>)}</div><div className="home-facility-links"><Link href="/facilities/cafeteria">Cafeteria<ArrowRight size={14}/></Link><Link href="/facilities/fitness">Fitness<ArrowRight size={14}/></Link><Link href="/facilities/transportation">Transportation<ArrowRight size={14}/></Link><Link href="/facilities/laboratories">Laboratories<ArrowRight size={14}/></Link><Link href="/student-life">Student life<ArrowRight size={14}/></Link></div></div></section>

    <section className="section" id="campus-explorer"><div className="container"><SectionHeading eyebrow="Move through the campus" title="Find your place." description="A photo-led introduction to the spaces that shape learning and life at FISAT." action={{ label: "All facilities", href: "/facilities" }}/><CampusExplorer/></div></section>

    <section className="section section--paper"><div className="container feature-split"><div className="feature-split__image"><img src={images.ideaLab} alt="FISAT IDEA Lab innovation and prototyping space" loading="lazy"/></div><div className="feature-split__copy"><p className="eyebrow"><span/>Research · Innovation · Making</p><h2>THINK.<br/>BUILD.<br/><em>DISCOVER.</em></h2><p>FISAT’s Research and Development Cell supports research, innovation, interdisciplinary projects and the pursuit of practical ideas. Find out how inquiry connects with hands-on learning.</p><div className="feature-split__facts"><span><strong>2018</strong>Research cell origins</span><span><strong>2023</strong>R&D Cell established</span></div><Link className="text-link" href="/research">Explore research at FISAT<ArrowRight size={15}/></Link></div></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="Careers take shape" title="From campus to career." description="A view into the world of opportunity beyond graduation—grounded in verified FISAT placement information." action={{ label: "Explore placements", href: "/placements" }}/><div className="placement-home-card"><div className="placement-home-card__image"><img src={images.industry} alt="FISAT students preparing for careers and industry" loading="lazy"/></div><div className="placement-home-card__copy"><span className="eyebrow"><span/>Class of 2024 · Official placement record</span><h3>Opportunities built<br/>over time.</h3><div className="placement-home-card__stats"><div><strong>484</strong><span>Offers</span></div><div><strong>113</strong><span>Companies</span></div><div><strong>₹47.88</strong><span>LPA · highest package</span></div></div><p>Historical figures from the FISAT placement page. Current-year totals are not shown here because the official 2026 summaries differ.</p><SourceLink href={officialSources.placements} label="View the official placement record"/><div className="home-recruiter-strip"><span>Selected recruiters in the Class of 2024 record</span><div>{featuredRecruiters.map((name)=><b key={name}>{name}</b>)}</div></div></div></div></div></section>

    <section className="section section--paper"><div className="container"><SectionHeading eyebrow="From FISAT" title="Ideas, people, campus." description="Recent dated announcements from the official FISAT news feed. Every story opens at its original source." action={{ label: "All news", href: "/news" }}/><div className="home-news-grid">{officialNews.slice(0,5).map((item,index)=><a className={`home-news-card ${index===0?"home-news-card--feature":""}`} href={item.href} target="_blank" rel="noreferrer" key={item.href}><div className="home-news-card__image"><img src={item.image} alt="" loading="lazy"/><span>{item.category}</span></div><div className="home-news-card__copy"><time dateTime={item.date}>{new Intl.DateTimeFormat("en-IN",{day:"2-digit",month:"short",year:"numeric",timeZone:"Asia/Kolkata"}).format(new Date(`${item.date}T00:00:00+05:30`))}</time><h3>{item.title}</h3><span className="text-link">Read announcement<ArrowUpRight size={14}/></span></div></a>)}</div></div></section>

    <section className="section"><div className="container"><div className="cta-panel"><div className="cta-panel__copy"><p className="eyebrow eyebrow--blue"><span/>Your next chapter</p><h2>YOUR NEXT CHAPTER<br/>STARTS HERE.</h2><p>Take the first step toward an education that keeps asking what comes next.</p></div><div className="cta-panel__actions"><Link className="button button--blue" href="/admissions">Apply Now<ArrowRight size={16}/></Link><Link className="button button--outline-light" href="/academics">Explore Programmes<ArrowRight size={16}/></Link></div></div></div></section>
  </>;
}
