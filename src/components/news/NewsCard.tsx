import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useFavorites } from "../../context/FavoritesContext";
import {
  saveBookmark,
  removeBookmark,
  isBookmarked,
} from "../../utils/bookmarks";

interface NewsCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  source: string;
  publishedAt: string;
  url: string;
}

function NewsCard({
  id,
  title,
  description,
  image,
  source,
  publishedAt,
  url,
}: NewsCardProps) {
  const { toggleFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(url);

  const [bookmarked, setBookmarked] = useState(isBookmarked(url));

  function handleFavorite() {
    const article = {
      id,
      title,
      description,
      image,
      source,
      publishedAt,
      url,
    };

    toggleFavorite(article);

    if (favorite) {
      toast("Removed from Favorites");
    } else {
      toast.success("Added to Favorites ❤️");
    }
  }

  function toggleBookmark() {
    const article = {
      id,
      title,
      description,
      image,
      source,
      publishedAt,
      url,
    };

    if (bookmarked) {
      removeBookmark(url);
      toast("Bookmark Removed");
    } else {
      saveBookmark(article);
      toast.success("Bookmark Saved ⭐");
    }

    setBookmarked(!bookmarked);
  }

  async function shareNews() {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      navigator.clipboard.writeText(url);
      toast.success("🔗 Link Copied");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl overflow-hidden flex flex-col transition-all"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={image || "/placeholder.jpg"}
          alt={title}
          className="w-full h-44 object-cover"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.jpg";
          }}
        />

        <span className="absolute top-3 left-3 bg-red-600 text-white text-[11px] px-2 py-1 rounded-full">
          🔥 Trending
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2">
          {title}
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
          {description}
        </p>

        <div className="flex justify-between items-center text-xs text-gray-500 mt-4">
          <span className="truncate">📰 {source}</span>

          <span>{new Date(publishedAt).toLocaleDateString()}</span>
        </div>

        {/* Icons */}
        <div className="flex justify-center gap-3 mt-5">
          <button
            onClick={toggleBookmark}
            className={`w-10 h-10 rounded-full transition ${
              bookmarked
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            ⭐
          </button>

          <button
            onClick={handleFavorite}
            className={`w-10 h-10 rounded-full transition ${
              favorite
                ? "bg-red-500 text-white"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            ❤️
          </button>

          <button
            onClick={shareNews}
            className="w-10 h-10 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
          >
            📤
          </button>
        </div>

        {/* Read Details */}
        <Link
          to={`/news/${id}`}
          state={{
            id,
            title,
            description,
            image,
            source,
            publishedAt,
            url,
          }}
          className="mt-5 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2.5 rounded-xl text-center font-medium transition"
        >
          Read Details →
        </Link>
      </div>
    </motion.div>
  );
}

export default NewsCard;
