import { Eye, ChevronDown } from 'lucide-react';
import { ProjectsContext } from '../constants';
import React, { useState } from 'react';


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

      <div data-aos="fade-up" data-aos-duration="1300"  className="w-full max-w-5xl mt-5 flex gap-10 flex-col">
          {ProjectsContext.map((pro , index)=>(
            <div className='w-full relative bg-gray-800/30 p-4 flex items-start gap-10 shadow-inner cursor-pointer rounded-[8px] 
              transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md hover:shadow-gray/10 h-55 ' key={index}>

                  <div className="relative w-70 h-50 group overflow-hidden rounded-md max-[780px]:hidden">
                    <img className="bg-cover rounded-xs pb-2 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40" src={pro.image} alt=""/>
                  </div>

                  <div className="flex flex-col items-start gap-5 grow-1">
                    <h2 className="text-2xl font-medium max-[780px]:text-xl">{pro.name}</h2>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-300 px-2 py-1 border-1 text-[13px] rounded-xl border-gray-600">{pro.languages[0]}</span>
                      <span className="text-gray-300 px-2 py-1 border-1 text-[13px] rounded-xl border-gray-600">{pro.languages[1]}</span>
                      <span className="text-gray-300 px-2 py-1 border-1 text-[13px] rounded-xl border-gray-600">{pro.languages[2]}</span>
                    </div>
                  </div>

                  <div className="h-full flex justify-center items-center">{pro.year}</div>

                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                        <ChevronDown className={`transition-transform duration-300 animate-bounce`} />
                  </div>


            </div>
          ))}
      </div>
      
    </div>
  )
}

export default Projects
