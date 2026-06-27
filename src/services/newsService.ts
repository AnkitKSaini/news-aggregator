import axios from "axios";
import type { NewsArticle } from "../types/news";

const API_KEY = import.meta.env.VITE_NEWSDATA_API_KEY;

const categoryMap: Record<string, string> = {
  general: "top",          // 👈 important
  technology: "technology",
  business: "business",
  sports: "sports",
  health: "health",
  science: "science",
};

export async function getNews(category: string): Promise<NewsArticle[]> {

  const apiCategory = categoryMap[category] || "top";

  const response = await axios.get(
    `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&category=${apiCategory}`
  );

  console.log(response.data);

  return (response.data.results || []).map((article: any, index: number) => ({
    id: index + 1,
    title: article.title,
    description: article.description || "No description available",
    image:
      article.image_url ||
      "https://placehold.co/320x180?text=No+Image",
    source: article.source_name || "Unknown",
    publishedAt: article.pubDate,
    url: article.link,
  }));
}