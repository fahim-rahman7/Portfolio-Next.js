"use client";

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-[#060713]/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-[#1B153D] transition-colors duration-300">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
          MyPortfolio<span className="text-purple-500">.</span>
        </a>
        
        <div className="flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          <a href="#about" className="hover:text-black dark:hover:text-purple-400 transition">About</a>
          <a href="#projects" className="hover:text-black dark:hover:text-purple-400 transition">Projects</a>
          <a href="#contact" className="hover:text-black dark:hover:text-purple-400 transition">Contact</a>
          
          <button 
            onClick={toggleDarkMode}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-lg bg-gray-100 dark:bg-[#120E2E] border border-transparent dark:border-[#221B52] text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:border-[#3B2D82] transition"
          >
            {darkMode ? <FaSun size={18} className="text-yellow-400" /> : <FaMoon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}