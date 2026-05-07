import { useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { NavbarLinks } from "../../../../data/data";
import { Logo } from "../../../atoms/logo";
import { motion, AnimatePresence } from "framer-motion";

export const MobileNav = ({
  menuOpen,
  setMenuOpen,
  active,
  handleLinkClick,
  menuRef,
}) => {
  const containerRef = useRef(null);

  // close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleClick = (id) => {
    handleLinkClick(id);
    setMenuOpen(false);
  };

  return (
    <div ref={containerRef} className="sm:hidden flex flex-col items-center w-full">
      
      {/* Top bar */}
      <motion.div
        onClick={() => setMenuOpen((prev) => !prev)}
        animate={{ width: menuOpen ? "100%" : "260px" }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="flex items-center justify-between rounded-full
                   bg-black/40 px-5 py-2 border border-white/20
                   backdrop-blur-md cursor-pointer select-none"
      >
        <Logo />

        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen((prev) => !prev);
          }}
          animate={{ rotate: menuOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="p-2 text-white cursor-pointer"
        >
          {menuOpen ? <X /> : <Menu />}
        </motion.button>
      </motion.div>

      {/* Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-3 w-full rounded-2xl bg-black/40 px-2 py-2 border border-white/20 backdrop-blur-md overflow-hidden"
          >
            <ul className="flex flex-col p-2 gap-2">
              {NavbarLinks.map(({ id, label, icon }) => (
                <li
                  key={id}
                  onClick={() => handleClick(id)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer transition
                    ${
                      active === id
                        ? "bg-[#212121] text-white"
                        : "text-gray-400 hover:bg-[#212121] hover:text-white"
                    }`}
                >
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};