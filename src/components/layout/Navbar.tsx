import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Newspaper,
  House,
  Heart,
  Bookmark,
  Info,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";

interface NavbarProps {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ dark, setDark }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
      isActive
        ? "bg-white text-blue-600 font-semibold shadow"
        : "text-white hover:bg-white/20"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 backdrop-blur-md shadow-lg">

      <div className="max-w-[1440px] mx-auto h-16 px-4 lg:px-6 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3"
        >
          <div className="bg-white p-2 rounded-lg">
            <Newspaper
              size={24}
              className="text-blue-600"
            />
          </div>

          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-white">
              News Aggregator
            </h1>

            <p className="hidden md:block text-blue-100 text-xs">
              Stay Updated Everyday
            </p>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2">

          <NavLink to="/" className={navLink}>
            <House size={17} />
            Home
          </NavLink>

          <NavLink to="/favorites" className={navLink}>
            <Heart size={17} />
            Favorites
          </NavLink>

          <NavLink to="/bookmarks" className={navLink}>
            <Bookmark size={17} />
            Bookmarks
          </NavLink>

          <NavLink to="/about" className={navLink}>
            <Info size={17} />
            About
          </NavLink>

          <button
            onClick={() => setDark(!dark)}
            className="ml-2 bg-white text-black rounded-lg p-2 hover:bg-gray-100 transition"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-blue-700 border-t border-blue-500">

          <div className="flex flex-col gap-4 p-5">

            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-white flex items-center gap-3"
            >
              <House size={18} />
              Home
            </NavLink>

            <NavLink
              to="/favorites"
              onClick={() => setMenuOpen(false)}
              className="text-white flex items-center gap-3"
            >
              <Heart size={18} />
              Favorites
            </NavLink>

            <NavLink
              to="/bookmarks"
              onClick={() => setMenuOpen(false)}
              className="text-white flex items-center gap-3"
            >
              <Bookmark size={18} />
              Bookmarks
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-white flex items-center gap-3"
            >
              <Info size={18} />
              About
            </NavLink>

            <button
              onClick={() => {
                setDark(!dark);
                setMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 bg-white rounded-lg py-2"
            >
              {dark ? (
                <>
                  <Sun size={18} />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon size={18} />
                  Dark Mode
                </>
              )}
            </button>

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;