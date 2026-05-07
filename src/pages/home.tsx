import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  titleVariants,
  sloganVariants,
  subtitleVariants,
  fadeUp,
  buttonVariants,
  sideInfoVariants,
  sideInfoRightVariants,
} from "../utils/animations/animation";
import { ScrollIndicator } from "../components/atoms/scroll-indicator";

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.fonts.load("bold 1em Moderniz").then(() => setIsVisible(true));
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-8"
          variants={fadeUp}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/40">
            Available for work
          </span>
        </motion.div>

        <motion.h1
          className="font-moderniz uppercase leading-[0.9] tracking-tight"
          style={{ fontSize: "clamp(52px, 12vw, 96px)" }}
          variants={titleVariants}
        >
          <span className="text-primary">ARA</span>
          <span
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.2)",
              color: "transparent",
            }}
          >
            FAT
          </span>
        </motion.h1>

        <motion.div
          className="flex items-center gap-4 mt-6"
          variants={sloganVariants}
        >
          <div className="h-px w-10 bg-white/15" />
          <p
            className="font-serif italic text-white/50"
            style={{ fontSize: "clamp(18px, 3.5vw, 28px)" }}
          >
            deliver real impact.
          </p>
          <div className="h-px w-10 bg-white/15" />
        </motion.div>

        <motion.p
          className="mt-6 font-mono text-[11px] tracking-[0.18em] uppercase text-white/25"
          variants={subtitleVariants}
        >
          I design and build products that
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 justify-center mt-10"
          variants={containerVariants}
        >
          <motion.a
            href="#projects"
            className="font-mono text-[12px] font-bold uppercase px-7 py-3 rounded-full bg-white text-black hover:opacity-90"
            variants={buttonVariants}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            View Work
          </motion.a>
          <motion.a
            href="#contact"
            className="font-mono text-[12px] font-bold uppercase px-7 py-3 rounded-full border border-white/20 text-white/60 hover:text-white"
            variants={buttonVariants}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
      <ScrollIndicator />
    </div>
  );
};