import React from "react";

interface Props {
  name: string;
  icon: string;
  size: number;
}

export const SkillsSphereTag = ({ name, icon, size }: Props) => {
  const iconSize = Math.max(24, size * 0.10);
  const fontSize = Math.max(8, size * 0.018);

  return (
    <div
      className="tech-tag absolute flex flex-col items-center gap-1"
      style={{ pointerEvents: "none", willChange: "transform, opacity" }}
    >
      <img
        src={icon}
        alt={name}
        style={{ width: iconSize, height: iconSize }}
        className="object-contain"
      />
      <span
        className="text-secondary tracking-wide whitespace-nowrap font-medium"
        style={{ fontSize }}
      >
        {name}
      </span>
    </div>
  );
};  