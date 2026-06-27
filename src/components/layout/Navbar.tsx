import type { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}

function Navbar({ dark, setDark }: NavbarProps) {
  return (
    <nav className="bg-blue-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-white">
          📰 News Aggregator
        </h1>

        <div className="flex items-center gap-6">

          <NavLink
            to="/"
            className="text-white hover:text-yellow-300 font-medium"
          >
            Home
          </NavLink>

          <NavLink
            to="/favorites"
            className="text-white hover:text-yellow-300 font-medium"
          >
            Favorites
          </NavLink>

          <NavLink
            to="/about"
            className="text-white hover:text-yellow-300 font-medium"
          >
            About
          </NavLink>

          <button
            onClick={() => setDark(!dark)}
            className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            {dark ? "☀️" : "🌙"}
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;