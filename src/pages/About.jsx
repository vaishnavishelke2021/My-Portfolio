import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import AboutCareerSoFar from "../components/AboutCareerSoFar";

const About = () => {
  return (
    <div className="pb-10 sm:pb-0">
      <ScrollToTop />
      {/* heading  */}
      <div className="w-full md:w-[80%] lg:w-[58%] mx-auto px-4 md:px-6 mt-12">
        <h1 className="text-3xl md:text-[54px] font-medium md:leading-[58px] mb-6 text-primary">
          Designing the web, one pixel at a time!
        </h1>
        <p className="text-lg md:text-xl mb-10">
          Hi, I’m Vaishnavi a Frontend Developer with experience in UI designing
          and a passion for crafting beautiful, functional websites. I’m all
          about creating interactive experiences that feel seamless on any
          device. Currently, I’m diving into real-world challenges through
          internship projects using React and Next.js while exploring backend
          development with Express and authentication strategies.
        </p>
      </div>

      <div className="bg-accent mt-20 rounded-b-[1.8rem] -mb-10 sm:mb-0">
        <AboutCareerSoFar />
      </div>
    </div>
  );
};

export default About;
