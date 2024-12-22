import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeMarquee from "../components/HomeMarquee";
import HomeProjects from "../components/HomeProjects";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeMarquee />
      <HomeProjects/>
    </div>
  );
};

export default Home;
