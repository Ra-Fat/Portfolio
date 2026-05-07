import React, { useEffect, useRef, useState } from "react";
import { ExperienceData } from "../data/data";
import { SectionTitle } from "../components/atoms/section-title";
import { MobileTimeline } from "../components/modules/experiences/mobile-timeline";
import { DesktopTimeline } from "../components/modules/experiences/desktop-timeline";

export const Experiences = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const timelineRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const targetProgressRef = useRef(0);

  const experiences = ExperienceData || [];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const distanceFromTop = window.innerHeight / 2 - rect.top;
      targetProgressRef.current = Math.min(
        100,
        Math.max(0, (distanceFromTop / rect.height) * 100),
      );
    };

    const animate = () => {
      setScrollProgress((prev) => {
        const eased = prev + (targetProgressRef.current - prev) * 0.1;
        return Math.abs(eased - prev) < 0.1 ? targetProgressRef.current : eased;
      });
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <section className="w-full lg:px-10 xl:px-16 py-5">
      <div className="flex flex-col items-center justify-center w-full">
        <SectionTitle title="Experience" subtitle="Volunteer" />
        <div
          ref={timelineRef}
          className="relative w-full max-w-6xl mx-auto mt-15"
        >
          <MobileTimeline
            experiences={experiences}
            scrollProgress={scrollProgress}
            expandedIndex={expandedIndex}
            setExpandedIndex={setExpandedIndex}
          />
          <DesktopTimeline
            experiences={experiences}
            scrollProgress={scrollProgress}
            expandedIndex={expandedIndex}
            setExpandedIndex={setExpandedIndex}
          />
        </div>
      </div>
    </section>
  );
};
