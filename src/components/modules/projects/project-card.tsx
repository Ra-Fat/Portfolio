import React from 'react';
import { ArrowRight } from 'lucide-react';

type Props = {
  project: {
    name: string;
    description: string;
    image: string;
    techstack: string[];
    date: string;
  };
  index: number;
  isVisible: boolean;
  onView: (project: any) => void;
};

export const ProjectCard = ({ project, index, isVisible, onView }: Props) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`
        grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 items-center card backdrop-blur-md
        rounded-2xl p-5 transform transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-90'}`}
     style={{ transitionDelay: `${150 + index * 100}ms` }}
    >
      <div className={`relative overflow-hidden flex justify-center items-center ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <img
          src={project.image}
          alt={project.name}
          className="w-[68%] h-[68%] object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className={`flex flex-col gap-4 ${isEven ? 'md:order-2' : 'md:order-1 pl-4'}`}>
        <h2 className="text-xl font-bold text-primary">{project.name}</h2>
        <p className="text-secondary leading-relaxed text-[14px]">{project.description}</p>

        <div className="flex flex-wrap gap-3">
          {project.techstack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1.5 rounded-md text-[9px] font-medium border border-white/10 bg-[#161616] text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <p className="text-muted text-sm leading-relaxed flex-1 line-clamp-3">
            {project.date}
          </p>
          <button
            onClick={() => onView(project)}
            className="cursor-pointer text-sm gap-2 relative flex px-5 rounded-xl py-2 items-center justify-center border border-white/10 bg-[#161616] text-primary transition-all duration-300 hover:bg-[#222222]"
          >
            View <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};