import React, { useState, useEffect, useRef } from 'react';
import { Download } from 'lucide-react';
import { freeStyle1, freeStyle2, freeStyle3 } from '../../assets/index';
import { primaryTechStack } from '../utils/constants';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ImageCarousel } from '../utils/constants/imageAnimation';
import { motion } from 'framer-motion';
import { containerVariants } from '../utils/animation';
import { headerVariants } from '../utils/animation';
import { contentLeftVariants } from '../utils/animation';
import { contentRightVariants } from '../utils/animation';
import { itemVariants } from '../utils/animation';
import { buttonVariants } from '../utils/animation';


const images = [
  { id: 1, img: freeStyle1,},
  { id: 2, img: freeStyle2,},
  { id: 3, img: freeStyle3,},
];

const Overview = () => {
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
    <div className="w-full lg:px-10 xl:px-16 py-10 lg:py-16 overflow-x-hidden" ref={sectionRef}>
      <motion.div 
        className="flex flex-col w-full"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
          
          {/* Section Header */}
          <motion.div 
            className='flex items-center gap-3 w-full px-6 justify-center mb-10'
            variants={headerVariants}
          >
            <span className="text-2xl md:text-3xl font-bold uppercase">
              About
            </span>
            <span className="text-lg md:text-3xl font-black text-gray-300">/</span>
            <span className="text-2xl md:text-3xl font-bold uppercase text-gray-500">
              Profile
            </span>
          </motion.div>
          
          {/* Main Content */}
         <div className='w-full flex items-center justify-center'>
             <div className='w-full max-w-7xl flex flex-col-reverse  lg:flex-row gap-13 items-stretch justify-between md:px-6 px-0'>
              
              {/* Left Side - Content */}
              <motion.section 
                className='flex flex-col items-start gap-3 flex-1 min-w-0'
                variants={contentLeftVariants}
              >
                  
                  {/* Title */}
                  <motion.div 
                    className='flex flex-col items-start gap-1'
                    variants={itemVariants}
                  >
                      <h2 className="md:text-3xl text-2xl text-right font-bold uppercase">
                        software
                      </h2>
                      <h2 className="md:text-3xl text-2xl text-right font-bold uppercase">
                        Engineer & developer
                      </h2>
                  </motion.div>

                  {/* Bio */}
                  <motion.div 
                    className='flex items-stretch gap-3 mt-3'
                    variants={itemVariants}
                  >
                      <span className='w-1.5 bg-gray-300'></span>
                      <p className='text-gray-300'>
                        I'm a passionate developer who enjoys solving problems and building efficient, user-friendly applications. My goal is to grow into a strong full-stack developer and contribute to impactful, purpose-driven projects.
                      </p>
                  </motion.div>

                  {/* Tech Stack */}
                  <motion.div 
                    className="flex flex-col gap-4 p-4 items-start w-full mt-4 bg-gray-800/30 backdrop-blur-md border border-gray-800 rounded-xl"
                    variants={itemVariants}
                  >
                      <h2 className="text-base font-semibold uppercase text-gray-300">
                        Primary Tech Stack
                      </h2>
                      <div className="relative w-full overflow-hidden">
                        <div className="animation-tech-scroll flex items-center space-x-8 cursor-grab">
                          {primaryTechStack.map((tech, index) => (
                            <motion.div
                              key={`tech-1-${index}`}
                              className="flex-shrink-0 flex flex-col items-center justify-center gap-2 "
                              initial={{ opacity: 0, scale: 0 }}
                              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.3 }}
                            >
                              <div className="w-12 h-12 flex items-center justify-center p-2 ">
                                <img
                                  src={tech.icon}
                                  alt={tech.name}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <span className="text-[12px] text-gray-200 text-center whitespace-nowrap font-medium">
                                {tech.name}
                              </span>
                            </motion.div>
                          ))}
                          {primaryTechStack.map((tech, index) => (
                            <motion.div
                              key={`tech-2-${index}`}
                              className="flex-shrink-0 flex flex-col items-center justify-center gap-2"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.3 }}
                            >
                              <div className="w-12 h-12 flex items-center justify-center p-2">
                                <img
                                  src={tech.icon}
                                  alt={tech.name}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <span className="text-[12px] text-gray-200 text-center whitespace-nowrap font-medium">
                                {tech.name}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                  </motion.div>

                  {/* Buttons */}
                  <motion.div 
                    className='flex items-center gap-4 mt-3'
                    variants={itemVariants}
                  >
                    <motion.button 
                      className="cursor-pointer relative flex px-4 rounded-xl py-3 items-center justify-center border bg-[#061a7e] text-white border-[#061a7e] hover:bg-[#07209d]"
                      variants={buttonVariants}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download size={16} className="mr-2" />
                      <span className="text-xs font-semibold truncate">Download Resume</span>
                    </motion.button>

                    <motion.a 
                      href="https://github.com/Ra-Fat"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/[0.8] text-white transition-all duration-300 hover:bg-slate-800"
                      variants={buttonVariants}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub className="h-6 w-6 text-slate-400 group-hover:text-white" />
                    </motion.a>

                    <motion.a 
                      href="https://www.linkedin.com/in/arafat-man"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/[0.8] text-white hover:bg-slate-800"
                      variants={buttonVariants}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaLinkedin className="h-6 w-6 text-slate-400 group-hover:text-blue-400 transition-all duration-300" />
                    </motion.a>
                  </motion.div>
              </motion.section>

              {/* Right Side - Image Carousel */}
              <motion.section 
                className='flex-1 min-h-[280px] sm:min-h-[320px] lg:min-h-0 flex items-center justify-center relative overflow-hidden'
                variants={contentRightVariants}
              >
                  <ImageCarousel images={images}/>
              </motion.section>
          </div>
         </div>
      </motion.div>
    </div>
  );
};

export default Overview;