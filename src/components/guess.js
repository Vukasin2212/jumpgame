import React,{useState,useEffect,useCallback} from "react";
import ColorOne from "./colorsguess/colorone";
import ColorTwo from "./colorsguess/colortwo";
import ColorThree from "./colorsguess/colorthree";
import ColorFour from "./colorsguess/colorfour";
import ColorsGuessRow from "./colorguessrow";
import "../css/main.css";
const Guess =()=>{
	
	const [colorOne,setColorOne]=useState("")
	const [colorTwo,setColorTwo]=useState("")
	const [colorThree,setColorThree]=useState("")
	const [colorFour,setColorFour]=useState("")
    const [guessComputer,setGuess]=useState([])

 const GuessComputer=useCallback(()=>{

    const computerArr=["yellow","green","blue","red"];
 	const arrayComb=[]
  for(var i=0;i<4;i++){
  const combination= computerArr[Math.floor((Math.random()*computerArr.length))];
  	arrayComb.push(combination)
  }
setGuess(arrayComb)
 },[setGuess]) 
 useEffect(()=>{GuessComputer()},[GuessComputer])
	const functGuess=()=>{
		alert(guessComputer)
var arr =[];
var arAuth=[];
arr.push(colorOne,colorTwo,colorThree,colorFour);
var sumYes=0;
var sumNo=0;
guessComputer.forEach((sd,i)=>{
	arr.forEach((sw,s)=>{
if(sd===sw && s===i)
{
	sumYes+=1
}
if(sd===sw && s!==i)
	  {
	  	arAuth.push(sw)
	  	sumNo+=1
	  }
	})
})
alert(arAuth)
alert("Imate: "+sumYes+" koji su na pravom mestu");
console.log(sumNo)
arr=[]
sumYes=0;
sumNo=0;
	}

	
	return (<div className="p-div-100 " >
			<div className="col-dir">
		<ColorsGuessRow colorOne={colorOne} colorTwo={colorTwo} colorThree={colorThree} colorFour={colorFour}/><button className="btn btn-primary" style={{marginBottom:"45px",width:"200px",height:"70px",marginLeft:"20px"}} onClick={functGuess}>Guess</button>
		</div>
		<div className="col-dir">
		<ColorOne setColorOne={setColorOne}/>
		<ColorTwo setColorTwo={setColorTwo}/>
		<ColorThree setColorThree={setColorThree}/>
		<ColorFour setColorFour={setColorFour}/></div>
		</div>)
}
export default Guess