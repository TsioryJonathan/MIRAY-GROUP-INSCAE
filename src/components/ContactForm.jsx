import React from "react";

export const ContactForm = () => {
  return (
    <div className="flex flex-col">
      <h4 className="text-lg font-bold mb-3">
        Nous envoyer des suggestions :{" "}
      </h4>
      <form
        action="https://formspree.io/f/xqapanpr"
        method="POST"
        className="flex flex-col items-center"
      >
        <textarea
          name="message"
          placeholder="Votre message"
          required
          className="bg-gray-700 p-4 rounded-2xl outline-none border-none w-full min-h-30"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-400 p-2 rounded-2xl cursor-pointer w-30 mt-10"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};
