"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Search, X } from "lucide-react";
import { faculty, facultyDepartments, facultyDesignations, facultyDirectorySource, facultyRosterCheckedOn, type FacultyMember } from "@/data/faculty";

const focusable = 'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])';
const initials = (name: string) => name.replace(/^(Dr|Ms|Mr|Prof)\.?\s*/i, "").split(/\s+/).map((part) => part[0]).filter(Boolean).join("").slice(0, 2).toUpperCase();

export function FacultyDirectory() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("All departments");
  const [designation, setDesignation] = useState("All designations");
  const [active, setActive] = useState<FacultyMember | null>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const filtered = useMemo(() => faculty.filter((person) =>
    (department === "All departments" || person.department === department) &&
    (designation === "All designations" || person.designation === designation) &&
    `${person.name} ${person.department} ${person.designation} ${person.focus ?? ""}`.toLowerCase().includes(query.toLowerCase())
  ), [query, department, designation]);

  useEffect(() => {
    if (!active) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
        return;
      }
      if (event.key !== "Tab") return;
      const elements = dialogRef.current?.querySelectorAll<HTMLElement>(focusable);
      if (!elements?.length) return;
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      previousFocus?.focus();
    };
  }, [active]);

  return <>
    <div className="directory-controls">
      <label className="filter-search"><Search size={17}/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search faculty" aria-label="Search faculty by name, designation or department"/></label>
      <label className="select-label"><span>Department</span><select value={department} onChange={(event) => setDepartment(event.target.value)} aria-label="Filter faculty by department">{facultyDepartments.map((item) => <option value={item} key={item}>{item}</option>)}</select></label>
      <label className="select-label"><span>Designation</span><select value={designation} onChange={(event) => setDesignation(event.target.value)} aria-label="Filter faculty by designation">{facultyDesignations.map((item) => <option value={item} key={item}>{item}</option>)}</select></label>
      <span className="results-count" aria-live="polite" role="status">{filtered.length} {filtered.length === 1 ? "profile" : "profiles"}</span>
    </div>
    <p className="faculty-directory-note">Names, designations, departments and portrait links are transcribed from FISAT’s public directory, checked {facultyRosterCheckedOn}. <a href={facultyDirectorySource} target="_blank" rel="noreferrer">View the live FISAT roster<ArrowUpRight size={14}/></a></p>
    <div className="faculty-grid">{filtered.map((person, index) => <button type="button" className="faculty-card" key={person.profile} onClick={() => setActive(person)} aria-label={`Open profile for ${person.name}, ${person.designation}, ${person.department}`}><span className="faculty-card__image"><span className="faculty-card__initials" aria-hidden="true">{initials(person.name)}</span><img src={person.image} alt="" loading="lazy" decoding="async" onError={(event) => { event.currentTarget.style.display = "none"; }}/><span className="faculty-card__number">{String(index + 1).padStart(2, "0")}</span></span><span className="faculty-card__info"><small>{person.department}</small><strong>{person.name}</strong><span>{person.designation}</span><span className="faculty-card__link">View profile<ArrowUpRight size={15}/></span></span></button>)}</div>
    {filtered.length === 0 && <div className="empty-results">No profile in this published roster matches the filters. Try a broader search or check FISAT’s live directory. <a href={facultyDirectorySource} target="_blank" rel="noreferrer">Open official faculty directory<ArrowUpRight size={14}/></a></div>}
    {active && <div className="modal-scrim" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActive(null); }}><section ref={dialogRef} className="faculty-modal" role="dialog" aria-modal="true" aria-labelledby="faculty-modal-title" aria-describedby="faculty-modal-description"><button ref={closeRef} type="button" className="icon-button faculty-modal__close" onClick={() => setActive(null)} aria-label="Close faculty profile"><X/></button><img src={active.image} alt=""/><div className="faculty-modal__copy"><p className="eyebrow"><span/>{active.department}</p><h2 id="faculty-modal-title">{active.name}</h2><p className="faculty-modal__designation">{active.designation}</p><div className="thin-rule"/>{active.focus ? <><p className="faculty-modal__focus">Areas of interest</p><p id="faculty-modal-description">{active.focus}</p></> : <p id="faculty-modal-description">For biographical details and current academic information, see the official FISAT profile.</p>}<a className="button button--blue" href={active.profile} target="_blank" rel="noreferrer">Full official profile<ArrowUpRight size={16}/></a></div></section></div>}
  </>;
}
