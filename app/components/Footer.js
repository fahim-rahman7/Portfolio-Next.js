"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-gray-200 dark:border-[#1B153D] bg-white dark:bg-[#060713]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand & Copyright */}
        <div className="text-center md:text-left space-y-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-wide">
            Fahim <span className="text-purple-400">Dipto</span>
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Fahim Dipto. All rights reserved.
          </p>
        </div>

        {/* Quick Links & Tech Stack Info */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-6 text-xs text-gray-600 dark:text-gray-300">
            <a href="#about" className="hover:text-purple-400 transition">About</a>
            <a href="#experience" className="hover:text-purple-400 transition">Experience</a>
            <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500">
  Designed & Developed with <span className="text-purple-400 font-medium">Precision</span>
</p>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex gap-3 text-gray-600 dark:text-gray-400">
            <a
              href="https://github.com/fahim-rahman7" // 👈 Replace with your GitHub URL
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-gray-100 dark:bg-[#120E2E] border border-gray-200 dark:border-[#221B52] hover:text-purple-400 dark:hover:text-purple-400 hover:border-purple-500/50 transition duration-300"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/fahim-rahman-dipto-a6b827346/" // 👈 Replace with your LinkedIn URL
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-gray-100 dark:bg-[#120E2E] border border-gray-200 dark:border-[#221B52] hover:text-purple-400 dark:hover:text-purple-400 hover:border-purple-500/50 transition duration-300"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="mailto:fahimrahmandipto7@gmail.com" 
              aria-label="Email"
              className="p-2 rounded-lg bg-gray-100 dark:bg-[#120E2E] border border-gray-200 dark:border-[#221B52] hover:text-purple-400 dark:hover:text-purple-400 hover:border-purple-500/50 transition duration-300"
            >
              <FaEnvelope size={16} />
            </a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="p-2.5 rounded-lg bg-purple-600/10 text-purple-400 border border-purple-500/30 hover:bg-purple-600 hover:text-white transition duration-300 ml-2"
          >
            <FaArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}