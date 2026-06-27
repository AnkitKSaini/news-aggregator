import type { NewsArticle } from "../types/news";

const STORAGE_KEY = "favoriteNews";

// Get all favorite articles
export function getFavorites(): NewsArticle[] {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}

// Save a new favorite
export function saveFavorite(article: NewsArticle) {
  const favorites = getFavorites();

  const exists = favorites.some(
    (item) => item.url === article.url
  );

  if (!exists) {
    favorites.push(article);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(favorites)
    );
  }
}

// Remove favorite
export function removeFavorite(url: string) {
  const favorites = getFavorites().filter(
    (item) => item.url !== url
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(favorites)
  );
}

// Check favorite
export function isFavorite(url: string): boolean {
  return getFavorites().some(
    (item) => item.url === url
  );
}