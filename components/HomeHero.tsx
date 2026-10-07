"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { images } from "@/data/assets";

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 1.08]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 38]);
  const copyOpacity = useTransform(scrollYProgress, [0, .82, 1], [1, reduced ? 1 : .6, reduced ? 1 : 0]);

  return <motion.section ref={ref} className="home-hero">
    <motion.img className="home-hero__image" src={images.campusMain} alt="The main academic block at FISAT in Angamaly, Kerala" fetchPriority="high" style={{ scale }}/>
    <div className="home-hero__overlay" aria-hidden="true" />
    <div className="hero-fx" aria-hidden="true"><span className="hero-fx__grid"/><span className="hero-fx__orb hero-fx__orb--a"/><span className="hero-fx__orb hero-fx__orb--b"/><span className="hero-fx__orb hero-fx__orb--c"/></div>
    <motion.div className="home-hero__inner" style={{ y: copyY, opacity: copyOpacity }}><span className="home-hero__stamp">Engineering education · Angamaly, Kerala</span><h1>BUILD WHAT<br/><em>COMES NEXT.</em></h1><p className="home-hero__copy">Engineering education for curious minds and ambitious futures.</p><div className="home-hero__actions"><Link className="button button--blue" href="/academics">Explore Programmes<ArrowRight size={16}/></Link><Link className="button button--outline-light" href="/about">Discover FISAT<ArrowUpRight size={15}/></Link></div></motion.div>
    <div className="home-hero__foot"><span>Federal Institute of Science and Technology</span><span className="home-hero__scroll">Scroll to explore</span></div>
  </motion.section>;
}
