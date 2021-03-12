import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export function AppWrapper({ children }) {
  const [wave, setWave] = useState({
    color: null,
    fill: false,
  });

  return (
    <AppContext.Provider value={{ wave, setWave }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

const colors = [
  "BurlyWood",
  "CadetBlue",
  "Brown",
  "Bisque",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "DarkGoldenRod",
  "DarkGray",
  "DarkKhaki",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkSlateBlue",
  "FireBrick",
  "DarkSeaGreen",
  "DarkSalmon",
  "DarkMagenta",
  "DeepPink",
  "DodgerBlue",
  "Fuchsia",
  "HotPink",
  "Green",
  "IndianRed",
  "Indigo",
  "LimeGreen",
  "OliveDrab",
  "PaleVioletRed",
  "Peru",
  "Plum",
  "PeachPuff",
  "RosyBrown",
  "RebeccaPurple",
  "SandyBrown",
  "Sienna",
  "Teal",
  "Tan",
  "Tomato",
  "YellowGreen",
  "Thistle",
];

export function randomColor() {
  const random = colors[Math.floor(Math.random() * colors.length)];

  return random;
}
