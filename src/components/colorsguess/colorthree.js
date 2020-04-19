
import React,{Fragment} from "react";
import ColorsGuess from "../colorguess";
import "../../css/main.css";
const ColorThree =({setColorThree})=>{
	return (<Fragment><ColorsGuess setColorArr={setColorThree}/></Fragment>)
}
export default ColorThree