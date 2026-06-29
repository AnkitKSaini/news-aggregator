import { Link, useLocation } from "react-router-dom";

import PageWrapper from "../components/common/PageWrapper";
import toast from "react-hot-toast";
import RelatedNews from "../components/news/RelatedNews";

function NewsDetails() {
  const { state } = useLocation();

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
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Hero Image */}
        <img
          src={state.image}
          alt={state.title}
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/1200x600?text=News";
          }}
        />

        {/* Title */}
        <h1 className="text-5xl font-bold mt-8">{state.title}</h1>

        {/* Source & Date */}
        <div className="flex flex-wrap gap-6 mt-5 text-gray-500 dark:text-gray-400">
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

        <RelatedNews articles={[state, state, state]} />
      </div>
    </PageWrapper>
  );
}

export default NewsDetails;
