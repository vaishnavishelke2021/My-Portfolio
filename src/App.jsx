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

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="bg-black text-primary p-2">
        {/* Wrapper with smooth scrolling */}
        <div className="bg-secondary rounded-[1.5rem] min-h-screen overflow-hidden">
          <Navbar />
          {/* Smooth scrolling container with parallax */}
          <motion.div
            className="content-container"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              y: {
                yoyo: Infinity, // Repeat the parallax effect
                duration: 5,
                ease: "easeInOut",
              },
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </motion.div>
        </div>
      </div>
      <div className="py-20 bg-primary text-secondary">
        <Footer />
      </div>
    </Router>
  );
};

export default App;
