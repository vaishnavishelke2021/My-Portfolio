import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import ProjectCards from "./ProjectCards";

const HomeProjects = () => {
  return (
    <div className="p-5 py-12 md:py-24 lg:px-16 xl:px-28 mt-12 bg-accent">
      {/* heading  */}
      <div className="flex justify-between items-center">
        <h1 className="uppercase text-primary/80 gradient-text">01 - Recent Projects</h1>
        <Link
          className="text-sm text-primary/80 hover:text-primary transition-all duration-200 ease-in-out flex items-center "
          to="/projects"
        >
          {" "}
          <span className="pr-[4px]"> View All</span>
          <IoIosArrowRoundForward className="scale-x-125 text-base" />
        </Link>
      </div>

      {/* cards */}
      <div className="mt-8 pb-5">
        <ProjectCards items={2} />
      </div>
    </div>
  );
};

export default HomeProjects;
