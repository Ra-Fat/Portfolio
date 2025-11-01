import React, { useState, useEffect, useRef } from 'react';
import { Home, Mail, Info, Code, FolderKanban, Menu, X, Briefcase } from 'lucide-react';

function Navbar() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const userClickedRef = useRef(false);

  const Navbarlinks = [
    { id: 'home', icon: <Home size={20} />, label: 'Home' },
    { id: 'about', icon: <Info size={20} />, label: 'About' },
    { id: 'skills', icon: <Code size={20} />, label: 'Skills' },
    { id: 'experiences', icon: <Briefcase size={20} />, label: 'Experiences' },
    { id: 'projects', icon: <FolderKanban size={20} />, label: 'Projects' },
    { id: 'contact', icon: <Mail size={20} />, label: 'Contact' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      if (userClickedRef.current) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          userClickedRef.current = false;
        }, 300);
        return;
      }

      const scrollY = window.scrollY + window.innerHeight / 2;
      for (const { id } of Navbarlinks) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            if (active !== id) setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [active, Navbarlinks]);

  const handleLinkClick = (id) => {
    userClickedRef.current = true;
    setActive(id);
    setMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1300"
      className="px-6 py-3 rounded-4xl bg-gray-800/60 backdrop-blur-md border border-white/10 shadow-lg sticky top-0 z-50 max-[930px]:w-full"
    >
      <nav className="flex items-center justify-between">
        <a href='#home' className="text-white font-semibold text-lg sm:text-xl max-[940px]:block hidden">
           Arafat Man
        </a>

        {/* Desktop nav → only shows above 930px */}
        <ul className="hidden min-[941px]:flex gap-3 items-center">
          {Navbarlinks.map(({ id, icon, label }) => (
            <li key={id}>
              <a
                onClick={() => handleLinkClick(id)}
                className={`flex items-center gap-2 cursor-pointer rounded-2xl px-4 py-2 text-sm sm:text-base transition-colors duration-200 ease-in-out
                ${
                  active === id
                    ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white'
                    : 'bg-transparent text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {icon} <span className="select-none">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle → shows at 940px and below */}
        <a
          className="max-[940px]:block hidden text-white p-2 focus:outline-none cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </a>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul
          ref={menuRef}
          className="max-[940px]:flex hidden fixed top-[80px] right-4 w-45 bg-gray-900/95 backdrop-blur-md rounded-xl gap-3 border border-white/10 shadow-xl flex-col p-2 z-[9999]"
        >
          {Navbarlinks.map(({ id, icon, label }) => (
            <li key={id}>
              <a
                onClick={() => handleLinkClick(id)}
                className={`flex items-center justify-start gap-3 cursor-pointer rounded-lg px-4 py-3 text-base w-full transition-colors duration-200 ease-in-out
                ${
                  active === id
                    ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white'
                    : 'bg-transparent text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {icon}
                <span className="select-none">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
