"use client";

import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { handleTabListKeyDown } from "@/components/keyboardTabs";
import { officialSources } from "@/data/updates";

const pathways = [
  { name: "B.Tech", copy: "Explore seven FISAT undergraduate engineering programmes and the current admission notices.", link: "https://fisat.ac.in/admission/" },
  { name: "M.Tech", copy: "Choose from FISAT's listed postgraduate engineering programmes, including options for working professionals.", link: "https://fisat.ac.in/pg-programs/" },
  { name: "MCA", copy: "Find current details for MCA and Integrated MCA directly from the FISAT admission pages.", link: "https://fisat.ac.in/admission/" },
  { name: "MBA", copy: "Explore the FISAT Business School pathway and its current admission information.", link: "https://fisat.ac.in/admission/" },
  { name: "Research", copy: "Read about doctoral research and connect with the FISAT Research and Development Cell.", link: "https://fisat.ac.in/college-research-cell/" }
] as const;

const steps = [
  { title: "Choose a programme", short: "Find the right fit", copy: "Start with the discipline and level that interest you. Review the programmes currently listed by FISAT.", bullets: ["Compare undergraduate, postgraduate, management and computer applications options", "Use the current official programme pages for intake and programme structure", "Save the official admission page for changes and deadlines"], link: "https://fisat.ac.in/ug-programs/", button: "Explore official programmes" },
  { title: "Check eligibility", short: "Read the current criteria", copy: "Eligibility depends on the programme and the current admission cycle. Read the latest FISAT criteria rather than relying on an old prospectus.", bullets: ["Open the admission page for the route you have chosen", "Confirm current academic requirements and selection process", "Contact the admissions desk if you need clarification"], link: officialSources.admissions, button: "View current eligibility" },
  { title: "Prepare documents", short: "Follow the checklist", copy: "Use the document list published by FISAT for your selected programme and admission route. Requirements can change by intake.", bullets: ["Download the current checklist from the official admissions page", "Keep the formats and supporting records stated by FISAT", "Do not submit personal records through this informational redesign"], link: officialSources.admissions, button: "Find official documents" },
  { title: "Apply", short: "Use FISAT’s application route", copy: "Submit through the official FISAT admissions process. This site does not collect applications or personal information.", bullets: ["Follow the current official notice", "Use the published application form and contact details", "Check your chosen programme before submitting"], link: officialSources.admissions, button: "Go to official admissions" },
  { title: "Complete admission", short: "Stay in touch", copy: "For current selection, next steps and support, refer to the official admissions office and the communications for your chosen route.", bullets: ["Monitor official FISAT communications", "Keep the admissions desk details close", "Confirm any remaining actions directly with FISAT"], link: "tel:+916282906237", button: "Call admissions desk" }
] as const;

export function AdmissionsGuide() {
  const [path, setPath] = useState(0);
  const [step, setStep] = useState(0);
  const activeStep = steps[step];

  return <div className="admissions-guide">
    <div className="pathway-tabs" role="tablist" aria-label="Admission routes" onKeyDown={handleTabListKeyDown}>{pathways.map((item, index) => <button key={item.name} id={`admission-path-tab-${index}`} type="button" role="tab" aria-selected={path === index} aria-controls="admission-path-panel" tabIndex={path === index ? 0 : -1} className={path === index ? "is-active" : ""} onClick={() => setPath(index)}>{item.name}</button>)}</div>
    <div className="pathway-summary" id="admission-path-panel" role="tabpanel" aria-labelledby={`admission-path-tab-${path}`}><span>01 · EXPLORE THE ROUTE</span><h3>{pathways[path].name}</h3><p>{pathways[path].copy}</p><a className="text-link" href={pathways[path].link} target="_blank" rel="noreferrer">Official programme information<ExternalLink size={14}/></a></div>
    <div className="admission-layout">
      <div className="admission-steps" role="tablist" aria-label="Your five admission steps" onKeyDown={handleTabListKeyDown}>{steps.map((item, index) => <button key={item.title} id={`admission-step-tab-${index}`} type="button" role="tab" aria-selected={step === index} aria-controls="admission-step-panel" tabIndex={step === index ? 0 : -1} className={`admission-step ${step === index ? "is-active" : ""}`} onClick={() => setStep(index)}><span>0{index + 1}</span><span><strong>{item.title}</strong><small>{item.short}</small></span><ArrowRight size={15}/></button>)}</div>
      <section className="admission-step-content" id="admission-step-panel" role="tabpanel" aria-labelledby={`admission-step-tab-${step}`}><span className="step-number">Step 0{step + 1} / 05</span><h3>{activeStep.title}.</h3><p>{activeStep.copy}</p><ul>{activeStep.bullets.map((item) => <li key={item}>{item}</li>)}</ul><a className="button button--blue" href={activeStep.link} target={activeStep.link.startsWith("tel:") ? undefined : "_blank"} rel={activeStep.link.startsWith("tel:") ? undefined : "noreferrer"}>{activeStep.button}<ArrowRight size={15}/></a></section>
    </div>
  </div>;
}
