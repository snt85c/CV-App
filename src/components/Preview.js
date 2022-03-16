import React from "react";
import Output from "./Output";
import FieldButton from "./FieldButton";
import { useState } from "react";

export default function Preview(props) {
  const [value, setValue] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    if (value === false) {
      return setValue(true);
    }
    return setValue(false);
  }

  return (
    <>
      <FieldButton
        name={value ? "Close Preview" : "Open Preview"}
        func={handleClick}
        id="preview"
      />
      <div
        className="preview"
        style={{
          fontFamily: props.font,
          display: value === true ? "flex" : "none",
        }}
      >
        <div>
          <div className="anagraphPreview">
            <div className="NameSurnameDivOut" style={{ fontSize: props.size }}>
              <Output name="Name" data={props.data.name} size={props.size} />
              <div style={{ width: "15px" }}></div>
              <Output
                name="Surname"
                data={props.data.surname}
                size={props.size}
              />
            </div>
            <div>
              <Output
                name="Address"
                data={props.data.address}
                size={props.size - 1.5}
              />
              <Output
                name="Email"
                data={props.data.email}
                size={props.size - 1.5}
              />
              <Output
                name="Phone Number"
                data={props.data.phoneNumber}
                size={props.size - 1.5}
              />
            </div>
          </div>
          <div className="outputsContainer">
            <Output
              name="University"
              data={props.data.degree}
              size={props.size - 1.5}
            />
            <Output
              name="Faculty"
              data={props.data.info1}
              size={props.size - 1.5}
            />
            <Output
              name="Description"
              data={props.data.info2}
              size={props.size - 1.5}
            />
          </div>
          <div className="outputsContainer">
            <Output
              name="Employer"
              data={props.data.employer}
              size={props.size - 1.5}
            />
            <Output
              name="Role"
              data={props.data.info3}
              size={props.size - 1.5}
            />
            <Output
              name="Description"
              data={props.data.info4}
              size={props.size - 1.5}
            />
          </div>
        </div>
      </div>
    </>
  );
}
