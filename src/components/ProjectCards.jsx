import React from "react";
import { Link } from "react-router-dom";

const ProjectCards = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12">
      {projects.map((project) => (
        <Link key={project.id} to={`/projects/${project.id}`}>
          <div className="h-[250px] sm:h-[430px] rounded-2xl group overflow-hidden relative">
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
