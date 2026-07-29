export default function About() {
  const skills = ["JavaScript (ES6+)", "TypeScript", "React / Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"];

  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6 border-t border-gray-200 dark:border-[#1B153D]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            About <span className="text-purple-400">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300/80 leading-relaxed mb-4">
            Hello! I'm a developer who enjoys building software for the web. My interest in web development started back when I created my first interactive site, and I've been refining my craft ever since.
          </p>
          <p className="text-gray-600 dark:text-gray-300/80 leading-relaxed">
            Fast-forward to today, I focus on building clean, accessible, and fast web applications using Next.js and modern frontend architecture.
          </p>

          <div className="mt-8">
            <h3 className="text-sm font-semibold text-purple-400 tracking-wider uppercase mb-4">Technologies I work with:</h3>
            <ul className="grid grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-300">
              {skills.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-purple-500 font-bold">▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Highlight Card */}
        <div className="p-8 rounded-2xl bg-white dark:bg-[#120E2E] border border-gray-200 dark:border-[#221B52]">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Highlights</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#1C1642]/60 border border-transparent dark:border-[#2C2361]">
              <p className="text-2xl font-extrabold text-purple-400">3+ Years</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Professional Development Experience</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#1C1642]/60 border border-transparent dark:border-[#2C2361]">
              <p className="text-2xl font-extrabold text-purple-400">15+ Projects</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Built & Deployed Successfully</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}