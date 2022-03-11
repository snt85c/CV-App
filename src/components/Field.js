import React from "react";
import Input from "./Input";
import FieldButton from "../buttons/FieldButton";

export default class BiographInfo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      value: false,
      name: props.name,
      elements: props.elements,
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
    if (this.state.value === true) {
      return (
        <div style={{ border: "1px solid gray" }}>
          <FieldButton
            name={"Close " + this.state.name}
            func={this.handleClick}
          />
          {this.state.elements.map((element, i) => {
            return (
              <Input
                key={i}
                id={this.props.id[i]}
                name={element}
                func={this.props.func}
              />
            );
          })}
        </div>
      );
    }
    return (
      <FieldButton name={"Open  " + this.state.name} func={this.handleClick} />
    );
  }
}
