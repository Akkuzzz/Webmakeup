import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero, SourceLink } from "@/components/ui";
import { DepartmentSections } from "@/components/DepartmentSections";
import { departments } from "@/data/departments";
import { pageMetadata } from "@/data/seo";

export const dynamicParams = false;

export function generateStaticParams() { return departments.map(({slug})=>({department:slug})); }

export async function generateMetadata({params}:{params:Promise<{department:string}>}): Promise<Metadata> {
  const {department:slug}=await params;
  const item=departments.find((entry)=>entry.slug===slug);
  if(!item) return pageMetadata("Department not found", "This FISAT department page was not found.");
  return pageMetadata(`FISAT ${item.name} Department`, `Explore ${item.name} programmes, faculty, laboratories, research and student activity through official FISAT department links.`);
}

export default async function DepartmentPage({params}:{params:Promise<{department:string}>}) {
  const {department:slug}=await params;
  const department=departments.find((entry)=>entry.slug===slug);
  if(!department) notFound();
  return <>
    <PageHero eyebrow={`Academics · ${department.short}`} title={department.name} description={`Explore ${department.name} at FISAT. Programme information and current department-specific details are linked to the institution’s official pages.`} image={department.image} crumbs={[{label:"Academics",href:"/academics"},{label:"Departments",href:"/academics/departments"},{label:department.name}]}/>
    <section className="section"><div className="container"><div className="department-profile-lead"><div><p className="eyebrow"><span/>{department.short} · FISAT</p><h2>Build your depth.<br/><em>Find your edge.</em></h2></div><div><p>{department.name} is one of the academic departments listed by FISAT. Use the tabs to discover programmes, directory profiles and official research or facilities information.</p><SourceLink href={department.officialPath} label="FISAT department information"/></div></div><DepartmentSections department={department}/></div></section>
  </>;
}
