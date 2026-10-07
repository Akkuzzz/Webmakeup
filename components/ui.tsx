import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {items.map((item, index) => (
        <span className="crumb" key={`${item.label}-${index}`}>
          <span className="crumb-divider" aria-hidden="true">/</span>
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  crumbs = [],
  align = "left",
  kind = "standard"
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  crumbs?: Crumb[];
  align?: "left" | "center";
  kind?: "standard" | "cinematic";
}) {
  return (
    <section className={`page-hero page-hero--${kind} page-hero--${align} ${image ? "has-image" : ""}`}>
      {image && <img className="page-hero__image" src={image} alt="" fetchPriority={kind === "cinematic" ? "high" : "auto"} />}
      <div className="page-hero__shade" aria-hidden="true" />
      <div className="page-hero__inner">
        {crumbs.length > 0 && <Breadcrumbs items={crumbs} />}
        <p className="eyebrow eyebrow--blue"><span />{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="page-hero__description">{description}</p>}
      </div>
      {kind === "cinematic" && <div className="hero-scroll-cue"><span /> Scroll to explore</div>}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <p className="eyebrow"><span />{eyebrow}</p>}
        <h2>{title}</h2>
        {description && <p className="section-heading__description">{description}</p>}
      </div>
      {action && <Link className="text-link" href={action.href}>{action.label}<ArrowRight size={17} /></Link>}
    </div>
  );
}

export function SourceLink({ href, label = "Official FISAT source" }: { href: string; label?: string }) {
  return <a className="source-link" href={href} target="_blank" rel="noreferrer">{label}<ArrowUpRight size={14} aria-hidden="true" /></a>;
}

export function ImageCard({
  image,
  alt,
  eyebrow,
  title,
  description,
  href,
  index,
  id
}: {
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  description?: string;
  href: string;
  index?: string;
  id?: string;
}) {
  return (
    <Link id={id} className="image-card" href={href}>
      <div className="image-card__media"><img src={image} alt={alt} loading="lazy" />{index && <span className="image-card__index">{index}</span>}</div>
      <div className="image-card__body">
        <div>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h3>{title}</h3>{description && <p>{description}</p>}</div>
        <span className="circle-arrow" aria-hidden="true"><ArrowUpRight size={17} /></span>
      </div>
    </Link>
  );
}

export function StatStrip({ items }: { items: { value: string; label: string; note?: string }[] }) {
  return (
    <div className="stat-strip">
      {items.map((item) => <div className="stat-strip__item" key={item.label}><span className="stat-value">{item.value}</span><span className="stat-label">{item.label}</span>{item.note && <span className="stat-note">{item.note}</span>}</div>)}
    </div>
  );
}

export function CTA({ title, copy, primary = { label: "Apply now", href: "/admissions" }, secondary = { label: "Explore programmes", href: "/academics" } }: {
  title: string;
  copy: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="cta-panel">
      <div className="cta-panel__copy"><p className="eyebrow eyebrow--blue"><span />Your next chapter</p><h2>{title}</h2><p>{copy}</p></div>
      <div className="cta-panel__actions"><Link className="button button--blue" href={primary.href}>{primary.label}<ArrowRight size={16} /></Link><Link className="button button--outline-light" href={secondary.href}>{secondary.label}<ArrowRight size={16} /></Link></div>
    </section>
  );
}

export function EmptyState({ title, description, href, linkLabel }: { title: string; description: string; href: string; linkLabel: string }) {
  return <div className="empty-state"><span className="empty-state__mark">F</span><div><h3>{title}</h3><p>{description}</p><a className="text-link" href={href} target="_blank" rel="noreferrer">{linkLabel}<ArrowUpRight size={15} /></a></div></div>;
}
