import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, SectionHeading, SourceLink } from "@/components/ui";
import { departments } from "@/data/departments";
import { images } from "@/data/assets";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata("FISAT Departments & Academic Schools", "Meet FISAT's nine academic departments, from civil and computer science engineering to computer applications, management, science and humanities.");

export default function DepartmentsPage() {
  return <>
    <PageHero eyebrow="Academics · Departments" title="Where ideas become disciplines." description="Nine academic departments. Many ways to find the work that feels like yours." image={images.campusAerial} crumbs={[{label:"Academics",href:"/academics"},{label:"Departments"}]}/>
    <section className="section"><div className="container"><SectionHeading eyebrow="The academic community" title="Find your field." description="Explore a department to find official programme and institutional links."/><div className="department-grid">{departments.map((department,index)=><Link className="department-card" key={department.slug} href={`/academics/departments/${department.slug}`}><img src={department.image} alt={`${department.name} at FISAT`} loading="lazy"/><span className="department-card__short">{department.short}</span><div className="department-card__copy"><h3>{department.name}</h3><p>Programmes · People · Research</p><span>Explore department<ArrowRight size={15}/></span></div></Link>)}</div><div className="department-source"><SourceLink href="https://fisat.ac.in/" label="Verify the current official department listing"/></div></div></section>
  </>;
}
