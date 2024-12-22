import React from "react";
import Blogcards from "./Blogcards";

const HomeBlogs = () => {
  return (
    <div className="p-5 py-7 md:py-[5rem] lg:px-16 xl:px-28 mt-5 bg-accent/60">
      {/* heading  */}
      <div className="flex justify-between items-center mt-5">
        <h1 className="uppercase text-secondary/80 gradient-text">
          03 - Some Writings
        </h1>
      </div>

      {/* cards  */}
      <div className="mt-8 pb-5">
        <Blogcards />
      </div>
    </div>
  );
};

export default HomeBlogs;
