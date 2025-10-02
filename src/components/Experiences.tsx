import React, { useState, useEffect } from 'react';
import { Eye, ChevronDown } from 'lucide-react';
import { ExperiencesContext } from '../constants';

const Experiences = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleExpand = (index: number) => {
    if (windowWidth <= 780) {
      setExpandedIndex(expandedIndex === index ? null : index);
    }
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full lg:px-0 xl:px-10">
      <div data-aos="fade-down" data-aos-duration="1300" className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-4xl">Experiences</h1>
        <span className="text-[15px] sm:text-sm lg:text-base block text-center sm:text-left max-w-3xl">Overview of my professional growth and learning experiences</span>
      </div>

      <div data-aos="fade-up" data-aos-duration="1300" className="w-full max-w-5xl mt-5 flex gap-10 flex-col">
        {ExperiencesContext.map((exp, index) => (
          <div key={index} onClick={() => toggleExpand(index)}
            className={`w-full relative bg-gray-800/30 p-4 flex items-start gap-10 shadow-inner cursor-crosshair rounded-[8px] 
              transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md hover:shadow-gray/10
              ${
                expandedIndex === index && windowWidth <= 780 ? 'flex-col max-[780px]:h-85' : 'flex-row max-[780px]:h-40'
              } h-55`}
          >
            <div className="relative w-70 h-50 group overflow-hidden rounded-md max-[780px]:hidden">
              <img className="bg-cover rounded-xs pb-2 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40" src={exp.picture} alt=""
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button onClick={(e) => { e.stopPropagation(); window.open(exp.pdf, '_blank'); }} className="bg-white/80 cursor-pointer hover:bg-white p-3 rounded-full shadow-lg transition">
                  <Eye className="w-5 h-5 text-gray-800" />
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col items-start gap-5">
              <h2 className="text-2xl font-medium max-[780px]:text-xl">{exp.title}</h2>
              <div className="flex items-center gap-3">
                <span className="text-gray-300 px-2 py-1 border-1 text-[13px] rounded-xl border-gray-600">{exp.tag[0]}</span>
                <span className="text-gray-300 px-2 py-1 border-1 text-[13px] rounded-xl border-gray-600">{exp.tag[1]}</span>
              </div>
            </div>

            {/* Year */}
            {expandedIndex !== index && (
              <div className="h-full flex justify-end items-center grow-1 max-[780px]:hidden">{exp.year}</div>
            )}

            {/* Expanded Image (mobile only) */}
            {expandedIndex === index && windowWidth <= 780 && (
              <div className="flex justify-center items-center w-full">
                <div className="relative w-70 h-45 overflow-hidden rounded-md">
                  <img src={exp.picture} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 flex justify-center items-center transition-opacity duration-500 ${
                    expandedIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <button onClick={(e) => { e.stopPropagation(); window.open(exp.pdf, '_blank');}} className="bg-white/80 cursor-pointer hover:bg-white p-3 rounded-full shadow-lg transition">
                      <Eye className="w-5 h-5 text-gray-800" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile Chevron (only show ≤780px) */}
            {windowWidth <= 780 && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                <ChevronDown
                  className={`transition-transform duration-300 animate-bounce ${
                    expandedIndex === index ? 'hidden' : ''
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
