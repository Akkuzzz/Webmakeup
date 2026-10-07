"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { ArrowRight, Instagram, Linkedin, MapPin, Phone } from "lucide-react";
import { Navigation } from "./Navigation";
import { images } from "@/data/assets";

const footerLinks = [
  { title: "Explore", links: [["About FISAT", "/about"], ["Programmes", "/academics"], ["Departments", "/academics/departments"], ["Faculty", "/academics/faculty"], ["Admissions", "/admissions"]] },
  { title: "Campus", links: [["Campus life", "/campus-life"], ["Facilities", "/facilities"], ["Hostel", "/facilities/hostel"], ["Library", "/facilities/library"], ["Transportation", "/facilities/transportation"]] },
  { title: "Discover", links: [["Research", "/research"], ["Placements", "/placements"], ["Student life", "/student-life"], ["News", "/news"], ["Events", "/events"]] }
] as const;

function ReadingProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const easedProgress = useSpring(scrollYProgress, { stiffness: 160, damping: 30, mass: 0.2 });
  return <motion.div className="reading-progress" style={{ scaleX: reduced ? scrollYProgress : easedProgress }} aria-hidden="true" />;
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return <motion.div
    key={pathname}
    initial={hydrated && !reduced ? { opacity: 0, y: 8 } : false}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: reduced ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
  >{children}</motion.div>;
}

function useVisualEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let ticking = false;
    const update = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      root.style.setProperty("--scroll-progress", String(Math.min(1, window.scrollY / max)));
      root.dataset.scrolled = window.scrollY > 24 ? "true" : "false";
      root.style.setProperty("--scroll-y", reduced ? "0px" : `${Math.min(window.scrollY, 1400)}px`);
      ticking = false;
    };
    const onScroll = () => { if (!ticking) { ticking = true; frame = requestAnimationFrame(update); } };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const selector = [
      ".section-heading", ".bento-card", ".programme-card", ".department-card", ".facility-tile",
      ".news-card", ".event-card", ".credential-card", ".placement-metric", ".timeline-item",
      ".image-card", ".campus-bento", ".campus-explorer", ".route-explorer", ".admission-apply-strip",
    ].join(",");
    const observer = !reduced && "IntersectionObserver" in window
      ? new IntersectionObserver((entries) => entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.dataset.reveal = "in";
            observer?.unobserve(element);
          }
        }), { threshold: 0.12, rootMargin: "0px 0px -7% 0px" })
      : null;
    document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
      if (observer) {
        element.dataset.reveal = "out";
        element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 60}ms`);
        observer.observe(element);
      }
    });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer?.disconnect();
    };
  }, []);
}

export function SiteFrame({ children }: { children: React.ReactNode }) {
  useVisualEffects();
  return <><ReadingProgress /><Navigation /><main id="main-content"><PageTransition>{children}</PageTransition></main><Link className="mobile-sticky-apply" href="/admissions">Apply Now<ArrowRight size={16}/></Link><Footer /></>;
}

function Footer() {
  return <footer className="site-footer">
    <div className="footer-top"><div className="footer-brand"><Link href="/" className="footer-logo"><img src={images.logo} alt="FISAT" /></Link><p>Engineering education for curious minds and ambitious futures.</p><a className="footer-address" href="https://www.google.com/maps/search/?api=1&query=Federal+Institute+of+Science+and+Technology+Hormis+Nagar+Mookkannoor+Angamaly+Kerala" target="_blank" rel="noreferrer"><MapPin size={15} />Hormis Nagar, Angamaly<br />Kerala 683 577, India</a><a className="footer-address" href="tel:+914842725272"><Phone size={14} />+91 484 272 5272</a></div>
      {footerLinks.map((group) => <div className="footer-group" key={group.title}><h3>{group.title}</h3>{group.links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>)}
      <div className="footer-cta"><p className="eyebrow eyebrow--blue"><span />Your next chapter</p><h3>Ready to build<br />what comes next?</h3><Link className="button button--blue" href="/admissions">Explore admissions<ArrowRight size={15} /></Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Federal Institute of Science and Technology</span><span className="footer-motto">FOCUS ON EXCELLENCE</span><div className="footer-social"><a aria-label="FISAT Instagram" href="https://www.instagram.com/fisat.official/" target="_blank" rel="noreferrer"><Instagram size={16} /></a><a aria-label="FISAT LinkedIn" href="https://in.linkedin.com/school/fisatofficial/" target="_blank" rel="noreferrer"><Linkedin size={16} /></a><Link href="/contact">Contact<ArrowRight size={13} /></Link></div></div>
  </footer>;
}
