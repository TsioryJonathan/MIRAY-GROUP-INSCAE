import React from "react";
import { Link as ScrollLink } from "react-scroll";

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
      className="w-full min-h-screen text-white flex flex-col justify-center items-center pt-8 pb-8 px-4 relative"
    >
      <div className="container mx-auto flex flex-col items-center text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          " INSCAE M’IRAY,
          <span className="block">INSCAE MILAY "</span>
        </h1>
        <div className="w-20 h-1 bg-white"></div>
        <p className="text-xl md:text-2xl max-w-2xl font-medium">
          Ta communauté étudiante pour une vie de campus plus riche et plus fun
          !
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
        <div className="absolute bottom-8 animate-bounce ">
          <button onClick={() => scrollToSection("about")}>
            <i className="bx bx-chevron-down text-4xl cursor-pointer"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
