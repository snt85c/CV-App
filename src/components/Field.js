import React from "react";
import uniqid from "uniqid";
import Input from "./Input";
import FieldButton from "../buttons/FieldButton";

export default class BiographInfo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      value: false,
      name: props.name,
      elements: props.elements,
      id: props.id,
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

  createInputElement() {
    return this.state.elements.map((element, i) => {
      return (
        <Input
          key={uniqid()}
          id={this.props.id[i]}
          name={element}
          func={this.props.func}
        />
      );
    });
  }


  render() {
    if (this.state.value === true) {
        return (
          <legend>
            <FieldButton
              name={"Close " + this.state.name}
              func={this.handleClick}
            />
            <fieldset>
              <form className="form">  
            {this.createInputElement()}
              </form>
            </fieldset>
          </legend>
        );
      }
      return (
        <FieldButton name={"Open  " + this.state.name} func={this.handleClick} />
      );
  }
}
