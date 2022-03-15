import React from "react";
import { useState } from "react";
import Header from "./Header Components/Header";
import Sections from "./components/Sections";
import Preview from "./components/Preview";
import "./App.css";

export default function App() {
  const [userdata, setUserdata] = useState({
    name: "",
    surname: "",
    phoneNumber: "",
    address: "",
    email: "",
    degree: "",
    info1: "",
    info2: "",
    info3: "",
    info4: "",
  });

  const [fontdata, setFontdata] = useState({
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
    fontSize: "3.5vw",
  });

  function updateFontSize(newSize) {
    setFontdata({ fontSize: newSize });
  }

  function updateFont(newFont) {
    setFontdata({ fontFamily: newFont });
  }

  function handleChange(e) {
    setUserdata({ ...userdata, [e.target.id]: e.target.value });
  }

  return (
    <>
      <Header font={updateFont} size={updateFontSize} />
      <div className="container">
        <h2>My Resume</h2>
        <Sections userdata={userdata} func={handleChange} />
        <Preview
          className="preview"
          data={userdata}
          font={fontdata.fontFamily}
          size={fontdata.fontSize}
        />
      </div>
    </>
  );
}
