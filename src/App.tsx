import { useEffect, useMemo, useState } from "react";

import Navbar from "./components/layout/Navbar";
import CategoryBar from "./components/common/CategoryBar";
import SearchBar from "./components/common/SearchBar";
import Loading from "./components/common/Loading";
import NoResults from "./components/common/NoResults";
import NewsCard from "./components/news/NewsCard";

import { getNews } from "./services/newsService";
import type { NewsArticle } from "./types/news";

import useTheme from "./hooks/useTheme";

function App() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("general");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { dark, setDark } = useTheme();

  useEffect(() => {
    async function loadNews() {
      try {
        setLoading(true);
        setError("");

        const data = await getNews(category);
        setArticles(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load news.");
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, [category]);

  const filteredNews = useMemo(() => {
    return articles.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [articles, search]);

  if (loading) {
    return (
      <>
        <Navbar dark={dark} setDark={setDark} />
        <Loading />
      </>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        dark
          ? "bg-gradient-to-br from-gray-900 to-black text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      {/* Navbar */}
      <Navbar dark={dark} setDark={setDark} />

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Category Buttons */}
        <CategoryBar
          category={category}
          setCategory={setCategory}
        />

        {/* Search */}
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {/* Refresh Button */}
        <div className="flex justify-center my-6">
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300"
          >
            🔄 Refresh News
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="text-center text-red-500 font-semibold mb-6">
            {error}
          </div>
        )}

        {/* News Grid */}
        {filteredNews.length === 0 ? (
          <NoResults />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <NewsCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                source={item.source}
                publishedAt={item.publishedAt}
                url={item.url}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default App;