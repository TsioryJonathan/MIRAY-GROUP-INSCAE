import React from "react";
import assets from "../assets/images/assets";
import video from "../assets/video/video.mp4";

export default function TeamSection() {
  const teamPhotos = [
    assets.eq1,
    assets.eq2,
    assets.eq3,
    assets.eq5,
    assets.eq6,
    assets.eq7,
  ];
  return (
    <section id="team" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          L'ÉQUIPE
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full lg:w-[55%] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6">
            {teamPhotos.map((photo, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={photo}
                  alt={`Membre de l'équipe ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-2">Une équipe motivée</h3>
            <p className="text-blue-700 font-bold mb-4">À ton service 7j/7</p>
            <div className="space-y-4 text-gray-700">
              <p>
                Notre équipe est composée d'étudiants passionnés qui donnent de
                leur temps pour faire vivre le campus. Chacun apporte ses
                compétences et son énergie pour créer des événements incroyables
                !
              </p>
              <p>
                Tu as envie de nous rejoindre ? On recrute toujours des
                personnes motivées pour nous aider à organiser encore plus
                d'activités cool !
              </p>
              <blockquote className="border-l-4 border-blue-700 pl-4 italic">
                "L'asso, c'est avant tout une bande de potes qui veulent que
                chaque étudiant se sente bien sur le campus et garde des
                souvenirs de ouf de ses années d'études !"
              </blockquote>
            </div>
            <div className="mt-6">
              <h4 className="font-bold mb-2">Notre équipe en action</h4>
              <div className="flex items-center justify-center">
                <video
                  controls
                  className="w-[70%] h-[50%] rounded-xl"
                  src={video}
                >
                  Votre navigateur ne prend pas en charge la lecture de vidéos.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
