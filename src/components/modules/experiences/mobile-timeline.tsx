import React from 'react';
import { ProgressBar } from './progress-bar';
import { ExperienceCard } from './experience-card';

type Props = {
  experiences: any[];
  scrollProgress: number;
  expandedIndex: number | null;
  setExpandedIndex: (i: number | null) => void;
};

export const MobileTimeline = ({
  experiences,
  scrollProgress,
  expandedIndex,
  setExpandedIndex,
}: Props) => (
  <div className="flex md:hidden w-full">
    {/* Left bar */}
    <div className="flex flex-col items-center pr-3 pt-2">
      <ProgressBar scrollProgress={scrollProgress} vertical />
    </div>

    {/* Cards */}
    <div className="flex-1 space-y-5">
      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          exp={exp}
          index={index}
          expandedIndex={expandedIndex}
          setExpandedIndex={setExpandedIndex}
          scrollProgress={scrollProgress}
          totalCount={experiences.length}
        />
      ))}
    </div>
  </div>
);