import React, { useState } from "react";
import { useTheme } from "../../Context/ThemeContext";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, themeToggle } = useTheme();

  return (
    <>
      <header className="shadow-md bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 fixed top-0 left-0 w-full z-50 transition-colors duration-300">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 transition-colors duration-300">
              <strong>R</strong>ahul
            </h1>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex gap-4 lg:gap-8 text-base lg:text-lg font-semibold">
            <a
              href="#home"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 focus:outline-none text-gray-700 dark:text-gray-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                // X icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
              <nav className="absolute right-0 mt-2 w-40 sm:w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 space-y-1 sm:space-y-2 font-semibold text-gray-700 dark:text-gray-200 z-50">
                <a
                  href="#home"
                  className="block px-3 sm:px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block px-3 sm:px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="block px-3 sm:px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="block px-3 sm:px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="block px-3 sm:px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </nav>
            )}
          </div>
        </div>
      </header>

      {/* 🌙 Floating Dark Mode Toggle Button */}
      <button
        onClick={themeToggle}
        className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer z-50"
      >
        {darkMode ? <MdSunny className="text-2xl font-bold transition-colors duration-300 text-orange-400"/> : <IoMoon className="text-2xl font-bold transition-colors duration-300 text-yellow-400"/>}
      </button>
    </>
  );
};

export default Navbar;
