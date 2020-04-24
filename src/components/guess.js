import React, { useState, useEffect, useCallback } from "react";
import GuessAll from "./guessall";
import SendGuess from "./sendguess";
import { SuccessfullyGuess, UnsuccessfulGuess } from "./successguess";
import { IoIosRefresh } from "react-icons/io";
import { Route, Switch, useHistory } from "react-router-dom";
import "../css/main.css";
const Guess = () => {
  const [colorOne, setColorOne] = useState("");
  const [colorTwo, setColorTwo] = useState("");
  const [colorThree, setColorThree] = useState("");
  const [colorFour, setColorFour] = useState("");
  const [guessComputer, setGuess] = useState([]);
  const [haveColor, setHaveColor] = useState(0);
  // const [notHaveColor, setNotHaveColor] = useState(0);
  const [guessUser, setGuessUser] = useState([]);
  const [countGues, setCountG] = useState(0);
  const history = useHistory();
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
    // console.log(guessComputer);
    var arr = [];
    var arrws = [];
    guessComputer.map(sd => arrws.push(sd));
    arr.push(colorOne, colorTwo, colorThree, colorFour);
    var arrUserG = [];
    var guessuser = [colorOne, colorTwo, colorThree, colorFour];

    var sumYes = 0;
    var sumNo = [];

    // console.log("authhhhh, " + authDup);
    // console.log(duplicateA + "  do  " + duplicateB);

    if (
      colorOne !== "" &&
      colorTwo !== "" &&
      colorThree !== "" &&
      colorFour !== ""
    ) {
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
      var authDup = [];
      var duplicateA = arr.filter((e, i, a) => a.indexOf(e) !== i);
      var duplicateB = arrws.filter((e, i, a) => a.indexOf(e) !== i);
      for (var q = 0; q < duplicateA.length; q++) {
        for (var t = 0; t < duplicateB.length; t++) {
          if (duplicateA[q] === duplicateB[t]) {
            authDup.push(duplicateB[t]);
          }
        }
      }
      // console.log("dddaaaaaa,   " + authDup);
      var uniqueArray = arr.filter(function(item, pos) {
        return arr.indexOf(item) === pos;
      });
      arr = [];
      arr = uniqueArray;

      if (authDup.length === 0) {
        var uniqueArray2 = arrws.filter(function(item, pos) {
          return arrws.indexOf(item) === pos;
        });
        arrws = [];
        arrws = uniqueArray2;
      }
      for (var d = 0; d < arrws.length; d++) {
        for (var f = 0; f < arr.length; f++) {
          if (arrws[d] === arr[f]) sumNo.push(arrws[d]);
        }
      }

      // console.log(arr);
      // console.log(arrws);
      var nw = { guess: guessuser, sumYes: sumYes, sumNo: sumNo.length };
      arrUserG.push(...guessUser, nw);
      //console.log("pokusajiiiii:  ", arrUserG);
      setGuessUser(arrUserG);
      // setNotHaveColor(sumNo.length);
      setHaveColor(sumYes);
    } else {
      alert("you have not selected all the colors!");
    }
    setCountG(countGues + 1);
    //console.log(sumYes);
    if (countGues === 4 && sumYes < 4) {
      history.push("/game/unsuccess");
    } else if (sumYes === 4) {
      history.push("/game/success");
    }
    arr = [];
    uniqueArray = [];
    uniqueArray2 = [];
    arrws = [];
    sumYes = 0;
    sumNo = [];
  };

  return (
    <div className="row">
      {" "}
      <div className="col px-md-5">
        <div
          className="col-md-12"
          style={{
            boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.7)",
            backgroundColor: "rgb(0,0,0,0.9)",
            borderRadius: "10px",
            padding: "50px",
            width: "100%",
            textAlign: "center",
            marginTop: "50px",
            minWidth: "510px"
          }}
        >
          <h2
            onClick={() => {
              window.location.pathname = "/game";
            }}
            className="ref-h"
          >
            <IoIosRefresh
              style={{
                color: "white"
              }}
            />{" "}
            New Game
          </h2>{" "}
          <Switch>
            <Route exact path="/game">
              <SendGuess
                setColorOne={setColorOne}
                setColorTwo={setColorTwo}
                setColorThree={setColorThree}
                setColorFour={setColorFour}
                colorOne={colorOne}
                colorTwo={colorTwo}
                colorThree={colorThree}
                colorFour={colorFour}
                countGues={countGues}
                haveColor={haveColor}
                functGuess={functGuess}
              />
            </Route>
            <Route exact path="/game/success">
              <SuccessfullyGuess guessComputer={guessComputer} />
            </Route>
            <Route exact path="/game/unsuccess">
              <UnsuccessfulGuess guessComputer={guessComputer} />
            </Route>
          </Switch>
        </div>
      </div>
      <div className="col px-md-5">
        <div
          className="col-md-8"
          style={{
            boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.7)",
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
