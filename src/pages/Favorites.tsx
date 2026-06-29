import PageWrapper from "../components/common/PageWrapper";
import NewsCard from "../components/news/NewsCard";

import { useFavorites } from "../context/FavoritesContext";

function Favorites() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <PageWrapper>
        <div className="max-w-7xl mx-auto py-20 text-center">

          <h1 className="text-4xl font-bold">
            ❤️ Favorites
          </h1>

          <p className="mt-6 text-xl text-gray-500 dark:text-gray-400">
            No Favorite News Yet
          </p>

        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold text-center mb-10">
          ❤️ Favorite News
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {favorites.map((item) => (
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

      </div>
    </PageWrapper>
  );
}

export default Favorites;