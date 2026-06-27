import { useState } from "react";
import toast from "react-hot-toast";

import {
  saveFavorite,
  removeFavorite,
  isFavorite,
} from "../../utils/favorites";

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
  const [favorite, setFavorite] = useState(isFavorite(url));
  const [bookmarked, setBookmarked] = useState(isBookmarked(url));

  // Favorite Toggle
  function toggleFavorite() {
    const article = {
      id,
      title,
      description,
      image,
      source,
      publishedAt,
      url,
    };

    if (favorite) {
      removeFavorite(url);
      toast("Removed from Favorites");
    } else {
      saveFavorite(article);
      toast.success("Added to Favorites ❤️");
    }

    setFavorite(!favorite);
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

  // Share News
  const shareNews = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      await navigator.clipboard.writeText(url);
      toast.success("Link Copied 🔗");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* News Image */}
      <img src={image} alt={title} className="w-full h-52 object-cover" />

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-900 dark:text-white leading-6 h-14 overflow-hidden">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-3 h-20 overflow-hidden">
          {description}
        </p>

        {/* Source */}
        <p className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
          📰 {source}
        </p>

        {/* Date */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          📅 {new Date(publishedAt).toLocaleDateString()}
        </p>

        {/* Buttons */}
        <div className="mt-auto pt-5 space-y-3">
          <button
            onClick={toggleBookmark}
            className={`w-full py-2 rounded-lg font-semibold transition ${
              bookmarked
                ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                : "bg-gray-300 dark:bg-gray-700 dark:text-white hover:bg-gray-400"
            }`}
          >
            {bookmarked ? "⭐ Bookmarked" : "☆ Bookmark"}
          </button>

          {/* Favorite Button */}
          <button
            onClick={toggleFavorite}
            className={`w-full py-2 rounded-lg font-semibold transition ${
              favorite
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300"
            }`}
          >
            {favorite ? "❤️ Saved" : "🤍 Favorite"}
          </button>

          {/* Share Button */}
          <button
            onClick={shareNews}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition duration-300"
          >
            📤 Share News
          </button>

          {/* Read More Button */}
          <button
            onClick={() => window.open(url, "_blank")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg transition duration-300"
          >
            📖 Read Full Article
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
