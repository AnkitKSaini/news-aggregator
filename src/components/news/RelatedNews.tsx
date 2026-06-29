import type { NewsArticle } from "../../types/news";
import NewsCard from "./NewsCard";

interface Props {
  articles: NewsArticle[];
}

function RelatedNews({ articles }: Props) {
  return (
    <div className="mt-20">

      <h2 className="text-3xl font-bold mb-8">
        📰 Related News
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {articles.slice(0, 3).map((article) => (
          <NewsCard
            key={article.id}
            id={article.id}
            title={article.title}
            description={article.description}
            image={article.image}
            source={article.source}
            publishedAt={article.publishedAt}
            url={article.url}
          />
        ))}
      </div>

    </div>
  );
}

export default RelatedNews;