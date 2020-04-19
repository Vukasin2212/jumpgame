
import React,{Fragment} from "react";
import ColorsGuess from "../colorguess";
import "../../css/main.css";
const ColorTwo =({setColorTwo})=>{
	return (<Fragment><ColorsGuess setColorArr={setColorTwo}/></Fragment>)
}
export default ColorTwo