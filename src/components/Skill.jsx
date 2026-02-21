import { technologies } from '../utils/constants';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { containerVariants } from '../utils/animation';
import { headerVariants } from '../utils/animation';
import { itemVariants } from '../utils/animation';

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
      <motion.div 
        className="flex flex-col w-full justify-center items-center"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        
        {/* Title */}
        <motion.div 
          className='flex items-center gap-3 w-full px-6 justify-center'
          variants={headerVariants}
        >
          <span className="text-xl md:text-3xl font-bold uppercase">
            PROFICIENCIES
          </span>
          <span className="text-lg md:text-3xl font-black text-gray-300">/</span>
          <span className="text-xl md:text-3xl font-bold uppercase text-gray-500">
            BUILD STACK
          </span>
        </motion.div>

        {/* Skills Grid - Icon Only Display */}
        <motion.div 
          className="w-full max-w-5xl mt-10 flex gap-5 flex-wrap justify-center items-center rounded-2xl p-0 md:p-5"
          variants={containerVariants}
        >
          {technologies.map(({ name, icon }, index) => (
            <motion.div 
              key={name} 
              className="flex flex-col justify-center items-center bg-gray-800/30 backdrop-blur-md rounded-xl p-3 border border-gray-800"
              variants={itemVariants}
            >
              <img className="w-10 h-10" src={icon} alt={name}/>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;