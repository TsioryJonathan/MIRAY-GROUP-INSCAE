import React from "react";
export default function ProgramsSection() {
  const activities = [
    {
      id: 1,
      title: "ÉVÉNEMENTS",
      icon: <i class="bx bxs-party"></i>,
      description:
        "Soirées à thème, week-ends d'intégration, festivals culturels... Des moments inoubliables à partager ensemble !",
      color: "bg-blue-700",
    },
    {
      id: 2,
      title: "ÉTUDES",
      icon: <i class="bx bxs-book-open"></i>,
      description:
        "Tutorat, groupes de révision, ressources partagées... On t'aide à réussir tes études !",
      color: "bg-blue-700",
    },
    {
      id: 3,
      title: "ENTRAIDE",
      icon: <i class="bx bxs-heart"></i>,
      description:
        "Échange de services, aide au logement, bons plans... La communauté est là pour toi !",
      color: "bg-blue-700",
    },
    {
      id: 4,
      title: "CARRIÈRE",
      icon: <i class="bx bxs-graduation"></i>,
      description:
        "Rencontres pros, ateliers CV, stages... On t'accompagne vers ton futur job !",
      color: "bg-blue-700",
    },
  ];
  return (
    <section id="programs" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
          NOS ACTIVITÉS
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Découvre tout ce que l'asso peut t\'apporter pendant tes études !
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-700"
            >
              <div className="flex items-start">
                <div
                  className={`${activity.color} p-2 rounded-full text-white mr-4 flex items-center justify-center`}
                >
                  {activity.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                  <p className="text-gray-700">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-blue-700 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">
            REJOINS L'AVENTURE !
          </h3>
          <p className="text-center text-lg">
            Plus qu'une association, c'est une vraie famille qui t'attend. Viens
            comme tu es, repars avec des souvenirs inoubliables !
          </p>
        </div>
      </div>
    </section>
  );
}
