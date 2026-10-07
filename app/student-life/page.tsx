import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CTA, ImageCard, PageHero, SectionHeading, SourceLink } from "@/components/ui";
import { images } from "@/data/assets";
import { officialSources } from "@/data/updates";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata("FISAT Student Life — Clubs, Sport & Culture", "An active introduction to FISAT student life: clubs and associations, arts, sport, technical and cultural events, entrepreneurship, community and volunteering.");

const areas = [
  { title:"Technical clubs", anchor:"clubs", label:"Learn by making", image:images.ideaLab, description:"Connect technical interests with projects, workshops and campus events.", href:"/events" },
  { title:"Arts & culture", anchor:"arts", label:"Create together", image:images.arts, description:"Explore performance, expression and community through the arts and cultural calendar.", href:"/events" },
  { title:"Sports & games", label:"Move with purpose", image:images.sports, description:"Find sports and games among FISAT’s campus facilities and student activities.", href:"/facilities/sports" },
  { title:"Research & enterprise", label:"Turn ideas into action", image:images.community, description:"Explore research, innovation and entrepreneurship connected to FISAT’s community.", href:"/research" },
  { title:"Associations", label:"Find your people", image:images.campusAerial, description:"Student associations connect classmates around disciplines and campus life.", href:"/campus-life" },
  { title:"Volunteering", label:"Contribute beyond campus", image:images.events, description:"Look for current community and volunteering opportunities in FISAT’s official announcements.", href:"/news" }
];

export default function StudentLifePage() {
  return <><PageHero eyebrow="The student experience" title="Your people. Your pace. Your story." description="A university experience that grows through the things students choose to make, join and share." image={images.community} crumbs={[{label:"Campus Life",href:"/campus-life"},{label:"Student Life"}]}/>
    <section className="section"><div className="container"><div className="student-life-intro"><div><p className="eyebrow"><span/>There is more than one way in</p><h2>Find a space<br/><em>to make your own.</em></h2></div><div><p>Clubs, sports, arts, cultural and technical events, research and entrepreneurship add texture to campus life at FISAT. For current student associations and scheduled activities, follow the official FISAT pages.</p><SourceLink href={officialSources.campusLife}/></div></div><div className="student-life-grid">{areas.map((item,index)=><ImageCard key={item.title} id={"anchor" in item ? item.anchor : undefined} title={item.title} eyebrow={item.label} description={item.description} image={item.image} alt={item.title} href={item.href} index={`0${index+1}`}/>)}</div></div></section>
    <section className="section section--paper"><div className="container student-life-feature"><div><p className="eyebrow"><span/>Follow the energy</p><h2>See what’s happening.</h2><p>Check the dated announcements and event archive for confirmed FISAT activities. This redesign doesn’t create event names or dates that have not been published by the institution.</p><Link className="text-link" href="/events">Explore FISAT events<ArrowRight size={15}/></Link></div><img src={images.events} alt="FISAT activity from the institution's campus gallery" loading="lazy"/></div></section>
    <section className="section"><div className="container"><CTA title="Your next chapter starts here." copy="Explore programmes, connect with FISAT and find the communities that inspire you."/></div></section>
  </>;
}
