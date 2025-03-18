import React from "react";
import { Link as ScrollLink } from "react-scroll";
import assets from "../assets/images/assets";

export default function HeroSection() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const links = [
    { text: "Qui sommes-nous", section: "about" },
    { text: "Nos activités", section: "programs" },
    { text: "Notre équipe", section: "team" },
  ];
  return (
    <section
      id="hero"
      className="w-screen lg:h-screen md:h-screen sm:h-screen text-white flex flex-col lg:flex-row md:flex-row sm:flex-col items-center pt-8 overflow-x-hidden overflow-y-hidden bg-gradient-to-r from-[#d6aa74] via-[#204F5B]  to-[#242318]"
    >
      <div className="w-[50%] h-[100vh] sm:h-[93vh] flex flex-col justify-between items-center text-center py-10 relative">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          " INSCAE M’IRAY,
          <span className="block">INSCAE MILAY "</span>
        </h1>
        <div className="w-20 h-1 bg-white"></div>
        <p className="text-xl md:text-2xl max-w-2xl font-medium">
          M'IRAY : Unis pour avancer , ensemble pour réussir !
        </p>
        <div className="w-64 flex items-center justify-center">
          <ul className="flex flex-wrap flex-col gap-4 text-lg font-medium list-disc w-[80%]">
            {links.map((link, i) => {
              return (
                <li>
                  <ScrollLink
                    to={link.section}
                    smooth
                    duration={300}
                    key={i}
                    className="cursor-pointer flex justify-between items-center w-full hover:translate-y-[-5px] transition-all duration-300"
                  >
                    {link.text} <i class="bx bx-right-arrow-alt"></i>
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-0">
          <button
            className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-blue-300 transition duration-300 cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            REJOINS-NOUS
          </button>
        </div>
        <div className="absolute bottom-[-10px] animate-bounce ">
          <button onClick={() => scrollToSection("about")}>
            <i className="bx bx-chevron-down text-4xl cursor-pointer"></i>
          </button>
        </div>
      </div>
      <div className="lg:w-[50%] md:w-[50%] sm:w-full xs:hidden overflow-hidden">
        <img
          src={assets.banneer1}
          alt="groupe M'IRAY"
          className="lg:h-screen md:h-screen w-full object-cover"
        />
      </div>
    </section>
  );
}
