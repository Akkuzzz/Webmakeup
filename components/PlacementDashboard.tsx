"use client";

import { useState } from "react";
import { ArrowUpRight, Building2, BriefcaseBusiness, IndianRupee, TrendingUp, Users } from "lucide-react";
import { handleTabListKeyDown } from "@/components/keyboardTabs";
import { placementRecords, placementSource, recruiters, type PlacementYear } from "@/data/placements";

const years: PlacementYear[] = ["2026", "2025", "2024", "2023"];

export function PlacementDashboard() {
  const [selected, setSelected] = useState<PlacementYear>("2026");
  const record = placementRecords[selected];
  const metrics = [
    { label: "Placement offers", value: record.offers, detail: record.year === "2026" ? "Conflicting public summary" : "Official cohort record", icon: BriefcaseBusiness },
    { label: "Highest package", value: record.highest, detail: record.asOf, icon: TrendingUp },
    { label: "Average package", value: record.average, detail: record.year === "2025" ? "No aggregate reported" : record.asOf, icon: IndianRupee },
    { label: "Companies", value: record.companies, detail: record.year === "2024" || record.year === "2023" ? "Official report count" : "Official company list", icon: Building2 }
  ];

  return <div className="placement-dashboard">
    <div className="placement-dashboard__top"><div><p className="eyebrow"><span/>Verified cohort data</p><h2>{record.cohort}</h2><p>{record.year === "2026" ? "Current-year summary is withheld pending reconciliation." : `Historical data · ${record.asOf}`}</p></div><div className="batch-selector" role="tablist" aria-label="Select placement batch" onKeyDown={handleTabListKeyDown}>{years.map((year) => <button key={year} type="button" id={`placement-year-tab-${year}`} role="tab" aria-selected={selected === year} aria-controls="placement-metrics" tabIndex={selected === year ? 0 : -1} className={selected === year ? "is-selected" : ""} onClick={() => setSelected(year)}>{year}<small>Batch</small></button>)}</div></div>
    <div className="placement-metrics" id="placement-metrics" role="tabpanel" tabIndex={0} aria-labelledby={`placement-year-tab-${selected}`} aria-live="polite">{metrics.map(({ label, value, detail, icon: Icon }) => <div className="placement-metric" key={label}><Icon size={18}/><span>{label}</span><strong>{value}</strong><small>{detail}</small></div>)}</div>
    <div className="placement-note"><div><span className="placement-note__icon"><Users size={16}/></span><div><strong>What this year’s public record says</strong><ul>{record.highlights.map((item) => <li key={item}>{item}</li>)}</ul><p>{record.note}</p></div></div><a href={placementSource} target="_blank" rel="noreferrer">Official FISAT source<ArrowUpRight size={14}/></a></div>
    <div className="recruiter-wall"><div><p className="eyebrow"><span/>Employer connections</p><h3>Where FISAT talent goes.</h3><p>Selected employer names from the FISAT placement pages across historical cohorts. Text names are used instead of unauthenticated logo artwork.</p></div><div className="recruiter-logos" aria-label="Selected employers listed by FISAT">{recruiters.map((name) => <span key={name}>{name}</span>)}</div></div>
    <div className="placement-footer-link"><p>FISAT describes placement training in soft skills, tests, group discussions, mock interviews and career guidance. No hours are quoted because the official page contains differing totals.</p><a className="text-link" href={placementSource} target="_blank" rel="noreferrer">Placement and training at FISAT<ArrowUpRight size={14}/></a></div>
  </div>;
}
