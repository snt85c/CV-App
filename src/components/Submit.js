import React from "react";
import Output from "./Output";
import FieldButton from "../buttons/FieldButton";

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      address: "",
      phoneNumber: "",
      value: false,
    };
  }

  handleClick = (e) => {
    e.preventDefault();

    this.setState({
      name: this.props.data.name,
      surname: this.props.data.surname,
      address: this.props.data.address,
      phoneNumber: this.props.data.phoneNumber,
    });

    this.setState(() => {
      if (this.state.value === false) {
        return { value: true };
      }
      return { value: false };
    });
  };

  renderSwitch = () => {
    if (this.state.value === false) {
      return <FieldButton name="Open Preview" func={this.handleClick} />;
    }

    return (
      <>
        <FieldButton name="Close Preview" func={this.handleClick} />
        <Output name="Name" data={this.state.name} />
        <Output name="Surname" data={this.state.surname} />
        <Output name="Address" data={this.state.address} />
        <Output name="Phone Number" data={this.state.phoneNumber} />
      </>
    );
  };

  render() {
    return this.renderSwitch();
  }
}

export default Submit;
