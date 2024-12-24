import React, { useState } from "react";
import { projects } from "../projects";

const ProjectsFilter = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories and count projects by category
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const categoryCount = categories.reduce((acc, category) => {
    if (category === "All") {
      acc[category] = projects.length;
    } else {
      acc[category] = projects.filter(
        (project) => project.category === category
      ).length;
    }
    return acc;
  }, {});

  // Handle category selection
  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="flex space-x-7 border-b border-primary/15 w-full pb-2">
      {categories.map((category) => (
        <button
          key={category}
          className={`py-1 text-sm rounded-lg transition duration-200 ${
            selectedCategory === category
              ? "bg-primary text-secondary px-3"
              : "bg-transparent text-primary hover:bg-secondary"
          }`}
          onClick={() => handleFilterChange(category)}
        >
          {category} ({categoryCount[category]})
        </button>
      ))}
    </div>
  );
};

export default ProjectsFilter;
