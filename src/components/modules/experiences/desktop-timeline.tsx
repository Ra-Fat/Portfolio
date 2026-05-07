import React from 'react';
import { ProgressBar } from './progress-bar';
import { ExperienceCard } from './experience-card';

type Props = {
  experiences: any[];
  scrollProgress: number;
  expandedIndex: number | null;
  setExpandedIndex: (i: number | null) => void;
};

export const DesktopTimeline = ({
  experiences,
  scrollProgress,
  expandedIndex,
  setExpandedIndex,
}: Props) => (
  <div className="hidden md:block">
    <div className="relative"> {/* ← this needs to wrap BOTH bar and cards */}
      {/* Center progress bar */}
      <ProgressBar scrollProgress={scrollProgress} vertical={false} />

      {/* Cards */}
      <div className="relative space-y-12">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={index} className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
              <div className="w-full md:w-[calc(50%-3rem)]">
                <ExperienceCard
                  exp={exp}
                  index={index}
                  expandedIndex={expandedIndex}
                  setExpandedIndex={setExpandedIndex}
                  scrollProgress={scrollProgress}
                  totalCount={experiences.length}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);