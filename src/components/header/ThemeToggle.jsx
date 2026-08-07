import React from "react";
import { useTheme } from "../../hooks/useTheme";

const ThemeToggle = () => {
  const [theme, toggleTheme] = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="nav__theme"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <i className={isDark ? "uil uil-sun" : "uil uil-moon"}></i>
    </button>
  );
};

export default ThemeToggle;
