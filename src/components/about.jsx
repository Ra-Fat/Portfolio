import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, User, GraduationCap, Download } from 'lucide-react';

const infoDetails = [
  { icon: <User size={16} />, label: 'Name', value: 'Arafat Man' },
  { icon: <MapPin size={16} />, label: 'Location', value: 'Phnom Penh' },
  { icon: <GraduationCap size={16} />, label: 'University', value: 'CADT' },
  { icon: <Phone size={16} />, label: 'Phone', value: '069363138' },
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
    <div className="w-full lg:px-10 xl:px-16" ref={sectionRef}>
      <div className="flex-col flex items-center justify-center xl:px-10">

        {/* TITLE */}
        <div 
          className={`flex flex-col items-center justify-center gap-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <span
            className="text-2xl md:text-4xl font-bold leading-tight select-none"
            style={{
              display: 'block',
              color: '#000754',
              textShadow:
                '0.5px 0.5px 0 #00d9ff, -0.5px -0.5px 0 #00d9ff, 0.5px -0.5px 0 #00d9ff, -0.5px 0.5px 0 #00d9ff',
            }}
          >
            About Me
          </span>

          <span className="text-base font-cascadia sm:text-sm text-gray-300 lg:text-base block text-center sm:text-left">
            Passionate about creating innovative solutions through technology
          </span>
        </div>

        <div className="w-full mt-10">
          <div className="grid grid-cols-1 min-[910px]:grid-cols-2 min-[1280px]:grid-cols-4 gap-4">

            {/* WHO AM I */}
            <section 
              className={`xl:col-span-2 col-span-1 min-h-[250px] bg-gray-800/30 backdrop-blur-md border-b-1 border-white/10 rounded-xl p-5 gap-5 flex flex-col items-start transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-center justify-center gap-5">
                <div className="group relative flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/[0.8] text-white transition-all duration-300 hover:bg-slate-800 hover:scale-110">
                  <User className="h-4 w-4 text-slate-400 transition-all duration-300 group-hover:text-white" />
                </div>
                <h3 className="text-md font-bold">
                WHO AM I ?
                </h3>
              </div>

              <p className="leading-relaxed text-gray-200 flex-wrap text-base">
                I'm a passionate developer who enjoys solving problems and building efficient,
                user-friendly applications. My goal is to grow into a strong full-stack developer
                and contribute to impactful, purpose-driven projects.
              </p>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

              <div className="flex flex-col gap-2 items-start w-full">
                {Array.from({ length: 3 }).map((_, rowIndex) => (
                  <div key={rowIndex} className="flex flex-col sm:flex-row items-center w-full gap-4">
                    {infoDetails
                      .slice(rowIndex * 2, rowIndex * 2 + 2)
                      .map((item, index) => (
                        <div
                          key={index}
                          className="flex gap-2 p-2 w-full sm:w-1/2 bg-gray-800/30 backdrop-blur-md rounded-sm pl-3 shadow-inner transition-transform transform hover:scale-[1.02] hover:shadow-md duration-200"
                        >
                          <span className="bg-gray-800/20 backdrop-blur-md p-2 rounded-sm">
                            {item.icon}
                          </span>
                          <div className="flex flex-col text-xs justify-center">
                            <span className="text-gray-400 font-bold">{item.label}</span>
                            <span className="font-bold text-white">{item.value}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </section>

            {/* STATS */}
            <section 
              className={`xl:col-span-2 col-span-1 min-h-[250px] bg-gray-800/30 backdrop-blur-md border-b-1 border-white/10 rounded-xl p-5 flex flex-col items-center justify-center gap-10 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="flex flex-col items-center justify-center gap-2 p-4 relative z-10 group">
                <h3 className="text-5xl font-bold transition-all duration-500 group-hover:scale-110">
                  3+
                </h3>
                <h5 className="text-[13px] uppercase tracking-widest text-gray-400">
                  Years Experience
                </h5>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

              <div className="flex flex-col items-center justify-center gap-2 p-4 relative z-10 group">
                <h3 className="text-5xl font-bold transition-all duration-500 group-hover:scale-110">
                  20+
                </h3>
                <h5 className="text-[13px] uppercase tracking-widest text-gray-400">
                  Projects Completed
                </h5>
              </div>
            </section>

            {/* INTEREST */}
            <section 
              className={`xl:col-span-2 col-span-1 min-h-[100px] bg-gray-800/30 backdrop-blur-md border-b-1 border-white/10 rounded-xl p-5 gap-5 flex flex-col items-start transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <h5 className="text-sm text-gray-400 font-bold">
                INTEREST & FOCUS
              </h5>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full font-semibold">
                {['Coding', 'Music', 'Technologies', 'Gaming'].map((text, i) => (
                  <span
                    key={i}
                    className="text-xs p-2 bg-gray-800/30 truncate backdrop-blur-md rounded-xl text-center transition-transform transform hover:scale-[1.05] hover:shadow-md duration-200 cursor-default"
                  >
                    {text}
                  </span>
                ))}
              </div>
            </section>

            {/* HIRE ME */}
            <section 
              className={`xl:col-span-2 col-span-1 min-h-[100px] bg-gray-800/30 backdrop-blur-md border-b-1 border-white/10 rounded-xl p-5 flex flex-col items-start gap-5 relative overflow-hidden transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-3xl hover:bg-cyan-400/10 transition-all duration-500"></div>     
              <h5 className="text-sm uppercase tracking-widest text-gray-400 font-bold relative z-10">
                Hire Me
              </h5>

              <div className="flex w-full flex-col sm:flex-row items-stretch gap-3 relative z-10">
                <button className="cursor-pointer relative flex px-4 rounded-xl py-3 items-center justify-center border border-slate-700 bg-slate-900/80 text-white transition-all duration-300 hover:bg-slate-800 hover:scale-105 hover:shadow-lg">
                  <Download size={15} className="font-bold mr-2" /> 
                  <span className="text-xs font-semibold truncate">Download Resume</span>
                </button>

                <a
                  href="#contact"
                  className="cursor-pointer relative flex px-4 rounded-xl py-3 items-center justify-center border border-slate-700 bg-slate-900/80 text-white transition-all duration-300 hover:bg-slate-800 hover:scale-105 hover:shadow-lg"
                >
                  <Mail size={15} className="font-bold mr-2" /> 
                  <span className="text-xs font-semibold truncate">Make Contact</span>
                </a>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;