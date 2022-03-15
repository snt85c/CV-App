import React from "react";
import Header from "./Header Components/Header";
import Section from "./components/Section";
import Preview from "./components/Preview";
import "./App.css";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
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
      font: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
      fontSize:"3.5vw"
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateFont = this.updateFont.bind(this);
    this.updateFontSize = this.updateFontSize.bind(this);
  }

  updateFontSize = (newSize) =>{
    this.setState(
      {fontSize: newSize}
    )
  }

  updateFont = (newFont) => {
    this.setState(
      {font : newFont}
    )
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <Header font={this.updateFont} size={this.updateFontSize}/>
        <div className="container" >
          <h2>My Resume</h2>
          <div style={{display:"flex", flexDirection:"row", backgroundColor:"white"}}> 
          <Section
            name="Bio"
            stateValue={["name", "surname", "address", "phoneNumber","email"]}
            elements={["Name", "Surname", "Address", "Phone Number","E-Mail"]}
            data={this.state}
            func={this.handleChange}
          />
          <Section
            name="Education"
            stateValue={["degree", "info1", "info2"]}
            elements={["Degree", "info1", "info2"]}
            data={this.state}
            func={this.handleChange}
          />
          </div>
          <Section
            name="Work Experience"
            stateValue={["employer", "info3", "info4"]}
            elements={["Employer", "info3", "info4"]}
            data={this.state}
            func={this.handleChange}
          />
          <br></br>
          <Preview className="preview" data={this.state} font={this.state.font} size={this.state.fontSize}  />
        </div>
      </>
    );
  }
}

export default App;
