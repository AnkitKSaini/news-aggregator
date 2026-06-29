import { createContext, useContext, useEffect, useState } from "react";

import type { ReactNode } from "react";

import type { NewsArticle } from "../types/news";

interface FavoritesContextType {
  favorites: NewsArticle[];
  addFavorite: (article: NewsArticle) => void;
  removeFavorite: (url: string) => void;
  toggleFavorite: (article: NewsArticle) => void;
  isFavorite: (url: string) => boolean;
  clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

interface Props {
  children: ReactNode;
}

export function FavoritesProvider({ children }: Props) {
  const [favorites, setFavorites] = useState<NewsArticle[]>([]);

  // Load Favorites
  useEffect(() => {
    const stored = localStorage.getItem("favorites");

    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // Save Favorites
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function addFavorite(article: NewsArticle) {
    setFavorites((prev) => {
      if (prev.some((item) => item.url === article.url)) {
        return prev;
      }

      return [...prev, article];
    });
  }

  function removeFavorite(url: string) {
    setFavorites((prev) => prev.filter((item) => item.url !== url));
  }

  function toggleFavorite(article: NewsArticle) {
    if (isFavorite(article.url)) {
      removeFavorite(article.url);
    } else {
      addFavorite(article);
    }
  }

  function isFavorite(url: string) {
    return favorites.some((item) => item.url === url);
  }

  function clearFavorites() {
    setFavorites([]);
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used inside FavoritesProvider");
  }

  return context;
}
