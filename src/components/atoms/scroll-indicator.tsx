import React from "react";
import { motion } from "framer-motion";

export const ScrollIndicator = () => (
  <motion.div
    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2, duration: 0.6 }}
  >
    <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center pt-1.5">
      <motion.div
        className="w-0.5 h-1.5 rounded-full bg-white/60"
        animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
    <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/20">
      Scroll
    </span>
  </motion.div>
);