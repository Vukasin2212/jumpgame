import React from "react";
import Guess from "./guess";
import Slika from "../images/cv.jpg";
const sectionStyle = {
  height: "100%",
  minHeight: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${Slika})`,
  backgroundAttachment: "fixed",
  overflowX: "auto"
};
const Game = () => {
  return (
    <div className="p-div-100" style={sectionStyle}>
      <Guess />
    </div>
  );
};
export default Game;
