"use client";
import React, { useEffect, useRef } from "react";
import "./Marquee.css";

interface MarqueeProps {
  text: string;
  speed?: number;
  repeat?: number;
}

export default function Marquee({ text, speed = .6, repeat = 12 }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const stars = ["✦", "✧"];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let position = 0;

    const animate = () => {
      position -= speed;
      const resetPoint = track.scrollWidth / 2;
      if (resetPoint > 0 && Math.abs(position) >= resetPoint) {
        position = 0;
      }
      track.style.transform = `translate3d(${position}px, 0, 0)`;
      animationId = requestAnimationFrame(animate);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        animationId = requestAnimationFrame(animate);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    const startTimeout = setTimeout(() => {
      animationId = requestAnimationFrame(animate);
    }, 100);

    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(animationId);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [speed]);

  return (
    <div className="marquee">
      <div className="marquee-track" ref={trackRef}>
        {Array.from({ length: repeat }).map((_, i) => (
          <React.Fragment key={i}>
            <span className="marquee-text" aria-hidden={i > 0}>
              {text}
            </span>
            <span className="marquee-star" aria-hidden>
              {stars[i % stars.length]}
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
