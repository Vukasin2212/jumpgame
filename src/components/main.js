import React from "react";
import Guess from "./guess";
import Slika from "../images/img.jpg";
const Main =()=>{
const sectionStyle = {
    padding: "100px",
    height: "100%",
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Slika})`,
    backgroundAttachment: "fixed"
  };
	return(<div className="row main-all" style={sectionStyle}><div className="col-md-3"></div><div className="col-md-9" ><Guess/></div></div>)
}
export default Main