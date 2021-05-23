import React from "react";
import Image from "react-bootstrap/Image";
import "./style.css";

function About() {
  return (
    <div className="container">
    <div className="col-xl-12">
      <Image className="image mx-auto d-block" src = "https://user-images.githubusercontent.com/74076318/108252671-8d638800-711e-11eb-9890-7bc7ccd38d8a.jpg" roundedCircle fluid /> 
      </div>
      <div className="row">
       <h4 className="text-center"><em>My name is Michael,  I enjoy solving complex problems and I love learning new things hence why I decided to take
        the Full Stack Develop BootCamp with the University of Texas. </em></h4>
        <h4 className="text-center"><em>  I am a results-minded professional with a primary focus on achieving revenue growth through 
        client relationship management, proven sales strategies, and developing key partnerships. I have been molding my professional skills and experience in the Financial Sales sector for the last 
        15 years.  </em></h4>
        <h4 className="text-center"><em>I am married to a magnificent woman and we have 3 amazing children. I enjoy being spending time with my family and friends, traveling and being outdoors.
      My ambition is to continue my personal and professional growth through new adventures and opportunites in life.</em></h4>   
      </div>
    </div>
  );
}

export default About;

    
     
     