import React from "react";
import Slika from "../../images/dd.jpg";
const Home = () => {
  const sectionStyle = {
    backgroundImage: `url(${Slika})`
  };
  return (
    <div style={sectionStyle} className="wellp p-div-100">
      Tu smo
    </div>
  );
};
export default Home;
