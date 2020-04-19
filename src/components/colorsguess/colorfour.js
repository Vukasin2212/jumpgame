import React,{Fragment} from "react";
import ColorsGuess from "../colorguess";
import "../../css/main.css";
const ColorFour =({setColorFour})=>{
	return (<Fragment><ColorsGuess setColorArr={setColorFour}/></Fragment>)
}
export default ColorFour