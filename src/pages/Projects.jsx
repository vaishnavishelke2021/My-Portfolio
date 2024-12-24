import React from "react";
import ProjectsFilter from "../components/ProjectsFilter";

const Projects = () => {
  return (
    <div className="w-full md:w-[90%] mx-auto px-4 md:px-6">
      {/* heading  */}
      <div className=" mt-12">
        <h1 className="text-3xl md:text-[54px] font-medium md:leading-[58px] mb-6 text-primary">
          My Personal & Internship Projects
        </h1>
        <p className="text-lg md:text-xl mb-10">
          These projects include a variety of tasks and projects I have
          completed during my internship and personal time. They showcase my
          skills and experience in web development as well as UI designing.{" "}
        </p>
      </div>

      {/* filter  */}
      <div className="mt-5">
        <ProjectsFilter />
      </div>
    </div>
  );
};

export default Projects;
