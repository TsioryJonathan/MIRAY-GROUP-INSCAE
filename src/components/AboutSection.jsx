import React from "react";

export default function AboutSection() {
  const cardContents = [
    {
      icons: <i class="bx bxs-group"></i>,
      title: "Notre Mission",
      content:
        "Créer des liens entre tous les étudiants du campus, favoriser les échanges et rendre la vie étudiante plus enrichissante. Nous sommes là pour faire de tes années d'études une expérience inoubliable !",
    },
    {
      icons: <i class="bx bxs-party"></i>,
      title: "Nos Événements",
      content:
        "Soirées d'intégration, événements culturels, activités sportives, sorties... On organise plus de 50 événements par an pour que tu puisses profiter à fond de ta vie étudiante !",
    },
    {
      icons: <i class="bx bxs-graduation"></i>,
      title: "Notre Impact",
      content:
        "Plus de 2000 étudiants nous font confiance chaque année. Nous travaillons avec l'administration pour améliorer la vie sur le campus et créer un environnement étudiant dynamique.",
    },
  ];
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          QUI SOMMES-NOUS ?
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {cardContents.map((c, i) => {
            return (
              <div
                className="p-6 bg-gray-50 rounded-lg shadow-md h-full"
                key={i}
              >
                <div className="mb-4 flex justify-center">
                  <div className="bg-blue-700 p-3 rounded-full text-white">
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
        <div className="mt-12 text-center">
          <p className="text-lg font-bold text-blue-700 mb-4">
            DEVIENS MEMBRE DE L\'ASSO
          </p>
          <button className="bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-800 transition duration-300">
            ADHÉRER
          </button>
        </div>
      </div>
    </section>
  );
}
