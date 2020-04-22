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
  const [haveColor, setHaveColor] = useState(0);
  const [notHaveColor, setNotHaveColor] = useState(0);
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
  const functGuess = async e => {
    console.log(guessComputer);
    var arr = [];
    var arrws = [];
    guessComputer.map(sd => arrws.push(sd));
    arr.push(colorOne, colorTwo, colorThree, colorFour);
    var sumYes = 0;
    var sumNo = 0;

    for (var i = 0; i < arrws.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        if (arrws[i] === arr[j] && i === j) {
          sumYes += 1;
          delete arr[j];
          delete arrws[i];
          break;
        }
      }
    }
    var uniqueArray = arr.filter(function(item, pos) {
      return arr.indexOf(item) === pos;
    });
    arr = [];
    arr = uniqueArray;
    var uniqueArray2 = arrws.filter(function(item, pos) {
      return arrws.indexOf(item) === pos;
    });
    arrws = [];
    arrws = uniqueArray2;
    var intersection = arrws.filter(element => arr.includes(element));
    sumNo = intersection;
    console.log(arr);
    console.log(arrws);
    console.log(
      "Imate" +
        sumYes +
        " na pravom mestu" +
        " i " +
        sumNo.length +
        " koji nisu na pravom mestu"
    );
    setNotHaveColor(sumNo.length);
    setHaveColor(sumYes);
    arr = [];
    uniqueArray = [];
    uniqueArray2 = [];
    arrws = [];
    sumYes = 0;
    sumNo = 0;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col align-self-center">
          {" "}
          <div
            style={{
              backgroundColor: "rgb(0,0,0,0.8)",
              borderRadius: "10px",
              padding: "50px",
              width: "510px",
              marginTop: "50px"
            }}
          >
            {" "}
            <h3
              style={{
                color: "white",
                textAlign: "left",
                fontFamily: "Verdana"
              }}
            >
              Right place:{haveColor}
            </h3>
            <h3
              style={{
                color: "white",
                textAlign: "left",
                fontFamily: "Verdana"
              }}
            >
              Wrong place:{notHaveColor}
            </h3>
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
