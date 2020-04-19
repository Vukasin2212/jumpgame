import React,{Fragment} from "react";
import ColorsGuess from "../colorguess";
import "../../css/main.css";
const ColorOne =({setColorOne})=>{
	return (<Fragment><ColorsGuess setColorArr={setColorOne}/></Fragment>)
}
export default ColorOne