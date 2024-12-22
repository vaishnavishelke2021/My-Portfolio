import React from "react";
import { experiences } from "../experience";

const ExperienceCards = () => {
  return (
    <div className="space-y-5 md:space-y-8">
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="pb-6 md:pb-9 flex flex-col md:flex-row md:space-x-16 border-b border-primary/10"
        >
          {/* Date */}
          <div className="w-full md:w-1/6 mb-4 md:mb-0">
            <h1 className="text-primary/80 text-md mt-[6px]">
              {experience.date}
            </h1>
          </div>

          {/* Content */}
          <div className="w-full md:w-[80%]">
            <h1 className="text-primary text-[21px] md:text-[22px] font-semibold">
              {experience.company}
            </h1>
            <h2 className="text-primary/80 text-[16px] md:text-lg">
              {experience.role}
            </h2>

            {/* Responsibilities */}
            <ul className="list-disc list-inside text-primary/80 text-[16px] md:text-[17px] mt-4">
              {experience.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCards;
