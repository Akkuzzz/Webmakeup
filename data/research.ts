import { BookOpenCheck, FileCheck2, FlaskConical, Lightbulb, ShieldCheck, Users } from "lucide-react";

export const researchActivities = [
  { icon: Users, title: "Research across the community", text: "FISAT's research policy describes an environment for faculty, staff, students and alumni to develop research ability and share knowledge with the wider community." },
  { icon: Lightbulb, title: "A culture of research & innovation", text: "The Research and Development Cell lists promoting research and innovation among faculty members and students as a major activity." },
  { icon: FileCheck2, title: "Projects & funding proposals", text: "The Cell supports departments and faculty in preparing minor and major project proposals to funding agencies and describes a Project Bank for proposals and monitoring." },
  { icon: FlaskConical, title: "Interdisciplinary inquiry", text: "FISAT lists interdisciplinary research and consultancy among the Cell's activities, alongside research and product-development support." },
  { icon: BookOpenCheck, title: "Scholar & funded-project reviews", text: "The Cell coordinates progress reviews for Ph.D. scholars and systematic reviews of funded projects, as described on its official page." },
  { icon: ShieldCheck, title: "Patent guidance & research ethics", text: "The published remit includes guidance on patent filing and oversight of research aligned with proposals, ethical practice, timing and budget." }
] as const;

export const researchMilestones = [
  { year: "2018", description: "FISAT's Interdisciplinary Research Cell begins at institution level." },
  { year: "2023", description: "The research unit is renamed the Research and Development Cell." }
] as const;

export const researchDepartments = [
  "Civil Engineering",
  "Computer Science & Engineering",
  "Electrical & Electronics Engineering",
  "Electronics & Communication Engineering",
  "Electronics & Instrumentation Engineering",
  "Mechanical Engineering",
  "Business Administration",
  "Computer Applications",
  "Science & Humanities"
] as const;
