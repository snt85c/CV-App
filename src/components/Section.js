import React from "react";
import Input from "./Input";
import FieldButton from "./FieldButton";

export default class Section extends React.Component {
  constructor() {
    super();
    this.state = {
      value: true,
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
      <div style={{display:"inline", width:"100%", height:"100%"}}>
        <FieldButton
          name={this.props.name.toUpperCase()}
          func={this.handleClick}
        />
        <div className = "section" style={{display : this.state.value === true? "block" : "none" }} >
          {this.props.elements.map((element, i) => {
            return (
              <Input
                key={i}
                name={element}
                stateValue={this.props.stateValue[i]}
                data={this.props.data}
                func={this.props.func}
              />
            );
          })}
        </div>
      </div>
    );

  }
}
