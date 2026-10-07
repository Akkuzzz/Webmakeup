"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { handleTabListKeyDown } from "@/components/keyboardTabs";

export type FacilityTab = { label: string; heading: string; copy: string; source?: string; sourceLabel?: string };

export function FacilityTabs({ tabs }: { tabs: FacilityTab[] }) {
  const [active, setActive] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const reduceMotion = useReducedMotion();
  const current = tabs[active];
  useEffect(() => setHydrated(true), []);

  return <div className="facility-tabset">
    <div className="facility-tabs" role="tablist" aria-label="Facility details" onKeyDown={handleTabListKeyDown}>
      {tabs.map((tab, index) => <button
        key={tab.label}
        id={`facility-tab-${index}`}
        type="button"
        role="tab"
        aria-selected={active === index}
        aria-controls="facility-tab-panel"
        tabIndex={active === index ? 0 : -1}
        className={active === index ? "is-active" : ""}
        onClick={() => setActive(index)}
      >{tab.label}</button>)}
    </div>
    <motion.section
      key={current.label}
      id="facility-tab-panel"
      className="facility-tab-panel"
      role="tabpanel"
      tabIndex={0}
      aria-labelledby={`facility-tab-${active}`}
      initial={hydrated && !reduceMotion ? { opacity: 0, y: 8 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.2 }}
    >
      <h3>{current.heading}</h3>
      <p>{current.copy}</p>
      {current.source && <a className="text-link" href={current.source} target="_blank" rel="noreferrer">{current.sourceLabel ?? "Official FISAT information"}<ArrowUpRight size={15}/></a>}
    </motion.section>
  </div>;
}
