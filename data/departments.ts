import { images } from "./assets";

export type Department = {
  slug: string;
  short: string;
  name: string;
  image: string;
  color: string;
  officialPath: string;
};

export const departments: Department[] = [
  { slug: "computer-science-engineering", short: "CSE", name: "Computer Science & Engineering", image: images.cse, color: "#143a60", officialPath: "https://fisat.ac.in/department/computer-science-and-engineering/" },
  { slug: "electronics-communication-engineering", short: "ECE", name: "Electronics & Communication Engineering", image: images.electrical, color: "#514638", officialPath: "https://fisat.ac.in/department/electronics-and-communication-engineering/" },
  { slug: "electrical-electronics-engineering", short: "EEE", name: "Electrical & Electronics Engineering", image: images.electrical, color: "#24424b", officialPath: "https://fisat.ac.in/department/electrical-and-electronics-engineering/" },
  { slug: "electronics-instrumentation-engineering", short: "EIE", name: "Electronics & Instrumentation Engineering", image: images.ideaLab, color: "#493a47", officialPath: "https://fisat.ac.in/department/electronics-and-instrumentation-engineering/" },
  { slug: "mechanical-engineering", short: "ME", name: "Mechanical Engineering", image: images.industry, color: "#35443a", officialPath: "https://fisat.ac.in/department/mechanical-engineering/" },
  { slug: "civil-engineering", short: "CE", name: "Civil Engineering", image: images.campusMain, color: "#534535", officialPath: "https://fisat.ac.in/department/civil-engineering/" },
  { slug: "computer-applications", short: "CA", name: "Computer Applications", image: images.cse, color: "#34395b", officialPath: "https://fisat.ac.in/department/computer-applications/" },
  { slug: "business-administration", short: "MBA", name: "Business Administration", image: images.industry, color: "#435238", officialPath: "https://fisat.ac.in/department/business-administration/" },
  { slug: "science-humanities", short: "S&H", name: "Science & Humanities", image: images.community, color: "#4d4150", officialPath: "https://fisat.ac.in/department/science-and-humanities/" }
];

export const departmentSource = "https://fisat.ac.in/institution/";
