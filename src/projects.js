import byteup1 from "../public/mockups/byteup/byteup1.png";
import byteup2 from "../public/mockups/byteup/byteup2.png";
import byteup3 from "../public/mockups/byteup/byteup3.png";
import ut1 from "../public/mockups/uraniumtracker/ut.png";

export const projects = [
  {
    id: 1,
    img: ut1,
    link: "/projects/uranium-tracker",
    title: "Internship",
    category: "Web Pages",
    technologies: ["React", "Axios", "Tailwind CSS", "GSAP"],
    duration: "4 months",
    heading: "Intership Project: Uranium Tracker Website",
    description:
      "I contributed to the development of a comprehensive Uranium Tracker website built to provide real-time information about uranium, including stocks, news, analysis, and insider transactions. Built using React, Tailwind CSS, GSAP, and Axios, the project involved fetching data from multiple APIs to deliver dynamic and up-to-date content. My responsibilities included integrating APIs & implementing responsive designs. Throughout the project, we constantly iterated on designs and updated the site based on client feedback to meet their expectations. Additionaly. I utilized ChatGPT to refine the code for better performance and scalability.",
    moreImages: [
      "https://framerusercontent.com/images/TuKlBIjYU2SUMUdZjRk89Hsslhs.webp",
      "https://framerusercontent.com/images/TuKlBIjYU2SUMUdZjRk89Hsslhs.webp",
    ],
    liveLink: "https://uranium-light.netlify.app/",
    githubLink: "",
  },
  {
    id: 2,
    img: byteup1,
    link: "/projects/byteup-ai",
    title: "Internship",
    category: "Web Pages",
    technologies: ["React", "tailwind CSS", "GSAP"],
    duration: "7 days",
    heading: "Internship Project: Company Website for Service-Based Startup",
    description:
      "I worked on developing a service-based startup website, focusing on modern aesthetics and interactive elements. Using React and Tailwind CSS, we created a responsive and user-friendly layout, integrating GSAP for smooth animations. My responsibilities included research on design, front-end development, and ensuring the site’s responsiveness. Throughout the project, my fellow intern and I collaborated using GitHub to efficiently manage the development process. Additionally, I leveraged ChatGPT to optimize the code, ensuring better efficiency and scalability.",
    moreImages: [byteup2, byteup3],
    liveLink: "https://byte-up-ai.netlify.app/",
    githubLink: "",
  },
];
