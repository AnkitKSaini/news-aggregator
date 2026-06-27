import { useEffect, useState } from "react";

import NewsCard from "../components/news/NewsCard";

import { getFavorites } from "../utils/favorites";

import type { NewsArticle } from "../types/news";

function Favorites() {
  const [favorites, setFavorites] = useState<NewsArticle[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  if (favorites.length === 0) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold">
          ❤️ Favorites
        </h1>

        <p className="mt-6 text-xl">
          No Favorite News Yet
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-10 text-center">
        ❤️ Favorite News
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {favorites.map((item) => (
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
  );
}

export default Favorites;