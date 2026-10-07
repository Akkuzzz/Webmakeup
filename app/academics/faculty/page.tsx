import type { Metadata } from "next";
import { PageHero, SectionHeading, SourceLink } from "@/components/ui";
import { FacultyDirectory } from "@/components/FacultyDirectory";
import { images } from "@/data/assets";
import { facultyDirectorySource } from "@/data/faculty";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata("FISAT Faculty Directory & Academic Leaders", "Search FISAT’s complete 230-profile faculty snapshot by name, designation and department, with portraits and official profile links.");

export default function FacultyPage() {
  return <><PageHero eyebrow="Academics · People" title="Meet the minds behind the work." description="Search the complete public FISAT faculty roster snapshot by name, designation and department." image={images.campusCollege} crumbs={[{label:"Academics",href:"/academics"},{label:"Faculty"}]}/><section className="section"><div className="container"><div className="faculty-lead"><div><p className="eyebrow"><span/>People who teach, make and discover</p><h2>Expertise with<br/><em>a human side.</em></h2></div><div><p>Explore all 230 faculty profiles listed in FISAT’s public directory as checked on 7 October 2026. Search by name, designation or department; each profile links to its official record. The live institutional directory may have changed since this snapshot. Repeated names are kept as separate official listings; use each person’s department and profile link to distinguish them.</p><SourceLink href={facultyDirectorySource} label="Open the live official faculty directory"/></div></div><FacultyDirectory/></div></section></>;
}
