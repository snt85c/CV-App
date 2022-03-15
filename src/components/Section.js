import React from "react";
import Input from "./Input";
import FieldButton from "./FieldButton";
import { useState } from "react";

export default function Section (props) {
  
  const [value, setValue] = useState(true)

  function handleClick(e) {
    e.preventDefault();
      if (value === false) {
        return setValue(true)
      }
      return setValue(false);
  };

    return (
      <div style={{display:"inline", width:"100%", height:"100%"}}>
        <FieldButton
          name={props.name.toUpperCase()}
          func={handleClick}
        />
        <div className = "section" style={{display : value === true? "block" : "none" }} >
          {props.elements.map((element, i) => {
            return (
              <Input
                key={i}
                name={element}
                stateValue={props.stateValue[i]}
                data={props.data}
                func={props.func}
              />
            );
          })}
        </div>
      </div>
    );

  }
