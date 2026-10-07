import { departments } from "./departments";

export type FacultyMember = {
  name: string;
  designation: string;
  department: string;
  image: string;
  profile: string;
  focus?: string;
};

// Current public roster fields transcribed from FISAT's official directory index.
// Names, designations, departments, portraits and profile URLs remain linkable to the source.
export const faculty: FacultyMember[] = [
  {
    "name": "Dr. Abi P Mathew",
    "designation": "Professor",
    "department": "Electronics & Instrumentation Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3752.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-abi-p-mathew/",
    "focus": "Instrumentation, control and measurement systems"
  },
  {
    "name": "Dr. Ambili A R",
    "designation": "Associate Professor",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4044.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-ambily-a-r/"
  },
  {
    "name": "Dr. Anil Johny",
    "designation": "Associate Professor & HoD",
    "department": "Electronics & Instrumentation Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4479.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-anil-johny/"
  },
  {
    "name": "Dr. Anil Joseph",
    "designation": "Adjunct Faculty Member",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2024/02/anil-joseph.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-anil-joseph/"
  },
  {
    "name": "Dr. Anil Kumar M N",
    "designation": "Professor",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3883.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-anil-kumar-m-n/"
  },
  {
    "name": "Dr. Anish Mathew K",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Electronics & Instrumentation Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4036.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-anish-mathew-k/"
  },
  {
    "name": "Dr. Anoo Anna Anthony",
    "designation": "Professor",
    "department": "Business Administration",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/08/0A3A2874.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-anoo-anna-anthony/"
  },
  {
    "name": "Dr. Anoop K N",
    "designation": "Assistant Professor (On Contract)",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2026/02/anoop.jpeg",
    "profile": "https://fisat.ac.in/faculty/dr-anoop-k-n/"
  },
  {
    "name": "Dr. Archana R",
    "designation": "Professor & Member Secretary",
    "department": "Electrical & Electronics Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/AR.jpeg",
    "profile": "https://fisat.ac.in/faculty/dr-archana-r/"
  },
  {
    "name": "Dr. Arun Gopi",
    "designation": "Assistant Professor (On Contract)",
    "department": "Science & Humanities",
    "image": "https://fisat.ac.in/wp-content/uploads/2025/10/Arun-Gopi-ORIGINAL.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-arun-gopi/"
  },
  {
    "name": "Dr. Arun Kumar M N",
    "designation": "Professor",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3810.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-arun-kumar-m-n/"
  },
  {
    "name": "Dr. Asha Joseph",
    "designation": "Professor",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/Asha-Joseph.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-asha-joseph/"
  },
  {
    "name": "Dr. Ayswarya E P",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Science & Humanities",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3942.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-ayswarya-e-p/"
  },
  {
    "name": "Dr. Basil K Jeemon",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A2882.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-basil-k-jeemon/"
  },
  {
    "name": "Dr. Beena B R",
    "designation": "Associate Professor",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/Beena.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-beena-b-r/"
  },
  {
    "name": "Dr. Bejoy Varghese",
    "designation": "Associate Professor & HoD",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4687.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-bejoy-varghese/",
    "focus": "Embedded systems, image processing, robotics and IoT"
  },
  {
    "name": "Dr. Biji U Nair",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Business Administration",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/08/0A3A3800.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-biji-u-nair/"
  },
  {
    "name": "Dr. Deepa Mary Mathews",
    "designation": "Associate Professor",
    "department": "Computer Applications",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/IMG-20240315-WA0003.jpg",
    "profile": "https://fisat.ac.in/faculty/deepa-mary-mathews/"
  },
  {
    "name": "Dr. Devi Parvathy S",
    "designation": "Associate Professor",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/10/0A3A4042.jpg",
    "profile": "https://fisat.ac.in/faculty/devi-parvathy-s/"
  },
  {
    "name": "Dr. Elizabeth George",
    "designation": "Director",
    "department": "Business Administration",
    "image": "https://fisat.ac.in/wp-content/uploads/2024/10/Dr.-Elizabeth-George.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-elizabeth-george/"
  },
  {
    "name": "Dr. Harish T M",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/10/0A3A4643.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-harish-t-m/"
  },
  {
    "name": "Dr. Hema Krishnan",
    "designation": "Associate Professor",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/Screenshot-2026-07-21-173344.png",
    "profile": "https://fisat.ac.in/faculty/dr-hema-krishnan/",
    "focus": "Artificial intelligence, data mining and machine learning"
  },
  {
    "name": "Dr. Ierin Babu(On Contract)",
    "designation": "Assistant Professor",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2024/07/ierin.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-ierin-babu/"
  },
  {
    "name": "Dr. Jacob Thomas V",
    "designation": "Principal & Professor",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2026/01/Dr.-Jacob-Thomas-V.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-jacob-thomas-v/"
  },
  {
    "name": "Dr. Jiji Antony",
    "designation": "Professor",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/a-scaled.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-jiji-antony/"
  },
  {
    "name": "Dr. Jose Cherian",
    "designation": "Professor and Dean (DQA)",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/10/0A3A4505.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-jose-cherian/"
  },
  {
    "name": "Dr. Jose Varghese",
    "designation": "Professor",
    "department": "Business Administration",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/08/0A3A3799.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-jose-varghese/"
  },
  {
    "name": "Dr. Jyothish K John",
    "designation": "DEAN and Controller of Examinations",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/Jyothish.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-jyothish-k-john/"
  },
  {
    "name": "Dr. Kavitha P.E",
    "designation": "Professor & HoD",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/WhatsApp-Image-2025-09-19-at-11.53.01-AM-1-e1758266891743.jpeg",
    "profile": "https://fisat.ac.in/faculty/dr-kavitha-p-e/"
  },
  {
    "name": "Dr. Keerthi G Nair",
    "designation": "Assistant Professor",
    "department": "Science & Humanities",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/9399.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-keerthi-g-nair/"
  },
  {
    "name": "Dr. Manju Joy",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Computer Applications",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3840.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-manju-joy/"
  },
  {
    "name": "Dr. Megha Mohan",
    "designation": "Assistant Professor (On Contract)",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-01-at-3.53.12-PM.jpeg",
    "profile": "https://fisat.ac.in/faculty/dr-megha-mohan/"
  },
  {
    "name": "Dr. Mini P R",
    "designation": "Vice Principal",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3989.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-mini-p-r/"
  },
  {
    "name": "Dr. Neenu Johnson",
    "designation": "Associate Professor",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4683.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-neenu-johnson/"
  },
  {
    "name": "Dr. Nishanth R",
    "designation": "Assistant Professor",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2026/07/Nishanth-R.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-nishanth-r/"
  },
  {
    "name": "Dr. Nishida A",
    "designation": "Assistant Professor (On Contract)",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-15-at-4.59.26-PM.jpeg",
    "profile": "https://fisat.ac.in/faculty/dr-nishida-a/"
  },
  {
    "name": "Dr. Paul P Mathai",
    "designation": "Professor & HoD",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/WhatsApp-Image-2026-07-25-at-9.38.35-PM.jpeg",
    "profile": "https://fisat.ac.in/faculty/dr-paul-p-mathai/",
    "focus": "Artificial intelligence, machine learning and data mining"
  },
  {
    "name": "Dr. Rakhi Venugopal",
    "designation": "Associate Professor",
    "department": "Computer Applications",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4551.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-rakhi-venugopal/"
  },
  {
    "name": "Dr. Rejeesh C R",
    "designation": "Professor & HoD",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/10/0A3A2884.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-rejeesh-c-r/"
  },
  {
    "name": "Dr. Reshmi R",
    "designation": "Associate Professor",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3839.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-reshmi-r/"
  },
  {
    "name": "Dr. Rishi Ramakrishnan L",
    "designation": "Assistant Professor (On Contract)",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2026/06/rishi.png",
    "profile": "https://fisat.ac.in/faculty/dr-rishi-ramakrishnan-l/"
  },
  {
    "name": "Dr. Rose Mary Mathew",
    "designation": "Associate Professor",
    "department": "Computer Applications",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3818.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-rose-mary-mathew/"
  },
  {
    "name": "Dr. S Sundararajan",
    "designation": "Associate Professor",
    "department": "Electronics & Instrumentation Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A2862.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-s-sundararajan/"
  },
  {
    "name": "Dr. Santhosh Kottam",
    "designation": "Professor",
    "department": "Computer Applications",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A2909-e1676624522173.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-santhosh-kottam/"
  },
  {
    "name": "Dr. Shahna K U",
    "designation": "Associate Professor & HoD",
    "department": "Computer Applications",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/nas-new.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-shahna-k-u/"
  },
  {
    "name": "Dr. Sindhu George",
    "designation": "Associate Professor",
    "department": "Business Administration",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/Sindhu-George.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-sindhu-george/"
  },
  {
    "name": "Dr. Siyamol Chirakkarottu",
    "designation": "Associate Professor",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4461.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-siyamol-chirakkarottu/"
  },
  {
    "name": "Dr. Sona Narayanan",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Science & Humanities",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4458.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-sona-narayanan/"
  },
  {
    "name": "Dr. Sreenish S R",
    "designation": "Assistant Professor(Senior Grade)",
    "department": "Business Administration",
    "image": "https://fisat.ac.in/wp-content/uploads/2023/11/sreenish_fisat.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-sreenish-s-r/"
  },
  {
    "name": "Dr. Sujesh P Lal",
    "designation": "Associate Professor",
    "department": "Computer Applications",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/Sujesh.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-sujesh-p-lal/"
  },
  {
    "name": "Dr. Sumanlal M R",
    "designation": "Professor and Dean (DOST)",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/10/0A3A3969.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-sumanlal-m-r/"
  },
  {
    "name": "Dr. Sumayya Naznin P H",
    "designation": "Assistant Professor(Special Grade)",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/Sumayya.jpeg",
    "profile": "https://fisat.ac.in/faculty/ms-sumayya-naznin-p-h/"
  },
  {
    "name": "Dr. Surya Natarajan",
    "designation": "Associate Professor",
    "department": "Electrical & Electronics Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/SN.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-surya-natarajan/"
  },
  {
    "name": "Dr. Unni Kartha G",
    "designation": "Dean (Planning & Development / R&D / International Relations)",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2023/05/Dr.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-unni-kartha-g/"
  },
  {
    "name": "Dr. Unnikrishnan S",
    "designation": "Assistant Professor (On Contract)",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-06-at-4.48.25-PM.jpeg",
    "profile": "https://fisat.ac.in/faculty/dr-unnikrishnan-s/"
  },
  {
    "name": "Dr.Parvathy.R",
    "designation": "Professor",
    "department": "Electrical & Electronics Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/PR.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-parvathy-r/"
  },
  {
    "name": "Dr.Rinku Scaria",
    "designation": "Assistant Professor(Special Grade)",
    "department": "Electrical & Electronics Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/RKS.png",
    "profile": "https://fisat.ac.in/faculty/ms-rinku-scaria/"
  },
  {
    "name": "Dr.Sreevidya P",
    "designation": "Associate Professor",
    "department": "Electronics & Instrumentation Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/SREEVIDYA-1.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-sreevidya-p/"
  },
  {
    "name": "Dr.Surya Susan Alex",
    "designation": "Associate Professor & HoD",
    "department": "Electrical & Electronics Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/SSA.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-surya-susan-alex/"
  },
  {
    "name": "Lt. Dr. Prasad J C",
    "designation": "Professor ,Associate NCC Officer",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/PJC.jpg",
    "profile": "https://fisat.ac.in/faculty/dr-prasad-j-c/"
  },
  {
    "name": "Mr. Abin Thomas C A",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A2879.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-abin-thomas-c-a/"
  },
  {
    "name": "Mr. Amal Dev T S",
    "designation": "Assistant Professor",
    "department": "Science & Humanities",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/Amal-1.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-amal-dev-t-s/"
  },
  {
    "name": "Mr. Anish Menachery",
    "designation": "Assistant Professor",
    "department": "Business Administration",
    "image": "https://fisat.ac.in/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-10-at-4.21.03-PM.jpeg",
    "profile": "https://fisat.ac.in/faculty/mr-anish-menachery/"
  },
  {
    "name": "Mr. Anoop E G",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3882.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-anoop-e-g/"
  },
  {
    "name": "Mr. Anoop Sankar",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/10/0A3A3815.jpg",
    "profile": "https://fisat.ac.in/faculty/anoop-sankar/"
  },
  {
    "name": "Mr. Arun J Kulangara",
    "designation": "Assistant Professor",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/10/0A3A4003.jpg",
    "profile": "https://fisat.ac.in/faculty/arun-j-kulangara/"
  },
  {
    "name": "Mr. Benoy Abraham",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4501.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-benoy-abraham/"
  },
  {
    "name": "Mr. Dileep G",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/10/0A3A3813.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-dileep-g/"
  },
  {
    "name": "Mr. Febin Raju",
    "designation": "Assistant Professor (on contract)",
    "department": "Electrical & Electronics Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-19-at-15.58.09.jpeg",
    "profile": "https://fisat.ac.in/faculty/febin-raju/"
  },
  {
    "name": "Mr. Jinesh Vinayachandran",
    "designation": "Adjunct Faculty",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2026/09/Jinesh.jpeg",
    "profile": "https://fisat.ac.in/faculty/mr-jinesh-vinayachandran-2/"
  },
  {
    "name": "Mr. Joseph Pappachan",
    "designation": "Assistant Professor (On Contract)",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-21-at-4.06.56-PM.jpeg",
    "profile": "https://fisat.ac.in/faculty/mr-joseph-pappachan/"
  },
  {
    "name": "Mr. Likhil Gopalan",
    "designation": "Assistant Professor (On Contract)",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-21-at-8.41.14-PM.jpeg",
    "profile": "https://fisat.ac.in/faculty/mr-likhil-gopalan/"
  },
  {
    "name": "Mr. Mahesh C",
    "designation": "Assistant Professor (Senior Grade) cum Chief Technical Officer",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4689.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-mahesh-c/"
  },
  {
    "name": "Mr. Nithin Rajan",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Computer Applications",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A2918.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-nithin-rajan/"
  },
  {
    "name": "Mr. Nizamudeen Akbar",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Science & Humanities",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3780.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-nizamudeen-akbar/"
  },
  {
    "name": "Mr. Pankaj Kumar G",
    "designation": "Assistant Professor (Special Grade) & Senior Solutions Architect",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3809.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-pankaj-kumar-g/"
  },
  {
    "name": "Mr. Prasanth V",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Business Administration",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/prasanth_fisat.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-prasanth-v/"
  },
  {
    "name": "Mr. Prashanth P John",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Business Administration",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/prashanth-p-john_Photo.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-prashanth-p-john/"
  },
  {
    "name": "Mr. Praveen V",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Business Administration",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/08/0A3A4588.jpg",
    "profile": "https://fisat.ac.in/faculty/praveen-v/"
  },
  {
    "name": "Mr. Priyadarshi Dutt",
    "designation": "Assistant Professor (On Contract)",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2025/08/dutt-1.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-priyadarshi-dutt/"
  },
  {
    "name": "Mr. Sajan S",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/10/0A3A4429.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-sajan-s/"
  },
  {
    "name": "Mr. Sarath S",
    "designation": "Assistant Professor (On Contract)",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2025/09/sarath-poto-1.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-sarath-s/"
  },
  {
    "name": "Mr. Sreejesh K",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/10/0A3A4465.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-sreejesh-k/"
  },
  {
    "name": "Mr. Sreerath S",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A2864.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-sreerath-s/"
  },
  {
    "name": "Mr. Stany E George",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Electrical & Electronics Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/SG.jpg",
    "profile": "https://fisat.ac.in/faculty/2433/"
  },
  {
    "name": "Mr. Sumesh G",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Science & Humanities",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3965.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-sumesh-g/"
  },
  {
    "name": "Mr. Syam K",
    "designation": "Assistant Professor (On Contract)",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2025/08/shyam-sir.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-syam-k/"
  },
  {
    "name": "Mr. Thomas Philip",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Science & Humanities",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3887.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-thomas-philip/"
  },
  {
    "name": "Mr. Vishnu Mohan K",
    "designation": "Adjunct Faculty",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2026/02/Vishnu.jpeg",
    "profile": "https://fisat.ac.in/faculty/11399/"
  },
  {
    "name": "Mr.Prince Mattom",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/10/0A3A4534.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-prince-mattom/"
  },
  {
    "name": "Mr.Rahul V",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/10/0A3A4444.jpg",
    "profile": "https://fisat.ac.in/faculty/rahul-v/"
  },
  {
    "name": "Mr.Raju M D",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/10/0A3A4431.jpg",
    "profile": "https://fisat.ac.in/faculty/raju-m-d/"
  },
  {
    "name": "Mr.Srijith Rajeev",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/10/0A3A4560.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-srejith-rajeev/"
  },
  {
    "name": "Mr.Tom Anto",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/10/0A3A4423.jpg",
    "profile": "https://fisat.ac.in/faculty/tom-anto/"
  },
  {
    "name": "Mr.Unnikrishnan S Nair",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/10/0A3A3972.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-unnikrishnan-s-nair/"
  },
  {
    "name": "Ms. Abhiya Abbas Mundol",
    "designation": "Assistant Professor(Special Grade)",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A4598.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-abhiya-abbas-mundol/"
  },
  {
    "name": "Ms. Aiswariya Raj",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4039-1.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-aiswariya-raj/"
  },
  {
    "name": "Ms. Amala Mary",
    "designation": "Assistant Professor",
    "department": "Business Administration",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/08/0A3A4595.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-amala-mary/"
  },
  {
    "name": "Ms. Anagha R",
    "designation": "Assistant Professor (On Contract)",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2026/06/ANAGHA-1-1.JPG.jpeg",
    "profile": "https://fisat.ac.in/faculty/anagha-r/"
  },
  {
    "name": "Ms. Ancy Antony(On Contract)",
    "designation": "Assistant Professor",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-28-at-10.08.43-AM.jpeg",
    "profile": "https://fisat.ac.in/faculty/ms-ancy-antony/"
  },
  {
    "name": "Ms. Anila Mathew",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Electronics & Instrumentation Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4639.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-anila-mathew/"
  },
  {
    "name": "Ms. Anisha Antu(On Contract)",
    "designation": "Assistant Professor",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2024/09/pp-.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-anisha-antu/"
  },
  {
    "name": "Ms. Anitha T Nair",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3831.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-anitha-t-nair/"
  },
  {
    "name": "Ms. Anju L",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Computer Applications",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4553.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-anju-l/"
  },
  {
    "name": "Ms. Anna Rose Varghese",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A4546.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-anna-rose-varghese/"
  },
  {
    "name": "Ms. Arya Chandran",
    "designation": "Assistant Professor",
    "department": "Science & Humanities",
    "image": "https://fisat.ac.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-07-03-at-7.32.31-PM.jpeg",
    "profile": "https://fisat.ac.in/faculty/ms-arya-chandran/"
  },
  {
    "name": "Ms. Aswathy M A",
    "designation": "Assistant Professor",
    "department": "Science & Humanities",
    "image": "https://fisat.ac.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-07-03-at-7.32.21-PM.jpeg",
    "profile": "https://fisat.ac.in/faculty/ms-aswathy-m-a/"
  },
  {
    "name": "Ms. Beenu Riju",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Electronics & Instrumentation Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4679.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-beenu-riju/"
  },
  {
    "name": "Ms. Bini V K",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4033-1.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-bini-v-k/"
  },
  {
    "name": "Ms. Chethna Joy",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4531.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-chethna-joy/"
  },
  {
    "name": "Ms. Christy Jose",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3854-1.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-christy-jose/"
  },
  {
    "name": "Ms. Deena Jose(On Contract)(On Contract)",
    "designation": "Assistant Professor",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2025/07/IMG_20241105_143337.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-deena-jose/"
  },
  {
    "name": "Ms. Deepa N R",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A2838.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-deepa-n-r/"
  },
  {
    "name": "Ms. Dhanya S",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A2897.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-dhanya-s/"
  },
  {
    "name": "Ms. Dhanya T G",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Science & Humanities",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3772.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-dhanya-t-g/"
  },
  {
    "name": "Ms. Divya John",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4684.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-divya-john/",
    "focus": "Data structures, database systems and cryptography"
  },
  {
    "name": "Ms. Elza George",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3950-1.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-elza-george/"
  },
  {
    "name": "Ms. Gayathri I K",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4547-1.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-gayathri-i-k/"
  },
  {
    "name": "Ms. Gayathri I K",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4547-1.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-gayathri-i-k-on-deputation-from-ece/"
  },
  {
    "name": "Ms. Geethu P.C(On Contract)",
    "designation": "Assistant Professor",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2025/07/passport-size-photo.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-geethu-p-c/"
  },
  {
    "name": "Ms. Gisha P S",
    "designation": "Assistant Professor (Senior Grade) & HOD",
    "department": "Science & Humanities",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3763.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-gisha-p-s/"
  },
  {
    "name": "Ms. Hansa J Thattil",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4529.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-hansa-j-thattil/"
  },
  {
    "name": "Ms. Honey Devassy",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Electronics & Instrumentation Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A2828.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-honey-devassy/"
  },
  {
    "name": "Ms. Honeymol P Chacko",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Science & Humanities",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3979.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-honeymol-p-chacko/"
  },
  {
    "name": "Ms. Jeslin P Jo",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/Jeslin.png",
    "profile": "https://fisat.ac.in/faculty/ms-jeslin-p-jo/"
  },
  {
    "name": "Ms. Jilu George",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3842-1.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-jilu-george/"
  },
  {
    "name": "Ms. Jishna N V(On Contract)",
    "designation": "Assistant Professor",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2025/07/1000505722.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-jishna-n-v/"
  },
  {
    "name": "Ms. Jismy Mathew",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/WhatsApp-Image-2025-09-17-at-9.04.59-PM1-e1758185934577.jpeg",
    "profile": "https://fisat.ac.in/faculty/ms-jismy-mathew/"
  },
  {
    "name": "Ms. Joice .T",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Computer Applications",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/IMG-20251216-WA0002.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-joice-t/"
  },
  {
    "name": "Ms. Karthika V",
    "designation": "Assistant Professor",
    "department": "Science & Humanities",
    "image": "https://fisat.ac.in/wp-content/uploads/2023/02/0A3A4602.jpg",
    "profile": "https://fisat.ac.in/faculty/mrs-karthika-v/"
  },
  {
    "name": "Ms. Keerthi Sabu",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A2734aaa.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-keerthi-sabu/"
  },
  {
    "name": "Ms. Lakshmi S",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3921.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-lakshmi-s/"
  },
  {
    "name": "Ms. Leena Thomas",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4669-1.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-leena-thomas/"
  },
  {
    "name": "Ms. Lidiya P M",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A3987.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-lidiya-p-m/"
  },
  {
    "name": "Ms. Meenu Mathew",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4485.jpg",
    "profile": "https://fisat.ac.in/faculty/meenu-mathew/"
  },
  {
    "name": "Ms. Meera Treesa Mathews",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3837.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-meera-treesa-mathews/"
  },
  {
    "name": "Ms. Merin Cherian",
    "designation": "Assistant Professor(Special Grade)",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4626.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-merin-cherian/"
  },
  {
    "name": "Ms. Merin Thomas",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Business Administration",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/08/0A3A4590.jpg",
    "profile": "https://fisat.ac.in/faculty/merin-thomas/"
  },
  {
    "name": "Ms. Minu Kuriakose",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3845.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-minu-kuriakose/"
  },
  {
    "name": "Ms. Neena K A",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A2901.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-neena-k-a/"
  },
  {
    "name": "Ms. Neeraja Nair (On leave)",
    "designation": "Assistant Professor(Special Grade)",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A4573.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-neeraja-nair/"
  },
  {
    "name": "Ms. Neha Beegam P.E(On Contract)",
    "designation": "Assistant Professor",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2025/07/NEHA-PHOTO.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-neha-beegam-p-e/"
  },
  {
    "name": "Ms. Nimmy M Philip",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A2840.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-nimmy-m-philip/"
  },
  {
    "name": "Ms. Nincy Jose",
    "designation": "Assistant Professor(Special Grade)",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A4542.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-nincy-jose/"
  },
  {
    "name": "Ms. Nisha R",
    "designation": "Assistant Professor(Special Grade)",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4644.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-nisha-r/"
  },
  {
    "name": "Ms. Nisreen M Ali(On Contract)",
    "designation": "Assistant Professor",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2025/01/329496.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-nisreen-m-ali/"
  },
  {
    "name": "Ms. Nithya Paul(On Contract)",
    "designation": "Assistant Professor",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2023/09/Nithya-Paul.jpg",
    "profile": "https://fisat.ac.in/faculty/nithya-paul/"
  },
  {
    "name": "Ms. Nyci Ignatius",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Science & Humanities",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3760.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-nyci-ignatius/"
  },
  {
    "name": "Ms. Panjami K",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A4512.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-panjami-k/"
  },
  {
    "name": "Ms. Parvathy G Menon",
    "designation": "Assistant Professor",
    "department": "Science & Humanities",
    "image": "https://fisat.ac.in/wp-content/uploads/2023/06/Parvathy.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-parvathy-g-menon/"
  },
  {
    "name": "Ms. Pearlsy P V",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3867.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-pearlsy-p-v/"
  },
  {
    "name": "Ms. Preethi N P",
    "designation": "Assistant Professor(Senior Grade)",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3922.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-preethi-n-p/"
  },
  {
    "name": "Ms. Rajalakshmi T R",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A4470.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-rajalakshmi-t-r/"
  },
  {
    "name": "Ms. Raji P",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Electronics & Instrumentation Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4447.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-raji-p/"
  },
  {
    "name": "Ms. Remya R",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3834.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-remya-r/"
  },
  {
    "name": "Ms. Reshma Prasad",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A4467.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-reshma-prasad/"
  },
  {
    "name": "Ms. Rinu J Achison",
    "designation": "Assistant Professor- Senior Grade",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/Rinu.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-rinu-j-achison/"
  },
  {
    "name": "Ms. Roshna K I",
    "designation": "Assistant Professor(Senior Grade)",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4481.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-roshna-k-i/"
  },
  {
    "name": "Ms. Sajana Shamsuddin",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Science & Humanities",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/Sajana.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-sajana-shamsuddin/"
  },
  {
    "name": "Ms. Sanitha P S(On Contract)",
    "designation": "Assistant Professor",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2025/07/1000109582.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-sanitha-p-s/"
  },
  {
    "name": "Ms. Senu Abi",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Computer Applications",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3806.jpg",
    "profile": "https://fisat.ac.in/faculty/senu-abi/"
  },
  {
    "name": "Ms. Sharon Jacob",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A4630.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-sharon-jacob/"
  },
  {
    "name": "Ms. Sheelu Susan Mathews",
    "designation": "Assistant Professor(Special Grade)",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3857.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-sheelu-susan-mathews/"
  },
  {
    "name": "Ms. Sheelu Susan Mathews",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3857.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-sheelu-susan-mathews-on-deputation-from-ece/"
  },
  {
    "name": "Ms. Sheffy Thomas",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Electronics & Instrumentation Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/sheffy-thomas.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-sheffy-thomas/"
  },
  {
    "name": "Ms. Shimy Joseph",
    "designation": "Assistant Professor (Senior Grade) & Deputy Controller of Examinations",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3770-1.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-shimy-joseph/"
  },
  {
    "name": "Ms. Shruthi Chandran",
    "designation": "Assistant Professor",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2026/07/Shruthi-Chandran-1-1.jpeg",
    "profile": "https://fisat.ac.in/faculty/shruthi-chandran/"
  },
  {
    "name": "Ms. Simi Stephen",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/Simi-Stephen-1.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-simi-stephen/"
  },
  {
    "name": "Ms. Sona Mary Louis",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Computer Applications",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/IMG-20250220-WA0014.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-sona-mary-louis/"
  },
  {
    "name": "Ms. Soney R Nadh(On Contract)",
    "designation": "Assistant Professor",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2024/08/Soney.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-soney-r-nadh/"
  },
  {
    "name": "Ms. Soosan Francis(On Contract)",
    "designation": "Assistant Professor",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2025/07/soosan-Francis.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-soosan-francis/"
  },
  {
    "name": "Ms. Sophiya Mathews(On Contract)",
    "designation": "Assistant Professor",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2024/07/Sophiya.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-sophiya-mathews/"
  },
  {
    "name": "Ms. Soumya S Raj",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4460.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-soumya-s-raj/"
  },
  {
    "name": "Ms. Soumya Simon",
    "designation": "Assistant Professor(Senior Grade)",
    "department": "Electrical & Electronics Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/SSN.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-soumya-simon/"
  },
  {
    "name": "Ms. Sowmya V Krishnankutty",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A2733aaaa.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-soumya-v-krishnakutty/"
  },
  {
    "name": "Ms. Sreelekshmy S",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4674-1.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-sreelekshmy-s/"
  },
  {
    "name": "Ms. Sruthy Suresh",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A2852.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-sruthy-suresh/"
  },
  {
    "name": "Ms. Subha Thomas",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A2896.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-subha-thomas/",
    "focus": "Machine learning, medical imaging and deep learning"
  },
  {
    "name": "Ms. Surumi Hassainar",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Electrical & Electronics Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/SH.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-surumi-hassainar/"
  },
  {
    "name": "Ms. Vidya T P",
    "designation": "Assistant Professor(Senior Grade)",
    "department": "Science & Humanities",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/VIDYA.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-vidya-t-p/"
  },
  {
    "name": "Ms. Vinitha V",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/Vinitha.png",
    "profile": "https://fisat.ac.in/faculty/ms-vinitha-v/"
  },
  {
    "name": "Ms.Anisha Joseph",
    "designation": "Assistant Professor (Special Grade)",
    "department": "Science & Humanities",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3868.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-anisha-joseph/"
  },
  {
    "name": "Ms.Deepa K",
    "designation": "Assistant Professor(Senior Grade)",
    "department": "Electrical & Electronics Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/DK.jpg",
    "profile": "https://fisat.ac.in/faculty/deepa-k/"
  },
  {
    "name": "Ms.Jyothi.G.K",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Electrical & Electronics Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/JGK.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-jyothi-g-k/"
  },
  {
    "name": "Ms.Rakhee.R",
    "designation": "Assistant Professor(Senior Grade)",
    "department": "Electrical & Electronics Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/RKR.jpg",
    "profile": "https://fisat.ac.in/faculty/rakhee-r/"
  },
  {
    "name": "Ms.Sreeja E A",
    "designation": "Assistant Professor(Senior Grade)",
    "department": "Electrical & Electronics Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/SEA.jpg",
    "profile": "https://fisat.ac.in/faculty/sreeja-e-a/"
  },
  {
    "name": "Ms.Suni Mathai",
    "designation": "Assistant Professor (Senior Grade)",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/10/0A3A4647.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-suni-mathai/"
  },
  {
    "name": "Ms.Veena Wilson",
    "designation": "Assistant Professor(Special Grade)",
    "department": "Electrical & Electronics Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/WhatsApp-Image-2026-04-06-at-12.04.36.jpeg",
    "profile": "https://fisat.ac.in/faculty/ms-veena-wilson/"
  },
  {
    "name": "Mr. Abhilash K K",
    "designation": "Trade Instructor",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-07-at-1.36.28-PM.jpeg",
    "profile": "https://fisat.ac.in/faculty/mr-abhilash-k-k/"
  },
  {
    "name": "Mr. Abhishek P W",
    "designation": "Lab Instructor cum Civil Supervisor",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-07-at-7.35.59-PM.jpeg",
    "profile": "https://fisat.ac.in/faculty/mr-abhishek-p-w/"
  },
  {
    "name": "Mr. Aravind Balan",
    "designation": "Lab Instructor Grade III",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A3953.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-aravind-balan/"
  },
  {
    "name": "Mr. Benny George",
    "designation": "Trade Instructor Gr.II",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A3852-1.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-benny-george/"
  },
  {
    "name": "Mr. Eldho A I",
    "designation": "Lab Instructor cum Supervisor",
    "department": "Electrical & Electronics Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/ELDHO-1.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-eldho-a-i/"
  },
  {
    "name": "Mr. Gireeshkumar M R",
    "designation": "Trade Instructor 1st Grade cum General Maintenance Assistant",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/10/0A3A3937.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-gireeshkumar-m-r/"
  },
  {
    "name": "Mr. Gopan G",
    "designation": "Workshop Superintendent",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/10/0A3A4427.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-gopan-g/"
  },
  {
    "name": "Mr. Habin Varghese",
    "designation": "Lab Instructor",
    "department": "Electrical & Electronics Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-06-at-12.08.27.jpeg",
    "profile": "https://fisat.ac.in/faculty/mr-habyn-varghese/"
  },
  {
    "name": "Mr. Jaison Joseph",
    "designation": "Civil Supervisor",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A3874.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-jaison-joseph/"
  },
  {
    "name": "Mr. Mani K K",
    "designation": "Workshop Co Ordinator cum Admission Associate",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/10/0A3A4408.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-mani-k-k/"
  },
  {
    "name": "Mr. Minju Rajan",
    "designation": "Trade Instructor",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2026/09/minju.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-minju-rajan/"
  },
  {
    "name": "Mr. Pradeepkumar P",
    "designation": "Trade Instructor cum Electrician",
    "department": "Electrical & Electronics Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/PRADEEP.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-pradeepkumar-p/"
  },
  {
    "name": "Mr. Rojan Peter",
    "designation": "Lab Instructor cum Civil Supervisor",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-06-at-10.36.44-AM.jpeg",
    "profile": "https://fisat.ac.in/faculty/rojan-peter/"
  },
  {
    "name": "Mr. Shibu Ramakrishnan",
    "designation": "Trade Instructor Grade I",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A3850-1.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-shibu-ramakrishnan/"
  },
  {
    "name": "Mr. SunilKumar V S",
    "designation": "Lab Instructor Grade 2",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/10/0A3A4415.jpg",
    "profile": "https://fisat.ac.in/faculty/sunilkumar-v-s/"
  },
  {
    "name": "Mr. Suresh E G",
    "designation": "Trade Instructor cum General Maintenance Assistant",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/10/0A3A2867.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-suresh-e-g/"
  },
  {
    "name": "Mr. Thomas Francis",
    "designation": "Lab Instructor",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-02-at-3.08.27-PM.jpeg",
    "profile": "https://fisat.ac.in/faculty/mr-thomas-francis/"
  },
  {
    "name": "Mr. Varun P Nair",
    "designation": "Lab Instructor Grade III",
    "department": "Computer Applications",
    "image": "https://fisat.ac.in/wp-content/uploads/2023/03/0A3A3947.jpeg",
    "profile": "https://fisat.ac.in/faculty/mr-varun-p-nair-2/"
  },
  {
    "name": "Mr.Denny Vadakumcherry",
    "designation": "Electrical Supervisor",
    "department": "Electrical & Electronics Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2025/07/Denny-for-website.png",
    "profile": "https://fisat.ac.in/faculty/denny-vadakumcherry/"
  },
  {
    "name": "Mr.Gokul Varma M",
    "designation": "Lab Instructor Grade III",
    "department": "Electronics & Instrumentation Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4455-1.jpg",
    "profile": "https://fisat.ac.in/faculty/gokul-varma-m/"
  },
  {
    "name": "Mr.Jisto Varghese",
    "designation": "Trade Instructor cum General Maintenance Assistant",
    "department": "Mechanical Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/10/0A3A3789.jpg",
    "profile": "https://fisat.ac.in/faculty/mr-jisto-varghese/"
  },
  {
    "name": "Mr.Unnikrishnan P L",
    "designation": "Lab Instructor Grade III",
    "department": "Electronics & Instrumentation Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4474.jpg",
    "profile": "https://fisat.ac.in/faculty/unnikrishnan-p-l/"
  },
  {
    "name": "Ms. Ambili N Menon",
    "designation": "Lab Instructor Grade II",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A4017.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-ambili-n-menon/"
  },
  {
    "name": "Ms. Ambily Sekar C",
    "designation": "Lab Instructor Grade II",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A4496.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-ambily-sekar-c/"
  },
  {
    "name": "Ms. Aswathy Balagopal",
    "designation": "Lab Demonstrator in English",
    "department": "Science & Humanities",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A3899.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-aswathy-balagopal/"
  },
  {
    "name": "Ms. Bini T Abraham",
    "designation": "Lab Instructor Grade I",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/Bini-1.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-bini-t-abraham/"
  },
  {
    "name": "Ms. Hani V S",
    "designation": "Lab Instructor cum Civil Supervisor",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2025/09/11f63086-9af0-48a4-a76b-cfdde2dc4fac.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-hani-v-s/"
  },
  {
    "name": "Ms. Joicy K Jose",
    "designation": "Lab Instructor",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2024/12/Joicy.jpg",
    "profile": "https://fisat.ac.in/faculty/9567/"
  },
  {
    "name": "Ms. Laly V V",
    "designation": "Lab Instructor Grade I",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/Lally.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-laly-v-v/"
  },
  {
    "name": "Ms. Neeba Cheriyachan",
    "designation": "Lab Instructor Grade II",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/Neeba-1.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-neeba-cheriyachan/"
  },
  {
    "name": "Ms. Neema V P",
    "designation": "Lab Instructor (on contract)",
    "department": "Electrical & Electronics Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2026/01/1000571404-e1768899568592.jpg",
    "profile": "https://fisat.ac.in/faculty/neema/"
  },
  {
    "name": "Ms. Nisha P M",
    "designation": "Lab Demonstrator in Chemistry",
    "department": "Science & Humanities",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4450.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-nisha-p-m/"
  },
  {
    "name": "Ms. Nitha Vijoy",
    "designation": "Fitness Trainer",
    "department": "Science & Humanities",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4540.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-nitha-bijoy/"
  },
  {
    "name": "Ms. Nithya S Varma",
    "designation": "Lab Demonstrator in Physics-Pursuing part time PhD in Physics",
    "department": "Science & Humanities",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/06/0A3A4449.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-nithya-s-varma/"
  },
  {
    "name": "Ms. Noma Mathew M",
    "designation": "Lab Instructor Grade I",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A4019.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-noma-mathew/"
  },
  {
    "name": "Ms. Salini T R",
    "designation": "Lab Instructor Grade III",
    "department": "Computer Applications",
    "image": "https://fisat.ac.in/wp-content/uploads/2023/03/Salini-1.jpeg",
    "profile": "https://fisat.ac.in/faculty/ms-salini-t-r-2/"
  },
  {
    "name": "Ms. Sandhya O C",
    "designation": "Lab Instructor Grade II",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A4493.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-sandhya-o-c/"
  },
  {
    "name": "Ms. Sheela K George (Daily Wages)",
    "designation": "Lab Instructor Grade I",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A4437-1.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-sheela-k-george/"
  },
  {
    "name": "Ms. Shiji Jaison",
    "designation": "Trade Instructor",
    "department": "Civil Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A3907.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-shiji-jaison/"
  },
  {
    "name": "Ms. SINDHOORY K S",
    "designation": "Lab Instructor",
    "department": "Electronics & Communication Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2026/07/sindhoory-Picsart-AiImageEnhancer.png",
    "profile": "https://fisat.ac.in/faculty/ms-sindhoory-k-s/"
  },
  {
    "name": "Ms. Smija M B",
    "designation": "Lab Instructor",
    "department": "Computer Applications",
    "image": "https://fisat.ac.in/wp-content/uploads/2024/12/Smija.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-smija-m-b/"
  },
  {
    "name": "Ms. Sreelalithambika P K",
    "designation": "Lab Instructor Grade II",
    "department": "Computer Science & Engineering",
    "image": "https://fisat.ac.in/wp-content/uploads/2022/07/0A3A4022.jpg",
    "profile": "https://fisat.ac.in/faculty/ms-sreelalithambika-p-k/"
  }
];

export const facultyDepartments = ["All departments", ...departments.map((department) => department.name)];
export const facultyDesignations = ["All designations", ...Array.from(new Set(faculty.map((member) => member.designation))).sort((a, b) => a.localeCompare(b))];
export const facultyDirectorySource = "https://fisat.ac.in/faculty/";
export const facultyRosterCheckedOn = "7 October 2026";
