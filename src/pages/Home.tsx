import React from "react";
import { useTheme } from "../context/ThemeContext";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import ColorBlocks from "../components/ColorBlock";
import DomainList from "../components/DomainList";
import TagComponent from "../components/TagComponent";
import ColorsList from "../components/ColorList";
import SwitchColorBar from "../components/SwitchColorBar";

const Home: React.FC = () => {
  const { currentPalette } = useTheme();

  return (
    <div
      style={{
        backgroundColor: currentPalette.background,
        color: currentPalette.text,
      }}
    >
      <Header />
      <div className="grid grid-cols-2">
        <Presentation />
        <ColorBlocks />
      </div>
      <div className="my-3">
        <DomainList />
      </div>
      <div className="my-3">
        <TagComponent />
      </div>
      <div className="my-3">
        <ColorsList />
      </div>

      {/* Ajout de styles pour fixer le SwitchColorBar en bas de la page */}
      <div className="fixed bottom-[50px] left-0 w-full mx-auto z-50">
        <div className="w-[80%] mx-auto">
          <SwitchColorBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
