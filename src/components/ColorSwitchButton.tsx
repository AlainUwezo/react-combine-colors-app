import React from "react";
import { FaPalette } from "react-icons/fa"; // Importez l'icône que vous préférez
import { useTheme } from "../context/ThemeContext";

const ColorSwitchButton: React.FC = () => {
  const { switchPalette } = useTheme();

  return (
    <div
      onClick={() => switchPalette(Math.floor(Math.random() * 2))}
      className="cursor-pointer p-2 rounded hover:bg-gray-200 transition"
      title="Changer de Palette"
    >
      <FaPalette className="text-2xl" />
    </div>
  );
};

export default ColorSwitchButton;
