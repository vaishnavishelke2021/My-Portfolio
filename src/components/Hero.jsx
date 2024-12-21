import React from "react";
import { RiLinkedinFill } from "react-icons/ri";
import { RiGithubFill, RiMediumFill } from "react-icons/ri";
import { TbBrandDribbbleFilled } from "react-icons/tb";

const Hero = () => {
  return (
    <div className="p-5 md:p-8 lg:px-16 xl:px-28 mt-9">
      {/* Profile */}
      <div className="flex flex-col items-center md:items-start">
        <div className="w-[5.7rem] h-[5.7rem] rounded-full">
          <img
            // src="/profile.jpg"
            src="https://thumbs.dreamstime.com/b/d-icon-avatar-cartoon-cute-freelancer-woman-working-online-learning-laptop-transparent-png-background-works-embodying-345422695.jpg"
            className="w-full h-full object-cover rounded-full border"
            alt="Profile"
          />
        </div>

        {/* Heading */}
        <div className="mt-6 md:mt-8 md:pr-12 text-center md:text-left">
          <h1 className="text-[28px] sm:text-[40px] lg:text-[52px] font-medium leading-[3.7rem]">
            I'm Vaishnavi Shelke, a Frontend Developer & occasional UI Designer.
            I love creating user-friendly websites with joyful designs.
          </h1>

          <p className="mt-7 text-primary text-[16px] sm:text-[18px] lg:text-[19px] leading-relaxed">
            I create responsive websites that look great on any device. As a
            passionate learner, I’m on a journey to master the MERN stack and
            constantly improve my skills to deliver better digital experiences.
          </p>
        </div>
      </div>

      {/* Social Media */}
      <div className="flex justify-center md:justify-start space-x-4 mt-9">
        <a
          href="https://www.linkedin.com/in/vaishnavi-shelke-6a265520b/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-primary/5 shadow-sm rounded-full p-3 text-primary/70 hover:text-primary hover:bg-zinc-100 transition-all ease-in-out duration-200"
        >
          <RiLinkedinFill className="scale-105" />
        </a>

        <a
          href="https://github.com/vaishnavishelke2021"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-primary/5 shadow-sm rounded-full p-3 text-primary/70 hover:text-primary hover:bg-zinc-100 transition-all ease-in-out duration-200"
        >
          <RiGithubFill className="scale-125" />
        </a>

        <a
          href="https://dribbble.com/vaishnavi_shelke"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-primary/5 shadow-sm rounded-full p-3 text-primary/70 hover:text-primary hover:bg-zinc-100 transition-all ease-in-out duration-200"
        >
          <TbBrandDribbbleFilled className="scale-110" />
        </a>

        <a
          href="https://medium.com/@vaishnavi_shelke"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-primary/5 shadow-sm rounded-full p-3 text-primary/70 hover:text-primary hover:bg-zinc-100 transition-all ease-in-out duration-200"
        >
          <RiMediumFill className="scale-110" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
