import React from "react";

const ResumeSec = () => {
  return (
    <div className="p-8 w-full md:w-[80%] lg:w-[58%] mx-auto  py-16 pb-24 text-lg md:text-xl">
      {/* Header */}

      {/* Education */}
      <section className="mt-2">
        <h2 className="text-2xl md:text-3xl font-medium border-primary/5 border-b-2 pb-3 mb-3">
          Education
        </h2>
        <div className="mb-4">
          <h3 className="font-semibold">Bachelor’s in Computer Engineering</h3>
          <p className=" text-[19px]">
            Sandip Institute of Technology and Research Centre (SITRC), Nashik,
            Maharashtra
          </p>
          <p className="text-base mt-1">2019 – 2023 | CGPA: 8.39</p>
        </div>
        <div className="mt-3">
          <h3 className="font-semibold">Higher Secondary Certificate</h3>
          <p className=" text-[19px]">Maharashtra State Board</p>
          <p className="text-base mt-1">2017 – 2019 | Percentage: 70.15</p>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-[4rem]">
        <h2 className="text-2xl md:text-3xl font-medium border-primary/5 border-b-2 pb-3 mb-3">
          Skills
        </h2>
        <p>
          <span className="font-semibold">Languages & Version Control:</span>{" "}
          HTML5, CSS3, JavaScript (ES6), Python (Basics), Git, GitHub
        </p>
        <p className="mt-[6px]">
          <span className="font-semibold">Frameworks/Libraries:</span> React.js,
          NextJS, Redux, TailwindCSS, Bootstrap, GSAP, Node.js, Express, Prompt
          Engineering, ChatGPT
        </p>
        <p className="mt-[6px]">
          <span className="font-semibold">Backend & Databases:</span> SQL,
          MongoDB (Atlas), CRUD Operations, Postman
        </p>
        <p className="mt-[6px]">
          <span className="font-semibold">UI/UX Design:</span> Figma, Adobe XD,
          UI Designing, Wireframing, Prototyping, Canva
        </p>
      </section>

      {/* Experience */}
      <section className="mt-[4rem]">
        <h2 className="text-2xl md:text-3xl font-medium border-primary/5 border-b-2 pb-3 mb-3">
          Experience
        </h2>
        <div className="mb-9">
          <h3 className="font-semibold">ByteUp AI</h3>
          <p className=" text-[19px]">
            Frontend Development Intern & UI Designer
          </p>
          <p className="text-base mb-3">Aug 2024 – Present</p>
          <ul className="list-disc text-[18px] text-primary/90 pl-6">
            <li className="pl-2">
              Currently developing an AI-powered chatbot product website and
              other projects using Next.js, with a focus on implementing SEO
              best practices.
            </li>
            <li className="pl-2">
              Developed client websites using HTML, CSS, JavaScript, React,
              Tailwind CSS, and GSAP for real-world projects. Built the
              company’s website using React.js, ensuring responsive design and
              smooth functionality.
            </li>
            <li className="pl-2">
              Conducted research and designed user interfaces for websites to
              ensure optimal user experience. Collaborated with fellow interns
              and contributed to project repositories on GitHub.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">
            Sahajananda Tech Services And Research Center Private Limited
          </h3>
          <p className=" text-[19px]">Co-founder & UI Designer</p>
          <p className="text-base mb-3">Feb 2022 – June 2024</p>
          <ul className="list-disc text-[18px] text-primary/90 pl-6">
            <li className="pl-2">
              {" "}
              Responsibe for designing mobile app UI using figma for all
              products. Created wireframes and prototypes to iterate on design
              concepts and gather user feedback.
            </li>
            <li className="pl-2">
              Developed the company’s website using HTML, TailwindCSS, and
              JavaScript, ensuring a responsive design.
            </li>
            <li className="pl-2">
              Designed user interfaces (UIs) for client projects in the AI/ML
              and product sectors, focusing on usability and aesthetics.
            </li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="mt-[4rem]">
        <h2 className="text-2xl md:text-3xl font-medium border-primary/5 border-b-2 pb-3 mb-3">
          Projects
        </h2>
        <div className="mb-4">
          <h3 className="font-semibold">
            Movie Website (FilmBox) –{" "}
            <a href="#" className="text-rose-500 text-base hover:underline">
              Live Link
            </a>
          </h3>
          <p className="text-[18px]">
            Technologies: HTML5, Tailwind CSS, React, Redux, Axios
          </p>
          <ul className="list-disc text-[18px] text-primary/90 pl-6 mt-2">
            <li className="pl-2">
              Developed a movie application using React, integrating React
              Hooks, Axios, React-Redux, and React-Router-Dom.
            </li>
            <li className="pl-2">
              Integrated the IMDB API to fetch and display real-time data for
              movies and TV shows.
            </li>
            <li className="pl-2">
              Implemented a fully responsive layout for optimal user experience.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">
            Restaurant Website (Swiggy Inspired) –{" "}
            <a href="#" className="text-rose-500 text-base hover:underline">
              Live Link
            </a>
          </h3>
          <p className="text-[18px]">
            Technologies: HTML5, CSS3, React.js, Redux, React-Router-DOM, React
            Hooks, Fetch API
          </p>
          <ul className="list-disc text-[18px] text-primary/90 pl-6 mt-2">
            <li className="pl-2">
              Implemented search, filtering, and dynamic loading (Shimmer UI) to
              create a seamless browsing experience.
            </li>
            <li className="pl-2">
              Utilized Redux for efficient data management from APIs, ensuring
              smooth data flow.
            </li>
            <li className="pl-2">
              Leveraged React Hooks to build a visually appealing and dynamic
              interface for easy navigation.
            </li>
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section className="mt-[4rem]">
        <h2 className="text-2xl md:text-3xl font-medium border-primary/5 border-b-2 pb-3 mb-3">
          Others
        </h2>
        {/* certifications  */}
        <div>
          <h3 className="font-semibold mb-2">Certifications</h3>
          <ul className="list-disc text-[18px] text-primary/90 pl-6">
            <li className="pl-2">Responsive Web Design</li>
            <li className="pl-2">
              Python Programming Certificate by Talent Battle
            </li>
            <li className="pl-2">Google UX Design Professional Certificate</li>
            <li className="pl-2">
              Postman API Fundamentals Student Certificate
            </li>
          </ul>
        </div>

        {/* design projects  */}
        <div className="mt-5">
          <h3 className="font-semibold mb-2">Design Projects</h3>
          <ul className="list-disc text-[18px] text-primary/90 pl-6">
            <li className="pl-2 hover:underline">
              <a
                href="https://vaishnavishelke777.wixsite.com/designportfolio/blossom"
                target="_blank"
              >
                Flower Catalogue App
              </a>
            </li>
            <li className="pl-2 hover:underline">
              <a
                href="https://vaishnavishelke777.wixsite.com/designportfolio/copy-of-blossom-1"
                target="_blank"
              >
                QR HoReCa Menu
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ResumeSec;
