import React from "react";
import assets from "../assets/images/assets";
import { Link as ScrollLink } from "react-scroll";
import navigationLink from "../data/navLinks";
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 text-white z-50 shadow-md backdrop-blur-2xl bg-gradient-to-l from-[#ccb4979d] via-[#204f5ba6] to-[#2c2b1fa8]">
      <div className="container mx-auto px-4 py-3 flex justify-center md:justify-between lg:justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">
            <img
              src={assets.logo}
              alt="Logo"
              className="w-20 h-5 object-cover"
            />
          </h1>
        </div>
        <nav className="justify-between gap-6 hidden lg:flex md:flex sm:hidden">
          {navigationLink.map((l, i) => {
            return (
              <ScrollLink
                className="cursor-pointer"
                to={l.section}
                smooth
                duration={300}
                key={i}
              >
                {l.text}
              </ScrollLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
