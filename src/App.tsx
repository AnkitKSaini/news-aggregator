import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import About from "./pages/About";

import useTheme from "./hooks/useTheme";

function App() {
  const { dark, setDark } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        dark
          ? "bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white"
          : "bg-gradient-to-br from-gray-100 to-white text-black"
      }`}
    >
      <Navbar dark={dark} setDark={setDark} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;