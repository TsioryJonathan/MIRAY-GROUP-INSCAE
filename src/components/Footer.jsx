import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { ContactForm } from "./ContactForm";
import navigationLink from "../data/navLinks";

export default function Footer() {
  const socialLink = [
    {
      icon: (
        <i class="bx bxl-facebook-square text-3xl hover:scale-120 transition-all duration-300 hover:text-blue-500"></i>
      ),
      link: "https://www.facebook.com",
    },
    {
      icon: (
        <i class="bx bxl-instagram-alt text-3xl hover:scale-120 transition-all duration-300 hover:text-blue-500"></i>
      ),
      link: "https://www.instagram.com",
    },
  ];

  let year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-4">EQUIPE M'IRAY</h3>
            <p className="mb-4">
              NOUS ALLONS TRAVAILLER MAIN DANS LA MAIN POUR RENDRE LA VIE
              INSCAENNE PLUS ENRICHIS DE SANTE QUE JAMAIS !
            </p>
            <div className="flex space-x-4">
              {socialLink.map((l, i) => {
                return (
                  <a href={l.link} key={i} target="_blank">
                    {l.icon}
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-3">Navigation</h4>
            <ul className="space-y-2">
              {navigationLink.map((e, i) => {
                return (
                  <li key={i}>
                    <ScrollLink
                      to={e.section}
                      smooth
                      duration={300}
                      className="cursor-pointer hover:text-blue-400 duration-300 transition-all"
                    >
                      {e.text}
                    </ScrollLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-3">Contact</h4>
            <ul className="space-y-2">
              <li>INSCAE</li>
              <li>mirayinscae@gmail.com</li>
              <li>+261 38 18 911 68</li>
            </ul>
          </div>
          <ContactForm />
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>©{year} Groupe M'IRAY. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
