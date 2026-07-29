export default function Footer() {
    return (
      <footer className="py-8 border-t border-gray-200 dark:border-[#1B153D] text-center text-xs text-gray-500 dark:text-gray-400">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Alex Developer. All rights reserved.</p>
          <p className="text-gray-400">
            Built with <span className="text-purple-400">Next.js</span> & <span className="text-purple-400">Tailwind CSS</span>
          </p>
        </div>
      </footer>
    );
  }