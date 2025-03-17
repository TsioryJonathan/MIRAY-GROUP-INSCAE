import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#CCB497] via-[#204F5B] via-[#204F5C] to-[#242318]">
      <HeroSection />
      <AboutSection />
    </div>
  );
}

export default App;
