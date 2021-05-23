import React from "react";
import "./style.css";

function Image (props) {
  return (
    <div className="profile" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Image;