import { FaBriefcase, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

export default function Experience() {
  const timelineData = [
    {
      type: "work", // "work" or "education"
      role: "Frontend / React Developer",
      company: "Freelance / Software Projects",
      duration: "2023 - Present",
      description: "Developing modern, high-performance web applications using Next.js, React, and Tailwind CSS with a strong focus on clean code and state management.",
      achievements: [
        "Architected MegaMart E-Commerce featuring RTK Query, dynamic filtering, and cookie-based authentication headers.",
        "Created responsive, user-friendly UI components optimized for speed and accessibility across devices.",
        "Leveraged mathematical problem-solving skills to construct efficient logic and algorithms for web interfaces."
      ],
      skills: ["React", "Next.js", "RTK Query", "Redux Toolkit", "Tailwind CSS"]
    },
    {
      type: "course",
      role: "Diploma in Full Stack Web Development",
      company: "Creative IT Institute",
      duration: "Completed",
      description: "Intensive training program covering modern web development, frontend frameworks, backend integration, dynamic state management, and production deployments.",
      achievements: [
        "Mastered core web development stack including JavaScript (ES6+), React, Redux Toolkit, and Tailwind CSS.",
        "Built real-world full-stack web applications and API-integrated projects."
      ],
      skills: ["Node.js", "JavaScript", "React", "State Management", "API Integration"]
    },
    {
      type: "education",
      role: "B.Sc. in Mathematics",
      company: "Government Titumir College",
      duration: "Graduated",
      description: "Focused on analytical thinking, complex problem-solving, computational logic, and linear algebra—providing a strong quantitative foundation for software engineering.",
      achievements: [
        "Applied logical and mathematical reasoning toward modern software development.",
        "Developed strong analytical and algorithmic skills beneficial for technical problem solving."
      ],
      skills: ["Computational Mathematics", "Analytical Thinking", "Logic & Algorithms", "Problem Solving"]
    }
  ];

  return (
    <section id="experience" className="py-24 max-w-5xl mx-auto px-6 border-t border-gray-200 dark:border-[#1B153D]">
      {/* Header Badge */}
      <div className="flex justify-center mb-4">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-950/60 text-purple-300 border border-purple-800/50 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
          My Journey
        </span>
      </div>

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Experience & <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">Education</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-base md:text-lg max-w-2xl mx-auto">
          A timeline of my academic mathematics background, professional web development training, and technical projects.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l-2 border-purple-900/40 dark:border-purple-800/30 ml-4 md:ml-36 space-y-12">
        {timelineData.map((item, index) => (
          <div key={index} className="relative pl-8 md:pl-10 group">
            
            {/* Timeline Node Icon Badge */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-purple-600 dark:bg-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-600/40 ring-4 ring-white dark:ring-[#060713] group-hover:scale-110 transition duration-300">
              {item.type === "work" ? (
                <FaBriefcase size={14} />
              ) : item.type === "course" ? (
                <FaLaptopCode size={15} />
              ) : (
                <FaGraduationCap size={16} />
              )}
            </div>

            {/* Date Pill (Desktop Side Badge) */}
            <div className="hidden md:block absolute -left-44 top-2 text-right w-36">
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-purple-950/60 text-purple-300 border border-purple-800/40 whitespace-nowrap inline-block">
                {item.duration}
              </span>
            </div>

            {/* Content Card */}
            <div className="p-7 rounded-2xl bg-white dark:bg-[#120E2E] border border-gray-200 dark:border-[#221B52] hover:dark:border-[#3B2D82] hover:shadow-xl dark:hover:shadow-purple-950/20 transition duration-300">
              
              {/* Mobile Duration Badge */}
              <div className="md:hidden inline-block mb-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-purple-950/60 text-purple-300 border border-purple-800/40">
                  {item.duration}
                </span>
              </div>

              {/* Role & Institution Header */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-wide">
                {item.role}
              </h3>
              <p className="text-sm font-medium text-purple-500 dark:text-purple-400 mt-1">
                {item.company}
              </p>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300/80 text-sm leading-relaxed mt-3">
                {item.description}
              </p>

              {/* Key Highlights */}
              {item.achievements && (
                <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300/90">
                  {item.achievements.map((ach, achIdx) => (
                    <li key={achIdx} className="flex items-start gap-2">
                      <span className="text-purple-400 font-bold mt-1">▹</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Skills/Technologies Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {item.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-[#1C1642] text-gray-700 dark:text-purple-300 border border-transparent dark:border-[#2C2361] rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}