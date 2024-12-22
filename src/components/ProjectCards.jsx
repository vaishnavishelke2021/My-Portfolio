import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../projects";

const ProjectCards = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-x-12">
      {projects.slice(0, items).map((project) => (
        <Link key={project.id} to={project.link}>
          <div className="h-[430px] rounded-2xl group overflow-hidden relative">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-all duration-500 ease-out"
            />
            <h1 className="absolute top-4 right-4 text-sm bg-secondary text-primary px-3 py-1 rounded-full">
              {project.title}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectCards;
