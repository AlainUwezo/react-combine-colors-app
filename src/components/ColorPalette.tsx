import React from "react";
import { Palette } from "../types/ColorTypes";

type ColorPaletteProps = {
  palette: Palette;
};

const ColorPalette: React.FC<ColorPaletteProps> = ({ palette }) => {
  return (
    <div className="flex space-x-4">
      {Object.entries(palette).map(([key, color]) => (
        <div key={key} className="flex flex-col items-center">
          <div
            style={{ backgroundColor: color }}
            className="w-16 h-8 rounded-lg shadow-lg border border-gray-200"
          />
          <span
            className="mt-1 text-sm font-semibold"
            style={{ color: palette.text }}
          >
            {key}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
