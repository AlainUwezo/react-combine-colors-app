import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default App;
