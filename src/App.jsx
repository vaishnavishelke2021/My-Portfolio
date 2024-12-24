// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Resume from "./pages/Resume";
// import Home from "./pages/Home";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <Router>
//       <div className="bg-black text-primary p-2">
//         {/* wrapper  */}
//         <div className="bg-secondary rounded-[1.5rem] min-h-screen">
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/resume" element={<Resume />} />
//           </Routes>
//         </div>
//       </div>
//       <div className="py-20 bg-primary text-secondary">
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;

// loading sceen ==========================================================================

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import LoadingScreen from "./pages/LoadingScreen"; // Import loading screen
import ProjectDetails from "./pages/ProjectDetails";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show the loading screen for 2 seconds on initial load
    const timer = setTimeout(() => {
      setLoading(false); // After 2 seconds, hide the loading screen
    }, 2000); // 2 seconds for the loading screen

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Show loading screen only during the initial page load */}
      {loading ? (
        <LoadingScreen />
      ) : (
        // Page content with smoother animation (motion)
        <motion.div
          className="bg-black text-primary p-2"
          initial={{ opacity: 0, y: 150 }} // Start from the bottom
          animate={{ opacity: 1, y: 0 }} // Animate to original position
          transition={{
            duration: 1.5, // Increase duration for smoother effect
            ease: "easeOut", // Use a smooth easing function
          }}
        >
          <div className="bg-secondary rounded-[1.8rem] min-h-screen">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:projectId" element={<ProjectDetails />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
        </motion.div>
      )}
      <div className="py-20 bg-primary text-secondary">
        <Footer />
      </div>
    </Router>
  );
};

export default App;
