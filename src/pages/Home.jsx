import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeMarquee from "../components/HomeMarquee";
import HomeProjects from "../components/HomeProjects";
import HomeExperience from "../components/HomeExperience";
import HomeBlogs from "../components/HomeBlogs";
import GetInTouch from "../components/GetInTouch";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeMarquee />
      <HomeProjects />
      <HomeExperience />
      <HomeBlogs />
      <GetInTouch />
      <div className="p-5"> </div>
    </div>
  );
};

export default Home;
