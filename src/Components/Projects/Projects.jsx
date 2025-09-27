import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaReact, FaJs, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const projectsData = [
  {
    name: "Portfolio",
    logo: <FaReact className="text-cyan-500 text-3xl sm:text-4xl" />,
    description: "A personal portfolio showcasing my skills and projects with a clean, modern design.",
    techIcons: [<FaReact className="text-cyan-500" />, <SiTailwindcss className="text-teal-500" />],
    github: "https://github.com/iamrahul-07/Portfolio.git",
    live: "rahul-vishwakarma-portfolio.netlify.app",
  },
  {
    name: "Food Delivery",
    logo: <FaReact className="text-cyan-500 text-3xl sm:text-4xl" />,
    description: "A frontend web app interface for a food delivery service with a clean and responsive design.",
    techIcons: [<FaReact className="text-cyan-500" />, <SiTailwindcss className="text-teal-500" />],
    github: "https://github.com/iamrahul-07/Food-Delivery.git",
    live: "https://foodify-delivery.netlify.app/",
  },
  {
    name: "Gemini Clone",
    logo: <FaReact className="text-cyan-500 text-3xl sm:text-4xl" />,
    description: "A responsive frontend clone of the Gemini website, replicating its core design and user interface.",
    techIcons: [<FaReact className="text-cyan-500" />, <FaCss3Alt className="text-blue-600" />],
    github: "https://github.com/iamrahul-07/Gemini-2.0.git",
    live: "https://gemini-clone-2.netlify.app/",
  },
  {
    name: "Calculator",
    logo: <FaReact className="text-cyan-500 text-3xl sm:text-4xl" />,
    description: "Simple calculator with basic arithmetic operations, featuring both dark and light mode.",
    techIcons: [
      <FaReact className="text-cyan-500" />,
      <FaJs className="text-yellow-500" />,
      <SiTailwindcss className="text-teal-500" />,
    ],
    github: "https://github.com/iamrahul-07/Calculator.git",
    live: "https://eval-calc.netlify.app/",
  },
  {
    name: "Currency Converter",
    logo: <FaReact className="text-cyan-500 text-3xl sm:text-4xl" />,
    description: "Convert currencies using real-time exchange rates API with a clean and responsive interface.",
    techIcons: [
      <FaReact className="text-cyan-500" />,
      <FaJs className="text-yellow-500" />,
      <SiTailwindcss className="text-teal-500" />,
    ],
    github: "https://github.com/iamrahul-07/Currency-Convertor.git",
    live: "https://simple-currency-convertor.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-12 sm:py-16 bg-gradient-to-r from-purple-100 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 mt-8 sm:mt-12">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-4 sm:p-6 flex flex-col justify-between border border-gray-200 shadow-md cursor-pointer transform transition-all duration-500
                         hover:scale-105 hover:shadow-lg hover:border-cyan-100 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-rose-50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Top Row: Logo + Name */}
              <div className="flex justify-between items-center mb-3">
                <div>{project.logo}</div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-800">{project.name}</h4>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex items-center mb-4 space-x-2">
                <span className="text-xs sm:text-sm font-semibold text-gray-500">Tech Stack:</span>
                <div className="flex space-x-2">
                  {project.techIcons.map((icon, idx) => (
                    <span key={idx} className="text-lg sm:text-2xl transform transition-transform hover:scale-125">
                      {icon}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex justify-start space-x-4 mt-auto">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-lg sm:text-2xl text-gray-800 hover:text-black transition-colors" />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className="text-lg sm:text-2xl text-gray-800 hover:text-black transition-colors" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
