import React from "react";
import { useTheme } from "../context/ThemeContext";

const ColorBlock: React.FC<{ color: string; shape: string }> = ({
  color,
  shape,
}) => {
  // Styles conditionnels pour la forme
  const blockStyles = {
    backgroundColor: color,
    transition: "background-color 0.3s",
    ...(shape === "square" ? { width: "100%", height: "100px" } : {}),
    ...(shape === "rectangle" ? { width: "100%", height: "50px" } : {}),
    ...(shape === "circle"
      ? { width: "80px", height: "80px", borderRadius: "50%" }
      : {}),
    ...(shape === "ellipse"
      ? { width: "120px", height: "80px", borderRadius: "50%" }
      : {}),
  };

  return (
    <div
      className={`rounded-lg shadow-lg transition duration-300 transform hover:scale-105`}
      style={blockStyles}
    >
      {/* Optionnel : ajoutez plus de contenu ici */}
    </div>
  );
};

const ColorBlocks: React.FC = () => {
  const { currentPalette } = useTheme();

  // Créez un tableau de couleurs et de formes
  const colorsWithShapes = [
    { color: currentPalette.primary, shape: "rectangle" },
    { color: currentPalette.secondary, shape: "square" },
    { color: currentPalette.accent, shape: "circle" },
    { color: currentPalette.background, shape: "ellipse" },
    { color: currentPalette.text, shape: "rectangle" }, // Ajoutez d'autres formes selon vos besoins
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {colorsWithShapes.map((item, index) => (
        <ColorBlock key={index} color={item.color} shape={item.shape} />
      ))}
    </div>
  );
};

export default ColorBlocks;
