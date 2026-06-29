import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import ScrollToTop from "./components/common/ScrollToTop";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Bookmarks from "./pages/Bookmarks";
import About from "./pages/About";

import useTheme from "./hooks/useTheme";

import Footer from "./components/layout/Footer";
import NotFound from "./pages/NotFound";
import NewsDetails from "./pages/NewsDetails";
import ScrollToTopButton from "./components/common/ScrollToTopButton";
import { FavoritesProvider } from "./context/FavoritesContext";

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
      <FavoritesProvider>
        <Navbar dark={dark} setDark={setDark} />

<ScrollToTop />

<Routes></Routes>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/about" element={<About />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/news/:id" element={<NewsDetails />} />
        </Routes>

        <ScrollToTopButton />
      </FavoritesProvider>
    </div>
  );
}

export default App;
