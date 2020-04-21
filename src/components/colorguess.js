import React from "react";
import { Colors } from "./colorsguess/colors";
import "../css/main.css";
const ColorsGuess = ({ setColorArr }) => {
  const setColors = boja => {
    setColorArr(boja);
  };
  return (
    <div className="col-dir d-inline-flex p-2">
      {Colors.map((sr, i) => (
        <div
          key={i}
          className="color-divs"
          onClick={() => setColors(sr)}
          style={{ backgroundColor: `${sr}` }}
        ></div>
      ))}
    </div>
  );
};
export default ColorsGuess;
