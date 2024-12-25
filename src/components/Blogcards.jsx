import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../blogs";
import { IoArrowForwardCircle } from "react-icons/io5";

const Blogcards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-9 gap-x-12">
      {blogs.map((blog) => (
        <Link
          key={blog.id}
          to={blog.link}
          target="_blank"
          className="block group relative overflow-hidden rounded-2xl"
        >
          {/* Image */}
          <div className="h-[190px] relative overflow-hidden rounded-2xl">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-primary/70 -transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
            {/* Arrow Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <IoArrowForwardCircle className="text-accent shadow text-[44px]" />
            </div>
          </div>
          {/* Date and Title */}
          <div className="mt-2">
            <h1 className="text-primary/80 text-sm">{blog.date}</h1>
            <h1 className="text-primary text-lg font-semibold mt-1">
              {blog.title}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blogcards;
