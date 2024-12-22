import byteup1 from "../public/mockups/byteup/byteup1.png";
import byteup2 from "../public/mockups/byteup/byteup2.png";
import byteup3 from "../public/mockups/byteup/byteup3.png";

export const projects = [
  {
    id: 1,
    img: "https://framerusercontent.com/images/AGpBGSlAeiBe8absF2xAK8RBIA.jpeg?scale-down-to=512",
    link: "/projects/uranium-tracker",
    title: "Internship",
    category: "Web Pages",
    technologies: ["React", "Tailwind CSS", "JavaScript", "GSAP"],
    duration: "4 months",
    heading: "Intership Project: Uranium Tracker",
    description:
      "A web page showcasing the projects completed during my internship, including responsive design and interactive features.",
    moreImages: [
      "https://framerusercontent.com/images/TuKlBIjYU2SUMUdZjRk89Hsslhs.webp",
      "https://framerusercontent.com/images/TuKlBIjYU2SUMUdZjRk89Hsslhs.webp",
    ],
    liveLink: "https://example.com/internship",
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
