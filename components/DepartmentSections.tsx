"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { handleTabListKeyDown } from "@/components/keyboardTabs";
import { programmes } from "@/data/programmes";
import { faculty } from "@/data/faculty";
import type { Department } from "@/data/departments";

const tabs = ["Programmes", "Faculty", "Laboratories", "Research", "Achievements", "Student activities", "Industry interaction", "Placements"] as const;
type Tab = (typeof tabs)[number];

export function DepartmentSections({ department }: { department: Department }) {
  const [selected, setSelected] = useState<Tab>("Programmes");
  const selectedIndex = tabs.indexOf(selected);
  const reduceMotion = useReducedMotion();
  const panelId = `department-panel-${department.slug}`;
  const relatedPrograms = useMemo(
    () => programmes.filter((program) => program.department.toLowerCase() === department.name.toLowerCase()),
    [department]
  );
  const relatedFaculty = faculty.filter((person) => person.department.toLowerCase() === department.name.toLowerCase());

  return (
    <div className="department-profile-content">
      <div
        className="department-sticky-nav"
        role="tablist"
        aria-label={`${department.name} sections`}
        onKeyDown={handleTabListKeyDown}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab}
            id={`department-tab-${department.slug}-${index}`}
            type="button"
            role="tab"
            aria-selected={selectedIndex === index}
            aria-controls={panelId}
            tabIndex={selectedIndex === index ? 0 : -1}
            className={selectedIndex === index ? "is-active" : ""}
            onClick={() => setSelected(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div
        id={panelId}
        className="department-tab-content"
        role="tabpanel"
        tabIndex={0}
        aria-labelledby={`department-tab-${department.slug}-${selectedIndex}`}
      >
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
        >
          <div className="department-tab-heading">
            <p className="eyebrow"><span />{department.short} · {selected}</p>
            <h2>
              {selected === "Programmes" ? "Study in this department." :
               selected === "Faculty" ? "Meet the people." :
               selected === "Laboratories" ? "Learn by doing." :
               selected === "Research" ? "Questions worth pursuing." :
               selected === "Achievements" ? "Milestones and work." :
               selected === "Student activities" ? "Life in the department." :
               selected === "Industry interaction" ? "Learning beyond campus." :
               "Prepare for what follows."}
            </h2>
          </div>

          {selected === "Programmes" ? (
            relatedPrograms.length ? (
              <div className="department-programme-list">
                {relatedPrograms.map((program) => (
                  <a key={program.title} href={program.source} target="_blank" rel="noreferrer">
                    <div><span>{program.degree} · {program.duration}</span><strong>{program.title}</strong></div>
                    <ExternalLink size={15} />
                  </a>
                ))}
              </div>
            ) : (
              <div className="source-empty">Programme details are listed in FISAT’s official programme pages.<a href="https://fisat.ac.in/ug-programs/" target="_blank" rel="noreferrer">View official programmes<ArrowUpRight size={14} /></a></div>
            )
          ) : selected === "Faculty" ? (
            relatedFaculty.length ? (
              <div className="department-faculty-list">
                {relatedFaculty.slice(0, 6).map((person) => (
                  <Link href="/academics/faculty" key={person.profile}>
                    <img src={person.image} alt="" />
                    <div><strong>{person.name}</strong><span>{person.designation}</span></div>
                    <ArrowRight size={15} />
                  </Link>
                ))}
                {relatedFaculty.length > 6 && <Link href="/academics/faculty">Browse all {relatedFaculty.length} directory entries<ArrowRight size={15} /></Link>}
              </div>
            ) : (
              <div className="source-empty">See the official faculty directory for current staff and department assignments.<a href="https://fisat.ac.in/faculty/" target="_blank" rel="noreferrer">Official faculty directory<ArrowUpRight size={14} /></a></div>
            )
          ) : (
            <div className="department-source-panel">
              <p>
                {selected === "Laboratories" ? "FISAT lists laboratory and workshop facilities; consult the relevant official department page for current equipment and access." :
                 selected === "Research" ? "The FISAT Research and Development Cell coordinates research, interdisciplinary work, proposals and patent guidance." :
                 selected === "Achievements" ? "Departmental achievements and accreditation statements should be read in their current official context." :
                 selected === "Student activities" ? "FISAT supports student activities, associations, technical events and campus life; follow current official announcements." :
                 selected === "Industry interaction" ? "Explore FISAT’s official industry information, workshops, visits and announcements for current department-specific opportunities." :
                 "Use the official FISAT placements page for current recruitment, training and outcome information."}
              </p>
              <a className="text-link" href={selected === "Research" ? "https://fisat.ac.in/college-research-cell/" : selected === "Placements" ? "https://fisat.ac.in/placements/" : department.officialPath} target="_blank" rel="noreferrer">
                Open official {selected.toLowerCase()} information<ArrowUpRight size={15} />
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
