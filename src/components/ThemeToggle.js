"use client";

import { useTheme } from "./ThemeProvider";

const themeOptions = [
  { label: "Dark", value: "dark" },
  { label: "Light", value: "light" },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="theme-toggle" role="group" aria-label="Choose a color theme">
      {themeOptions.map((option) => {
        const isActive = theme === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setTheme(option.value)}
            className={`theme-toggle-button ${isActive ? "theme-toggle-button-active" : ""}`.trim()}
            aria-pressed={isActive}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
