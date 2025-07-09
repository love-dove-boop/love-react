import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  const nextTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className="feature-card" onClick={nextTheme} style={{ minWidth: 100 }}>
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}