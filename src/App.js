import React from "react";
import Header from "./Header";
import Field from "./components/Field";
import Submit from "./components/Submit";
import "./App.css";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surname: "",
      phoneNumber: "",
      address: "",
      degree: "",
      info1: "",
      info2: "",
      info3: "",
      info4: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Field
          name="Biographical Information"
          id = {["name","surname","address","phoneNumber"]}
          elements={["Name", "Surname", "Address", "Phone Number"]}
          func={this.handleChange}
        />
        <Field
          name="Academic Information"
          id = {["degree","info1","info2"]}
          elements={["Degree", "info1", "info2"]}
          func={this.handleChange}
        />
        <Field
          name="Professional Experience"
          id = {["employer","info1","info2"]}
          elements={["Employer", "info3", "info4"]}
          func={this.handleChange}
        />
        <Submit className="submit" data={this.state} />
      </>
    );
  }
}

export default App;
