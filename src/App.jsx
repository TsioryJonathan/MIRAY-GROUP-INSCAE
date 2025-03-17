import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProgramsSection from "./components/ProgramsSection";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col ">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <Footer />
    </div>
  );
}

export default App;
