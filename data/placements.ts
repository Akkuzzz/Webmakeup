export type PlacementYear="2026"|"2025"|"2024"|"2023";
export type PlacementRecord={
  year:PlacementYear;
  cohort:string;
  asOf:string;
  offers:string;
  highest:string;
  average:string;
  companies:string;
  highlights:string[];
  note:string;
};

export const placementRecords:Record<PlacementYear,PlacementRecord>={
  "2026":{
    year:"2026",cohort:"Class of 2026",asOf:"May 2026",offers:"Not shown",highest:"Not shown",average:"Not published",companies:"See official list",
    highlights:["The official placement page contains unresolved differences in its current batch summary.","Figures are not repeated on this dashboard until FISAT reconciles the public summary."],
    note:"Current 2026 summary figures are omitted because the FISAT page shows inconsistent batch totals and package figures. Check the official page for the latest update."
  },
  "2025":{
    year:"2025",cohort:"Class of 2025",asOf:"Official placement page",offers:"Not published",highest:"₹11 LPA",average:"No batch-wide figure",companies:"Names listed",
    highlights:["The official page reports an ₹11 LPA highest offer.","It reports stream averages of ₹5.2 LPA for Civil, Mechanical and Electrical and ₹5.7 LPA for Computer Science and Electronics.","The official source notes that the third recruitment phase was underway."],
    note:"The ₹5.2 LPA and ₹5.7 LPA numbers are department/stream averages in FISAT’s published copy, not a single batch-wide average. No aggregate average or offer/company count is inferred here."
  },
  "2024":{
    year:"2024",cohort:"Class of 2024",asOf:"Official placement page",offers:"484",highest:"₹47.88 LPA",average:"₹5.7 LPA",companies:"113",
    highlights:["FISAT reports 79 students with packages of ₹7 LPA or more.","Named recruiters include Amazon, TCS, SAP, Tata Elxsi, Cadence and Federal Bank.","The 2024 record is a historical cohort result, not a current-year projection."],
    note:"FISAT’s published placement summary reports these Class of 2024 results. Figures are presented as historical outcomes, not forecasts."
  },
  "2023":{
    year:"2023",cohort:"Class of 2023",asOf:"24 June 2024",offers:"741*",highest:"₹17 LPA",average:"₹5.18 LPA",companies:"120",
    highlights:["The dated source says 108 students secured packages of ₹7 LPA or more.","The 741 offers and 120 companies are explicitly dated 24 June 2024.","Named employers include TCS, CTS, IBM, Cadence, Federal Bank and ESAF."],
    note:"These Class of 2023 figures are shown by FISAT as of 24 June 2024; the asterisk is retained from the official page."
  }
};

export const placementSource="https://fisat.ac.in/placements/";
export const recruiters=["Amazon","TCS","CTS","IBM","Infosys","Accenture","SAP","Wipro","Cognizant","Tata Elxsi","People10","SOTI","UST","Cadence","Schneider Electric","Kalkitech","Federal Bank","ESAF","MRF","Apollo Tyres","Sobha","BARC","ONGC","Powergrid"];
