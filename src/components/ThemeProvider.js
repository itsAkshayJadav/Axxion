"use client";

import { createContext, useContext, useMemo, useSyncExternalStore } from "react";

const STORAGE_KEY = "axxion-theme";
const THEME_EVENT = "axxion-theme-change";
const SYSTEM_THEME_QUERY = "(prefers-color-scheme: light)";

const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => {},
  toggleTheme: () => {},
});

function normalizeTheme(value) {
  return value === "light" ? "light" : "dark";
}

function isTheme(value) {
  return value === "dark" || value === "light";
}

function getStoredTheme() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY);
    return isTheme(savedTheme) ? savedTheme : null;
  } catch {
    return null;
  }
}

function getSystemTheme() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return "dark";
  }

  return window.matchMedia(SYSTEM_THEME_QUERY).matches ? "light" : "dark";
}

function getPreferredTheme() {
  return getStoredTheme() ?? getSystemTheme();
}

function getThemeSnapshot() {
  if (typeof document === "undefined") {
    return "dark";
  }

  const currentTheme = document.documentElement.dataset.theme;
  return isTheme(currentTheme) ? currentTheme : getPreferredTheme();
}

function getServerThemeSnapshot() {
  return "dark";
}

function subscribe(callback) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleStorage = (event) => {
    if (event.key !== STORAGE_KEY && event.key !== null) {
      return;
    }

    document.documentElement.dataset.theme = getPreferredTheme();
    callback();
  };

  const handleSystemThemeChange = () => {
    if (getStoredTheme()) {
      return;
    }

    document.documentElement.dataset.theme = getSystemTheme();
    callback();
  };

  const handleThemeChange = () => callback();
  const systemTheme = window.matchMedia?.(SYSTEM_THEME_QUERY);

  window.addEventListener("storage", handleStorage);
  window.addEventListener(THEME_EVENT, handleThemeChange);

  if (systemTheme?.addEventListener) {
    systemTheme.addEventListener("change", handleSystemThemeChange);
  } else {
    systemTheme?.addListener?.(handleSystemThemeChange);
  }

  const syncTheme = window.setTimeout(callback, 0);

  return () => {
    window.clearTimeout(syncTheme);
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(THEME_EVENT, handleThemeChange);

    if (systemTheme?.removeEventListener) {
      systemTheme.removeEventListener("change", handleSystemThemeChange);
    } else {
      systemTheme?.removeListener?.(handleSystemThemeChange);
    }
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
