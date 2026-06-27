import { useEffect, useState } from "react";

import CategoryBar from "../components/common/CategoryBar";
import SearchBar from "../components/common/SearchBar";
import Loading from "../components/common/Loading";
import NoResults from "../components/common/NoResults";
import NewsCard from "../components/news/NewsCard";

import { getNews } from "../services/newsService";
import type { NewsArticle } from "../types/news";

function Home() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("general");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Debounce Search (500ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Load News
  useEffect(() => {
    async function loadNews() {
      try {
        setLoading(true);
        setError("");

        const data = await getNews(category, debouncedSearch);

        setArticles(data);
      } catch (error) {
        console.error(error);
        setError("Failed to load news.");
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, [category, debouncedSearch]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">

      <CategoryBar
        category={category}
        setCategory={setCategory}
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="flex justify-center my-6">
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition"
        >
          🔄 Refresh News
        </button>
      </div>

      {error && (
        <div className="text-center text-red-500 font-semibold mb-6">
          {error}
        </div>
      )}

      {loading ? (
        <Loading />
      ) : articles.length === 0 ? (
        <NoResults />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {articles.map((item) => (
            <NewsCard
              key={item.id}
              id={item.id}
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
  );
}

export default Home;