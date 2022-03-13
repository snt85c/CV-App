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
        <div
          className="preview"
          style={{
            fontFamily: this.props.font,
            display: this.state.value === true ? "flex" : "none",
          }}
        >
          <div className="NameSurnameDivOut">
            <Output name="Name" data={this.props.data.name} />
            <div style={{width:"15px"}}></div>
            <Output name="Surname" data={this.props.data.surname} />
          </div>
          <div>
            <Output name="Address" data={this.props.data.address} />
            <Output name="Email" data={this.props.data.email} />
            <Output name="Phone Number" data={this.props.data.phoneNumber} />
          </div>
        </div>
      </>
    );
  }
}

export default Preview;
