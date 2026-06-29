import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-black text-white mt-16">

      <div className="max-w-[1440px] mx-auto px-4 lg:px-6 py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              📰 News Aggregator
            </h2>

            <p className="mt-3 text-gray-400 text-sm leading-6">
              Stay updated with the latest news from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-gray-400">

              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/favorites" className="hover:text-white transition">
                  Favorites
                </Link>
              </li>

              <li>
                <Link to="/bookmarks" className="hover:text-white transition">
                  Bookmarks
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>

            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Categories
            </h3>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>General</li>
              <li>Business</li>
              <li>Technology</li>
              <li>Sports</li>
              <li>Health</li>
              <li>Science</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Connect
            </h3>

            <div className="flex gap-4 text-xl">

              <a
                href="https://github.com/AnkitKSaini"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/ankit-kumar-saini"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:princesaini97610@gmail.com"
                className="hover:text-blue-400 transition"
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-2">

          <p>© 2026 News Aggregator. All Rights Reserved.</p>

          <p>Built with ❤️ using React + TypeScript + Tailwind CSS</p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;