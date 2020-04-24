import React from "react";
import "../css/main.css";
const GuessAll = ({ guessall, countGues }) => {
  return (
    <div className="col-md-12" style={{ marginTop: "40px" }}>
      <div className="col">
        {guessall.map((dw, d) => {
          return (
            <div className="row" key={d}>
              {dw.guess
                ? dw.guess.map((dd, i) => {
                    return (
                      <div
                        key={i}
                        className="color-all-divs"
                        style={{ backgroundColor: `${dd}` }}
                      ></div>
                    );
                  })
                : null}
              <h2
                style={{ padding: "8px", marginLeft: "20px", color: "green" }}
              >
                {dw.sumYes}
              </h2>{" "}
              <h2 style={{ padding: "8px", marginLeft: "20px", color: "red" }}>
                {dw.sumNo}
              </h2>
            </div>
          );
        })}
      </div>
      <h2 style={{ color: "white", textAlign: "right" }}>{countGues}/5</h2>
    </div>
  );
};
export default GuessAll;
