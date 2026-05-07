import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "../components/atoms/section-title";
import {
  containerVariants,
  contentLeftVariants,
  contentRightVariants,
  fadeUp,
} from "../utils/animations/animation";

import { FeaturedCarousel } from "../components/modules/about/feature-carousel";
import { OverviewTabs } from "../components/modules/about/overview";
import { MindsetCard } from "../components/modules/about/mindset-card";
import { LocationCard } from "../components/modules/about/location-card";
import { CraftCard } from "../components/modules/about/craft-card";


const Card = ({
  children,
  className = "",
  variants,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: any;
}) => (
  <motion.div
    variants={variants ?? fadeUp}
    className={`bg-[#111111] border border-white/[0.07] rounded-2xl overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      className="w-full lg:px-10 xl:px-16 py-10 lg:py-16 overflow-x-hidden"
      ref={sectionRef}
    >
      <motion.div
        className="flex flex-col w-full"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <SectionTitle title="About" subtitle="Profile" />

        <div className="w-full flex justify-center mt-8">
          <div className="w-full max-w-7xl px-0 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-auto">
              <motion.div variants={fadeUp} className="lg:col-span-2 card rounded-2xl flex flex-col min-h-[160px]">
                <OverviewTabs />
              </motion.div>
              <Card
                className="flex flex-col min-h-[220px] card"
                variants={contentLeftVariants}
              >
                <FeaturedCarousel />
              </Card>
              
              <Card
                className="p-7 flex flex-col gap-4 card"
                variants={contentLeftVariants}
              >
                <MindsetCard />
              </Card>
              <Card
                className="relative overflow-hidden min-h-[180px] card"
                variants={fadeUp}
              >
                <LocationCard />
              </Card>
              <Card
                className="p-7 flex flex-col gap-4 card"
                variants={contentRightVariants}
              >
                <CraftCard />
              </Card>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
