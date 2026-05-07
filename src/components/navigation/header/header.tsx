import { useState, useEffect, useRef } from 'react';
import { Home, Mail, Code, FolderKanban, Menu, X, Briefcase, User } from 'lucide-react';
import { DesktopNav } from './components/desktop-nav';
import { MobileNav } from './components/mobile-nav';

export const Header = () => {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
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

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener('scroll', close, { passive: true });
    return () => window.removeEventListener('scroll', close);
  }, [menuOpen]);

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

  return (
    <div className="sticky top-0 z-50 w-full px-5 md:px-10">

      <DesktopNav 
        active={active} 
        handleLinkClick={handleLinkClick} 
      />

      <MobileNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        active={active}
        handleLinkClick={handleLinkClick}
        menuRef={menuRef}
      />

    </div>
  );
};