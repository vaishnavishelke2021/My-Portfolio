// // import React from "react";

// // const AboutCareerSoFar = () => {
// //   return (
// //     <div className="p-8 w-full md:w-[80%] lg:w-[58%] mx-auto  py-16 pb-24 text-lg md:text-xl">
// //       {/* heading  */}
// //       <h1>My Career So Far</h1>

// //       <div className="flex flex-wrap justify-between items-center">
// //         {/* sec 1 : journey  */}
// //         <div className="w-full md:w-[60%] bg-red-100">
// {
//   /* <p>
//   My journey began with a love for UI/UX design—I’ve always been drawn to the
//   look and feel of things, whether it’s a poster, website, or app. During my
//   second year (hello, lockdown boredom 🥱), I joined my first startup as a
//   Graphic/Poster Designer and Social Media Manager. Armed with tools like Canva,
//   Photoshop, and WordPress, I spent 1.5 years creating designs that told stories
//   before college called me back post-COVID. Curious to explore deeper into
//   design, I enrolled in a UI/UX Design course on Coursera and soon landed an
//   exciting role as a Co-founder and UI/UX Designer for a startup. Here, I worked
//   on mobile app designs for a social media blogging platform and collaborated on
//   cool design projects with classmates. But then the “what’s next?” question
//   struck—How do designs come to life on the web? That curiosity kickstarted my
//   journey into web development. I dove into HTML, CSS, JavaScript, and React,
//   building projects that merged my design foundation with clean, functional
//   code. Fast forward, I landed an internship as a Frontend Developer, where I
//   work on real-world projects involving both design research and development. My
//   current challenge? Crafting a product based on AI chatbot generation—a project
//   that's pushing my skills further every day. Now, I’m actively looking for new
//   opportunities—whether it’s full-time or freelance—to create exceptional web
//   experiences. If you’re looking for someone to build your website or bring your
//   designs to life, let’s connect!
// </p>; */
// }
// // </div>

// //         {/* sec 2 : skills  */}
// //         <div className="w-full md:w-[38%] bg-blue-100"></div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AboutCareerSoFar;

// // =====================================================================================================================================================================================================

// // import React from "react";
// // import { motion } from "framer-motion";

// // const AboutCareerSoFar = () => {
// //   const journey = [
// //     {
// //       title: "Graphic & Poster Designer",
// //       description:
// //         "Joined my first startup during lockdown as a Graphic/Poster Designer and Social Media Manager. Worked with Canva, Photoshop, and WordPress for 1.5 years.",
// //       year: "2020-2022",
// //     },
// //     {
// //       title: "Co-founder & UI/UX Designer",
// //       description:
// //         "Completed a UI/UX Design course and became a Co-founder and UI/UX Designer. Designed mobile apps and collaborated on exciting projects.",
// //       year: "2022-2024",
// //     },
// //     {
// //       title: "Frontend Developer",
// //       description:
// //         "Dove into web development, learning HTML, CSS, JavaScript, and React. Built projects combining design with clean code. Currently interning as a Frontend Developer, working on AI chatbot generation projects while exploring new challenges.",
// //       year: "2024-Present",
// //     },
// //   ];

// //   return (
// //     <div className="p-8 w-full md:w-[80%] lg:w-[70%] mx-auto py-16">
// //       {/* Heading */}
// //       <h1 className="text-3xl font-bold mb-12 text-start">My Career So Far</h1>

// //       {/* Timeline */}
// //       <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-12 relative">
// //         {/* Timeline Bar */}
// //         <motion.div
// //           className="hidden md:block absolute top-[12%] left-0 right-0 h-[1px] bg-gray-300"
// //           initial={{ width: 0 }}
// //           whileInView={{ width: "100%" }}
// //           transition={{ duration: 0.8, ease: "easeInOut" }}
// //         />

// //         {journey.map((item, index) => (
// //           <motion.div
// //             key={index}
// //             className="flex flex-col items-center text-center md:text-left md:items-start md:w-[30%]"
// //             initial={{ opacity: 0, y: 50 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6, delay: index * 0.2 }}
// //           >
// //             {/* Year */}
// //             <div className="text-sm text-gray-500 font-medium mb-3">
// //               {item.year}
// //             </div>
// //             {/* Title */}
// //             <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
// //             {/* Description */}
// //             <p className="text-sm text-gray-600">{item.description}</p>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AboutCareerSoFar;

// ("use client");

// import { useRef, useState, useEffect } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
//   useMotionValue,
// } from "framer-motion";
// import { FaRocket } from "react-icons/fa";

// const careerMilestones = [
//   {
//     title: "Discovering Design",
//     description:
//       "I've always been drawn to how things look and feel—whether it's a website or a mobile app. This passion led me to design.",
//   },
//   {
//     title: "My First Design Role",
//     description:
//       "I joined my first startup as a Graphic Designer & Social Media Manager during lockdown. Designing stories through Canva and Photoshop was my forte.",
//   },
//   {
//     title: "Going Deeper into UI/UX",
//     description:
//       "I co-founded a startup, where I designed mobile app UI for a social media platform, delving deeper into UI/UX design.",
//   },
//   {
//     title: "Web Development Spark",
//     description:
//       "Curious about how designs come to life on the web, I began learning HTML, CSS, JavaScript, and React.",
//   },
//   {
//     title: "Current Role: Frontend Developer",
//     description:
//       "As a Frontend Developer intern, I work on real-world projects that combine design and code. Exciting challenges are my daily grind.",
//   },
//   {
//     title: "Next Steps",
//     description:
//       "I'm now actively seeking new opportunities to work on exciting web projects and help bring designs to life. Let's create something awesome together!",
//   },
// ];

// const AboutCareerSoFar = () => {
//   const containerRef = useRef(null);
//   const scrollRef = useRef(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const scrollProgress = useMotionValue(0);
//   const smoothProgress = useSpring(scrollProgress, {
//     damping: 50,
//     stiffness: 400,
//   });

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   useEffect(() => {
//     const handleScroll = () => {
//       if (scrollRef.current) {
//         const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
//         const progress = scrollTop / (scrollHeight - clientHeight);
//         scrollProgress.set(progress);
//       }
//     };

//     const scrollContainer = scrollRef.current;
//     if (scrollContainer) {
//       scrollContainer.addEventListener("scroll", handleScroll);
//     }

//     return () => {
//       if (scrollContainer) {
//         scrollContainer.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, [scrollProgress]);

//   const handleMouseEnter = () => setIsHovering(true);
//   const handleMouseLeave = () => setIsHovering(false);

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (scrollContainer && isHovering) {
//       const scrollInterval = setInterval(() => {
//         scrollContainer.scrollTop += 1;
//         if (
//           scrollContainer.scrollTop >=
//           scrollContainer.scrollHeight - scrollContainer.clientHeight
//         ) {
//           clearInterval(scrollInterval);
//         }
//       }, 20);

//       return () => clearInterval(scrollInterval);
//     }
//   }, [isHovering]);

//   return (
//     <div
//       ref={containerRef}
//       className="p-8 w-full md:w-[80%] lg:w-[58%] mx-auto py-16 pb-24 text-lg md:text-xl"
//     >
//       <h1 className="text-4xl font-bold text-start mb-12">My Career So Far</h1>

//       <div className="flex flex-wrap justify-between gap-1">
//         {/* Left Column - Scrolling Content */}
//         <div
//           ref={scrollRef}
//           className="w-full md:w-[68%] h-[60vh] overflow-y-scroll no-scrollbar bg-black text-secondary p-10"
//         >
//           <div className="space-y-[100vh]">
//             {careerMilestones.map((milestone, index) => (
//               <MilestoneCard
//                 key={index}
//                 title={milestone.title}
//                 description={milestone.description}
//                 index={index}
//                 progress={smoothProgress}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Right Column - Fixed Icon Section */}
//         <div
//           className="w-full md:w-[30%] h-[60vh] bg-white sticky top-0"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div className="h-full flex flex-col justify-center items-center">
//             <FaRocket className="text-6xl text-purple-600" />
//             <motion.div
//               className="w-1 bg-purple-600 mt-4"
//               style={{
//                 height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
//                 originY: 0,
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const MilestoneCard = ({ title, description, index, progress }) => {
//   const y = useTransform(
//     progress,
//     [index / careerMilestones.length, (index + 1) / careerMilestones.length],
//     ["0%", "-100%"]
//   );
//   const opacity = useTransform(
//     progress,
//     [
//       (index - 0.5) / careerMilestones.length,
//       index / careerMilestones.length,
//       (index + 1) / careerMilestones.length,
//     ],
//     [0, 1, 0]
//   );

//   return (
//     <motion.div className="h-[100vh] flex items-center" style={{ y, opacity }}>
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold mb-4">{title}</h2>
//         <p className="text-lg text-secondary/60">{description}</p>
//       </div>
//     </motion.div>
//   );
// };

// export default AboutCareerSoFar;

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const careerMilestones = [
  {
    year: "2020",
    title: "Discovering Design",
    description:
      "I've always been drawn to how things look and feel—whether it's a website or a mobile app. This passion led me to design.",
  },
  {
    year: "2021",
    title: "First Design Role",
    description:
      "I joined my first startup as a Graphic Designer & Social Media Manager during lockdown. Designing stories through Canva and Photoshop was my role back then.",
  },
  {
    year: "2022",
    title: "UI/UX Deep Dive",
    description:
      "After completion of UI/UX Design course. I worked as a co-founder in a startup, where I designed mobile app UI for a social media platform, delving deeper into UI/UX design.",
  },
  {
    year: "2023",
    title: "Web Development Journey",
    description:
      "Curious about how designs come to life on the web, I began learning HTML, CSS, JavaScript, and React to bring designs to life on the web.",
  },
  {
    year: "2024",
    title: "Frontend Developer Intern",
    description:
      "As a Frontend Developer, I work on real-world projects that combine design and code. Currently working on a chatbot product, combining design principles with coding skills.",
  },
  {
    year: "Present",
    title: "Open To Work",
    description:
      "With 6+ months experience as a frontend developer I'm seeking new opportunities to create exceptional web experiences through full-time or freelance opportunities.",
  },
];

const AboutCareerSoFar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextMilestone = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === careerMilestones.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevMilestone = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? careerMilestones.length - 1 : prevIndex - 1
    );
  }, []);

  useEffect(() => {
    let intervalId = null;
    if (isPlaying) {
      intervalId = setInterval(nextMilestone, 3000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying, nextMilestone]);

  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4 pb-28 sm:pb-36 ">
      <h2 className="text-3xl font-bold text-center mb-12">My Career So Far</h2>
      <div className="relative mt-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="bg-white w-[95%] sm:w-[85%] mx-auto  border-2 border-zinc-800  rounded-xl "
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-gray-500 ">
                  {careerMilestones[currentIndex].year}
                </span>
                <span className="text-sm font-medium text-black/40">
                  {`${currentIndex + 1} / ${careerMilestones.length}`}
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                {careerMilestones[currentIndex].title}
              </h3>
              <p className="text-gray-600 ">
                {careerMilestones[currentIndex].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="hidden sm:flex justify-between -mt-[6.5rem]">
          <button
            className="p-2 px-[8px] rounded-full bg-zinc-800  text-gray-200 hover:bg-zinc-700 focus:outline-none focus:ring-0 focus:ring-gray-400"
            onClick={prevMilestone}
            aria-label="Previous milestone"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            className="p-2 px-[8px] rounded-full bg-zinc-800  text-gray-200 hover:bg-zinc-700 focus:outline-none focus:ring-0 focus:ring-gray-400"
            onClick={nextMilestone}
            aria-label="Next milestone"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCareerSoFar;
