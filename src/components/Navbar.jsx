import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };

  return (
    <div>
      <nav className="p-5 md:p-8 px-4 md:px-16 border-b border-primary/10 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-[18px] Quicksand text-primary/90 font-medium hover:text-primary transition-all ease-in-out duration-200">
          <a href="/">Vaishnavi Shelke</a>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 gap-x-8 text-[16px] text-primary/70 font-medium">
          <li>
            <a
              href="/projects"
              className="hover:text-primary transition-all ease-in-out duration-200"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/resume"
              className="hover:text-primary transition-all ease-in-out duration-200"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-primary transition-all ease-in-out duration-200"
            >
              About me
            </a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={handleToggleMenu} aria-label="Toggle Menu">
            <FiMenu size={24} className="text-primary" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-0 right-0 h-screen m-2 w-[80%] rounded-l-[1.8rem] bg-white shadow-lg z-50 flex flex-col items-center justify-center text-primary/70 text-[18px] font-medium"
        >
          {/* Close Icon */}
          <button
            onClick={handleToggleMenu}
            className="absolute top-5 right-3 text-primary"
            aria-label="Close Menu"
          >
            <FiX size={24} />
          </button>

          {/* Menu Links */}
          <a
            href="/projects"
            className="hover:text-primary transition-all ease-in-out duration-200 mb-5"
            onClick={handleToggleMenu}
          >
            Projects
          </a>
          <a
            href="/resume"
            className="hover:text-primary transition-all ease-in-out duration-200 mb-5"
            onClick={handleToggleMenu}
          >
            Resume
          </a>
          <a
            href="/about"
            className="hover:text-primary transition-all ease-in-out duration-200 mb-5"
            onClick={handleToggleMenu}
          >
            About me
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
