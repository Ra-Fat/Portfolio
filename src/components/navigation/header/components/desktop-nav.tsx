import { NavbarLinks } from "../../../../data/data";


export const DesktopNav = ({ active, handleLinkClick }) => {
  return (
    <div className="hidden sm:flex items-center justify-center w-full">
      <div className="flex justify-center">
        <nav className="flex gap-3 rounded-full border border-white/20 bg-black/40 px-3 py-2">
          {NavbarLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleLinkClick(id)}
              className={`rounded-2xl px-4 py-2 cursor-pointer text-sm transition ${
                active === id
                  ? "bg-white text-black font-semibold"
                  : "text-gray-400 hover:bg-white hover:text-black"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};
