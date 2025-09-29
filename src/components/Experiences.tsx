import React, { useState } from 'react';
import { Eye, ChevronDown } from 'lucide-react';
import { ExperiencesContext } from '../constants';

const Experiences = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);


  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };


  return (
    <div className='flex flex-col gap-8 items-center justify-center w-full lg:px-0 xl:px-10'>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-4xl">Experiences</h1>
        <span className="text-[15px] sm:text-sm lg:text-base block text-center sm:text-left max-w-3xl">
          Overview of my professional growth and learning experiences
        </span>
      </div>

      <div className='w-full max-w-5xl mt-5 flex gap-10 flex-col'>
        {ExperiencesContext.map((exp, index) => (
          <div
            key={index}
            onClick={() => toggleExpand(index)}
            className={`w-full relative bg-gray-800/30 p-4 flex items-start gap-10 shadow-inner cursor-pointer rounded-[8px] 
              transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md hover:shadow-gray/10
              h-55 max-[780px]:transition-all max-[780px]:duration-300
              ${expandedIndex === index ? 'max-[780px]:h-72' : 'max-[780px]:h-35'}`}
          >
            {/* Image */}
            <div className="relative w-70 h-50 group overflow-hidden rounded-md max-[780px]:hidden">
              <img
                className="bg-coverrounded-xs pb-2 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40"
                src={exp.picture}
                alt=""
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={(e) => { e.stopPropagation(); window.open(exp.pdf, "_blank"); }}
                  className="bg-white/80 cursor-pointer hover:bg-white p-3 rounded-full shadow-lg transition"
                >
                  <Eye className="w-5 h-5 text-gray-800" />
                </button>
              </div>
            </div>

            {/* Details */}
            <div className='flex flex-col items-start gap-5 grow-1'>
              <h2 className='text-2xl font-medium max-[780px]:text-xl'>{exp.title}</h2>
              <div className='flex items-center gap-3'>
                <span className='text-gray-300 px-2 py-1 border-1 text-[13px] rounded-xl border-gray-600'>{exp.tag[0]}</span>
                <span className='text-gray-300 px-2 py-1 border-1 text-[13px] rounded-xl border-gray-600'>{exp.tag[1]}</span>
              </div>
            </div>

            <div className='h-full flex justify-center items-center'>
              {exp.year}
            </div>

            <div className='absolute bottom-3 left-1/2 -translate-x-1/2 hidden max-[780px]:flex'>
              <ChevronDown className='animate-bounce' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experiences;
