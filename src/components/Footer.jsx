import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
  const socialLink = [
    { icon: <i class="bx bxl-facebook-circle"></i>, link: "www.facebook.com" },
    { icon: <i class="bx bxl-instagram-alt"></i>, link: "www.instagram.com" },
  ];

  const navigationLink = [
    { text: "Accueil", link: "hero" },
    { text: "Qui sommes nous ?", link: "about" },
    { text: "Activités", link: "programs" },
  ];

  let year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-4">GROUPE M'IRAY</h3>
            <p className="mb-4">
              Rendre ta vie étudiante plus fun et plus enrichissante !
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
                    <ScrollLink to={e.link} smooth duration={300} className="cursor-pointer">{e.text}</ScrollLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-3">Contact</h4>
            <ul className="space-y-2">
              <li>INSCAE</li>
              <li>groupemiray@gmail.com</li>
              <li>06 12 34 56 78</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-3">Rejoins-nous</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Devenir membre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Nous contacter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>©{year} Groupe M'IRAY. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
