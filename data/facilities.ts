import { images } from "./assets";

export type Facility = {
  slug: string;
  title: string;
  eyebrow: string;
  image: string;
  description: string;
  officialUrl: string;
  group: string;
};

const overview = "https://fisat.ac.in/facility/";
export const specialFacilitySlugs = ["library", "hostel", "cafeteria", "fitness", "transportation", "laboratories"] as const;

export const facilities: Facility[] = [
  { slug: "idea-lab", title: "IDEA Lab", eyebrow: "Make room for ideas", image: images.ideaLab, description: "FISAT's official IDEA Lab banner lists 3D printers, laser cutters, CNC wood routers, PCB milling machines and sublimation printers.", officialUrl: overview, group: "Innovation" },
  { slug: "computing", title: "Central Computing Facility", eyebrow: "Connected learning", image: images.cse, description: "FISAT's facilities directory lists the Central Computing Facility and a computer centre within the main building.", officialUrl: overview, group: "Learning spaces" },
  { slug: "it-infrastructure", title: "IT Infrastructure", eyebrow: "A connected campus", image: images.futureSkills, description: "FISAT lists IT infrastructure and technology-supported facilities. Current systems and support are described by the institution.", officialUrl: overview, group: "Learning spaces" },
  { slug: "future-skills", title: "Future Skills", eyebrow: "Skills for what comes next", image: images.futureSkills, description: "FISAT highlights Future Skills on its official site. Visit the institution for the current programme and activities.", officialUrl: "https://fisat.ac.in/", group: "Learning spaces" },
  { slug: "language-lab", title: "Language Lab", eyebrow: "Communication, practised", image: images.community, description: "A language laboratory is included in the institution's official campus facilities directory.", officialUrl: overview, group: "Learning spaces" },
  { slug: "robotics", title: "Robotics Lab", eyebrow: "Build, test, repeat", image: images.ideaLab, description: "The FISAT Robotics Lab is listed among the institution's official facilities.", officialUrl: "https://fisat.ac.in/robotics-lab/", group: "Innovation" },
  { slug: "hostel", title: "Hostel", eyebrow: "A home on campus", image: images.hostel, description: "FISAT's hostel page describes four residential blocks—two for boys and two for girls—with accommodation for 1,300+ students.", officialUrl: "https://fisat.ac.in/facility/hostel/", group: "Campus life" },
  { slug: "sports", title: "Sports & Games", eyebrow: "Find your field", image: images.sports, description: "FISAT's facilities directory lists sports and games areas and a campus stadium.", officialUrl: "https://fisat.ac.in/facility/sports-and-games/", group: "Campus life" },
  { slug: "fitness", title: "Fitness Centre", eyebrow: "Train hard. Live well.", image: images.fitness, description: "FISAT lists a Fitness Centre and gymnasium among its campus facilities.", officialUrl: "https://fisat.ac.in/fitness-centre/", group: "Campus life" },
  { slug: "cafeteria", title: "Cafeteria", eyebrow: "Good food. Good company.", image: images.cafeteria, description: "FISAT's cafeteria page describes a campus canteen near the departments, with meals and refreshments prepared in its kitchens and seating for students and staff.", officialUrl: "https://fisat.ac.in/facility/cafeteria/", group: "Campus life" },
  { slug: "transportation", title: "Conveyance", eyebrow: "The road to campus", image: images.campusAerial, description: "FISAT's facilities page states that a fleet of 30 buses serves various routes. Confirm current stops and timings directly with FISAT.", officialUrl: "https://fisat.ac.in/facility/conveyance/", group: "Getting here" },
  { slug: "bank-atm", title: "Bank & ATM", eyebrow: "Everyday essentials", image: images.campusMain, description: "Bank and ATM services are included in the official FISAT facilities directory; ask the institution for current hours and access details.", officialUrl: overview, group: "Campus services" },
  { slug: "library", title: "Library", eyebrow: "Read. Discover. Create.", image: images.library, description: "The FISAT Library and Information Centre includes reference, circulation and periodical sections, plus books, journals and online databases.", officialUrl: overview, group: "Learning spaces" },
  { slug: "laboratories", title: "Laboratories", eyebrow: "Learn by doing", image: images.ideaLab, description: "FISAT lists laboratory and workshop complexes for its engineering disciplines. Current equipment and department details are on official department pages.", officialUrl: overview, group: "Learning spaces" },
  { slug: "auditorium", title: "Auditorium", eyebrow: "Ideas, together", image: images.campusCollege, description: "The official facilities page lists an auditorium with seating for 800 and audio/stage facilities.", officialUrl: overview, group: "Campus services" }
];

export const facilitySource = overview;
