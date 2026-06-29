import { Link } from "react-router-dom";
import type { NewsArticle } from "../../types/news";
import { motion } from "framer-motion";

interface HeroNewsProps {
  article: NewsArticle;
}

function HeroNews({ article }: HeroNewsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="relative h-[280px] sm:h-[340px] lg:h-[380px] rounded-2xl overflow-hidden shadow-xl">

        {/* Background */}
        <img
          src={article.image || "/placeholder.jpg"}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.jpg";
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-5 md:p-8 text-white">

          <span className="inline-block bg-red-600 px-3 py-1 rounded-full text-xs font-semibold">
            🔴 Breaking News
          </span>

          <h1 className="mt-3 text-2xl md:text-4xl font-bold leading-tight line-clamp-2 max-w-3xl">
            {article.title}
          </h1>

          <p className="mt-3 text-sm md:text-base text-gray-200 line-clamp-2 max-w-2xl">
            {article.description}
          </p>

          <div className="mt-5 flex gap-3 flex-wrap">

            <Link
              to={`/news/${article.id}`}
              state={article}
              className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-medium transition"
            >
              📖 Read Details
            </Link>

            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-5 py-2 rounded-lg font-medium transition"
            >
              🌐 Source
            </a>

          </div>

        </div>
      </div>
    </motion.section>
  );
}

export default HeroNews;