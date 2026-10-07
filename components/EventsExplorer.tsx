"use client";

import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, CalendarDays } from "lucide-react";
import { officialNews, eventCategories, type CampusUpdate } from "@/data/updates";

const eventTypes: Record<string, string> = {
  "Session on France Connect: Pathways to Higher Education, Scholarships & Research Opportunities": "Research",
  "From Design to Simulation: Five-Day Workshop on ANSYS FEA": "Technical",
  "Introductory Session on LinkedIn": "Career",
  "Skill Development Programme on STM32 Microcontroller": "Technical",
  "Strategic Mathematics: Essential Tactics for Computing and Intelligence": "Academic",
  "NEXUS 2026": "Technical"
};
const events = officialNews.map((item: CampusUpdate) => ({ ...item, eventCategory: eventTypes[item.title] ?? "Academic" }));
const formatDate = (date: string) => new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "long", year: "numeric", timeZone: "Asia/Kolkata" }).format(new Date(`${date}T12:00:00Z`));
const eventDay = (date: string) => Number(date.slice(-2));
const eventMonth = (date: string) => date.slice(0, 7);
const eventMonthLabel = (month: string) => new Intl.DateTimeFormat("en-IN", { month: "long", year: "numeric", timeZone: "Asia/Kolkata" }).format(new Date(`${month}-15T12:00:00Z`));

export function EventsExplorer() {
  const [category, setCategory] = useState("All");
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const month = "2026-09";
  const monthEvents = events.filter((item) => eventMonth(item.date) === month);
  const filtered = useMemo(() => monthEvents
    .filter((item) => (category === "All" || item.eventCategory === category) && (selectedDay === null || eventDay(item.date) === selectedDay))
    .sort((a, b) => b.date.localeCompare(a.date)), [category, selectedDay]);
  const categoryItems = [...eventCategories, "All"].filter((item, index, array) => array.indexOf(item) === index);
  const activeDays = new Set(monthEvents.map((item) => eventDay(item.date)));
  const startingOffset = (new Date(`${month}-01T12:00:00+05:30`).getUTCDay() + 6) % 7;
  const chooseCategory = (value: string) => { setCategory(value); setSelectedDay(null); };

  return <div className="events-explorer">
    <div className="upcoming-banner"><span className="upcoming-banner__icon"><CalendarDays size={22}/></span><div><p className="eyebrow eyebrow--blue"><span/>Upcoming</p><h2>No future event date confirmed.</h2><p>The verified FISAT feed reviewed for this page lists dated September announcements, but no future date was confirmed. Check the official announcements for updates.</p></div><a className="button button--outline-light" href="https://fisat.ac.in/news/" target="_blank" rel="noreferrer">See official updates<ArrowUpRight size={14}/></a></div>
    <div className="events-tools"><div className="filter-row" role="group" aria-label="Filter events by category">{categoryItems.map((item) => <button type="button" key={item} aria-pressed={category === item} className={`filter-pill ${category === item ? "is-selected" : ""}`} onClick={() => chooseCategory(item)}>{item}</button>)}</div><div className="events-month-caption"><span>{eventMonthLabel(month)}</span><small>Dated official announcements · Archive</small></div></div>
    <div className="events-calendar-layout"><div className="month-calendar" role="group" aria-label={`${eventMonthLabel(month)} calendar of published FISAT announcements`}><div className="month-calendar__head">{["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <span key={`${day}-${index}`}>{day}</span>)}</div><div className="month-calendar__days">{Array.from({ length: startingOffset }, (_, index) => <span aria-hidden="true" key={`blank-${index}`}/>)}{Array.from({ length: 30 }, (_, index) => index + 1).map((day) => <button key={day} type="button" className={`${activeDays.has(day) ? "has-event" : ""} ${selectedDay === day ? "is-selected" : ""}`} onClick={() => setSelectedDay(selectedDay === day ? null : day)} aria-pressed={selectedDay === day} aria-label={activeDays.has(day) ? `Filter announcements for September ${day}, 2026` : `September ${day}, 2026${selectedDay === day ? ", clear date filter" : ""}`}>{day}</button>)}</div><button type="button" className="calendar-clear" onClick={() => setSelectedDay(null)}>Show all dates</button></div>
      <div className="event-archive"><div className="archive-heading"><div><p className="eyebrow"><span/>Event archive</p><h2>{selectedDay ? `September ${selectedDay}` : "September 2026"}</h2></div><span aria-live="polite" role="status">{filtered.length} {filtered.length === 1 ? "entry" : "entries"}</span></div><div className="event-grid">{filtered.map((item) => <a className="event-card" href={item.href} target="_blank" rel="noreferrer" key={item.href}><span className="event-card__date"><span>{eventDay(item.date)}</span><small>SEP · 2026</small><CalendarDays size={15}/></span><span className="event-card__copy"><small className="news-category--plain">{item.eventCategory}</small><strong>{item.title}</strong><span>{formatDate(item.date)}</span><span className="text-link">Official event notice<ArrowUpRight size={13}/></span></span></a>)}</div>{filtered.length === 0 && <div className="empty-results">No matching announcement on this date. Try another calendar day or category.</div>}<p className="event-source-note">Items are official dated FISAT announcements; past announcements are shown in the archive. Dates are not represented as future event invitations.</p></div>
    </div>
    <div className="events-all-link"><a href="https://fisat.ac.in/dept_page/events-2/" target="_blank" rel="noreferrer">Open the official events archive<ArrowUpRight size={15}/></a></div>
  </div>;
}
