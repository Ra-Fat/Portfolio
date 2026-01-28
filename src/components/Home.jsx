import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { BsStack } from 'react-icons/bs';
import { titleVariants } from '../utils/animation';
import { containerVariants } from '../utils/animation';
import { sloganVariants } from '../utils/animation';
import { subtitleVariants } from '../utils/animation';
import { sideInfoVariants } from '../utils/animation';
import { sideInfoRightVariants } from '../utils/animation';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    <div className="w-full lg:px-10 xl:px-16 h-full">
      <div className="w-full max-w-7xl flex flex-col justify-center items-center h-full relative">
          
          <motion.div 
            className='flex flex-col items-center gap-3'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
              <motion.h1  
                className="text-5xl md:text-7xl xl:text-8xl font-bold uppercase" 
                style={{ fontFamily: 'Moderniz, sans-serif' }}
                variants={titleVariants}
              >
                ARafat
              </motion.h1>

              <motion.p 
                className="text-gray-400 text-xs sm:text-sm md:text-2xl tracking-widest uppercase"
                variants={subtitleVariants}
              >
                I DESIGN AND BUILD PRODUCTS THAT
              </motion.p>

              <motion.p 
                className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-white"
                variants={sloganVariants}
              >
                deliver real impact.
              </motion.p>
          </motion.div>

          {/* Location Info - Left Side */}
          <motion.div 
            className="flex flex-col justify-center items-center gap-2 absolute bottom-20 left-0"
            variants={sideInfoVariants}
            initial="hidden"
            animate="visible"
          >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <FaMapMarkerAlt size={20} className='text-green-600' />
                </motion.div>
                <p className="text-white font-semibold text-[11px] md:text-base tracking-wide uppercase">
                    BASED IN Phnom Penh,
                </p>
                <p className="text-gray-500 text-[13px] uppercase font-medium">Cambodia</p>
          </motion.div>

          {/* Role Info - Right Side */}
          <motion.div 
            className='absolute bottom-20 right-0 z-50 flex flex-col justify-center items-center gap-2'
            variants={sideInfoRightVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <BsStack size={20} className='text-blue-600' />
            </motion.div>
            <p className="text-white font-semibold text-[11px] md:text-base tracking-wide uppercase">
                Software Developer
            </p>
            <p className="text-gray-500 text-[13px] uppercase font-medium">& ENGINEER</p>
          </motion.div>
      </div>
    </div>
  );
}

export default Home;