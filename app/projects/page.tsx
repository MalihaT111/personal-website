import Link from "next/link";
import "../not-found.css";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Project/Project";
export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <div className="botanical-bg" aria-hidden="true" />
          <Projects
      sections={[
        {
          id: "intro",
          label: "Intro",
          title: "My Projects — A Curated Editorial",
          thumbnail: "/star-flower.png",
          content: (
            <>
              <p>
                A collection of my technical work, designed and written with the
                same care as a printed publication. Each project is documented
                with context, visuals, and thought process.
              </p>
            </>
          ),
        },
        {
          id: "ai-recruitment",
          label: "AI Recruitment",
          title: "AI-Assisted Recruitment System",
          thumbnail: "/star-flower.png",
          content: (
            <>
              <p>Built for Cadence…</p>
            </>
          ),
        },
        {
          id: "leetcode",
          label: "League of LeetCode",
          title: "League of LeetCode",
          thumbnail: "/star-flower.png",
          content: (
            <>
              <p>Real-time duel coding platform…</p>
            </>
          ),
        },
        {
          id: "crossword",
          label: "Crossword Solver",
          title: "Crossword Puzzle Solver",
          thumbnail: "/star-flower.png",
          content: <p>A fun NLP project…</p>,
        },
               {
          id: "crosswo",
          label: "Crossword Solver",
          title: "Crossword Puzzle Solver",
          thumbnail: "/star-flower.png",
          content: <p>A fun NLP project…</p>,
        },
      ]}
    /> 

    </main>
  );
}
