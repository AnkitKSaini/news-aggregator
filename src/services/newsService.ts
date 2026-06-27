import axios from "axios";
import type { NewsArticle } from "../types/news";

const API_KEY = import.meta.env.VITE_CURRENTS_API_KEY;

const categoryMap: Record<string, string> = {
  general: "regional",
  technology: "technology",
  business: "business",
  sports: "sports",
  health: "health",
  science: "science",
};

export async function getNews(
  category: string,
  search = ""
): Promise<NewsArticle[]> {
  try {
    const apiCategory = categoryMap[category] || "regional";

    let response;

    if (search.trim()) {
      // Search News
      response = await axios.get(
        "https://api.currentsapi.services/v1/search",
        {
          headers: {
            Authorization: API_KEY,
          },
          params: {
            keywords: search,
            language: "en",
          },
        }
      );
    } else {
      // Latest News by Category
      response = await axios.get(
        "https://api.currentsapi.services/v1/latest-news",
        {
          headers: {
            Authorization: API_KEY,
          },
          params: {
            language: "en",
            category: apiCategory,
          },
        }
      );
    }

    return (response.data.news || []).map(
      (article: any, index: number): NewsArticle => ({
        id: index + 1,
        title: article.title,
        description: article.description || "No description available",
        image:
          article.image ||
          "https://placehold.co/320x180?text=No+Image",
        source: article.author || "Unknown",
        publishedAt: article.published,
        url: article.url,
      })
    );
  } catch (error: any) {
    console.error("Currents API Error:", error.response?.data || error.message);
    return [];
  }
}