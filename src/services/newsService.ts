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
  search = "",
): Promise<NewsArticle[]> {
  try {
    const apiCategory = categoryMap[category] || "regional";

    const response = search.trim()
      ? await axios.get("https://api.currentsapi.services/v1/search", {
          headers: {
            Authorization: API_KEY,
          },
          params: {
            keywords: search,
            language: "en",
          },
        })
      : await axios.get("https://api.currentsapi.services/v1/latest-news", {
          headers: {
            Authorization: API_KEY,
          },
          params: {
            language: "en",
            category: apiCategory,
          },
        });

    const news = response.data.news || [];

    // Remove invalid articles
    const filteredNews = news.filter(
      (article: any) => article && article.title && article.url,
    );

    // Remove duplicate articles using URL
    const uniqueNews = Array.from(
      new Map(
        filteredNews.map((article: any) => [article.url, article]),
      ).values(),
    );

    // Sort latest first
    uniqueNews.sort(
      (a: any, b: any) =>
        new Date(b.published).getTime() - new Date(a.published).getTime(),
    );

    return uniqueNews.map(
      (article: any, index: number): NewsArticle => ({
        id: index + 1,

        title: article.title || "Untitled News",

        description: article.description || "No description available.",

        image:
          article.image && article.image.startsWith("http")
            ? article.image
            : "/placeholder.jpg",

        source: article.author || article.author_name || "Unknown",

        publishedAt: article.published || new Date().toISOString(),

        url: article.url,
      }),
    );
  } catch (error: any) {
    console.error("Currents API Error:", error.response?.data || error.message);

    throw new Error("Failed to fetch news.");
  }
}

export async function searchRelatedNews(
  title: string,
  currentUrl: string,
): Promise<NewsArticle[]> {
  try {
    const keyword = title
      .replace(/[^\w\s]/g, "")
      .split(" ")
      .filter((word) => word.length > 3)
      .slice(0, 3)
      .join(" ");

    const response = await axios.get(
      "https://api.currentsapi.services/v1/search",
      {
        headers: {
          Authorization: API_KEY,
        },
        params: {
          keywords: keyword,
          language: "en",
        },
      },
    );

    const news = response.data.news || [];

    const filteredNews = news.filter(
      (article: any) =>
        article && article.title && article.url && article.url !== currentUrl,
    );

    const uniqueNews = Array.from(
      new Map(
        filteredNews.map((article: any) => [article.url, article]),
      ).values(),
    );

    return uniqueNews.slice(0, 3).map(
      (article: any, index: number): NewsArticle => ({
        id: index + 1,
        title: article.title || "Untitled News",
        description: article.description || "No description available.",
        image:
          article.image && article.image.startsWith("http")
            ? article.image
            : "/placeholder.jpg",
        source: article.author || article.author_name || "Unknown",
        publishedAt: article.published || new Date().toISOString(),
        url: article.url,
      }),
    );
  } catch (error: any) {
    console.error("Related News Error:", error.response?.data || error.message);

    return [];
  }
}
