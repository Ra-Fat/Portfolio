import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, X } from 'lucide-react';  // Added X for close icon
import { ExperiencesContext } from '../utils/constants';

const Experiences = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [openImage, setOpenImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px',
      }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Disable page scroll when modal is open
  useEffect(() => {
    if (openImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [openImage]);

  return (
    <div className="w-full lg:px-10 xl:px-10" ref={sectionRef}>
      <div className="w-full flex flex-col items-center justify-center gap-6 max-w-7xl mx-auto">
        {/* Title & Subtitle */}
        <div
          className={`flex flex-col items-center justify-center gap-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <span
            className="text-2xl md:text-4xl font-moderniz font-bold leading-tight select-none"
            style={{
              color: '#000754',
              textShadow:
                '0.5px 0.5px 0 #00d9ff, -0.5px -0.5px 0 #00d9ff, 0.5px -0.5px 0 #00d9ff, -0.5px 0.5px 0 #00d9ff',
              display: 'block',
            }}
          >
            Certificates
          </span>
          <span className="text-base font-cascadia sm:text-sm text-gray-300 lg:text-base block text-center sm:text-left max-w-xl">
            Overview of my professional growth and learning experiences
          </span>
        </div>

        {/* Experiences Grid */}
        <div className="w-full max-w-6xl mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {ExperiencesContext.map((exp, index) => (
            <div
              key={index}
              className={`w-full relative bg-gray-800/30 backdrop-blur-md border-b border-white/10 rounded-lg overflow-hidden  transition-transform hover:scale-105 duration-300 flex flex-col
              ${
                isVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-90'
              }`}
              style={{
                transitionDelay: `${200 + index * 150}ms`,
                willChange: 'transform, opacity',
              }}
            >
              <div className="w-full h-50 flex items-center justify-center overflow-hidden flex-shrink-0 cursor-pointer">
                <img
                  src={exp.picture}
                  alt={exp.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-3 p-4">
                <h3 className="text-md md:text-xl font-bold text-white">{exp.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed flex-1 line-clamp-3">{exp.description}</p>
                {exp.tag && exp.tag.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.tag.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-1 bg-gray-800/30 border border-slate-700 backdrop-blur-md rounded-xl text-center transition-transform transform hover:scale-[1.05] hover:shadow-md hover:shadow-gray/10 duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
                <div className="flex justify-between items-center">
                  <p className="text-gray-300 text-sm leading-relaxed flex-1 line-clamp-3">{exp.date}</p>
                  <button
                    onClick={() => setOpenImage(exp.picture)}
                    className="cursor-pointer text-sm gap-2 relative flex px-5 rounded-xl py-2 items-center justify-center border border-slate-700 bg-slate-900/[0.8] text-white transition-all duration-300 hover:bg-slate-800"
                  >
                    View <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Image */}
      {openImage && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-opacity-10 flex items-center justify-center z-50"
          onClick={() => setOpenImage(null)}
        >
          <div
            className="relative bg-gray-800/30 bg-opacity-80 rounded-xl border border-white/30 shadow-lg p-4 max-w-[50vw] max-h-[50vh]"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on image click
          >
            <button
              onClick={() => setOpenImage(null)}
              className="absolute cursor-pointer top-3 right-3 p-1 rounded-full bg-gray-800 bg-opacity-70 hover:bg-opacity-100 text-white transition"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <img
              src={openImage}
              alt="Certificate"
              className="max-w-full max-h-[45vh] rounded-lg shadow-md"
            />
          </div>
        </div>
      )}


    </div>
  );
};

export default Experiences;
