import { images } from "./assets";

export type Programme = {
  title: string;
  department: string;
  degree: string;
  duration: string;
  category: "Undergraduate" | "Postgraduate" | "Management" | "Computer Applications" | "Research";
  image: string;
  description: string;
  source: string;
};

const ugSource = "https://fisat.ac.in/ug-programs/";
const pgSource = "https://fisat.ac.in/pg-programs/";

export const programmes: Programme[] = [
  { title: "Civil Engineering", department: "Civil Engineering", degree: "B.Tech", duration: "8 semesters", category: "Undergraduate", image: images.campusCollege, description: "An engineering programme in the built environment and infrastructure disciplines.", source: ugSource },
  { title: "Computer Science & Engineering", department: "Computer Science & Engineering", degree: "B.Tech", duration: "8 semesters", category: "Undergraduate", image: images.cse, description: "A four-year undergraduate engineering programme at FISAT.", source: ugSource },
  { title: "Electronics & Communication Engineering", department: "Electronics & Communication Engineering", degree: "B.Tech", duration: "8 semesters", category: "Undergraduate", image: images.electrical, description: "An undergraduate programme in electronics and communication engineering.", source: ugSource },
  { title: "Electrical & Electronics Engineering", department: "Electrical & Electronics Engineering", degree: "B.Tech", duration: "8 semesters", category: "Undergraduate", image: images.electrical, description: "An undergraduate engineering programme affiliated to APJ Abdul Kalam Technological University.", source: ugSource },
  { title: "Electronics & Instrumentation Engineering", department: "Electronics & Instrumentation Engineering", degree: "B.Tech", duration: "8 semesters", category: "Undergraduate", image: images.ideaLab, description: "An undergraduate programme in electronics and instrumentation engineering.", source: ugSource },
  { title: "Mechanical Engineering", department: "Mechanical Engineering", degree: "B.Tech", duration: "8 semesters", category: "Undergraduate", image: images.industry, description: "An undergraduate engineering programme at FISAT.", source: ugSource },
  { title: "Computer Science & Design", department: "Computer Science & Engineering", degree: "B.Tech", duration: "8 semesters", category: "Undergraduate", image: images.futureSkills, description: "A B.Tech programme listed in FISAT's current undergraduate programme information.", source: ugSource },
  { title: "Artificial Intelligence & Data Science", department: "Computer Science & Engineering", degree: "M.Tech", duration: "4 semesters", category: "Postgraduate", image: images.cse, description: "A postgraduate programme listed by FISAT; intake information is available from the official source.", source: pgSource },
  { title: "Artificial Intelligence & Data Science for Working Professionals", department: "Computer Science & Engineering", degree: "M.Tech", duration: "4 semesters", category: "Postgraduate", image: images.futureSkills, description: "A working-professional postgraduate option listed by FISAT.", source: pgSource },
  { title: "Power Electronics & Power Systems", department: "Electrical & Electronics Engineering", degree: "M.Tech", duration: "4 semesters", category: "Postgraduate", image: images.electrical, description: "A postgraduate programme listed under Electrical & Electronics Engineering.", source: pgSource },
  { title: "Renewable Energy", department: "Mechanical Engineering", degree: "M.Tech", duration: "4 semesters", category: "Postgraduate", image: images.campusAerial, description: "A postgraduate programme listed under Mechanical Engineering.", source: pgSource },
  { title: "Renewable Energy for Working Professionals", department: "Mechanical Engineering", degree: "M.Tech", duration: "4 semesters", category: "Postgraduate", image: images.industry, description: "A working-professional postgraduate option listed by FISAT.", source: pgSource },
  { title: "VLSI & Embedded Systems", department: "Electronics & Communication Engineering", degree: "M.Tech", duration: "4 semesters", category: "Postgraduate", image: images.ideaLab, description: "A postgraduate programme listed under Electronics & Communication Engineering.", source: pgSource },
  { title: "Structural Engineering & Construction Management", department: "Civil Engineering", degree: "M.Tech", duration: "4 semesters", category: "Postgraduate", image: images.campusMain, description: "A postgraduate programme listed under Civil Engineering.", source: pgSource },
  { title: "Master of Business Administration", department: "FISAT Business School", degree: "MBA", duration: "2 years", category: "Management", image: images.industry, description: "A full-time MBA programme; refer to FISAT Business School for current eligibility and specialisations.", source: pgSource },
  { title: "Master of Computer Applications", department: "Computer Applications", degree: "MCA", duration: "2 years", category: "Computer Applications", image: images.cse, description: "A two-year postgraduate programme consisting of four semesters, according to current admission information.", source: "https://fisat.ac.in/admission/" },
  { title: "Master of Computer Applications (Integrated)", department: "Computer Applications", degree: "Integrated MCA", duration: "Refer to current prospectus", category: "Computer Applications", image: images.futureSkills, description: "An integrated MCA programme listed in FISAT's official postgraduate programmes; consult current admission details for structure.", source: pgSource },
  { title: "Ph.D. programmes", department: "Various disciplines", degree: "Ph.D.", duration: "Varies by research programme", category: "Research", image: images.ideaLab, description: "FISAT lists doctoral programmes in various disciplines; current research guidance is available from the College Research Cell.", source: "https://fisat.ac.in/college-research-cell/" }
];

export const programmeFilters = ["All", "Undergraduate", "Postgraduate", "Research", "Management", "Computer Applications"] as const;
