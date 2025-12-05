"use client";
import React, { useState } from "react";
import "./Projects.css";

export interface Section {
  id: string;
  label: string;
  title: string;
  content: React.ReactNode;
  thumbnail?: React.ReactNode;
}

interface Props {
  sections: Section[];
}

export default function Projects({ sections }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="card-scroll-container">
      <div className="card-fan">
        {sections.map((section, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={section.id}
              className={`card-wrapper ${isActive ? "active" : ""}`}
              onClick={() =>
                setActiveIndex((prev) => (prev === index ? null : index))
              }
            >


              {/* Content section (shown only when active) */}
              <div className="card-content">
                {isActive ? (
                  <>
                    <h2>{section.title}</h2>
                    <div className="card-body">{section.content}</div>
                  </>
                ) : null}
              </div>
                            {/* Tab always shown (on left this time) */}
              <div className="card-tab">
                <span>{section.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
