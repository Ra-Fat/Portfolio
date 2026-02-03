import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { ArrowUp } from 'lucide-react';
import { links } from '../utils/constants';
import { socialLinks } from '../utils/constants';


const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);



  useEffect(() => {
    // Trigger animation on mount
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full px-5 md:px-10 lg:px-15 xl:px-30">
      <div className="w-full flex flex-col items-center">
        <div
          className={`flex flex-col items-center justify-center pt-15 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1
            className="text-2xl lg:text-3xl xl:text-4xl font-moderniz font-bold leading-tight select-none"
          >
            Let's build something
          </h1>
          <h1
            className={`text-2xl lg:text-3xl xl:text-4xl font-moderniz font-bold leading-tight select-none transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            legendary together
          </h1>
          <div
            className={`group flex items-center gap-2 mt-3 cursor-pointer transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <a
              href="mailto:manrafat2006@gmail.com"
              className="underline underline-offset-4 group-hover:text-cyan-400 transition"
            >
              manrafat2006@gmail.com
            </a>
            <ArrowUp className="rotate-45 transition group-hover:translate-x-1 group-hover:-translate-y-1 text-white" size={18} />
          </div>
        </div>

        <span className="w-full h-[1px] bg-gray-700 mb-3 mt-8"></span>

        <div
          className={`flex flex-col md:flex-row items-center justify-between w-full gap-6 mt-5 mb-8 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '450ms' }}
        >
          <section className="flex-wrap justify-center gap-5 text-gray-400 hidden sm:flex"> 
            {links.map((item, index) => (
              <button
                key={index}
                onClick={() =>
                  item.id
                    ? document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                    : window.scrollTo({ top: 0, behavior: 'smooth' })
                }
                className="flex items-center cursor-pointer gap-3 font-semibold hover:text-white transition"
              >
                {item.label}
              </button>
            ))}
          </section>

          <section className="flex items-center gap-3">
              {socialLinks.map((item, index)=>{
                const Icon = item.icon;
                
                return (
                   <a key={index}
                      className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 bg-slate-900/[0.8] hover:-translate-y-1 text-white transition-all duration-300 hover:bg-slate-800"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-4 w-4 text-slate-400 transition-all duration-300" />
                    </a>
                )
              })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
