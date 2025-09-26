import React from 'react';
import { Eye, Download, ChevronDown } from 'lucide-react';
import { ExperiencesContext } from '../constants';

const Experiences = () => {
  return (
    <div className='flex flex-col gap-8 items-center justify-center w-full lg:px-0 xl:px-10 '>
      <div data-aos="fade-down" data-aos-duration="1300" className="flex flex-col items-center justify-center gap-4 ">
        <h1 className="font-bold text-4xl">Experiences</h1>
        <span className="text-[15px] sm:text-sm lg:text-base block text-center sm:text-left max-w-3xl">
          Overview of my professional growth and learning experiences
        </span>
      </div>

      <div className='w-full max-w-5xl mt-5 flex gap-10 flex-col'>
        {ExperiencesContext.map((exp, index) => (
          <div data-aos="fade-down" data-aos-duration="1500" key={index} className='w-full h-55 max-[780px]:h-35  bg-gray-800/30 p-4 flex items-start gap-10 shadow-inner cursor-crosshair transition-transform transform rounded-[8px]  hover:scale-[1.02] hover:shadow-md hover:shadow-gray/10 duration-200 '>
            {/* Image with hover effect */}
            <div className="relative w-70 h-50 group overflow-hidden rounded-md max-[780px]:hidden">
              <img className="bg-coverrounded-xs pb-2 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40" src={exp.picture} alt=""/>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button onClick={() => window.open(exp.pdf, "_blank")}  className="bg-white/80 cursor-pointer hover:bg-white p-3 rounded-full shadow-lg transition">
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

            <div className='h-full flex flex-col justify-center items-start'>
              {exp.year}
            </div>
                   
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default Experiences;
