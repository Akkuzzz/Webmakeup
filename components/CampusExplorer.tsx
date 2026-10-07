"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { images } from "@/data/assets";

const locations = [
  { name: "Main Block", kind: "Academic heart", description: "The institution’s central block houses the college office, library, main computer centre and shared academic spaces.", image: images.campusMain, link: "/about", position: [50, 48] as const },
  { name: "Library", kind: "Learning space", description: "The FISAT Library and Information Centre supports academic and research needs through books, journals and online resources.", image: images.library, link: "/facilities/library", position: [33, 33] as const },
  { name: "Hostels", kind: "Life on campus", description: "Separate accommodation is available for boys and girls, with mess, reading and wellness facilities described by FISAT.", image: images.hostel, link: "/facilities/hostel", position: [73, 32] as const },
  { name: "Cafeteria", kind: "Meet & eat", description: "A campus gathering place for meals, conversation and time between classes.", image: images.cafeteria, link: "/facilities/cafeteria", position: [79, 62] as const },
  { name: "Gym", kind: "Wellbeing", description: "FISAT lists a gymnasium and fitness spaces among its campus facilities.", image: images.fitness, link: "/facilities/fitness", position: [25, 66] as const },
  { name: "Sports", kind: "Find your field", description: "A campus stadium and sports facilities support activity and student life.", image: images.sports, link: "/facilities/sports", position: [41, 77] as const },
  { name: "Labs", kind: "Make & discover", description: "Engineering laboratories and workshops serve the institution’s academic departments.", image: images.ideaLab, link: "/facilities/laboratories", position: [63, 77] as const },
  { name: "Auditorium", kind: "Gather here", description: "A campus venue for talks, performances and institutional gatherings.", image: images.campusCollege, link: "/facilities/auditorium", position: [58, 25] as const }
];

export function CampusExplorer() {
  const [selected, setSelected] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const reduced = useReducedMotion();
  const location = locations[selected];
  useEffect(() => setHydrated(true), []);
  return <div className="campus-explorer">
    <div className="campus-map-wrap">
      <img src={images.campusAerial} alt="Aerial view of FISAT's green campus and buildings" loading="lazy" />
      <div className="campus-map-wash" aria-hidden="true" />
      <div className="campus-map-pins" role="group" aria-label="Choose a campus location">{locations.map((place, index) => <button key={place.name} type="button" className={`map-pin ${selected === index ? "is-active" : ""}`} style={{ left: `${place.position[0]}%`, top: `${place.position[1]}%` }} onClick={() => setSelected(index)} aria-label={`Explore ${place.name}`} aria-pressed={selected === index}><span className="map-pin__dot"><MapPin size={16} /></span><span className="map-pin__label">{place.name}</span></button>)}</div>
      <div className="map-note">Illustrative view · not a wayfinding map</div>
      <AnimatePresence mode="wait"><motion.div key={location.name} className="map-detail" aria-live="polite" aria-atomic="true" initial={hydrated && !reduced ? { opacity: 0, y: 10 } : false} animate={{ opacity: 1, y: 0 }} exit={hydrated && !reduced ? { opacity: 0, y: -6 } : undefined} transition={{ duration: reduced ? 0 : 0.24 }}><img src={location.image} alt="" loading="lazy"/><div className="map-detail__copy"><span className="eyebrow eyebrow--blue"><span />{location.kind}</span><h3>{location.name}</h3><p>{location.description}</p><Link href={location.link}>Explore<ArrowUpRight size={15} /></Link></div></motion.div></AnimatePresence>
    </div>
    <div className="campus-explorer__list"><div><p className="eyebrow"><span />Move through FISAT</p><h3>Find your place.</h3><p className="campus-explorer__intro">Choose a campus space to see what happens there. This illustrative view is not for navigation.</p></div><div className="campus-location-list" role="group" aria-label="Campus locations">{locations.map((place, index) => <button type="button" key={place.name} onClick={() => setSelected(index)} className={selected === index ? "is-active" : ""} aria-pressed={selected === index}><span className="location-number">0{index + 1}</span><span>{place.name}</span><ArrowUpRight size={16} /></button>)}</div><Link className="text-link" href="/facilities">See all campus facilities <ArrowUpRight size={15} /></Link></div>
  </div>;
}
