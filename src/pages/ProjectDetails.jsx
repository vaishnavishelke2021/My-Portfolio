import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../projects"; // import the projects array

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
    <div className="w-full px-3 md:-w-[75%] lg:w-[60%] mx-auto project-details-container p-10">
      <h1 className="text-4xl font-extrabold text-primary mb-4">
        {project.heading}
      </h1>
      <div className="project-images mb-6">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-[500px] object-cover rounded-lg mb-4"
        />
        {/* Display more images if available */}
        {project.moreImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`More image ${index + 1}`}
            className="w-full h-[300px] object-cover rounded-lg mb-4"
          />
        ))}
      </div>
      <p className="text-lg text-primary/80 mb-6">{project.description}</p>
      <div className="technologies mb-6">
        <h3 className="text-xl font-semibold">Technologies Used:</h3>
        <ul className="list-disc pl-5">
          {project.technologies.map((tech, index) => (
            <li key={index} className="text-primary">
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="links mb-6">
        <a
          href={project.liveLink}
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Project
        </a>
        {project.githubLink && (
          <a
            href={project.githubLink}
            className="text-blue-500 ml-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
