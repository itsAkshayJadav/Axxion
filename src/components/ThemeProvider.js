"use client";

import { createContext, useContext, useMemo, useSyncExternalStore } from "react";

const STORAGE_KEY = "axxion-theme";
const THEME_EVENT = "axxion-theme-change";

const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => {},
  toggleTheme: () => {},
});

function normalizeTheme(value) {
  return value === "light" ? "light" : "dark";
}

function getThemeSnapshot() {
  if (typeof document === "undefined") {
    return "dark";
  }

  return normalizeTheme(document.documentElement.dataset.theme);
}

function getServerThemeSnapshot() {
  return "dark";
}

function subscribe(callback) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleStorage = (event) => {
    if (event.key !== STORAGE_KEY) {
      return;
    }

    document.documentElement.dataset.theme = normalizeTheme(event.newValue);
    callback();
  };

  const handleThemeChange = () => callback();

  window.addEventListener("storage", handleStorage);
  window.addEventListener(THEME_EVENT, handleThemeChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(THEME_EVENT, handleThemeChange);
  };
}

function applyTheme(nextTheme) {
  if (typeof window === "undefined") {
    return;
  }

  const resolvedTheme = normalizeTheme(nextTheme);

  document.documentElement.dataset.theme = resolvedTheme;
  window.localStorage.setItem(STORAGE_KEY, resolvedTheme);
  window.dispatchEvent(new Event(THEME_EVENT));
}

export function ThemeProvider({ children }) {
  const theme = useSyncExternalStore(
    subscribe,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  const value = useMemo(
    () => ({
      theme,
      setTheme: applyTheme,
      toggleTheme: () => applyTheme(theme === "dark" ? "light" : "dark"),
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
