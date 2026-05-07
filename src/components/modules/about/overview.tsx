import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { OverviewData } from '../../../data/data';

export const OverviewTabs = () => {
  const [active, setActive] = useState(OverviewData[0].id);
  const current = OverviewData.find((t) => t.id === active)!;

  return (
    <div className="flex flex-col h-full">
      <p className="text-[10px] tracking-[0.3em] uppercase text-secondary text-center pt-5 pb-4 select-none">
        Overview
      </p>
      <div className="flex items-center gap-2 px-5 pb-4">
        {OverviewData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`
              flex-1 text-[10px] tracking-[0.15em] uppercase py-2 px-3 rounded-lg
              transition-all duration-200 font-medium
              ${
                active === tab.id
                  ? 'bg-white text-black'
                  : 'bg-white/[0.05] text-white/60 hover:bg-white/[0.08] hover:text-white/60'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mx-5 h-px bg-white/[0.06]" />
      <div className="flex-1 px-5 py-4 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3"
          >
            {current.items.map((item, i) => (
              <div key={i} className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <p className="text-[13px] font-medium text-primary leading-snug truncate">
                    {item.title}
                  </p>
                  {item.sub && (
                    <p className="text-[11px] text-muted leading-relaxed line-clamp-2">
                      {item.sub}
                    </p>
                  )}
                </div>
                <span className="shrink-0 text-[10px] tracking-wider text-muted border border-white/[0.08] rounded-md px-2 py-1 whitespace-nowrap mt-0.5">
                  {item.badge}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};