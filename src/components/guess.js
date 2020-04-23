import React, { useState, useEffect, useCallback } from "react";
import ColorOne from "./colorsguess/colorone";
import ColorTwo from "./colorsguess/colortwo";
import ColorThree from "./colorsguess/colorthree";
import ColorFour from "./colorsguess/colorfour";
import ColorsGuessRow from "./colorguessrow";
import GuessAll from "./guessall";
import "../css/main.css";
const Guess = () => {
  const [colorOne, setColorOne] = useState("");
  const [colorTwo, setColorTwo] = useState("");
  const [colorThree, setColorThree] = useState("");
  const [colorFour, setColorFour] = useState("");
  const [guessComputer, setGuess] = useState([]);
  const [haveColor, setHaveColor] = useState(0);
  const [notHaveColor, setNotHaveColor] = useState(0);
  const [guessUser, setGuessUser] = useState([]);
  const [countGues, setCountG] = useState(0);
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
    var arrUserG = [];
    var guessuser = [colorOne, colorTwo, colorThree, colorFour];

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
    /*var uniqueArray2 = arrws.filter(function(item, pos) {
      return arrws.indexOf(item) === pos;
    });
    arrws = [];
    arrws = uniqueArray2;*/
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

    var nw = { guess: guessuser, sumYes: sumYes, sumNo: sumNo.length };
    arrUserG.push(...guessUser, nw);
    console.log("pokusajiiiii:  ", arrUserG);
    setGuessUser(arrUserG);
    setNotHaveColor(sumNo.length);
    setHaveColor(sumYes);
    arr = [];
    uniqueArray = [];
    //uniqueArray2 = [];
    arrws = [];
    sumYes = 0;
    sumNo = 0;
    setCountG(countGues + 1);
  };

  return (
    <div className="row">
      {" "}
      <div className="col px-md-5">
        <div
          className="col-md-12"
          style={{
            backgroundColor: "rgb(0,0,0,0.9)",
            borderRadius: "10px",
            padding: "50px",
            width: "100%",
            textAlign: "center",
            marginTop: "50px",
            minWidth: "510px"
          }}
        >
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
      <div className="col px-md-5">
        <div
          className="col-md-8"
          style={{
            backgroundColor: "rgb(0,0,0,0.9)",
            borderRadius: "10px",
            padding: "50px",
            marginTop: "50px",
            minWidth: "480px"
          }}
        >
          <h1
            style={{
              color: "rgb(192,192,192)",
              textAlign: "left",
              fontFamily: "Verdana",
              marginLeft: "15px"
            }}
          >
            Guesses
          </h1>
          <GuessAll guessall={guessUser} countGues={countGues} />
        </div>
      </div>{" "}
    </div>
  );
};
export default Guess;
