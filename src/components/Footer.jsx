import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RiLinkedinFill, RiGithubFill, RiMediumFill } from "react-icons/ri";
import { TbBrandDribbbleFilled } from "react-icons/tb";

const Footer = () => {
  const location = useLocation();

  const handleHomeClick = () => {
    if (
      location.pathname === "/" ||
      location.pathname === "/projects" ||
      location.pathname === "/about" ||
      location.pathname === "/resume"
    ) {
      window.scrollTo(0, 0); // Scroll to top only if already on the Home page
    }
  };

  return (
    <div className="p-5 py-7 md:py-10 lg:px-16 xl:px-28 bg-">
      {/* Top Section */}
      <div className="flex flex-wrap justify-between items-center space-y-6 md:space-y-0">
        {/* Branding */}
        <div className="w-full md:w-auto text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-secondary/80">
            Vaishnavi Shelke
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-auto text-center">
          <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 md:gap-x-8 text-secondary/70">
            <Link
              to="/"
              onClick={handleHomeClick}
              className="hover:text-secondary transition-all duration-200 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="hover:text-secondary transition-all duration-200 ease-in-out"
            >
              Projects
            </Link>
            <Link
              to="/resume"
              className="hover:text-secondary transition-all duration-200 ease-in-out"
            >
              Resume
            </Link>
            <Link
              to="/about"
              className="hover:text-secondary transition-all duration-200 ease-in-out"
            >
              About me
            </Link>
          </ul>
        </div>

        {/* Social Links */}
        <div className="w-full md:w-auto flex justify-center md:justify-start space-x-4">
          <a
            href="https://www.linkedin.com/in/vaishnavi-shelke-6a265520b/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-secondary/20 shadow-sm rounded-full p-3 text-secondary/70 hover:text-primary hover:bg-zinc-100 transition-all ease-in-out duration-200"
          >
            <RiLinkedinFill className="scale-105" />
          </a>
          <a
            href="https://github.com/vaishnavishelke2021"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-secondary/20 shadow-sm rounded-full p-3 text-secondary/70 hover:text-primary hover:bg-zinc-100 transition-all ease-in-out duration-200"
          >
            <RiGithubFill className="scale-125" />
          </a>
          <a
            href="https://dribbble.com/vaishnavi_shelke"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-secondary/20 shadow-sm rounded-full p-3 text-secondary/70 hover:text-primary hover:bg-zinc-100 transition-all ease-in-out duration-200"
          >
            <TbBrandDribbbleFilled className="scale-110" />
          </a>
          <a
            href="https://medium.com/@vaishnavi_shelke"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-secondary/20 shadow-sm rounded-full p-3 text-secondary/70 hover:text-primary hover:bg-zinc-100 transition-all ease-in-out duration-200"
          >
            <RiMediumFill className="scale-110" />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full mt-10 bg-secondary/20 h-[1px]"></div>

      {/* Copyright */}
      <p className="text-center mt-10 text-secondary/40">
        &#169; 2024 | By Vaishnavi Shelke
      </p>
    </div>
  );
};

export default Footer;
