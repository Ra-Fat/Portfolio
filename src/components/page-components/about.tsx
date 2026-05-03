import React, { useState, useEffect, useRef } from 'react';
import { freeStyle1, freeStyle2, freeStyle3 } from '../../../assets/index';
import { TechStackData } from '../../data/data';
import { ImageCarousel } from '../../utils/constants/image-animation';
import { motion } from 'framer-motion';
import { SectionTitle } from '../sub-components/section-title';
import { containerVariants, headerVariants, contentLeftVariants, contentRightVariants, itemVariants } from '../../utils/animation';
import Marquee from 'react-fast-marquee';

const images = [
  { id: 1, img: freeStyle1 },
  { id: 2, img: freeStyle2 },
  { id: 3, img: freeStyle3 },
];

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const primaryTechStack = TechStackData.filter(
    (tech) => tech.variant === "primary"
  );

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
        <SectionTitle title="About" subtitle="Profile" />

        {/* Main Content */}
        <div className='w-full flex items-center justify-center'>
          <div className='w-full max-w-7xl flex flex-col-reverse lg:flex-row gap-13 items-stretch justify-between md:px-6 px-0'>

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
                <Marquee speed={40} gradient={false} pauseOnHover>
                  {primaryTechStack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center gap-2 mx-6"
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
                    </div>
                  ))}
                </Marquee>
              </motion.div>
            </motion.section>

            {/* Right Side - Image Carousel */}
            <motion.section
              className='flex-1 min-h-[280px] sm:min-h-[320px] lg:min-h-0 flex items-center justify-center relative overflow-hidden'
              variants={contentRightVariants}
            >
              <ImageCarousel images={images} />
            </motion.section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};