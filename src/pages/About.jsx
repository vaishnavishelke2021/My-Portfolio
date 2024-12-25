import React from "react";

const About = () => {
  return (
    <div>
      {/* heading  */}
      <div className="w-full md:w-[80%] lg:w-[58%] mx-auto px-4 md:px-6 mt-12">
        <h1 className="text-3xl md:text-[54px] font-medium md:leading-[58px] mb-6 text-primary">
          About me
        </h1>
        <p className="text-lg md:text-xl mb-10">
          Hey there! I'm Vaishnavi Shelke, a Frontend Developer and UI Designer
          who loves building beautiful and functional websites. I'm passionate
          about creating interactive web experiences that work perfectly on any
          device. I enjoy working with technologies like React, HTML, CSS,
          JavaScript,Tailwind CSS, & Bootstrap. I'm currently gaining practical
          experience through internship projects using React and Next.js. I'm
          also diving into the world of backend development, learning Express
          and exploring authentication strategies. My aim is to become a
          well-rounded MERN-stack developer, but I'll always have a soft spot
          for frontend development!
        </p>
      </div>
    </div>
  );
};

export default About;
