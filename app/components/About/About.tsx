"use client";
import React from "react";
import "./About.css";

interface AboutProps {
  hoveredProject?: {
    title: string;
    desc: React.ReactNode;
    route?: string;
  } | null;
}

export default function About({ hoveredProject }: AboutProps) {
  return (
    <div className="about-box">
      {hoveredProject ? (
        <div key="hovered" className="abt-block">
          <h2 className="abt-desc">{hoveredProject.desc}</h2>
          {hoveredProject.route && (
            <a href={hoveredProject.route} className="abt-link">
              → click for more
            </a>
          )}
        </div>
      ) : (
        <div key="intro" className="abt-block">
          <h2 className="abt-desc">
            i’m <strong>maliha </strong>— if the marquee at the top didn’t give it away. i’m a software engineer, an artist, and the caretaker of two wonderful birds. i build things to be both functional and beautiful.
          </h2>
        </div>
      )}
    </div>
  );
}
