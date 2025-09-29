import hero from '../../assets/hero.svg';
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useTheme } from "../../Context/ThemeContext"; // make sure it's imported

const Home = () => {
  const lines = [
    "I am a Frontend Developer.",
    "Let's learn with each other.",
    "I build modern, responsive web apps.",
    "Turning ideas into interactive interfaces.",
    "Writing clean, efficient, and scalable code.",
    "Always exploring new technologies.",
    "Building projects that make an impact.",
    "Code, design, repeat 🔄"
  ];

  const { darkMode, themeToggle } = useTheme();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-r from-violet-100 to-orange-50 dark:from-gray-900 dark:to-gray-800 pt-20 sm:pt-24 transition-colors duration-300"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-12">
        
        {/* Left Side - Intro */}
        <motion.div
          className="flex flex-col justify-center items-center text-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl sm:text-2xl mb-2 text-gray-700 dark:text-gray-300">
            Hi, my name is
          </p>

          {/* Name + Frontend paragraph container */}
          <div className="inline-block">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">
              <span className="text-blue-950 dark:text-blue-400">Rahul Vishwakarma</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 py-2 px-4 sm:px-8 md:px-16 text-justify transition-colors duration-300">
              I am a Frontend Developer who loves building responsive, modern, and user-friendly web applications.
              I focus on creating interfaces that are clean, efficient, and enjoyable for users.
              I enjoy solving problems, turning ideas into seamless digital experiences, and continuously learning new technologies to improve my skills.
            </p>
            <h2 className="text-lg sm:text-xl font-bold text-gray-600 dark:text-gray-200 mb-6 h-10 sm:h-12">
              <Typewriter
                words={lines}
                loop={0} // 0 = infinite
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
          </div>

          {/* Social Icons */}
          <div className="w-full sm:w-[60%] md:w-[40%] flex justify-around text-2xl sm:text-3xl md:text-4xl mt-4">
            {[
              ["fa-square-instagram bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-transparent bg-clip-text", "https://www.instagram.com/iamrahul___7/"],
              ["fa-facebook text-blue-600 dark:text-blue-500", "https://www.facebook.com/profile.php?id=100012508811989"],
              ["fa-github text-gray-800 dark:text-gray-200", "https://github.com/iamrahul-07"],
              ["fa-square-x-twitter text-black dark:text-gray-200", "https://x.com/iamklrahul45"],
              ["fa-linkedin text-blue-700 dark:text-blue-400", "https://www.linkedin.com/in/iamrahul45/"]
            ].map(([icon, link], i) => (
              <motion.a
                key={i}
                href={link}
                className="transform transition-transform"
                whileHover={{ scale: 1.2, y: -5 }}
              >
                <i className={`fa-brands ${icon}`}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Side - SVG */}
        <motion.div
          className="flex justify-center items-center mt-8 md:mt-0"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ y: -20 }}
        >
          <img
            src={hero}
            alt="Hero Illustration"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg drop-shadow-lg dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
