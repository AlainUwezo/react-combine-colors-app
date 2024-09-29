import React, { useState } from "react";
import { domains } from "../types/ColorTypes"; // Assurez-vous que le chemin est correct
import ColorSwitchButton from "./ColorSwitchButton";
import ColorPalette from "./ColorPalette";

const SwitchColorBar: React.FC = () => {
  const [selectedDomainIndex, setSelectedDomainIndex] = useState<number>(0);
  const [selectedPaletteIndex, setSelectedPaletteIndex] = useState<number>(0);

  const handleDomainChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDomainIndex(Number(event.target.value));
    setSelectedPaletteIndex(0); // Réinitialiser à la première palette
  };

  const handlePaletteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPaletteIndex(Number(event.target.value));
  };

  const selectedDomain = domains[selectedDomainIndex];
  const selectedPalette = selectedDomain.palettes[1];

  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-lg">
      <select
        onChange={handleDomainChange}
        className="border rounded-lg p-2 bg-white"
      >
        {domains.map((domain, index) => (
          <option key={index} value={index}>
            {domain.name}
          </option>
        ))}
      </select>
      <select
        onChange={handlePaletteChange}
        className="border rounded-lg p-2 bg-white"
        disabled={selectedDomain.palettes.length <= 1} // Désactiver si une seule palette
      >
        {selectedDomain.palettes.map((_, index) => (
          <option key={index} value={index}>
            Palette {index + 1}
          </option>
        ))}
      </select>
      <ColorSwitchButton />
      <ColorPalette palette={selectedPalette} />
    </div>
  );
};

export default SwitchColorBar;
