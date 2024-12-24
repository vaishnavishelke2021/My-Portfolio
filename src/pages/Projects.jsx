import React, { useState } from "react";
import ProjectsFilter from "../components/ProjectsFilter";
import ProjectCards from "../components/ProjectCards";
import { projects } from "../projects";

const Projects = () => {
  const [filteredCategory, setFilteredCategory] = useState("All");

  const handleFilterChange = (category) => {
    setFilteredCategory(category);
  };

  const filteredProjects =
    filteredCategory === "All"
      ? projects
      : projects.filter((project) => project.category === filteredCategory);

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
      <div className="container mx-auto py-10 pb-28">
        <ProjectsFilter onFilterChange={handleFilterChange} />
        <div className="mt-10">
          <ProjectCards
            items={filteredProjects.length}
            projects={filteredProjects}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
