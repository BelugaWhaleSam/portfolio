import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";
const DARK_QUERY = "(prefers-color-scheme: dark)";

const readSavedTheme = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === "light" || saved === "dark" ? saved : null;
};

// A saved choice wins; otherwise fall back to the OS preference.
const getInitialTheme = () =>
  readSavedTheme() ?? (window.matchMedia(DARK_QUERY).matches ? "dark" : "light");

export const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Keep following the OS until the visitor picks a theme themselves.
  useEffect(() => {
    const media = window.matchMedia(DARK_QUERY);
    const onChange = (e) => {
      if (!readSavedTheme()) setTheme(e.matches ? "dark" : "light");
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  // Only an explicit toggle is persisted.
  const toggleTheme = () =>
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });

  return [theme, toggleTheme];
};
