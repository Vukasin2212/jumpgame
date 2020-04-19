import React from "react";
import ColorOne from "./colorsguess/colorone";
import ColorTwo from "./colorsguess/colortwo";
import ColorThree from "./colorsguess/colorthree";
import ColorFour from "./colorsguess/colorfour";
import ColorsGuessRow from "./colorguessrow";
import "../css/main.css";
const Guess =()=>{
	
	return (<div className="p-div-100 " >
			<div className="col-dir">
		<ColorsGuessRow colorOne={"red"} colorTwo={"red"} colorThree={"yellow"} colorFour={"blue"}/><button className="btn btn-primary" style={{marginBottom:"45px",width:"200px",height:"70px",marginLeft:"20px"}}>Guess</button>
		</div>
		<div className="col-dir">
		<ColorOne/>
		<ColorTwo/>
		<ColorThree/>
		<ColorFour/></div>
		</div>)
}
export default Guess