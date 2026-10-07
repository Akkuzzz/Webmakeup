import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CTA, PageHero, SectionHeading, SourceLink } from "@/components/ui";
import { images } from "@/data/assets";
import { officialSources } from "@/data/updates";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata("FISAT Campus Life & Student Culture", "Explore FISAT campus life beyond the classroom: student clubs, associations, sport, arts and culture, technical events, hostel living and research activity.");

const chapters = [
  { count:"01", title:"Learn with people", text:"A shared campus makes room for student associations, departmental communities and conversations that continue after class.", image:images.community, alt:"FISAT community and student interaction" },
  { count:"02", title:"Make and discover", text:"Technical events, research, entrepreneurship and hands-on learning bring students together around ideas worth exploring.", image:images.ideaLab, alt:"Innovation and prototyping at FISAT" },
  { count:"03", title:"Move, play, belong", text:"Arts, sport, clubs and cultural activities create different ways to participate in campus life.", image:images.arts, alt:"FISAT students taking part in campus activities" },
  { count:"04", title:"Make campus home", text:"Hostel life, shared meals and everyday campus spaces help shape the rhythm of student life.", image:images.hostel, alt:"Student accommodation at FISAT" }
];

export default function CampusLifePage() {
  return <><PageHero eyebrow="Campus life" title="LIFE BEYOND THE CLASSROOM." description="Some of the most important learning happens in the spaces, friendships and shared experiences around the lecture hall." image={images.events} crumbs={[{label:"Campus Life"}]}/>
    <section className="section section--spacious"><div className="container"><div className="campus-life-lead"><p className="eyebrow"><span/>A campus to take part in</p><h2>Bring your whole<br/><em>self to campus.</em></h2><p>FISAT’s campus-life pages bring together clubs, associations, sports, cultural and technical events, hostels and shared facilities. Choose the experience that feels like the next step for you.</p><SourceLink href={officialSources.campusLife} label="Current official campus-life information"/></div><div className="campus-chapters">{chapters.map((item,index)=><article className={`campus-chapter ${index%2===1?"campus-chapter--reverse":""}`} key={item.count}><div className="campus-chapter__image"><img src={item.image} alt={item.alt} loading="lazy"/><span>{item.count}</span></div><div className="campus-chapter__copy"><p className="eyebrow"><span/>Chapter {item.count}</p><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={index===3?"/facilities/hostel":index===2?"/student-life":index===1?"/research":"/events"}>{index===3?"Explore hostel life":index===2?"Explore student life":index===1?"Discover research":"See campus events"}<ArrowRight size={15}/></Link></div></article>)}</div></div></section>
    <section className="section section--paper"><div className="container"><SectionHeading eyebrow="Find your community" title="A hundred ways to take part." description="Start with student life, explore events and follow current FISAT announcements for the next opportunity."/><div className="campus-life-links"><Link href="/student-life"><span>01</span><strong>Clubs, arts & activities</strong><ArrowUpRight size={17}/></Link><Link href="/events"><span>02</span><strong>Technical & cultural events</strong><ArrowUpRight size={17}/></Link><Link href="/facilities/fitness"><span>03</span><strong>Sport & wellbeing</strong><ArrowUpRight size={17}/></Link><Link href="/facilities/hostel"><span>04</span><strong>Hostel life</strong><ArrowUpRight size={17}/></Link></div><SourceLink href={officialSources.campusLife}/></div></section>
    <section className="section"><div className="container"><CTA title="Make this place yours." copy="Find a programme, visit the campus and imagine what you could build next."/></div></section>
  </>;
}
