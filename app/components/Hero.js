import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import FallingStarsBackground from './FallingStarsBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center w-full px-6 pt-28 pb-16 overflow-hidden">
      
      {/* 🌟 Falling Stars Background Animation (Covers Full Viewport Width) */}
      <FallingStarsBackground />

      {/* Inner Container for Content Alignment */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <p className="text-purple-600 dark:text-purple-400 font-semibold mb-3 tracking-wide text-sm">
            Hi, my name is
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Fahim Rahman Dipto.
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent mt-3">
            I build high-performance web applications.
          </h2>
          <p className="text-gray-600 dark:text-gray-300/80 max-w-xl mt-6 text-base md:text-lg leading-relaxed">
            I'm a full-stack engineer passionate about crafting accessible, responsive, and aesthetically pleasing digital experiences with modern web tools.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-8 text-gray-600 dark:text-gray-400">
            <a
              href="https://github.com/fahim-rahman7"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-3.5 rounded-xl bg-gray-100 dark:bg-[#120E2E] border border-transparent dark:border-[#221B52] hover:dark:border-purple-500 hover:text-purple-400 transition"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/fahim-rahman-dipto-a6b827346/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3.5 rounded-xl bg-gray-100 dark:bg-[#120E2E] border border-transparent dark:border-[#221B52] hover:dark:border-purple-500 hover:text-purple-400 transition"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:fahimrahmandipto7@gmail.com"
              aria-label="Send Email"
              className="p-3.5 rounded-xl bg-gray-100 dark:bg-[#120E2E] border border-transparent dark:border-[#221B52] hover:dark:border-purple-500 hover:text-purple-400 transition"
            >
              <FaEnvelope size={22} />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-purple-600 text-white rounded-xl font-medium shadow-lg shadow-purple-600/30 hover:bg-purple-700 transition duration-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-gray-300 dark:border-[#221B52] bg-white dark:bg-[#120E2E] rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:dark:border-[#3B2D82] transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Column: Profile Image with Uniform Lighting Effect */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Uniform Symmetrical Purple Glow Effect on Both Sides */}
            <div className="absolute -inset-3 bg-purple-600 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-80 transition duration-500"></div>

            {/* Larger Image Container */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] rounded-3xl overflow-hidden bg-white dark:bg-[#120E2E] border-2 border-gray-200 dark:border-[#221B52] shadow-2xl">
              <Image
                src="/profile_3.jpg"
                alt="Fahim Rahman Dipto Profile Picture"
                fill
                priority
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 450px"
                className="object-cover object-center group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}