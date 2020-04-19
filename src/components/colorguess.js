import React from "react";
import {Colors} from "./colorsguess/colors";
import "../css/main.css"
const ColorsGuess =()=>{
	
	return(<div className="colorguess d-inline-flex p-2">
		{Colors.map((sr,i)=> <div key={i} className="color-divs" style={{backgroundColor:`${sr}`}}></div>)}
		</div>)
}
export default ColorsGuess