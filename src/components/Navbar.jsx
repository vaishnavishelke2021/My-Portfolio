import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="p-6 md:p-8 px-2 md:px-16 border-b border-primary/10 flex items-center justify-between">
        {/* logo name  */}
        <h1 className="text-[17px] Quicksand text-primary/90 font-medium hover:text-primary transition-all ease-in-out duration-200">
          <a href="/">Vaishnavi Shelke</a>
        </h1>

        {/* links  */}
        <ul className="flex gap-6 gap-x-8 text-[16px]  text-primary/70 font-medium">
          <li>
            <a
              href="/projects"
              className=" hover:text-primary transition-all ease-in-out duration-200"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/resume"
              className=" hover:text-primary transition-all ease-in-out duration-200"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="/about"
              className=" hover:text-primary transition-all ease-in-out duration-200"
            >
              About me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
