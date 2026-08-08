import { FaGithub, FaExternalLinkAlt, FaCode, FaMobileAlt, FaCloud, FaBrain, FaPalette, FaShoppingCart } from 'react-icons/fa';

export default function Projects() {
  const projectsList = [
    {
      title: "MegaMart E-Commerce",
      description: "A full-featured modern e-commerce platform offering smooth product browsing, responsive UI, dynamic search, and seamless checkout experience.",
      tags: [ "React", "Node.js", "Express.js", "MongoDB", "RTK Query", "Redis", "Tailwind CSS", "Cloudinary", "Multer",],
      icon: <FaShoppingCart size={20} />,
      github: "https://github.com/fahim-rahman7/megamart-e-comeerce", // Update with your actual repo link
      live: "https://megamart-e-commerce-lilac.vercel.app/"
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge frameworks and performance best practices.",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      icon: <FaCode size={20} />,
      github: "https://github.com/yourusername/web-project",
      live: "https://your-web-app.com"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that deliver exceptional performance and smooth user experiences.",
      tags: ["React Native", "Flutter", "iOS", "Android"],
      icon: <FaMobileAlt size={20} />,
      github: "https://github.com/yourusername/mobile-project",
      live: "https://your-mobile-app.com"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud architecture, serverless infrastructure, and automated deployment pipelines for reliable hosting.",
      tags: ["AWS", "Vercel", "Docker", "Node.js"],
      icon: <FaCloud size={20} />,
      github: "https://github.com/yourusername/cloud-project",
      live: "https://your-cloud-app.com"
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent features powered by advanced AI models, natural language processing, and smart automation algorithms.",
      tags: ["Python", "OpenAI API", "PyTorch", "Next.js"],
      icon: <FaBrain size={20} />,
      github: "https://github.com/yourusername/ai-project",
      live: "https://your-ai-app.com"
    },
    {
      title: "UI/UX Design Systems",
      description: "Beautiful, intuitive design components prioritized for seamless user interactions and web accessibility standards.",
      tags: ["Figma", "Design Tokens", "Tailwind CSS", "Accessibility"],
      icon: <FaPalette size={20} />,
      github: "https://github.com/yourusername/design-system",
      live: "https://your-design-system.com"
    }
  ];

  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      {/* Header Badge */}
      <div className="flex justify-center mb-4">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-950/60 text-purple-300 border border-purple-800/50 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
          My Top Projects
        </span>
      </div>

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          My <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-base md:text-lg max-w-2xl mx-auto">
          Comprehensive software engineering solutions tailored to user needs and modern web standards.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsList.map((project, index) => (
          <div
            key={index}
            className="p-7 rounded-2xl bg-white dark:bg-[#120E2E] border border-gray-200 dark:border-[#221B52] hover:dark:border-[#3B2D82] hover:border-gray-300 hover:shadow-xl dark:hover:shadow-purple-950/30 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Icon Badge & Top Links */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-600 dark:bg-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-600/30 group-hover:scale-105 transition-transform duration-300">
                  {project.icon}
                </div>
                
                <div className="flex gap-3 text-gray-400 dark:text-gray-400 pt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Repository"
                    className="hover:text-black dark:hover:text-white transition"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live Demo"
                    className="hover:text-black dark:hover:text-white transition"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                </div>
              </div>

              {/* Project Title & Description */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-wide">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300/80 text-sm leading-relaxed mt-3 font-normal">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-[#1C1642] text-gray-700 dark:text-purple-300 border border-transparent dark:border-[#2C2361] rounded-md"
                  >
                    {tag}
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