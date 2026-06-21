"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const themeOptions = [
  { label: "Dark", value: "dark", icon: Moon },
  { label: "Light", value: "light", icon: Sun },
];

export default function ThemeToggle({ className = "" }) {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return null;
  }

  return (
    <div className={`theme-toggle ${className}`.trim()} role="group" aria-label="Choose a color theme">
      {themeOptions.map((option) => {
        const isActive = theme === option.value;
        const Icon = option.icon;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setTheme(option.value)}
            className={`theme-toggle-button ${isActive ? "theme-toggle-button-active" : ""}`.trim()}
            aria-label={`Use ${option.label.toLowerCase()} theme`}
            aria-pressed={isActive}
            title={`${option.label} theme`}
          >
            <Icon aria-hidden="true" className="theme-toggle-icon" />
          </button>
        );
      })}
    </div>
  );
}
