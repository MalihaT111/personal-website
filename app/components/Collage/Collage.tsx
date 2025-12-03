"use client";
import { useRouter } from "next/navigation";
import "./Collage.css";
import React from "react";

interface CollageProps {
  setHoveredProject: (
    project: { title: string; desc: React.ReactNode } | null
  ) => void;
}

export default function Collage({ setHoveredProject }: CollageProps) {
  const router = useRouter();

  const projectInfo = [
    {
      title: "About Me",
      desc: (
        <>
          i’m <strong>maliha</strong> — if the marquee at the top didn’t give it away.
          i’m a software engineer, an artist, and the caretaker of two wonderful birds.
          i build things to be both functional and beautiful.
        </>
      ),
      tag: "intro"
    },

    { title: "AI Recruitment", desc: <>
    built ML system that predicts top job matches for a job posting for Cadence Design Systems through 
    Breakthrough Tech AI </>, route:"/projects", tag: "project"},

    { title: "League of Leetcode", desc: <>
    need motivation to prep for interviews? challenge your friends to a leetcode match live!
    </>, route: "/projects", tag: "project"},
    
    { title: "Crossword Puzzle Solver", desc: <>
    lightweight cross world puzzle solver i built for CodeDay Labs x EBSCO. 
    takes an image of a crossword puzzle and gives you its best guess as to what the answer is. 

    </>,  route: "/projects",tag: "project"},

    { title: "My Birds", desc: <>bird tax, featuring:  
          <br /> periwinkle 
          <br />
          she/her ✦ 4 years old 
          <br />
          <br /> strawberry 
          <br />
          he/him ✦ 2.5 years old 
          </>, route: "/birds", tag:"personal"},

    { title: "Old Art", desc: <>i once had a dream of making my own webtoon. oh well.

    </>, route: "https://www.instagram.com/birb.erry/", tag:"personal" },

    {
      title: "Books",
      desc: (
        <>
          here are a few books from my want-to-read list:
          <br />
          <br />• The Loneliness of Sonia and Sunny
          <br />• On Earth We're Briefly Gorgeous
          <br />• Katabasis
        </>
      ),
  
      route: "/books",
      tag:"personal" 
    },
  ];

  return (
    <div className="collage">
      {projectInfo.map((proj, i) => (
        <div
          key={i}
          className="collage-item"
          onMouseEnter={() => setHoveredProject(proj)}
          onClick={() => proj.route && router.push(proj.route)}
        >
          <div className="collage-card">
            <h3 className="collage-title">{proj.title}</h3>
            <p className="collage-tag">{proj.tag}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
