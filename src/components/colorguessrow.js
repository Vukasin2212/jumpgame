import React from "react";
import "../css/main.css";
const ColorsGuessRow = ({ colorOne, colorTwo, colorThree, colorFour }) => {
  const clrOne = colorOne !== "" ? colorOne : "gray";
  const clrTwo = colorTwo !== "" ? colorTwo : "gray";
  const clrThree = colorThree !== "" ? colorThree : "gray";
  const clrFour = colorFour !== "" ? colorFour : "gray";

  return (
    <div className=" d-inline-flex p-2" style={{ marginBottom: "15px" }}>
      <div
        className="color-divs-row"
        style={{ backgroundColor: `${clrOne}` }}
      ></div>
      <div
        className="color-divs-row color-two"
        style={{ backgroundColor: `${clrTwo}` }}
      ></div>
      <div
        className="color-divs-row color-three"
        style={{ backgroundColor: `${clrThree}` }}
      ></div>
      <div
        className="color-divs-row color-four"
        style={{ backgroundColor: `${clrFour}` }}
      ></div>
    </div>
  );
};
export default ColorsGuessRow;
