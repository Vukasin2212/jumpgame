import React from "react";

import { FcCheckmark, FcCancel } from "react-icons/fc";
export const SuccessfullyGuess = ({ guessComputer }) => {
  return (
    <div className="col">
      <FcCheckmark
        style={{ color: "white", width: "100px", height: "100px" }}
      />
      <h1 style={{ color: "#32CD32" }}>Well Done!</h1>
      <div className=" d-inline-flex p-2" style={{ marginBottom: "15px" }}>
        {guessComputer.map((df, i) => {
          return (
            <div
              key={i}
              className="color-divs-row"
              style={{ backgroundColor: `${df}`, margin: "10px" }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
export const UnsuccessfulGuess = ({ guessComputer }) => {
  console.log("adsdasd", guessComputer);
  return (
    <div className="col">
      <FcCancel style={{ color: "white", width: "100px", height: "100px" }} />
      <h1 style={{ color: "red" }}>Failed!</h1>{" "}
      <div className=" d-inline-flex p-2" style={{ marginBottom: "15px" }}>
        {guessComputer.map((df, i) => {
          return (
            <div
              key={i}
              className="color-divs-row"
              style={{ backgroundColor: `${df}`, margin: "10px" }}
            ></div>
          );
        })}
      </div>{" "}
    </div>
  );
};
