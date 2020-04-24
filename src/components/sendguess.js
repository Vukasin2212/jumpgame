import React, { Fragment } from "react";
import ColorOne from "./colorsguess/colorone";
import ColorTwo from "./colorsguess/colortwo";
import ColorThree from "./colorsguess/colorthree";
import ColorFour from "./colorsguess/colorfour";
import ColorsGuessRow from "./colorguessrow";
const SendGuess = ({
  setColorOne,
  setColorTwo,
  setColorThree,
  setColorFour,
  colorOne,
  colorTwo,
  colorThree,
  colorFour,
  countGues,
  haveColor,
  functGuess
}) => {
  return (
    <Fragment>
      <ColorsGuessRow
        colorOne={colorOne}
        colorTwo={colorTwo}
        colorThree={colorThree}
        colorFour={colorFour}
      />
      <div>
        <ColorOne setColorOne={setColorOne} />
        <ColorTwo setColorTwo={setColorTwo} />
        <ColorThree setColorThree={setColorThree} />
        <ColorFour setColorFour={setColorFour} />
      </div>
      <button
        className="btn btn-primary"
        style={{
          marginTop: "30px",
          width: "400px",
          height: "70px"
        }}
        onClick={functGuess}
        disabled={countGues === 5 || haveColor === 4}
      >
        Guess
      </button>
    </Fragment>
  );
};
export default SendGuess;
