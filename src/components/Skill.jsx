import React, { useState } from 'react';
import { Code, Monitor, Server, Wrench } from 'lucide-react';
import { technologies } from '../constants';

const Skills = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!isHovering) return;
    const bounds = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div  className="mt-10 flex flex-col items-center justify-center w-full lg:px-0 xl:px-10">
      <div data-aos="fade-down" data-aos-duration="1300" className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-4xl">My Skills</h1>
        <span className="text-[15px] sm:text-sm lg:text-base block text-center sm:text-left max-w-3xl">
          Technical expertise and proficiency across different domains of software development
        </span>
      </div>

      <div
      data-aos="fade-up" data-aos-duration="1500"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-full max-w-5xl mt-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 px-4
                   bg-gray-800/20 py-4 rounded-xl relative overflow-hidden
                   cursor-crosshair transition-all duration-300"
      >
        {/* Glow Cursor - only visible on hover */}
        <div
          className="pointer-events-none absolute w-40 h-40 rounded-full bg-white blur-2xl z-10
                     transition-opacity duration-300"
          style={{
            opacity: isHovering ? 0.1 : 0,
            transform: `translate(${mousePos.x - 80}px, ${mousePos.y - 80}px)`,
          }}
        />

        {technologies.map(({ name, icon }, idx) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center p-4 rounded-lg
                       transition-transform duration-300"
            style={{
              animation: `bounceSmooth 1.2s ease-in-out infinite`,
              animationDelay: `${idx * 0.55}s`, // stagger delay per item
            }}
          >
            <img
              src={icon}
              alt={name}
              className="w-12 h-12 object-contain mb-2 brightness-100 transition-all duration-300"
              draggable={false}
            />
            <p className="text-white text-sm select-none font-medium">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
