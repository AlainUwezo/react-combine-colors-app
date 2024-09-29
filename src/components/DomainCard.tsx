import React from "react";
import { useTheme } from "../context/ThemeContext";

type DomainCardProps = {
  domain: {
    name: string;
    description: string;
    icon: string; // chemin vers l'icône
  };
};

const DomainCard: React.FC<DomainCardProps> = ({ domain }) => {
  const { currentPalette } = useTheme();

  return (
    <div
      className="flex flex-col items-center p-4 rounded-lg shadow-lg transition duration-300 border border-gray-300" // Ajout de la bordure
      style={{
        backgroundColor: currentPalette.background,
        color: currentPalette.text,
        maxWidth: "300px",
      }}
    >
      <div
        className="flex items-center justify-center w-16 h-16 mb-4 rounded-full"
        style={{
          backgroundColor: currentPalette.primary,
        }}
      >
        <img
          src={domain.icon} // Assurez-vous que l'icône est au bon chemin
          alt={domain.name}
          className="w-10 h-10"
        />
      </div>
      <h3 className="text-xl font-bold text-center">{domain.name}</h3>
      <p className="mt-2 text-center text-sm">{domain.description}</p>
    </div>
  );
};

export default DomainCard;
