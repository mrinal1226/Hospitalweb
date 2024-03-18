import React from "react";
import "./About.css";
import photo1 from '../../images/amb.png';
import photo2 from "../../images/medical.png";
import photo3 from "../../images/char.png";


export default function About() {
  // const styl = { width: "100%" };
  return (
    <header id="about" >
      
       
      <div className="container " >
        <h4>
          {" "}
          <b>OUR SERVICES</b>
        </h4>
        <h1>
          <b>Services We Provide</b>
        </h1>
      </div>
      <div className="par">
        <div className="child1">
          <img src={photo1} alt="Ambulance" />
          <h4 className="hf">Ambulance</h4>
          <p><br></br>
            
          </p>
        </div>
        <div className="child1">
          <img src={photo3} alt="Wheelchair" />
          <h4>Wheelchair</h4>
          <p>
          <br/>
           
          </p>
        </div>
        <div className="child1">
          <img src={photo2} alt="Pharmacy" />
          <h4>Pharmacy</h4>
          <p>
          <br></br>
            
          </p>
        </div>
      </div>
    </header>
  );
}
