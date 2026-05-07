import React from 'react';
import { freeStyle2 } from '../../../../assets/index';
import { motion } from 'framer-motion';

type Props = {
  scrollProgress: number;
  vertical?: boolean;
};

export const ProgressBar = ({ scrollProgress, vertical = true }: Props) => (
  <div
    className={`
      ${vertical
        ? 'relative w-1.5 h-full'
        : 'absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1.5'
      }
      bg-[#080808] border border-white/[0.07]
    `}
  >
    {/* Animated fill */}
    <motion.div
      className="absolute top-0 left-0 w-full bg-gray-300"
      animate={{ height: `${scrollProgress}%` }}
      transition={{ type: 'spring', stiffness: 60, damping: 20, restDelta: 0.001 }}
    />

    {/* Moving bullet */}
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      animate={{ top: `${scrollProgress}%` }}
      transition={{ type: 'spring', stiffness: 60, damping: 20, restDelta: 0.001 }}
    >
      <div className="w-10 h-10 rounded-full p-1">
        <img
          src={freeStyle2}
          alt="Progress"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    </motion.div>
  </div>
);