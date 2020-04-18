import React from "react";
import ColorOne from "./colorsguess/colorone";
import ColorTwo from "./colorsguess/colortwo";
import ColorThree from "./colorsguess/colorthree";
import ColorFour from "./colorsguess/colorfour";
import "../css/main.css";
const Guess =()=>{
	
	return (<div className="p-div-100 col-dir">
		<ColorOne/>
		<ColorTwo/>
		<ColorThree/>
		<ColorFour/>
		</div>)
}
export default Guess