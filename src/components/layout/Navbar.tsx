import type { Dispatch, SetStateAction } from "react";

interface NavbarProps {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}

function Navbar({ dark, setDark }: NavbarProps) {
  return (
    <nav className="bg-blue-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-white tracking-wide">
          📰 News Aggregator
        </h1>

        {/* Theme Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
        >
          {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;