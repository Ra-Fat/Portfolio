import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TechStackData } from "../data/data";
import { useSphereAnimation } from "../components/modules/skills/hooks/sphere-animation";
import { SkillsSphereRings } from "../components/modules/skills/sphere-rings";
import { SkillsSphereTag } from "../components/modules/skills/sphere-tag";
import { SectionTitle } from "../components/atoms/section-title";
import { containerVariants } from "../utils/animations/animation";

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [containerSize, setContainerSize] = useState(600);
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      setContainerSize(Math.min(w, 600));
    });
    ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, []);

  const size = containerSize;
  const radius = size * 0.42;

  const { containerRef, onMouseDown, onMouseMove, onMouseUp } =
    useSphereAnimation({
      count: TechStackData.length,
      size,
      radius,
      isVisible,
    });

  return (
    <div className="w-full  flex flex-col justify-center items-center" ref={sectionRef}>
      <motion.div
        className="flex flex-col w-full justify-center items-center"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <SectionTitle title="PROFICIENCIES" subtitle="STACK" />

        <div ref={wrapperRef} className="w-full max-w-[600px] mt-10">
          <div
            ref={containerRef}
            className="relative cursor-grab active:cursor-grabbing select-none"
            style={{ width: size, height: size }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            <SkillsSphereRings />
            {TechStackData.map(({ name, icon }) => (
              <SkillsSphereTag key={name} name={name} icon={icon} size={size} />
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  );
};