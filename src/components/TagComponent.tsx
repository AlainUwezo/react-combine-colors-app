import React from "react";
import { useTheme } from "../context/ThemeContext";

const TagComponent: React.FC = () => {
  const { currentPalette } = useTheme();

  return (
    <div className="flex justify-between mt-8">
      {/* Colonne de gauche */}
      <div
        className="flex flex-col flex-grow justify-center items-center p-6"
        style={{
          backgroundColor: currentPalette.primary,
          color: currentPalette.text,
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2 className="text-4xl font-bold text-center">10 Combinaisons</h2>
        <p className="mt-2 text-lg text-center">A votre service...</p>
        <p className="mt-4 text-sm text-center">100% Gratuit</p>
        <p className="mt-4 text-sm text-center">Toujours !</p>
      </div>

      {/* Colonne de droite */}
      <div
        className="flex flex-col justify-center items-center p-4"
        style={{
          backgroundColor: currentPalette.background,
          color: currentPalette.text,
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          marginLeft: "16px", // Espacement entre les colonnes
          minWidth: "200px", // Largeur minimum
        }}
      >
        {/* Vous pouvez ajouter du contenu ici */}
        <h3 className="text-lg font-semibold">Domaine d'application</h3>
        <p className="mt-2 text-sm">
          Explorez nos services et combinaisons de couleurs adaptées à vos
          projets.
        </p>
      </div>
    </div>
  );
};

export default TagComponent;
