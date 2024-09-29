import React from "react";
import { useTheme } from "../context/ThemeContext";

const Presentation: React.FC = () => {
  const { currentPalette } = useTheme();

  return (
    <div
      className="flex flex-col items-end p-6 rounded-lg shadow-md transition duration-300"
      style={{
        backgroundColor: currentPalette.background, // Utilisation de background pour le fond
        color: currentPalette.text, // Utilisation de text pour la couleur du texte
      }}
    >
      <h2
        className="text-4xl font-bold text-right"
        style={{ color: currentPalette.text }} // Utilisation de text pour le titre
      >
        Couleurs Combinaisons
      </h2>
      <p className="mt-2 text-lg text-right">
        Découvrez des combinaisons de couleurs uniques pour vos projets.
      </p>
      <div className="flex items-center justify-end mt-4 space-x-4">
        {/* Remplacer par des couleurs prédéfinies si nécessaire */}
        {["#FF5733", "#33FF57", "#3357FF", "#FF33A8"].map((color, index) => (
          <div className="flex flex-col items-center" key={index}>
            <div
              className="w-8 h-8 rounded-full"
              style={{
                backgroundColor: color, // Utilisation de couleurs prédéfinies
                transition: "background-color 0.3s",
              }}
            />
            <span className="mt-1 text-sm">{["R", "G", "B", "A"][index]}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-around w-full mt-6">
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
          <span className="text-2xl font-bold">128</span>
          <span className="text-sm text-gray-500">
            Combinaisons disponibles
          </span>
        </div>
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
          <span className="text-2xl font-bold">5</span>
          <span className="text-sm text-gray-500">Domaines</span>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
