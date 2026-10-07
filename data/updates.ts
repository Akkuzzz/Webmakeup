export type CampusUpdate = {
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  href: string;
};

import { images } from "./assets";

export const officialNews: CampusUpdate[] = [
  { title: "Session on France Connect: Pathways to Higher Education, Scholarships & Research Opportunities", date: "2026-09-29", category: "Research", image: images.engineeringEvent, excerpt: "An official FISAT announcement connecting students with pathways in higher education, scholarships and research.", href: "https://fisat.ac.in/news/session-on-france-connect-pathways-to-higher-education-scholarships-research-opportunities/" },
  { title: "From Design to Simulation: Five-Day Workshop on ANSYS FEA", date: "2026-09-28", category: "Academic", image: images.ideaLab, excerpt: "A five-day ANSYS FEA workshop announced by FISAT.", href: "https://fisat.ac.in/news/from-design-to-simulation-five-day-workshop-on-ansys-fea/" },
  { title: "Introductory Session on LinkedIn", date: "2026-09-23", category: "Campus", image: images.community, excerpt: "A student-focused introductory session listed in the official FISAT news feed.", href: "https://fisat.ac.in/news/introductory-session-on-linked-in/" },
  { title: "Skill Development Programme on STM32 Microcontroller", date: "2026-09-22", category: "Academic", image: images.electrical, excerpt: "A microcontroller skill-development programme listed in the official FISAT news feed.", href: "https://fisat.ac.in/news/skill-development-pprogram-on-stm32-microcontroller/" },
  { title: "Strategic Mathematics: Essential Tactics for Computing and Intelligence", date: "2026-09-11", category: "Academic", image: images.cse, excerpt: "An academic announcement from FISAT's official news feed.", href: "https://fisat.ac.in/news/strategic-mathematics-essential-tactics-for-computing-and-intelligence/" },
  { title: "NEXUS 2026", date: "2026-09-10", category: "Technical", image: images.arts, excerpt: "NEXUS 2026 is listed among the current FISAT announcements.", href: "https://fisat.ac.in/news/nexus-2026/" }
];

export const newsCategories = ["All", "Academic", "Research", "Campus", "Placement", "Achievement", "Events", "Announcements"];
export const eventCategories = ["All", "Academic", "Technical", "Cultural", "Sports", "Career", "Research"];

export const officialSources = {
  home: "https://fisat.ac.in/",
  institution: "https://fisat.ac.in/institution/",
  vision: "https://fisat.ac.in/vision/",
  undergraduate: "https://fisat.ac.in/ug-programs/",
  postgraduate: "https://fisat.ac.in/pg-programs/",
  admissions: "https://fisat.ac.in/admission/",
  facilities: "https://fisat.ac.in/facility/",
  hostel: "https://fisat.ac.in/facility/hostel/",
  transport: "https://fisat.ac.in/facility/conveyance/",
  campusLife: "https://fisat.ac.in/campus-life/",
  placements: "https://fisat.ac.in/placements/",
  news: "https://fisat.ac.in/news/",
  research: "https://fisat.ac.in/college-research-cell/",
  contact: "https://fisat.ac.in/contact/"
};

export const contactDetails = {
  address: "Hormis Nagar, Mookkannoor P O, Angamaly, Ernakulam District, Kerala, India — 683 577",
  phone: "+91 484 272 5272",
  alternatePhone: "+91 85477 04139",
  email: "mail@fisat.ac.in",
  map: "https://www.google.com/maps/search/?api=1&query=Federal+Institute+of+Science+and+Technology+Hormis+Nagar+Mookkannoor+Angamaly+Kerala"
};
