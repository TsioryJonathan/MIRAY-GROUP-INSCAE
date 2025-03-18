import React from "react";

export default function AboutSection() {
  const cardContents = [
    {
      icons: <i class="bx bxs-group text-2xl"></i>,
      title: "Notre Mission",
      content:
        "Créer des liens entre tous les étudiants, favoriser les échanges et rendre la vie étudiante plus enrichissante. Nous sommes là pour faire de tes années d'études une expérience inoubliable !",
    },
    {
      icons: <i class="bx bxs-party text-2xl"></i>,
      title: "Nos projets",
      content:
        "Projet de leadership, activités sportives et intellectuelles, évènement culturel, voyage, et bien d'autres encore. Nous organisons de nombreux évènements pour que chacun profite pleinement d'une vie étudiante inoubliable",
    },
    {
      icons: <i class="bx bxs-graduation text-2xl"></i>,
      title: "Notre Impact",
      content:
        "Nous nous engageons à satisfaire les attentes des élèves. Nous travaillons avec l'administration pour améliorer la vie estudiantine et créer un environnement étudiant dynamique.",
    },
  ];
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#204F5B] mb-12">
          QUI SOMMES-NOUS ?
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {cardContents.map((c, i) => {
            return (
              <div
                className="p-6 bg-gray-50 rounded-lg lg:w-[33.33%] md:w-[33.33%] sm:w-full shadow-md h-2xs"
                key={i}
              >
                <div className="mb-4 flex justify-center">
                  <div className="bg-blue-700 p-3 rounded-full text-white flex items-center justify-center">
                    {c.icons}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">
                  {c.title}
                </h3>
                <p className="text-gray-700">{c.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
