import React, { createContext, useContext, useState, ReactNode } from "react";
import { Palette, Domain, domains } from "../types/ColorTypes";

type ThemeContextType = {
  currentPalette: Palette; // currentPalette est du type Palette
  toggleTheme: () => void; // Ajoutez cette ligne
  switchPalette: (paletteIndex: number) => void;
  switchDomain: (domain: Domain) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentDomain, setCurrentDomain] = useState(domains[0]);
  const [currentPaletteIndex, setCurrentPaletteIndex] = useState(0);

  const switchDomain = (domain: Domain) => {
    setCurrentDomain(domain);
    setCurrentPaletteIndex(0); // Réinitialiser à la première palette
  };

  const switchPalette = (paletteIndex: number) => {
    setCurrentPaletteIndex(paletteIndex);
  };

  const toggleTheme = () => {
    // Ajoutez ici votre logique pour changer de thème
    const newIndex =
      currentPaletteIndex === currentDomain.palettes.length - 1
        ? 0
        : currentPaletteIndex + 1; // Alternez entre les palettes
    setCurrentPaletteIndex(newIndex);
  };

  const currentPalette = currentDomain.palettes[currentPaletteIndex];

  return (
    <ThemeContext.Provider
      value={{ currentPalette, toggleTheme, switchPalette, switchDomain }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
