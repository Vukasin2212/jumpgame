import React, { useState, useEffect, useCallback } from "react";
import ColorOne from "./colorsguess/colorone";
import ColorTwo from "./colorsguess/colortwo";
import ColorThree from "./colorsguess/colorthree";
import ColorFour from "./colorsguess/colorfour";
import ColorsGuessRow from "./colorguessrow";
import "../css/main.css";
const Guess = () => {
  const [colorOne, setColorOne] = useState("");
  const [colorTwo, setColorTwo] = useState("");
  const [colorThree, setColorThree] = useState("");
  const [colorFour, setColorFour] = useState("");
  const [guessComputer, setGuess] = useState([]);

  const GuessComputer = useCallback(() => {
    const computerArr = ["yellow", "green", "blue", "red"];
    const arrayComb = [];
    for (var i = 0; i < 4; i++) {
      const combination =
        computerArr[Math.floor(Math.random() * computerArr.length)];
      arrayComb.push(combination);
    }
    setGuess(arrayComb);
  }, [setGuess]);
  useEffect(() => {
    GuessComputer();
  }, [GuessComputer]);
  const functGuess = () => {
    console.log(guessComputer);
    var arr = [];
    var arrw = [];
    var arrws = [];
    guessComputer.map(sd => arrws.push(sd));
    // alert(arrws);
    arr.push(colorOne, colorTwo, colorThree, colorFour);
    arrw.push(colorOne, colorTwo, colorThree, colorFour);
    var sumYes = 0;
    var sumNo = 0;
    guessComputer.forEach((sd, i) => {
      arr.forEach((sw, s) => {
        if (sd === sw && s === i) {
          sumYes += 1;
          arrw = arrw.filter(item => item !== sw);
          arrws = arrws.filter(item => item !== sd);
          /* 
          arr.splice(i, 1);
          arrt.splice(i, 1);*/
        }
      });
    });
    console.log(arrw);
    console.log(arrws);
    /*var uniqueArray = arrw.filter(function(item, pos) {
      return arrw.indexOf(item) == pos;
    });
    arrw = [];
    arrw = uniqueArray;*/
    /* var uniqueArray2 = arrws.filter(function(item, pos) {
      return arrws.indexOf(item) == pos;
    });
    arrws = [];
    arrws = uniqueArray2;*/
    // console.log(arrw);
    // console.log(arrws);
    var intersection = arrws.filter(element => arrw.includes(element));
    sumNo = intersection;
    //alert(arAuth);
    //alert("Imate: " + sumYes + " koji su na pravom mestu");
    // alert(arrw + "dsdfsdgfgsdgf  " + arrws);
    console.log("ima" + sumYes + "        nisu" + sumNo.length);
    arr = [];
    // uniqueArray = [];
    arrw = [];
    arrws = [];
    sumYes = 0;
    sumNo = 0;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col align-self-center">
          <div
            style={{
              backgroundColor: "rgb(0,0,0,0.8)",
              borderRadius: "10px",
              padding: "50px",
              width: "510px",
              marginTop: "50px"
            }}
          >
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
            >
              Guess
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Guess;
