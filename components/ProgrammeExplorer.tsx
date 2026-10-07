"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { programmes, programmeFilters } from "@/data/programmes";

export function ProgrammeExplorer({ featured = false }: { featured?: boolean }) {
  const [filter, setFilter] = useState<(typeof programmeFilters)[number]>("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const requestedLevel = new URLSearchParams(window.location.search).get("level")?.toLowerCase();
    const requestedFilter = programmeFilters.find((item) => item.toLowerCase() === requestedLevel);
    if (requestedFilter) setFilter(requestedFilter);
  }, []);

  const visible = useMemo(() => programmes
    .filter((program) => (filter === "All" || program.category === filter) && `${program.title} ${program.department} ${program.degree}`.toLowerCase().includes(search.toLowerCase()))
    .slice(0, featured ? 4 : undefined), [filter, search, featured]);

  return <div className="programme-explorer">
    {!featured && <div className="explorer-toolbar"><div className="filter-row" role="group" aria-label="Filter programmes">{programmeFilters.map((item) => <button type="button" key={item} aria-pressed={filter === item} className={filter === item ? "filter-pill is-selected" : "filter-pill"} onClick={() => setFilter(item)}>{item}</button>)}</div><label className="filter-search"><Search size={16}/><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search programmes" aria-label="Search programmes"/></label></div>}
    <p className="sr-only" aria-live="polite">{visible.length} {visible.length === 1 ? "programme" : "programmes"} shown</p>
    <div className="programme-grid">{visible.map((program, index) => <a className="programme-card" href={program.source} key={`${program.title}-${program.department}`} target="_blank" rel="noreferrer"><div className="programme-card__image"><img src={program.image} alt={`${program.title} at FISAT`} loading="lazy"/><span className="programme-number">{String(index + 1).padStart(2, "0")}</span></div><div className="programme-card__copy"><div className="programme-meta"><span>{program.category}</span><span>{program.duration}</span></div><h3>{program.title}</h3><p>{program.department} <span>·</span> {program.degree}</p><div className="programme-card__bottom"><span>Explore programme</span><ArrowUpRight size={17}/></div></div></a>)}</div>
    {visible.length === 0 && <div className="empty-results">No programme matches. Try a broader search or reset the category.</div>}
    {featured && <a className="text-link programmes-more" href="/academics">Explore all programmes <ArrowUpRight size={15}/></a>}
  </div>;
}
