import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="bg-black text-primary p-2">
      {/* wrapper  */}
      <div className="bg-secondary rounded-[1.5rem] min-h-screen">
        <Navbar/>
        <Hero/>
      </div>
    </div>
  );
};

export default App;
