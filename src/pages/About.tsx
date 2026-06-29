import PageWrapper from "../components/common/PageWrapper";

function About() {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Hero */}
        <div className="text-center mb-16">

          <h1 className="text-5xl font-extrabold text-blue-600">
            About News Aggregator
          </h1>

          <p className="text-xl mt-6 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-8">
            News Aggregator is a modern web application built with React,
            TypeScript and Tailwind CSS. It delivers the latest news from
            trusted sources through a fast, responsive and user-friendly
            interface.
          </p>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-blue-600">
              Live
            </h2>

            <p className="mt-3 text-gray-500 dark:text-gray-300">
              News Updates
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-green-600">
              8+
            </h2>

            <p className="mt-3 text-gray-500 dark:text-gray-300">
              Core Features
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-red-600">
              100%
            </h2>

            <p className="mt-3 text-gray-500 dark:text-gray-300">
              Responsive
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-purple-600">
              Modern
            </h2>

            <p className="mt-3 text-gray-500 dark:text-gray-300">
              Tech Stack
            </p>
          </div>

        </div>

        {/* Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 mb-10">

          <h2 className="text-3xl font-bold mb-6">
            📖 Project Overview
          </h2>

          <p className="leading-8 text-gray-600 dark:text-gray-300">
            News Aggregator provides users with real-time news through the
            NewsData API. The application offers category filtering, instant
            search, bookmarks, favorites, article sharing, dark mode support
            and a clean responsive interface for a better reading experience.
          </p>

        </div>

        {/* Features */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 mb-10">

          <h2 className="text-3xl font-bold mb-8">
            🚀 Core Features
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>✅ Live News API Integration</div>
            <div>🔍 Smart Search</div>
            <div>📂 Category Filtering</div>
            <div>❤️ Favorite Articles</div>
            <div>⭐ Bookmark Articles</div>
            <div>📤 Share News</div>
            <div>🌙 Dark Mode</div>
            <div>📱 Fully Responsive</div>

          </div>

        </div>

        {/* Tech Stack */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 mb-10">

          <h2 className="text-3xl font-bold mb-8">
            🛠 Technology Stack
          </h2>

          <div className="flex flex-wrap gap-4">

            {[
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Vite",
              "React Router",
              "Axios",
              "NewsData API",
              "React Hot Toast",
              "Framer Motion",
              "Swiper.js",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-blue-600 text-white px-5 py-3 rounded-full font-semibold"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

        {/* Why Choose */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-10 text-white">

          <h2 className="text-4xl font-bold text-center">
            🚀 Why Choose News Aggregator?
          </h2>

          <p className="mt-6 text-center text-lg text-blue-100 max-w-3xl mx-auto leading-8">
            Built with modern web technologies, News Aggregator delivers
            real-time information in a fast, reliable and elegant interface.
            It focuses on performance, usability and scalability.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-white/10 rounded-xl p-8 text-center">

              <h3 className="text-2xl font-bold">
                ⚡ Fast
              </h3>

              <p className="mt-4 text-blue-100">
                Optimized with React, Vite and TypeScript for excellent
                performance.
              </p>

            </div>

            <div className="bg-white/10 rounded-xl p-8 text-center">

              <h3 className="text-2xl font-bold">
                🎨 Modern UI
              </h3>

              <p className="mt-4 text-blue-100">
                Responsive design with dark mode, animations and intuitive
                navigation.
              </p>

            </div>

            <div className="bg-white/10 rounded-xl p-8 text-center">

              <h3 className="text-2xl font-bold">
                🔒 Reliable
              </h3>

              <p className="mt-4 text-blue-100">
                Clean architecture using reusable components and best
                development practices.
              </p>

            </div>

          </div>

        </div>

      </div>
    </PageWrapper>
  );
}

export default About;