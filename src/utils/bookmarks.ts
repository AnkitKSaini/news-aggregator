import type { NewsArticle } from "../types/news";

const STORAGE_KEY = "bookmarkedNews";

export function getBookmarks(): NewsArticle[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveBookmark(article: NewsArticle) {
  const bookmarks = getBookmarks();

  const exists = bookmarks.some(
    (item) => item.url === article.url
  );

  if (!exists) {
    bookmarks.push(article);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(bookmarks)
    );
  }
}

export function removeBookmark(url: string) {
  const bookmarks = getBookmarks().filter(
    (item) => item.url !== url
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(bookmarks)
  );
}

export function isBookmarked(url: string) {
  return getBookmarks().some(
    (item) => item.url === url
  );
}