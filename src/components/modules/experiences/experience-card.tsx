import React, { useRef, useState, useEffect } from 'react';

type Props = {
  exp: {
    title: string;
    position: string;
    description: string;
    date: string;
  };
  index: number;
  expandedIndex: number | null;
  setExpandedIndex: (i: number | null) => void;
  scrollProgress: number;
  totalCount: number;
};

export const ExperienceCard = ({
  exp,
  index,
  expandedIndex,
  setExpandedIndex,
  scrollProgress,
  totalCount,
}: Props) => {
  const hasAnimatedRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  const triggerPoint = (index / Math.max(totalCount - 1, 1)) * 100;
  const distance = scrollProgress - triggerPoint + 20;
  const shouldBeVisible = distance >= 0;

  useEffect(() => {
    if (shouldBeVisible && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
      setIsVisible(true);
    }
  }, [shouldBeVisible]);

  return (
    <div
      className="p-5 rounded-2xl card"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(16px)',
        transition: 'opacity 400ms ease, transform 400ms ease',
      }}
      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <h3 className="truncate text-[16px] md:text-xl font-semibold text-primary">
            {exp.title}
          </h3>
          <h2 className="text-[13px] md:text-base font-semibold text-secondary mt-2">
            {exp.position}
          </h2>
        </div>
      </div>
      <p className="text-muted leading-relaxed mb-4 text-[14px]">
        {exp.description}
      </p>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      <div className="text-[10px] md:text-[12px] text-muted mt-3">
        {exp.date}
      </div>
    </div>
  );
};