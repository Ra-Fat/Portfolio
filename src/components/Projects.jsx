import { Eye, ChevronDown } from 'lucide-react';
import { ProjectsContext } from '../constants';
import React, { useState } from 'react';
import { Github,Play } from 'lucide-react';
import { span } from 'framer-motion/client';

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full lg:px-0 xl:px-10">
      <div data-aos="fade-down" data-aos-duration="1300" className="flex flex-col items-center justify-center gap-4 ">
        <h1 className="font-bold text-4xl">Projects</h1>
        <span className="text-[15px] sm:text-sm lg:text-base block text-center sm:text-left max-w-3xl">
          Overview of my professional growth and learning experiences
        </span>
      </div>

      <div data-aos="fade-up" data-aos-duration="1300" className="w-full max-w-5xl mt-5 flex gap-10 flex-col">

        {ProjectsContext.map((pro, index) => (
          <div
            onClick={() => toggleExpand(index)}
            className={`w-full relative bg-gray-800/30 p-4 shadow-inner cursor-pointer rounded-[8px] 
              transition-all duration-500 transform hover:scale-[1.02] hover:shadow-md hover:shadow-gray/10
              ${expandedIndex === index ? "h-110 flex flex-col gap-5 max-[780px]:h-125" : "h-55 max-[780px]:h-40 flex flex-row items-start gap-10"}`}
            key={index}
          >
            {/* Image (hidden when expanded) */}
            <div
              className={`relative w-70 h-50 group overflow-hidden rounded-md max-[780px]:hidden transition-opacity duration-300 ${expandedIndex === index ? "opacity-0 hidden" : "opacity-100"}`}>
              <img className="bg-cover rounded-xs pb-2 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40" src={pro.image} alt=""/>
            </div>

            <div className="flex flex-col items-start gap-5 grow-0">
              <h2 className="text-2xl font-medium max-[780px]:text-xl">{pro.name}</h2>
              <div className="flex items-center gap-3">
                <span className="text-gray-300 px-2 py-1 border-1 text-[13px] rounded-xl border-gray-600">
                  {pro.languages[0]}
                </span>
                <span className="text-gray-300 px-2 py-1 border-1 text-[13px] rounded-xl border-gray-600">
                  {pro.languages[1]}
                </span>
                <span className="text-gray-300 px-2 py-1 border-1 text-[13px] rounded-xl border-gray-600">
                  {pro.languages[2]}
                </span>
              </div>
            </div>

           {expandedIndex !== index && (
              <div className="h-full flex justify-end items-center grow-1">
                {pro.year}
              </div>
           )}

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
              <ChevronDown
                className={`transition-transform duration-300 animate-bounce ${
                  expandedIndex === index ? "hidden" : ""
                }`}
              />
            </div>

            {expandedIndex === index && (
              <div className='w-full items-center justify-center flex flex-col gap-3 grow-1'>
                <div className='w-70 h-45'>
                  <iframe
                    className="rounded-xs pb-2 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40"
                    src={`${pro.videodemo.replace("youtu.be", "www.youtube.com/embed")}?autoplay=1&mute=1`}
                    title={pro.name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                  ></iframe>
                </div>
                <p className='text-center px-5'>{pro.description}</p>

                <div className='flex items-center gap-5 justify-center'>
                  <a
                    className='text-gray-300 px-3 py-2 border-1 text-[13px] cursor-crosshair rounded-xl border-gray-600 flex items-center justify-center gap-1 bg-gradient-to-br from-gray-900 via-black to-gray-900' href={pro.hostlink} target="_blank" rel="noopener noreferrer">
                    <Play size={15} /> Demo
                  </a>
                  <a
                    className='text-gray-300 px-2 py-2 border-1 text-[13px] cursor-crosshair flex items-center justify-center gap-1 rounded-xl border-gray-600 bg-gradient-to-br from-gray-900 via-black to-gray-900' href={pro.source_code_link} target="_blank" rel="noopener noreferrer" >
                    <Github size={15} /> Source Code
                  </a>
                </div>
              </div>
              )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
