import React from "react";
import { useTheme } from "../context/ThemeContext";

type Color = {
  name: string;
  code: string;
  description: string;
};

const colors: Color[] = [
  { name: "Rouge", code: "#FF5733", description: "Un rouge vif et énergique." },
  { name: "Vert", code: "#33FF57", description: "Un vert frais et naturel." },
  {
    name: "Bleu",
    code: "#3357FF",
    description: "Un bleu profond et apaisant.",
  },
  {
    name: "Jaune",
    code: "#FFEA33",
    description: "Un jaune lumineux et joyeux.",
  },
  {
    name: "Orange",
    code: "#FF5733",
    description: "Un orange vibrant et chaleureux.",
  },
  { name: "Violet", code: "#AA33FF", description: "Un violet riche et royal." },
  { name: "Rose", code: "#FF33A8", description: "Un rose doux et romantique." },
  {
    name: "Cyan",
    code: "#33FFF2",
    description: "Un cyan frais et rafraîchissant.",
  },
  {
    name: "Marron",
    code: "#8B4513",
    description: "Un marron terreux et chaleureux.",
  },
  {
    name: "Gris",
    code: "#A9A9A9",
    description: "Un gris neutre et sophistiqué.",
  },
  { name: "Noir", code: "#000000", description: "Un noir profond et élégant." },
  { name: "Blanc", code: "#FFFFFF", description: "Un blanc pur et lumineux." },
];

const ColorsList: React.FC = () => {
  const { currentPalette } = useTheme();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      {colors.map((color, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 rounded-lg shadow-lg transition duration-300"
          style={{
            backgroundColor: currentPalette.background,
            border: `1px solid ${currentPalette.primary}`,
          }}
        >
          <div
            className="w-16 h-16 rounded-full"
            style={{ backgroundColor: color.code }}
          />
          <h3
            className="mt-2 text-lg font-bold"
            style={{ color: currentPalette.text }}
          >
            {color.name}
          </h3>
          <p className="text-sm" style={{ color: currentPalette.text }}>
            {color.code}
          </p>
          <p className="mt-1 text-xs text-gray-500 text-center">
            {color.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ColorsList;
