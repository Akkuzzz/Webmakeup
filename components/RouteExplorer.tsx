"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, BusFront, Search } from "lucide-react";
import { handleTabListKeyDown } from "@/components/keyboardTabs";
import { facilitySource } from "@/data/facilities";

const tabs = ["Routes", "Stops", "Timings", "Guidelines"] as const;
type RouteTab = (typeof tabs)[number];

const copy: Record<RouteTab, string> = {
  Routes: "FISAT’s public facilities page notes a fleet of 30 buses operating on various routes. Current route names are not published in a verified route directory here; please check with the institution.",
  Stops: "A verified public stop list is not available in the current source reviewed for this redesign. Contact FISAT for the latest boarding point and stop details.",
  Timings: "Current route timings can change and were not available in the verified public source. Confirm the latest timetable directly with FISAT.",
  Guidelines: "Please consult FISAT for current conveyance guidelines, eligibility, boarding rules and route availability. No unsupported travel or safety claims are made on this page."
};

export function RouteExplorer() {
  const [tab, setTab] = useState<RouteTab>("Routes");
  const [query, setQuery] = useState("");
  const message = useMemo(() => query ? `No verified public ${tab.toLowerCase()} match for “${query}”. Ask FISAT to confirm current details.` : copy[tab], [query, tab]);

  return <div className="route-explorer">
    <div className="facility-tabs" role="tablist" aria-label="Transportation information" onKeyDown={handleTabListKeyDown}>{tabs.map((item) => <button type="button" key={item} id={`transport-tab-${item.toLowerCase()}`} role="tab" aria-selected={tab === item} aria-controls="transport-panel" tabIndex={tab === item ? 0 : -1} className={tab === item ? "is-active" : ""} onClick={() => setTab(item)}>{item}</button>)}</div>
    <label className="transport-search"><Search size={18}/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search published routes or stops" aria-label="Search published bus routes or stops"/><kbd>FISAT</kbd></label>
    <div className="route-result" id="transport-panel" role="tabpanel" tabIndex={0} aria-labelledby={`transport-tab-${tab.toLowerCase()}`} aria-live="polite"><strong><BusFront size={18} aria-hidden="true"/> {query ? "No verified match yet" : tab === "Routes" ? "Campus conveyance" : `Current ${tab.toLowerCase()} information`}</strong><p>{message}</p><a className="source-link" href={facilitySource} target="_blank" rel="noreferrer">See FISAT facilities information<ArrowUpRight size={14}/></a></div>
  </div>;
}
