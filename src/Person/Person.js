import React from "react";
import "./Person.css";

const person = props => {
    console.log(props);
    
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} old
      </p>
      <p></p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
