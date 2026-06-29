import { useEffect, useState } from "react";
import PageWrapper from "../components/common/PageWrapper";
import NewsCard from "../components/news/NewsCard";
import type { NewsArticle } from "../types/news";
import { getBookmarks } from "../utils/bookmarks";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState<NewsArticle[]>([]);

  useEffect(() => {
    setBookmarks(getBookmarks());
  }, []);

  if (bookmarks.length === 0) {
    return (
      <PageWrapper>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h1 className="text-4xl font-bold mb-4">
            ⭐ Bookmarks
          </h1>

          <p className="text-xl text-gray-500 dark:text-gray-400">
            No Bookmarked News Yet
          </p>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold text-center mb-10">
          ⭐ Bookmarked News
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {bookmarks.map((item) => (
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

      </div>
    </PageWrapper>
  );
}

export default Bookmarks;