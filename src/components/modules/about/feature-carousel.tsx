import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Feature } from '../../../data/data';

export const FeaturedCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Feature.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const project = Feature[current];

  return (
    <div className="flex flex-col h-full">
      <div className="px-5 pt-5 pb-3 flex items-center justify-between">
        <p className="text-[10px] tracking-[0.3em] uppercase text-secondary select-none">
          Featured
        </p>
        <div className="flex gap-1.5">
          {Feature.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-white w-4' : 'bg-white/20 w-1.5'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="h-50 relative overflow-hidden mx-3 rounded-xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={project.id}
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            draggable={false}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none z-10" />

        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between pointer-events-none z-20">
          <p className="text-sm font-semibold text-primary">{project.title}</p>
          <span className="text-[10px] tracking-wider text-muted border border-white/10 rounded-md px-2 py-0.5">
            {project.tag}
          </span>
        </div>
      </div>

    </div>
  );
};