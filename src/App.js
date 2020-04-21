import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Slika from "./images/img.jpg";
import Main from "./components/main";
function App() {
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
  return (
    <div className="App main-all" style={sectionStyle}>
      <Main />
    </div>
  );
}

export default App;
