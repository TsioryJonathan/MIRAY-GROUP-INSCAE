import React from "react";
import assets from "../assets/images/assets";

export default function CandidateSection() {
  const keyPoints = [
    {
      icon: <i class="bx bxs-party text-2xl"></i>,
      title: "Proche des étudiants",
      description: "À l'écoute de vos besoins et toujours disponible",
    },
    {
      icon: <i class="bx bxs-party text-2xl"></i>,
      title: "Vision ambitieuse",
      description: "Des projets concrets pour améliorer la vie étudiante",
    },
    {
      icon: <i class="bx bxs-party text-2xl"></i>,
      title: "Expérience",
      description: "Membres des anciens bureaux",
    },
    {
      icon: <i class="bx bxs-party text-2xl"></i>,
      title: "Engagement",
      description: "100% investi pour défendre vos intérêts",
    },
  ];
  return (
    <section
      id="candidate"
      className="py-16 px-4 bg-gradient-to-r from-[#d6aa74] via-[#204F5B]  to-[#242318] text-white"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            VOTEZ Marc Harioela
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-blue-200">
            Votre candidat à la présidence de l'association
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0rounded-lg transform translate-x-2 translate-y-2"></div>
              <img
                src={assets.president}
                alt="Thomas Martin - Candidat à la présidence"
                className="relative rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Sa vision pour vous</h3>
              <blockquote className="text-xl italic text-blue-200 mb-4">
                "Je m'engage à faire de notre organisation un véritable moteur
                de la vie étudiante. Ensemble, créons une communauté plus forte,
                plus inclusive et plus dynamique !"
              </blockquote>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {keyPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-blue-800/50 p-4 rounded-lg backdrop-blur-sm"
                >
                  <div className="flex items-center mb-2 text-blue-300">
                    {point.icon}
                    <h4 className="ml-2 font-bold">{point.title}</h4>
                  </div>
                  <p className="text-blue-100">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center space-y-6">
          <p className="text-blue-200 max-w-2xl mx-auto">
            Chaque vote compte ! Ensemble, construisons l'organisation étudiante
            que nous méritons. Votez Marc Harioela pour une représentation forte
            et engagée.
          </p>
        </div>
      </div>
    </section>
  );
}
