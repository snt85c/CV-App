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
      font: "'Ubuntu",
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateFont = this.updateFont.bind(this);
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
        <Header font={this.updateFont} />
        <div className="container" >
          <h2>My Resume</h2>
          <Section
            name="Biographical Information"
            stateValue={["name", "surname", "address", "phoneNumber","email"]}
            elements={["Name", "Surname", "Address", "Phone Number","E-Mail"]}
            data={this.state}
            func={this.handleChange}
          />
          <Section
            name="Academic Information"
            stateValue={["degree", "info1", "info2"]}
            elements={["Degree", "info1", "info2"]}
            data={this.state}
            func={this.handleChange}
          />
          <Section
            name="Professional Experience"
            stateValue={["employer", "info1", "info2"]}
            elements={["Employer", "info3", "info4"]}
            data={this.state}
            func={this.handleChange}
          />
          <br></br>
          <Preview className="preview" data={this.state} font={this.state.font} />
        </div>
      </>
    );
  }
}

export default App;
