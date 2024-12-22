import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../projects"; // import the projects array
import { IoLogoGithub } from "react-icons/io";

const ProjectDetails = () => {
  // Get the projectId from the URL
  const { projectId } = useParams();

  // Find the project by its ID
  const project = projects.find((p) => p.id === parseInt(projectId));

  // If the project is not found, show a message
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="w-full px-3 md:-w-[75%] lg:w-[60%] mx-auto project-details-container p-10 py-14">
      <h1 className="text-5xl font-medium text-primary mb-5 md:leading-[50px]">
        {project.heading}
      </h1>
      <p className="text-lg text-primary/80 mb-6 ">{project.description}</p>
      {/* technologies  */}
      <div className="technologies mb-8">
        <ul className="flex space-x-2">
          {project.technologies.map((tech, index) => (
            <li
              key={index}
              className="text-primary bg-transparent text-sm px-3 py-1 border border-primary/10 rounded-md"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* links  */}
      <div className="links flex items-center mb-12">
        <a
          href={project.liveLink}
          className="bg-primary hover:bg-primary/80 transition-all duration-300 ease-in-out px-5 py-2.5 rounded-lg text-secondary "
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Project
        </a>
        {project.githubLink && (
          <a
            href={project.githubLink}
            className="bg-secondary hover:bg-primary/5 transition-all duration-300 ease-in-out border border-primary/10 text-[22px] px-[12px] py-2.5 rounded-lg text-primary w-fit ml-3 flex justify-center items-center"
            target="_blank"
          >
            <IoLogoGithub />
          </a>
        )}
      </div>

      {/* img  */}
      <div className="project-images mb-6">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-[550px] object-cover rounded-2xl mb-4"
        />
        {/* Display more images if available */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-7">
          {project.moreImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`More image ${index + 1}`}
              className="w-full h-[390px] object-cover rounded-xl mb-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
