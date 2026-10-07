import type { Metadata } from "next";
import { CircuitBoard, FlaskConical } from "lucide-react";
import Link from "next/link";
import { FacilityTabs } from "@/components/FacilityTabs";
import { PageHero, SectionHeading, SourceLink } from "@/components/ui";
import { images } from "@/data/assets";
import { facilitySource } from "@/data/facilities";
import { officialSources } from "@/data/updates";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata =pageMetadata("FISAT Laboratories, Robotics & IDEA Lab","Explore FISAT's engineering laboratories, central computing, robotics, research facilities and IDEA Lab equipment using current official sources.");
const tabs=[
 {label:"Engineering",heading:"Laboratories across disciplines.",copy:"FISAT lists laboratory and workshop complexes serving its engineering programmes. For current equipment and department-level details, follow the official department pages.",source:"https://fisat.ac.in/"},
 {label:"Computer labs",heading:"Computing for learning.",copy:"The institution's facilities overview names Central Computing Facility and a computer centre within the main building.",source:facilitySource},
 {label:"Robotics",heading:"Explore robotics at FISAT.",copy:"Robotics Lab is a named facility on the official FISAT site. Verify equipment, current student projects and access arrangements directly with the institution.",source:"https://fisat.ac.in/robotics-lab/"},
 {label:"IDEA Lab",heading:"Prototyping with purpose.",copy:"FISAT's official IDEA Lab banner names 3D printers, laser cutters, CNC wood routers, PCB milling machines and sublimation printers.",source:"https://fisat.ac.in/wp-content/uploads/2026/03/IDEA-LAB-BANNER-scaled.jpg",sourceLabel:"Official FISAT IDEA Lab banner"},
 {label:"Research",heading:"Facilities for inquiry.",copy:"The FISAT Research and Development Cell supports research and describes projects, innovation, patents and guidance. Facility and access specifics are maintained by FISAT.",source:officialSources.research},
 {label:"Central computing",heading:"A shared academic resource.",copy:"Central computing is part of FISAT's current facilities directory. Contact the institution for access, labs and service information.",source:facilitySource}
];
export default function LaboratoriesPage(){return <><PageHero eyebrow="Facilities · Learn by doing" title="LEARN BY MAKING." description="Engineering labs, computing and innovation spaces that connect theory to practice." image={images.ideaLab} crumbs={[{label:"Facilities",href:"/facilities"},{label:"Laboratories"}]}/><section className="section"><div className="container"><div className="labs-lead"><div><p className="eyebrow"><span/>Where learning becomes practice</p><h2>Spaces for better<br/><em>questions.</em></h2></div><p>FISAT describes laboratory and workshop complexes supporting its academic departments, along with robotics, central computing and its IDEA Lab. Explore the categories below and verify the latest equipment and access at the official source.</p></div><div className="labs-image-story"><img src={images.ideaLab} alt="Official FISAT IDEA Lab banner and prototyping equipment" loading="lazy"/><div><span><FlaskConical size={18}/></span><strong>Learn by doing</strong><p>Department laboratories, computing and innovation facilities.</p></div></div><div className="labs-tabs"><SectionHeading eyebrow="Research & practice" title="Explore the spaces."/><FacilityTabs tabs={tabs}/></div><div className="labs-related"><Link href="/academics/departments">Explore departments<CircuitBoard size={16}/></Link><Link href="/research">Discover research<FlaskConical size={16}/></Link><SourceLink href={facilitySource} label="Official FISAT facilities overview"/></div></div></section></>;}
