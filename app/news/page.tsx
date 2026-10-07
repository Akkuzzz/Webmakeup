import type { Metadata } from "next";
import { NewsExplorer } from "@/components/NewsExplorer";
import { PageHero, SourceLink } from "@/components/ui";
import { images } from "@/data/assets";
import { officialSources } from "@/data/updates";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata("FISAT News and Campus Announcements", "Read recent dated FISAT announcements on academics, research, campus activity and events, linked directly to their original official sources.");
export default function NewsPage(){return <><PageHero eyebrow="From the institution" title="Stories shaping what comes next." description="Announcements, activity and ideas from the FISAT community—linked to the original source." image={images.engineeringEvent} crumbs={[{label:"News"}]}/><section className="section"><div className="container"><div className="news-page-lead"><div><p className="eyebrow"><span/>The FISAT journal</p><h2>News from campus.<br/><em>Facts from FISAT.</em></h2></div><div><p>Explore a dated selection from the institution’s news feed. Each card keeps the original headline and leads to the official announcement.</p><SourceLink href={officialSources.news} label="Full FISAT news archive"/></div></div><NewsExplorer/></div></section></>;}
