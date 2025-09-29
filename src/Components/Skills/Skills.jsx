import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import skillsSvg from "../../assets/skills.svg";
import { useTheme } from "../../Context/ThemeContext";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-500" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-500" /> },
  { name: "Data Structures", icon: <FaJava className="text-red-600" /> },
  { name: "Python", icon: <FaPython className="text-green-600" /> },
  { name: "Java", icon: <FaJava className="text-blue-800" /> },
  { name: "VS Code", icon: <DiVisualstudio className="text-sky-600" /> },
  { name: "React Router", icon: <FaReact className="text-blue-500" /> },
  { name: "Framer Motion", icon: <FaReact className="text-purple-500" /> },
  { name: "React Icons", icon: <FaReact className="text-gray-800 dark:text-gray-200" /> },
];



const Skills = () => {
  const { darkMode, themeToggle } = useTheme();
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-green-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-12 sm:pt-16 pb-16 sm:pb-20 transition-colors duration-300"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 mb-12 sm:mb-16">
        {/* Left Side - Text */}
        <motion.div
          className="flex flex-col justify-center items-center md:items-start text-center md:text-left px-2 sm:px-6"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4 sm:mb-6">
            Skills & Tech Stack
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4">
            Currently, I specialize in <strong className="text-blue-800 dark:text-blue-400">Frontend Development</strong> with a focus on{" "}
            <strong className="text-blue-800 dark:text-blue-400">React.js</strong>, <strong className="text-blue-800 dark:text-blue-400">TailwindCSS</strong>, and building responsive,
            modern interfaces.
          </p>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I also work with <strong className="text-blue-800 dark:text-blue-400">Java</strong> and <strong className="text-blue-800 dark:text-blue-400">Python</strong> for problem solving
            and Data Structures. Soon, I will explore <strong className="text-blue-800 dark:text-blue-400">Backend Development</strong> to
            become a Fullstack Developer.
          </p>
        </motion.div>

        {/* Right Side - SVG */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -15 }}
        >
          <img
            src={skillsSvg}
            alt="Skills Illustration"
            className="w-3/4 sm:w-full max-w-sm sm:max-w-md md:max-w-lg drop-shadow-lg dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          />
        </motion.div>
      </div>

      {/* Bottom - Skills Cards */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 sm:p-6 flex flex-col items-center justify-center text-center cursor-pointer border border-gray-100 dark:border-gray-700 transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.1,
              rotate: 2,
              boxShadow: darkMode
                ? "0px 10px 25px rgba(255,255,255,0.2)"
                : "0px 10px 25px rgba(0,0,0,0.15)",
            }}
          >
            <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3">
              {skill.icon}
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
