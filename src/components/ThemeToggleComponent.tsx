'use client';

import { useEffect, useState } from 'react';
import styles from './theme-toggle.module.css';

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newDarkMode = !darkMode;
    
    root.style.setProperty('--transition-in-progress', '1');
    
    if (newDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    setTimeout(() => {
      root.style.removeProperty('--transition-in-progress');
    }, 500);
    
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    setDarkMode(newDarkMode);
  };

  return (
    <div className={`${styles.container} theme-toggle`}>
      <input
        type="checkbox"
        id="checkbox"
        className={styles.checkbox}
        checked={darkMode}
        onChange={toggleTheme}
      />
      <label
        htmlFor="checkbox"
        className={styles.label}
        aria-label="Toggle theme"
      />
    </div>
  );
};