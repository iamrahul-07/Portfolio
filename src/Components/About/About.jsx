import React from "react";
import aboutSvg from "../../assets/about.svg";
import { motion } from "framer-motion";
import { useTheme } from "../../Context/ThemeContext";

const About = () => {
  const handleDownload = () => {
    const userConfirmed = window.confirm("Do you want to download the resume?");
    if (userConfirmed) {
      const link = document.createElement("a");
      link.href = "/RAHUL_RESUME.pdf"; // ensure this is in the public folder
      link.download = "Rahul_Vishwakarma_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const { darkMode, themeToggle } = useTheme();

  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-gradient-to-r from-green-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 pt-16 sm:pt-20 transition-colors duration-300"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-12">
        
        {/* Left Side - Text and Button */}
        <motion.div
          className="flex flex-col justify-start items-center md:items-start text-center md:text-left px-4 sm:px-8 lg:px-12"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8">
            About Me
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 text-justify px-2 sm:px-4 md:px-0 leading-relaxed">
            Hello! My name is <strong className="text-blue-800 dark:text-blue-400">Rahul Vishwakarma</strong>, and I am a Frontend Developer with a passion for building responsive, modern, and user-friendly web applications. I enjoy turning ideas into interactive interfaces and creating seamless digital experiences.
          </p>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 text-justify px-2 sm:px-4 md:px-0 leading-relaxed">
            Alongside frontend development, I love solving DSA problems using Java and currently learning backend development. Beyond coding, I am fascinated by UI/UX design, accessibility, and performance optimization.
          </p>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 text-justify px-2 sm:px-4 md:px-0 leading-relaxed">
            I spend my time learning new technologies, building projects, and collaborating with teams to deliver impactful solutions.
          </p>

          <motion.button
            onClick={handleDownload}
            className="mt-4 sm:mt-6 inline-block px-5 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-indigo-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.button>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="flex justify-center items-center mt-8 md:mt-0"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -20 }}
        >
          <img
            src={aboutSvg}
            alt="About Illustration"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg drop-shadow-lg dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
