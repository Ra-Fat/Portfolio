import { useState, useEffect, useRef } from 'react';
import {
  Home,
  Mail,
  Code,
  FolderKanban,
  Menu,
  X,
  Briefcase,
  User,
  Sun,
  Moon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const menuRef = useRef(null);
  const userClickedRef = useRef(false);

  const Navbarlinks = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'about', label: 'About', icon: <User size={20} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={20} /> },
    { id: 'experiences', label: 'Experiences', icon: <Briefcase size={20} /> },
    { id: 'projects', label: 'Projects', icon: <FolderKanban size={20} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Scroll spy
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
        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [Navbarlinks]);

  // Close menu on scroll
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener('scroll', close, { passive: true });
    return () => window.removeEventListener('scroll', close);
  }, [menuOpen]);

  // Navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
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
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navbarVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.4, staggerChildren: 0.05 },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={`sticky top-0 z-50 w-full px-5 md:px-10 `}
    >
      {/* Desktop */}
      <div className="hidden sm:flex justify-center">
        <nav className="flex gap-3 rounded-full border border-white/20 bg-black/40 px-3 py-2">
          {Navbarlinks.map(({ id, label }) => (
            <button key={id}
              onClick={() => handleLinkClick(id)}
              className={`rounded-2xl cursor-pointer px-4 py-2 text-sm transition ${
                active === id
                  ? 'bg-white text-black font-semibold'
                  : 'text-gray-400 hover:bg-white hover:text-black'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile */}
      <div ref={menuRef}
        className="sm:hidden flex flex-col items-center"
      >
        {/* Clickable Header */}
        <motion.div
          onClick={() => setMenuOpen((prev) => !prev)}
          animate={{ width: menuOpen ? '100%' : '260px' }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="cursor-pointer flex items-center justify-between rounded-full
                     bg-black/40 px-5 py-2 border border-white/20
                     backdrop-blur-md select-none"
        >
        <div className="text-white font-semibold whitespace-nowrap">
          Arafat Man
        </div>
        
        <button onClick={(e)=>{
          e.stopPropagation();
          setMenuOpen((prev) => !prev);
        }}
          className="rounded-full cursor-pointer p-2"
        >
          <motion.div
            animate={{rotate: menuOpen ? 180 : 0}}
            transition={{duration: 0.4 , ease: 'easeInOut'}}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {menuOpen ? <X /> : <Menu/>}
          </motion.div>
        </button>
      </motion.div>

    {/* Dropdown Menu */}
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="mt-3 w-full rounded-2xl bg-black/40 px-2 py-2 border border-white/20
                     backdrop-blur-md overflow-hidden"
        >
          <ul className="flex flex-col p-2 gap-2">
            {Navbarlinks.map(({ id, label, icon }) => (
              <li
                key={id}
                onClick={() => handleLinkClick(id)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer
                  ${
                    active === id
                      ? 'bg-[#212121] text-white font-medium'
                      : 'text-gray-400 hover:bg-[#212121] hover:text-white'
                  }`}
              >
                {icon}
                {label}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
    </  div>

      </motion.div>
    );
}

export default Navbar;
