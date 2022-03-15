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
          <div>
            <div className="anagraphPreview">
              <div
                className="NameSurnameDivOut"
                style={{ fontSize: this.props.size }}
              >
                <Output
                  name="Name"
                  data={this.props.data.name}
                  size={this.props.size}
                />
                <div style={{ width: "15px" }}></div>
                <Output
                  name="Surname"
                  data={this.props.data.surname}
                  size={this.props.size}
                />
              </div>
              <div>
                <Output
                  name="Address"
                  data={this.props.data.address}
                  size={this.props.size -1.5}
                />
                <Output
                  name="Email"
                  data={this.props.data.email}
                  size={this.props.size -1.5}
                />{" "}
                <Output
                  name="Phone Number"
                  data={this.props.data.phoneNumber}
                  size={this.props.size -1.5}
                />
              </div>
            </div>
            <div className="outputsContainer">
              <Output
                name="University"
                data={this.props.data.degree}
                size={this.props.size -1.5}
              />
              <Output
                name="Faculty"
                data={this.props.data.info1}
                size={this.props.size -1.5}
              />
              <Output
                name="Description"
                data={this.props.data.info2}
                size={this.props.size -1.5}
              />
            </div>
            <div className="outputsContainer">
              <Output
                name="Employer"
                data={this.props.data.employer}
                size={this.props.size -1.5}
              />
              <Output
                name="Role"
                data={this.props.data.info3}
                size={this.props.size -1.5}
              />
              <Output
                name="Description"
                data={this.props.data.info4}
                size={this.props.size -1.5}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Preview;
