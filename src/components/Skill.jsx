import { technologies } from '../utils/constants';
import React, { useState, useEffect, useRef } from 'react';


const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full lg:px-10 xl:px-16" ref={sectionRef}>
      <div className="w-full flex flex-col items-center justify-center">
        
        {/* Title */}
        <div 
          className={`flex flex-col items-center justify-center gap-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <span
            className="text-2xl md:text-4xl font-bold leading-tight select-none"
            style={{
              display: 'block',
              color: "#000754",
              textShadow: `0.5px 0.5px 0 #00d9ff, -0.5px -0.5px 0 #00d9ff,
                           0.5px -0.5px 0 #00d9ff, -0.5px 0.5px 0 #00d9ff`
            }}
          >
            TechStacks
          </span>
          <span className="text-base font-cascadia sm:text-sm text-gray-300 lg:text-base block text-center sm:text-left">
            Technical expertise and proficiency across different domains
          </span>
        </div>

        {/* Skills Grid */}
        <div
          className="w-full max-w-5xl mt-10 grid gap-4
                     grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                     rounded-xl relative overflow-hidden"
        >
          {technologies.map(({ name, icon, tag }, index) => (
            <div
              key={name}
              className={`flex justify-start items-center gap-4
                         border border-gray-800 p-2 rounded-lg
                         transition-all duration-700
                         hover:scale-[1.05] hover:border-slate-700
                         hover:shadow-md hover:shadow-gray/10 ${
                           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                         }`}
              style={{ transitionDelay: `${200 + (index * 80)}ms` }}
            >
              <img
                className="w-13 h-13 bg-gray-800/40 p-2 rounded-md
                           transition-transform duration-300
                           hover:scale-110"
                src={icon}
                alt={name}
              />
              <div className="flex flex-col items-start gap-1">
                <h4 className="text-xs font-bold text-white">{name}</h4>
                <span className="text-gray-400 text-[11px] font-bold">
                  {tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;