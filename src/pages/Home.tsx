import { useEffect, useState } from "react";

import PageWrapper from "../components/common/PageWrapper";
import CategoryBar from "../components/common/CategoryBar";
import SearchBar from "../components/common/SearchBar";
import Loading from "../components/common/Loading";
import NoResults from "../components/common/NoResults";
import ErrorState from "../components/common/ErrorState";

import HeroNews from "../components/news/HeroNews";
import FeaturedCarousel from "../components/news/FeaturedCarousel";
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

  // Search Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Fetch News
  async function loadNews() {
    try {
      setLoading(true);
      setError("");
      if (debouncedSearch.trim() !== "" && debouncedSearch.trim().length < 3) {
        setLoading(false);
        return;
      }

      const data = await getNews(category, debouncedSearch);

      setArticles(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load latest news.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadNews();
  }, [category, debouncedSearch]);

  if (loading) return <Loading />;

  if (error) {
    return (
      <PageWrapper>
        <ErrorState message={error} onRetry={loadNews} />
      </PageWrapper>
    );
  }

  if (articles.length === 0) {
    return (
      <PageWrapper>
        <NoResults />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      {/* Hero */}
      <HeroNews article={articles[0]} />

      {/* Category */}
      <div className="mt-8">
        <CategoryBar category={category} setCategory={setCategory} />
      </div>

      {/* Search */}
      <div className="mt-6">
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      {/* Featured */}
      <div className="mt-10">
        <FeaturedCarousel articles={articles.slice(1, 6)} />
      </div>

      {/* Heading + Refresh */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-12 mb-6 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            📰 Latest Headlines
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Stay updated with the latest breaking news.
          </p>
        </div>

        <button
          onClick={loadNews}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-medium transition"
        >
          🔄 Refresh
        </button>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {articles.slice(1).map((item) => (
          <NewsCard
            key={item.url}
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
    </PageWrapper>
  );
}

export default Home;
