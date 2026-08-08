"use client";
import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

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
        <a href="#" className="flex items-center gap-2.5 font-bold text-lg text-gray-900 dark:text-white group">
          <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center font-mono font-bold text-sm shadow-md shadow-purple-600/30 group-hover:scale-105 transition flex-shrink-0">
            F
          </div>
          <span className="truncate">Fahim <span className="text-purple-400">Dipto</span></span>
        </a>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          <a href="#about" className="hover:text-black dark:hover:text-purple-400 transition">About</a>
          <a href="#experience" className="hover:text-black dark:hover:text-purple-400 transition">Experience</a>
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

        {/* Mobile Actions (Theme Toggle & Hamburger Button) */}
        <div className="flex md:hidden items-center gap-2">
          <button 
            onClick={toggleDarkMode}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-lg bg-gray-100 dark:bg-[#120E2E] border border-transparent dark:border-[#221B52] text-gray-800 dark:text-gray-200"
          >
            {darkMode ? <FaSun size={16} className="text-yellow-400" /> : <FaMoon size={16} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="p-2.5 rounded-lg bg-gray-100 dark:bg-[#120E2E] border border-transparent dark:border-[#221B52] text-gray-800 dark:text-gray-200"
          >
            {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#060713]/95 backdrop-blur-md border-b border-gray-200 dark:border-[#1B153D] px-6 py-6 shadow-xl flex flex-col gap-4 text-base font-medium text-gray-700 dark:text-gray-200 transition-all">
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-500 dark:hover:text-purple-400 transition py-1 border-b border-gray-100 dark:border-[#1B153D]/50"
          >
            About
          </a>
          <a 
            href="#experience" 
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-500 dark:hover:text-purple-400 transition py-1 border-b border-gray-100 dark:border-[#1B153D]/50"
          >
            Experience
          </a>
          <a 
            href="#projects" 
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-500 dark:hover:text-purple-400 transition py-1 border-b border-gray-100 dark:border-[#1B153D]/50"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-500 dark:hover:text-purple-400 transition py-1"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}