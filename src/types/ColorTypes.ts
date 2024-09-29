export type Palette = {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  background: string;
};

export type Domain = {
  name: string;
  palettes: Palette[];
};

export const domains: Domain[] = [
  {
    name: "Domaine 1",
    palettes: [
      {
        primary: "#FF5733",
        secondary: "#C70039",
        accent: "#900C3F",
        text: "#FFFFFF",
        background: "#581845",
      },
      {
        primary: "#33FF57",
        secondary: "#39C700",
        accent: "#3F900C",
        text: "#000000",
        background: "#845581",
      },
    ],
  },
  {
    name: "Domaine 2",
    palettes: [
      {
        primary: "#3357FF",
        secondary: "#39C7FF",
        accent: "#3F90C3",
        text: "#FFFFFF",
        background: "white",
      },
      {
        primary: "#FF33A8",
        secondary: "#C7007A",
        accent: "#900C3F",
        text: "#000000",
        background: "#581845",
      },
      {
        primary: "#FF33A8",
        secondary: "#C7007A",
        accent: "#900C3F",
        text: "#000000",
        background: "white",
      },
    ],
  },
];
