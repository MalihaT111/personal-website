"use client";
import React, { useState } from "react";
import "./home.css";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Collage from "./components/Collage/Collage";

export default function HomePage() {
  const [hoveredProject, setHoveredProject] = useState<{ title: string; desc: React.ReactNode; route?: string } | null>(null);

  return (
    <main>
      <div className="botanical-bg" aria-hidden="true" />
      <section className="hero">
        <Marquee text="MALIHA TASNIM" />
        <Navbar />
        <div className="content">
            <div className="a-container"> 
                <About hoveredProject={hoveredProject} />
            </div>

            <div className="b-container"> 
                <Collage setHoveredProject={setHoveredProject} />
            </div>
        </div>

      </section>
    </main>
  );
}
