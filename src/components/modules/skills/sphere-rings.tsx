import React from "react";

export const SkillsSphereRings = () => {
  const size = 400;
  const cx = size / 2;
  const cy = size / 2;
  const radius = size * 0.42;
  const stroke = (opacity: number) => `rgba(255,255,255,${opacity})`;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 ${size} ${size}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <ellipse cx={cx} cy={cy} rx={radius + 10} ry={radius + 10}
        fill="none" stroke={stroke(0.06)} strokeWidth="1" />
      <ellipse cx={cx} cy={cy} rx={radius - 20} ry={radius + 10}
        fill="none" stroke={stroke(0.03)} strokeWidth="1"
        transform={`rotate(60 ${cx} ${cy})`} />
      <ellipse cx={cx} cy={cy} rx={radius - 20} ry={radius + 10}
        fill="none" stroke={stroke(0.03)} strokeWidth="1"
        transform={`rotate(-60 ${cx} ${cy})`} />
      <ellipse cx={cx} cy={cy} rx={radius + 10} ry={size * 0.075}
        fill="none" stroke={stroke(0.03)} strokeWidth="1" />
    </svg>
  );
};