import React from "react";
import Output from "./Output";
import FieldButton from "./FieldButton";

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState(() => {
      if (this.state.value === false) {
        return { value: true };
      }
      return { value: false };
    });
  };

  render() {
    return (
      <>
        <FieldButton
          name={this.state.value ? "Close Preview" : "Open Preview"}
          func={this.handleClick}
          id="preview"
        />
        <div className = "preview" style={{ display: this.state.value === true ? "block" : "none" }}>
          <Output name="Name" data={this.props.data.name} />
          <Output name="Surname" data={this.props.data.surname} />
          <Output name="Address" data={this.props.data.address} />
          <Output name="Phone Number" data={this.props.data.phoneNumber} />
        </div>
      </>
    );
  }
}

export default Preview;
