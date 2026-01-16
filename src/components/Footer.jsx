import React, { useState, useEffect } from 'react';
import { Home, Mail, Info, Code, FolderKanban, Briefcase, Pin, Send } from 'lucide-react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const links = [
    { label: 'Home', id: null },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

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
            style={{
              color: '#000754',
              textShadow:
                '0.5px 0.5px 0 #00d9ff, -0.5px -0.5px 0 #00d9ff, 0.5px -0.5px 0 #00d9ff, -0.5px 0.5px 0 #00d9ff',
            }}
          >
            Let's build something
          </h1>
          <h1
            className={`text-2xl lg:text-3xl xl:text-4xl font-moderniz font-bold leading-tight select-none transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              color: '#000754',
              textShadow:
                '0.5px 0.5px 0 #00d9ff, -0.5px -0.5px 0 #00d9ff, 0.5px -0.5px 0 #00d9ff, -0.5px 0.5px 0 #00d9ff',
              transitionDelay: '150ms'
            }}
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
            <ArrowUp className="rotate-45 transition group-hover:translate-x-1 group-hover:-translate-y-1 text-cyan-400" size={18} />
          </div>
        </div>

        <span className="w-full h-[1px] bg-gray-700 mb-3 mt-8"></span>

        <div
          className={`flex flex-col md:flex-row items-center justify-between w-full gap-6 mt-5 mb-8 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '450ms' }}
        >
          <section className="flex flex-wrap justify-center gap-5 text-gray-400">
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
            <a
              className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/[0.8] hover:-translate-y-1 text-white transition-all duration-300 hover:bg-slate-800"
              href="https://web.facebook.com/ra.fat.626421/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="h-4 w-4 text-slate-400 transition-all duration-300" />
            </a>
            <a
              className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/[0.8] hover:-translate-y-1 text-white transition-all duration-300 hover:bg-slate-800"
              href="https://www.instagram.com/urj4zz_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-4 w-4 text-slate-400 transition-all duration-300" />
            </a>
            <a
              className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/[0.8] hover:-translate-y-1 text-white transition-all duration-300 hover:bg-slate-800"
              href="https://www.linkedin.com/in/arafat-man/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-4 w-4 text-slate-400 transition-all duration-300" />
            </a>
            <a
              className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/[0.8] hover:-translate-y-1 text-white transition-all duration-300 hover:bg-slate-800"
              href="https://github.com/Ra-Fat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-4 w-4 text-slate-400 transition-all duration-300" />
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
