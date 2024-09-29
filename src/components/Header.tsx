import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const { currentPalette, toggleTheme } = useTheme();

  return (
    <header
      className="flex justify-between items-center p-4 shadow-lg transition duration-300"
      style={{
        backgroundColor: currentPalette.primary, // Couleur primaire pour le fond du header
        color: currentPalette.text, // Couleur du texte pour tous les textes du header
      }}
    >
      <div className="flex items-center space-x-4">
        <img
          src="/path/to/logo.png"
          alt="Logo"
          className="w-10 h-10 rounded-lg shadow-md"
        />
        <h1
          className="text-3xl font-extrabold transition-all duration-300 ease-in-out hover:scale-105"
          style={{
            color: currentPalette.text, // Couleur du texte pour le titre
          }}
        >
          CombineColors
        </h1>
      </div>

      <nav className="hidden md:flex items-center space-x-6">
        <a
          href="/"
          className="text-lg transition duration-200"
          style={{
            color: currentPalette.text, // Utilisation de la couleur du texte
          }}
        >
          Accueil
        </a>

        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 ease-in-out"
          style={{
            backgroundColor: currentPalette.secondary, // Couleur secondaire pour le fond du bouton
            color: currentPalette.text, // Couleur du texte pour l'icône du bouton
          }}
          aria-label="Changer de thème"
        >
          <FontAwesomeIcon
            icon={currentPalette.text === "#000000" ? faMoon : faSun} // Icone en fonction du thème clair ou sombre
            className="w-6 h-6"
          />
        </button>
      </nav>

      <div className="md:hidden">
        <button
          className="p-2 rounded-lg focus:outline-none"
          style={{
            backgroundColor: currentPalette.background, // Couleur d'arrière-plan pour le bouton mobile
            color: currentPalette.text, // Couleur du texte pour l'icône mobile
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
