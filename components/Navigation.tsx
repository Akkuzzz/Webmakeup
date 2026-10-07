"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, Search, X } from "lucide-react";
import { images } from "@/data/assets";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics", groups: [
    { title: "Study at FISAT", links: [{ label: "Programmes", href: "/academics" }, { label: "Departments", href: "/academics/departments" }, { label: "Faculty", href: "/academics/faculty" }] },
    { title: "Discover", links: [{ label: "Academic environment", href: "/academics#environment" }, { label: "Research", href: "/research" }, { label: "Admissions", href: "/admissions" }] }
  ] },
  { label: "Admissions", href: "/admissions" },
  { label: "Campus Life", href: "/campus-life", groups: [
    { title: "A day at FISAT", links: [{ label: "Student life", href: "/student-life" }, { label: "Hostel", href: "/facilities/hostel" }, { label: "Cafeteria", href: "/facilities/cafeteria" }, { label: "Sports", href: "/facilities/sports" }, { label: "Fitness", href: "/facilities/fitness" }] },
    { title: "Find your people", links: [{ label: "Clubs", href: "/student-life#clubs" }, { label: "Arts & culture", href: "/student-life#arts" }, { label: "Events", href: "/events" }, { label: "Campus explorer", href: "/#campus-explorer" }] }
  ] },
  { label: "Facilities", href: "/facilities", groups: [
    { title: "Learning spaces", links: [{ label: "Library", href: "/facilities/library" }, { label: "Laboratories", href: "/facilities/laboratories" }, { label: "Computing", href: "/facilities/computing" }, { label: "IDEA Lab", href: "/facilities/idea-lab" }, { label: "IT Infrastructure", href: "/facilities/it-infrastructure" }, { label: "Future Skills", href: "/facilities/future-skills" }, { label: "Language Lab", href: "/facilities/language-lab" }] },
    { title: "Campus services", links: [{ label: "Robotics", href: "/facilities/robotics" }, { label: "Auditorium", href: "/facilities/auditorium" }, { label: "Transportation", href: "/facilities/transportation" }, { label: "Bank & ATM", href: "/facilities/bank-atm" }] }
  ] },
  { label: "Research", href: "/research" },
  { label: "Placements", href: "/placements" }
];

const searchable = [
  ["Admissions", "/admissions", "Apply, eligibility, documents"],
  ["Programmes", "/academics", "B.Tech, M.Tech, MCA, MBA"],
  ["Departments", "/academics/departments", "CSE, ECE, EEE, Mechanical"],
  ["Faculty", "/academics/faculty", "People and academic directory"],
  ["Hostel", "/facilities/hostel", "Accommodation and amenities"],
  ["Cafeteria", "/facilities/cafeteria", "Dining and student life"],
  ["Sports", "/facilities/sports", "Sports and games"],
  ["Fitness", "/facilities/fitness", "Fitness Centre and wellbeing"],
  ["Transportation", "/facilities/transportation", "Conveyance and route enquiries"],
  ["Placements", "/placements", "Careers and verified statistics"],
  ["Facilities", "/facilities", "Explore campus services"],
  ["Contact", "/contact", "Address, phone and directions"],
  ["Library", "/facilities/library", "Academic resources"],
  ["IDEA Lab", "/facilities/idea-lab", "Innovation and prototyping"],
  ["Robotics", "/facilities/robotics", "Robotics Lab"],
  ["Research", "/research", "Research and innovation"],
  ["News", "/news", "FISAT announcements"],
  ["Events", "/events", "Campus events"],
  ["Student life", "/student-life", "Clubs, arts and sports"]
] as const;

const studentPortal = "https://fisat.ac.in/stud-portal/";
const alumniPage = "https://fisat.ac.in/alumni/";
const focusableSelector = 'a[href], button:not([disabled]), summary, [tabindex]:not([tabindex="-1"])';

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const closeMobileRef = useRef<HTMLButtonElement>(null);
  const mobileDrawerRef = useRef<HTMLDivElement>(null);
  const results = useMemo(() => searchable.filter(([label, href, hint]) => `${label} ${href} ${hint}`.toLowerCase().includes(query.toLowerCase())).slice(0, 7), [query]);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setSearchOpen(false); setMobileOpen(false); setOpenMenu(null); }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setSearchOpen(true); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeMobileRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previous?.focus();
    };
  }, [mobileOpen]);

  const isCurrent = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  const navigateSearch = (href: string) => { router.push(href); setSearchOpen(false); setQuery(""); };
  const trapTab = (event: React.KeyboardEvent<HTMLElement>, root: HTMLElement | null) => {
    if (event.key !== "Tab" || !root) return;
    const focusable = [...root.querySelectorAll<HTMLElement>(focusableSelector)].filter((element) => !element.hasAttribute("disabled") && element.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };

  return <>
    <div className="utility-bar"><div className="utility-inner"><span>Federal Institute of Science and Technology · Angamaly, Kerala</span><div><a href={studentPortal} target="_blank" rel="noreferrer">Student Portal</a><Link href="/academics/faculty">Faculty</Link><a href={alumniPage} target="_blank" rel="noreferrer">Alumni</a><Link href="/contact">Contact</Link></div></div></div>

    <header className="site-header" onMouseLeave={() => setOpenMenu(null)}>
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="FISAT home"><img src={images.logo} alt="FISAT — Federal Institute of Science and Technology"/><span className="brand-divider"/><span className="brand-caption">ANGAMALY<br/>KERALA</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => item.groups ? <div className="nav-dropdown" key={item.label} onMouseEnter={() => setOpenMenu(item.label)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenMenu(null); }}>
            <button type="button" className={`nav-link ${isCurrent(item.href) ? "is-active" : ""} ${openMenu === item.label ? "is-open" : ""}`} aria-expanded={openMenu === item.label} aria-controls={`mega-${item.label.toLowerCase().replaceAll(" ", "-")}`} onFocus={() => setOpenMenu(item.label)} onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}>{item.label}<ChevronDown size={14} aria-hidden="true"/></button>
            {openMenu === item.label && <div className="mega-menu" id={`mega-${item.label.toLowerCase().replaceAll(" ", "-")}`}><div className="mega-menu__intro"><span className="eyebrow eyebrow--blue"><span/>Explore FISAT</span><h3>{item.label === "Academics" ? "Find your direction." : item.label === "Campus Life" ? "Make campus yours." : "Spaces to thrive."}</h3><Link href={item.href} className="text-link">Explore {item.label}<ArrowRight size={15}/></Link></div>{item.groups.map((group) => <div className="mega-group" key={group.title}><h4>{group.title}</h4>{group.links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpenMenu(null)}>{link.label}<ArrowRight size={14}/></Link>)}</div>)}</div>}
          </div> : <Link key={item.label} href={item.href} className={`nav-link ${isCurrent(item.href) ? "is-active" : ""}`} aria-current={isCurrent(item.href) ? "page" : undefined}>{item.label}</Link>)}
        </nav>
        <div className="nav-actions"><button className="icon-button search-button" aria-label="Search the FISAT website" onClick={() => setSearchOpen(true)}><Search size={18}/><span>Search</span></button><Link className="button button--blue nav-apply" href="/admissions">Apply Now<ArrowRight size={16}/></Link><button className="mobile-toggle" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} aria-controls="mobile-site-navigation" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X/> : <Menu/>}</button></div>
      </div>
    </header>

    {mobileOpen && <div ref={mobileDrawerRef} id="mobile-site-navigation" className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Main menu" onKeyDown={(event) => trapTab(event, mobileDrawerRef.current)}><div className="mobile-drawer__top"><Link className="brand" href="/" onClick={() => setMobileOpen(false)}><img src={images.logo} alt="FISAT"/></Link><button ref={closeMobileRef} className="icon-button" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X/></button></div><button className="mobile-search" onClick={() => { setMobileOpen(false); setSearchOpen(true); }}><Search size={18}/>Search FISAT<kbd>⌘ K</kbd></button><nav aria-label="Mobile navigation">{navItems.map((item) => <div className="mobile-nav-row" key={item.label}>{item.groups ? <details><summary>{item.label}<ChevronDown size={17}/></summary><Link className="mobile-parent-link" href={item.href}>{item.label} overview</Link>{item.groups.flatMap((group) => group.links).map((link) => <Link key={link.href} href={link.href}>{link.label}<ArrowRight size={15}/></Link>)}</details> : <Link href={item.href}>{item.label}<ArrowRight size={16}/></Link>}</div>)}</nav><div className="mobile-utility-links"><a href={studentPortal} target="_blank" rel="noreferrer">Student Portal<ArrowRight size={13}/></a><Link href="/academics/faculty">Faculty directory<ArrowRight size={13}/></Link><a href={alumniPage} target="_blank" rel="noreferrer">Alumni<ArrowRight size={13}/></a><Link href="/contact">Contact<ArrowRight size={13}/></Link></div><Link className="button button--blue mobile-apply" href="/admissions">Apply Now<ArrowRight size={16}/></Link><div className="mobile-drawer__foot">Hormis Nagar · Angamaly, Kerala</div></div>}

    {searchOpen && <div className="search-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSearchOpen(false); }}><section className="search-dialog" role="dialog" aria-modal="true" aria-label="Search FISAT" onKeyDown={(event) => trapTab(event, event.currentTarget)}><div className="search-dialog__input"><Search size={20}/><input ref={searchRef} value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && results[0]) navigateSearch(results[0][1]); }} placeholder="What are you looking for?" aria-label="Search pages"/><kbd>ESC</kbd><button className="icon-button" aria-label="Close search" onClick={() => setSearchOpen(false)}><X size={19}/></button></div><p className="search-label">{query ? "Suggested pages" : "Popular destinations"}</p><div className="search-results">{results.map(([label, href, hint]) => <button key={href} onClick={() => navigateSearch(href)}><span><strong>{label}</strong><small>{hint}</small></span><ArrowRight size={16}/></button>)}{results.length === 0 && <p className="search-empty">No page matches that search. Try “admissions”, “hostel” or “programmes”.</p>}</div><div className="search-dialog__foot">FISAT · Focus on Excellence</div></section></div>}
  </>;
}
