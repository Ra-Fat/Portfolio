import React, { useState, useEffect, useRef } from 'react';
import { Play, ExternalLink, Eye, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { ProjectsContext } from '../utils/constants';
import { ImageGalleryModal } from '../utils/ImageGallery';

const Projects = () => {
  
  
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleIndexes, setVisibleIndexes] = useState(new Set());
  const [selectedProject, setSelectedProject] = useState(null);

  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, ProjectsContext.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.25 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="w-full lg:px-10 xl:px-16">
      <div className="flex flex-col items-center justify-center w-full xl:px-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-[800px]">
          <span className="text-2xl md:text-4xl font-moderniz font-bold leading-tight select-none"
            style={{
              display: 'block',
              color: '#000754',
              textShadow:
                '0.5px 0.5px 0 #00d9ff, -0.5px -0.5px 0 #00d9ff, 0.5px -0.5px 0 #00d9ff, -0.5px 0.5px 0 #00d9ff',
            }}
          >
            Projects
          </span>
          <span className="text-base font-cascadia sm:text-sm text-gray-300 lg:text-base block text-center sm:text-left">
            Overview of my professional growth and learning experiences
          </span>
        </div>

        {/* Projects List */}
        <div className="w-full max-w-6xl flex flex-col gap-5 mt-10">
          {ProjectsContext.map((project, index) => {
            const isEven = index % 2 === 0;
            const isVisible = visibleIndexes.has(index);

            return (
              <div
                key={index}
                data-index={index}
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`project-card grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 items-center border bg-gray-800/30 backdrop-blur-md border-b border-white/10 rounded-2xl p-5
                  transform transition-all duration-700 ease-out
                  ${
                    isVisible
                      ? 'opacity-100 translate-y-0 scale-100 w-full'
                      : 'opacity-0 translate-y-12 scale-90 w-11/12'
                  }
                `}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                {/* Image */}
                <div className={`relative overflow-hidden flex justify-center items-center ${
                    isEven ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-[68%] h-[68%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col gap-4 ${
                    isEven ? 'md:order-2' : 'md:order-1 pl-4'
                  }`}
                >
                  <h2 className="text-xl font-bold">{project.name}</h2>

                  <p className="text-gray-400 leading-relaxed text-[14px]">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3">
                    {project.languages.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-full text-[11px] font-medium border border-cyan-400/30 bg-cyan-400/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
                  {/* Buttons */}
                  <div className="flex items-center justify-between">
                   <p className="text-gray-300 text-sm leading-relaxed flex-1 line-clamp-3">{project.date}</p>
                   <button  onClick={() => setSelectedProject(project)}
                     className="cursor-pointer text-sm gap-2 relative flex px-5 rounded-xl py-2 items-center justify-center border border-slate-700 bg-slate-900/[0.8] text-white transition-all duration-300 hover:bg-slate-800">
                     View <ArrowRight size={16} />
                   </button>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {selectedProject && (
        <ImageGalleryModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;
