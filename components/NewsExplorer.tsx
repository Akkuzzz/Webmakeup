"use client";

import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, Search } from "lucide-react";
import { officialNews, newsCategories } from "@/data/updates";

const PAGE_SIZE=4;
const formatDate=(date:string)=>new Intl.DateTimeFormat("en-IN",{day:"2-digit",month:"long",year:"numeric",timeZone:"Asia/Kolkata"}).format(new Date(`${date}T12:00:00Z`));
const normalizedCategory=(category:string)=>category==="Technical"?"Events":category;

export function NewsExplorer(){
 const [category,setCategory]=useState("All");const [query,setQuery]=useState("");const [page,setPage]=useState(1);
 const filtered=useMemo(()=>officialNews.filter(item=>(category==="All"||normalizedCategory(item.category)===category)&&`${item.title} ${item.excerpt} ${item.category}`.toLowerCase().includes(query.toLowerCase())),[category,query]);
 const pageCount=Math.max(1,Math.ceil(filtered.length/PAGE_SIZE));const visible=filtered.slice((page-1)*PAGE_SIZE,page*PAGE_SIZE);
 const choose=(value:string)=>{setCategory(value);setPage(1);};
 return <div className="news-explorer"><div className="explorer-toolbar news-explorer__toolbar"><div className="filter-row" role="group" aria-label="Filter news by category">{newsCategories.map((item)=><button type="button" aria-pressed={category===item} className={`filter-pill ${category===item?"is-selected":""}`} key={item} onClick={()=>choose(item)}>{item}</button>)}</div><label className="filter-search"><Search size={16}/><input value={query} onChange={(event)=>{setQuery(event.target.value);setPage(1);}} placeholder="Search FISAT news" aria-label="Search FISAT news"/></label></div><p className="news-result-count" aria-live="polite">{filtered.length} official {filtered.length===1?"announcement":"announcements"}</p><div className="news-grid">{visible.map((item,index)=><a className={`news-card ${(page===1&&index===0)?"news-card--featured":""}`} key={item.href} href={item.href} target="_blank" rel="noreferrer"><div className="news-card__image"><img src={item.image} alt="" loading="lazy"/><span className="news-category">{normalizedCategory(item.category)}</span></div><div className="news-card__copy"><time dateTime={item.date}>{formatDate(item.date)}</time><h3>{item.title}</h3><p>{item.excerpt}</p><span className="text-link">Read the official announcement<ArrowUpRight size={14}/></span></div></a>)}</div>{filtered.length===0&&<div className="empty-results">No announcement matches. Try another category or search term. <a href="https://fisat.ac.in/news/" target="_blank" rel="noreferrer">Open the FISAT news archive<ArrowUpRight size={14}/></a></div>}<div className="pagination"><span>Page {page} of {pageCount}</span><div><button type="button" aria-label="Previous page" onClick={()=>setPage((current)=>Math.max(1,current-1))} disabled={page===1}><ArrowRight size={15} style={{transform:"rotate(180deg)"}}/></button><button type="button" aria-label="Next page" onClick={()=>setPage((current)=>Math.min(pageCount,current+1))} disabled={page===pageCount}><ArrowRight size={15}/></button></div></div></div>;
}
