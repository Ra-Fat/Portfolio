import React, { useEffect, useRef, useState } from "react";
import { ExperiencesContext } from "../utils/constants";
import { freeStyle2 } from "../../assets/index";

const Experiences = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const timelineRef = useRef(null);
  const requestRef = useRef(null);
  const targetProgressRef = useRef(0);

  const experiences = ExperiencesContext || [];

  // Smooth scroll progress update with easing
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineTop = rect.top;
      const timelineHeight = rect.height;

      const viewportCenter = windowHeight / 2;
      const distanceFromTop = viewportCenter - timelineTop;

      const progress = Math.min(
        100,
        Math.max(0, (distanceFromTop / timelineHeight) * 100)
      );

      targetProgressRef.current = progress;
    };

    const animate = () => {
      setScrollProgress((prev) => {
        // Linear interpolation to smooth the progress changes
        const eased = prev + (targetProgressRef.current - prev) * 0.1;
        return Math.abs(eased - prev) < 0.1 ? targetProgressRef.current : eased;
      });
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial calc
    animate(); // start animation frame loop

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <section className="w-full lg:px-10 xl:px-16">
      <div className="flex flex-col items-center justify-center w-full">
        {/* Title */}
        <div className="flex justify-center items-center gap-3">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
            Experience
          </h2>
          <span className="text-gray-400 text-3xl font-light">/</span>
          <h2 className="text-2xl md:text-4xl font-bold uppercase text-gray-400 tracking-tight">
            Volunteer
          </h2>
        </div>

        {/* Timeline - Responsive */}
        <div ref={timelineRef} className="relative max-w-6xl mx-auto mt-15">
          {/* Mobile: Bar left, cards right */}
          <div className="flex md:hidden w-full">
            {/* Vertical bar on the left */}
            <div className="flex flex-col items-center pr-3 pt-2">
              <div className="w-1.5 h-full bg-slate-700 relative">
                {/* Animated progress line */}
                <div
                  className="absolute top-0 left-0 w-full bg-gray-300 transition-all duration-300 ease-out"
                  style={{ height: `${scrollProgress}%` }}
                />
              </div>
              {/* Progress bullet */}
              <div
                className="absolute left-0 -translate-x-1/2 transition-all duration-300 ease-out"
                style={{
                  top: `${scrollProgress}%`,
                  zIndex: 10,
                  left: '0.75rem',
                }}
              >
                <div className="relative w-9 h-9 rounded-full p-1">
                  <img
                    src={freeStyle2}
                    alt="Progress"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Experience cards to the right */}
            <div className="flex-1 space-y-5">
              {experiences.map((exp, index) => {
                // Mobile: all cards right of bar
                const triggerPoint = (index / Math.max(experiences.length - 1, 1)) * 100;
                const distance = scrollProgress - triggerPoint + 20;
                const easedOpacity = Math.min(Math.max(distance / 25, 0), 1);
                const easedTranslateY = 16 * (1 - easedOpacity);
                return (
                  <div key={index} className="relative w-full">
                    <div
                      className="w-full transition-all duration-300"
                      style={{
                        opacity: easedOpacity,
                        transform: `translateY(${easedTranslateY}px)`,
                      }}
                    >
                      <div
                        className="border bg-gray-800/30 backdrop-blur-md border-b border-white/10  p-5 rounded-2xl shadow-xl cursor-pointer"
                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="truncate text-[16px] font-semibold text-white  transition-colors">
                                {exp.title}
                              </h3>
                            </div>
                            <h2 className="text-[13px] font-semibold text-gray-300  transition-colors mt-2">
                              {exp.Subtitles}
                            </h2>
                          </div>
                        </div>
                        {/* Description preview */}
                        <p className="text-gray-400 leading-relaxed mb-4 text-[14px]">
                          {exp.description}
                        </p>
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
                        <div className="text-[10px] text-gray-300 mt-3">
                          <span>{exp.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Desktop: original timeline */}
          <div className="hidden md:block">
            {/* Center line with progress */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1.5 h-full bg-slate-800">
              {/* Animated progress line */}
              <div
                className="absolute top-0 left-0 w-full bg-gray-300 transition-all duration-300 ease-out"
                style={{ height: `${scrollProgress}%` }}
              />
            </div>
            {/* Profile progress bullet */}
            <div
              className="absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-out"
              style={{
                top: `${scrollProgress}%`,
                zIndex: 10,
              }}
            >
              <div className="relative w-11 h-11 rounded-full p-1">
                <img
                  src={freeStyle2}
                  alt="Progress"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            {/* Experience Cards */}
            <div className="relative space-y-12">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0;
                const triggerPoint = (index / Math.max(experiences.length - 1, 1)) * 100;
                const distance = scrollProgress - triggerPoint + 20;
                const easedOpacity = Math.min(Math.max(distance / 25, 0), 1);
                const easedTranslateY = 16 * (1 - easedOpacity);
                return (
                  <div key={index} className="relative w-full">
                    <div
                      className={`flex ${isLeft ? "md:justify-start" : "md:justify-end"} justify-center`}
                    >
                      <div
                        className="w-full md:w-[calc(50%-3rem)] transition-all duration-300"
                        style={{
                          opacity: easedOpacity,
                          transform: `translateY(${easedTranslateY}px)`,
                        }}
                      >
                        <div
                          className="border bg-gray-800/30 backdrop-blur-md border-b border-gray-800  p-5 rounded-2xl shadow-xl cursor-pointer"
                          onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        >
                          {/* Header */}
                          <div className="flex items-start justify-between gap-4 mb-4">
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="md:text-xl truncate text-[16px] font-semibold text-white  transition-colors">
                                  {exp.title}
                                </h3>
                              </div>
                              <h2 className="md:text-base text-[13px] font-semibold text-gray-300  transition-colors mt-2">
                                {exp.Subtitles}
                              </h2>
                            </div>
                          </div>
                          {/* Description preview */}
                          <p className="text-gray-400 leading-relaxed mb-4 text-[14px]">
                            {exp.description}
                          </p>
                          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
                          <div className="md:text-[12px] text-[10px] text-gray-300 mt-3">
                            <span>{exp.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
