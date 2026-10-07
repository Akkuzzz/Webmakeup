"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { SourceLink } from "@/components/ui";

type Stat = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  grouping?: boolean;
  note?: string;
  source?: string;
};

const stats: Stat[] = [
  { value: 2002, label: "Established", grouping: false },
  { value: 3200, label: "Students", suffix: "+", note: "As shown on FISAT’s official site" },
  { value: 12, label: "Scholarships", prefix: "₹", suffix: " Cr+", note: "As shown on FISAT’s official site" },
  { value: 40, label: "Green campus", suffix: " acres", source: "https://fisat.ac.in/campus-life/" }
];

function formatted(stat: Stat, count: number) {
  const number = stat.grouping === false ? String(count) : new Intl.NumberFormat("en-IN").format(count);
  return `${stat.prefix ?? ""}${number}${stat.suffix ?? ""}`;
}

function AnimatedStat({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.65 });
  const reducedMotion = useReducedMotion();
  const [count, setCount] = useState(stat.value);

  useEffect(() => {
    if (!inView || reducedMotion) return;
    let frame = 0;
    const started = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - started) / 500, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.min(stat.value, Math.round(stat.value * eased)));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setCount(stat.value);
    };
    setCount(0);
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reducedMotion, stat.value]);

  return <motion.div className="stat-strip__item" initial={{ y: reducedMotion ? 0 : 10 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0.65 }} transition={{ duration: 0.38, delay: index * 0.045 }}>
    <span ref={ref} className="stat-value" aria-label={`${formatted(stat, stat.value)} ${stat.label.toLowerCase()}`} aria-live="off">{formatted(stat, count)}</span>
    <span className="stat-label">{stat.label}</span>
    {stat.note && <span className="stat-note">{stat.note}</span>}
    {stat.source && <SourceLink href={stat.source} label="Source"/>}
  </motion.div>;
}

export function AnimatedStats() {
  return <div className="stat-strip" aria-label="Verified facts about FISAT">{stats.map((stat, index) => <AnimatedStat key={stat.label} stat={stat} index={index}/>)}</div>;
}
