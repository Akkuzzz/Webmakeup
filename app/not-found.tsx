import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = { title: "Page not found | FISAT", robots: { index: false, follow: true } };

export default function NotFound() {
  return <section className="not-found"><span>404 · FISAT</span><h1>This page took<br/>a different route.</h1><p>The page may have moved. Find your way back to FISAT or continue exploring.</p><Link className="button button--blue" href="/"><ArrowLeft size={16}/>Return to FISAT</Link></section>;
}
