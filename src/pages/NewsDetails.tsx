import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import PageWrapper from "../components/common/PageWrapper";
import toast from "react-hot-toast";
import RelatedNews from "../components/news/RelatedNews";

import type { NewsArticle } from "../types/news";
import { searchRelatedNews } from "../services/newsService";

function NewsDetails() {
  const { state } = useLocation();
  const [relatedNews, setRelatedNews] = useState<NewsArticle[]>([]);
  useEffect(() => {
    async function loadRelatedNews() {
      const news = await searchRelatedNews(state.title, state.url);

      setRelatedNews(news);
    }

    loadRelatedNews();
  }, [state]);

  if (!state) {
    return (
      <div className="min-h-[80vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">📰 News Not Found</h1>

        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
        >
          🏠 Back Home
        </Link>
      </div>
    );
  }

  async function shareArticle() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: state.title,
          text: state.description,
          url: state.url,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      navigator.clipboard.writeText(state.url);
      toast.success("🔗 Link Copied");
    }
  }

  function copyLink() {
    navigator.clipboard.writeText(state.url);
    toast.success("📋 Link Copied");
  }

  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* Hero Image */}
        <img
          src={state.image || "/placeholder.jpg"}
          alt={state.title}
          className="w-full h-56 sm:h-72 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.jpg";
          }}
        />
        {/* Title */}
        <h1 className="mt-6 text-2xl md:text-4xl font-bold leading-tight">
          {state.title}
        </h1>
        {/* Source & Date */}
        <div className="flex flex-wrap gap-6 mt-4 text-gray-500 dark:text-gray-400">
          <p>
            📰 <strong>{state.source}</strong>
          </p>

          <p>📅 {new Date(state.publishedAt).toLocaleDateString()}</p>
        </div>
        {/* Description */}
        <p className="mt-8 text-lg leading-8 text-gray-700 dark:text-gray-300">
          {state.description}
        </p>
        <hr className="my-10 border-gray-300 dark:border-gray-700" />
        {/* Article Information */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">📰 Article Information</h2>

          <div className="space-y-3">
            <p>
              <strong>Source:</strong> {state.source}
            </p>

            <p>
              <strong>Published:</strong>{" "}
              {new Date(state.publishedAt).toLocaleString()}
            </p>

            <p>
              <strong>Language:</strong> English
            </p>

            <p>
              <strong>Category:</strong> General News
            </p>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <Link
            to="/"
            className="bg-gray-700 hover:bg-gray-800 text-white py-3 rounded-xl text-center transition"
          >
            ⬅ Back
          </Link>

          <button
            onClick={copyLink}
            className="bg-green-600 hover:bg-green-700 text-white rounded-xl transition"
          >
            📋 Copy Link
          </button>

          <button
            onClick={shareArticle}
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition"
          >
            📤 Share
          </button>

          <a
            href={state.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center transition"
          >
            🌐 Original
          </a>
        </div>
        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-10 text-white text-center">
          <h2 className="text-3xl font-bold">Enjoyed this article?</h2>

          <p className="mt-4 text-lg">
            Explore more breaking news from around the world.
          </p>

          <Link
            to="/"
            className="inline-block mt-8 bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            🏠 Browse More News
          </Link>
        </div>
        {relatedNews.length > 0 && <RelatedNews articles={relatedNews} />}{" "}
      </div>
    </PageWrapper>
  );
}

export default NewsDetails;
