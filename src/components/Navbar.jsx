import { useState, useEffect, useRef } from 'react';
import { Home, Mail, Info, Code, FolderKanban, Menu, X, Briefcase } from 'lucide-react';
import { FaShieldAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/images/logo/logo.png';

function Navbar() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const userClickedRef = useRef(false);

  const Navbarlinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
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
  
  useEffect(() => {
    if (!menuOpen) return;

    const handleScrollCloseMenu = () => {
      setMenuOpen(false);
    };

    window.addEventListener('scroll', handleScrollCloseMenu, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollCloseMenu);
    };
  }, [menuOpen]);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const handleLinkClick = (id) => {
    userClickedRef.current = true;
    setActive(id);
    setMenuOpen(false);

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Variants for navbar fade + slide on mount
  const navbarVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Variants for mobile menu container
  const menuVariants = {
    hidden: { opacity: 0, y: -20, pointerEvents: 'none' },
    visible: {
      opacity: 1,
      y: 0,
      pointerEvents: 'auto',
      transition: {
        duration: 0.35,
        when: 'beforeChildren',
        staggerChildren: 0.1,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      pointerEvents: 'none',
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  };

  // Variants for each menu item
  const menuItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div variants={navbarVariants}
      initial="hidden" animate="visible"
      className={`py-3 sticky top-0 z-50 w-full px-5 md:px-10 lg:px-15 xl:px-30`}
    >
      <div className="flex items-center justify-between">
        
        {/* left side */}
        <button type="button" onClick={() => handleLinkClick('home')}
          className="text-white archivo-black font-semibold text-xl sm:text-2xl cursor-pointer border-0 p-0">
          <h1 style={{ fontFamily: 'Moderniz, sans-serif' }} className="text-[15px] text-white ">
            Man Arafat
          </h1>
        </button>

        {/* right side desktop */}
        <nav className="hidden min-[910px]:block">
          <ul className="flex justify-center gap-9 items-center">
            {Navbarlinks.map(({ id, label }) => (
              <li key={id}>
                <a onClick={() => handleLinkClick(id)}
                  className={`flex items-center gap-1 cursor-pointer rounded-xl py-2 text-sm sm:text-base transition-colors duration-200 ease-in-out
                    ${
                      label === 'Contact'
                        ? 'bg-blue-800 font-bold hover:bg-blue-700 transition text-white px-5'
                        : active === id
                        ? 'text-white font-semibold'
                        : 'text-gray-400 hover:text-white'
                    }
                  `}
                >
                  <span className="select-none">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* hamburger bar */}
        <button
          type="button"
          className="block min-[910px]:hidden text-white p-2 focus:outline-none cursor-pointer bg-transparent border-0"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <motion.div
            key={menuOpen ? 'open' : 'closed'}
            initial={{ rotate: 0, opacity: 1 }}
            animate={{ rotate: menuOpen ? 90 : 0, opacity: menuOpen ? 0.7 : 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            ref={menuRef}
            className="max-[940px]:flex fixed top-[80px] right-4 w-45 bg-gray-900/95 backdrop-blur-md rounded-xl gap-3 border border-white/10 shadow-xl flex-col p-2 z-[9999]"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            {Navbarlinks.map(({ id, label }) => (
              <motion.li
                key={id}
                onClick={() => handleLinkClick(id)}
                className={`flex items-center justify-start gap-2 cursor-pointer rounded-lg px-3 py-2 text-base w-full transition-colors duration-200 ease-in-out
                  ${
                    active === id
                      ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white'
                      : 'bg-transparent text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                variants={menuItemVariants}
              >
                <span className="select-none">{label}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Navbar;
