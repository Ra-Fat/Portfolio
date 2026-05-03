import React, { useState, useEffect } from 'react';

export const ImageCarousel = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {

    if(hovered) return ;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [hovered , images.length]);

  const getPosition = (index) => {
    const total = images.length;
    const diff = (index - currentIndex + total) % total;
    
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    return 'left';
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      
      
      {images.map((image, index) => {
        const position = getPosition(index);
        
        return (
          <div key={image.id}
            className={`absolute transition-all duration-700 ease-in-out ${
              position === 'center' 
                ? 'z-30 opacity-100 scale-100 cursor-grab' 
                : position === 'left'
                ? 'z-10 opacity-40 scale-75 -translate-x-32 -rotate-12'
                : 'z-20 opacity-60 scale-85 translate-x-32 rotate-6'
            }`}
          >
            <div className={`w-50 h-60  md:w-70 md:h-80 rounded-3xl shadow-2xl overflow-hidden`}>
              <img src={image.img} className="w-full h-full object-cover" />
            </div>
          </div>
        );
      })}
    </div>
  );
};