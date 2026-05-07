import React from 'react';
import { EarthCanvas } from '../../canvas/earth';

export const LocationCard = () => (
  <div className="relative z-10 p-7 flex flex-col justify-between h-full gap-2">
    <h3 className="text-md xl:text-xl font-bold text-primary tracking-tight leading-tight">
      Phnom Penh, Cambodia
    </h3>
    <span className="text-[11px] text-secondary tracking-widest font-mono">
      11.5564° N, 104.9282° E UTC +7
    </span>
    <EarthCanvas />
  </div>
);