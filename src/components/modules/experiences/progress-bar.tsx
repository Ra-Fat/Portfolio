import React from 'react';
import { freeStyle2 } from '../../../../assets/index';

type Props = {
  scrollProgress: number;
  vertical?: boolean;
};

export const ProgressBar = ({ scrollProgress, vertical = true }: Props) => (
  <div
    className={`
      ${vertical
        ? 'relative w-0.5 h-full'
        : 'absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5'
      }
      bg-white/[0.08]
    `}
  >
    <div
      className="absolute top-0 left-0 w-full bg-white/40"
      style={{ height: `${scrollProgress}%` }}
    />
    <div
      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      style={{ top: `${scrollProgress}%` }}
    >
      <div className="w-8 h-8 rounded-full ring-1 ring-white/20 overflow-hidden">
        <img
          src={freeStyle2}
          alt="Progress"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
);