import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { messages } from './messages.js';

const PreferencesContext = createContext(null);
const validThemes = ['light', 'dark'];
const validLocales = ['es', 'en'];

function readPreference(key, allowedValues, fallback) {
  try {
    const stored = window.localStorage.getItem(key);
    return allowedValues.includes(stored) ? stored : fallback;
  } catch {
    return fallback;
  }
}

export function PreferencesProvider({ children }) {
  const [theme, setTheme] = useState(() => readPreference('allerihe-theme', validThemes, 'light'));
  const [locale, setLocale] = useState(() => readPreference('allerihe-locale', validLocales, 'es'));

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = locale;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#102538' : '#edf3f6');
    try {
      window.localStorage.setItem('allerihe-theme', theme);
      window.localStorage.setItem('allerihe-locale', locale);
    } catch {
      // Preferences still apply for the current session when storage is unavailable.
    }
  }, [theme, locale]);

  const value = useMemo(() => ({
    theme,
    locale,
    setTheme,
    setLocale,
    t: (key) => messages[locale][key] ?? messages.es[key] ?? key,
  }), [theme, locale]);

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) throw new Error('usePreferences debe usarse dentro de PreferencesProvider.');
  return context;
}