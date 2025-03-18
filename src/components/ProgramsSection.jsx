import React, { useState } from "react";
import assets from "../assets/images/assets";
export default function ProgramsSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  function handleNextandPrev(e) {
    if (selectedImage !== assets.pg7) {
      setSelectedImage(e.target.src);
      console.log(e.target.src);
    } else {
      setSelectedImage(assets.pg1);
    }
  }

  const images = [
    assets.pg1,
    assets.pg2,
    assets.pg3,
    assets.pg4,
    assets.pg5,
    assets.pg6,
  ];

  return (
    <div className="flex flex-col items-center justify-center" id="programs">
      <h2 className="text-3xl font-bold text-center text-[#204F5B] mb-12">
        NOS PROGRAMME
      </h2>
      <div className="flex flex-col lg:flex-row md:flex-row flex-wrap justify-center items-center gap-6 p-4">
        {images.map((img, i) => {
          return (
            <img
              src={img}
              alt={`Image ${i}`}
              key={i}
              className="w-[80%] h-full lg:h-60 lg:w-40 md:w-40 cursor-pointer rounded-lg shadow-lg"
              onClick={handleNextandPrev}
            />
          );
        })}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex z-999 justify-center items-center"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Agrandie"
              className="max-w-full max-h-full z-999 object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
