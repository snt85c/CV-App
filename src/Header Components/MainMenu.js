import MenuIcon from "./MenuIcon";
import Overlay from "./Overlay";
import { FiSettings } from "react-icons/fi";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import { AiOutlineFontColors } from "react-icons/ai";
import { BsBrush } from "react-icons/bs";
import { AiOutlineLayout } from "react-icons/ai";
import { GoCloudDownload } from "react-icons/go";
import React from "react";

export default class MainMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: "none",
      id: "",
    };
    this.onClick = this.onClick.bind(this);
    this.onHover = this.onHover.bind(this);
  }

  onClick = (e) => {
    let target = e.currentTarget.id;
    this.setState(() => {
      if (this.state.menu === "none") {
        return { menu: "block", id: target };
      }
      return { menu: "none" };
    });
  };

  onHover = (e) => {
    let target = e.currentTarget.id;
    if (this.state.menu === "block") {
      this.setState(() => {
        return {id : target};
      });
    }
  };

  render() {
    const imports = [
      AiOutlineFontColors,
      BsBrush,
      AiOutlineLayout,
      FiSettings,
      FiArrowLeftCircle,
      FiArrowRightCircle,
      GoCloudDownload,
    ];
    const iconsName = [
      "Font",
      "Style",
      "Layout",
      "Settings",
      "Left",
      "Right",
      "Download",
    ];
    return (
      <>
        <div className="mainMenu">
          {iconsName.map((icon, i) => {
            return (
              <MenuIcon
                key={i}
                import={imports[i]}
                id={icon}
                onClick={(e) => this.onClick(e)}
                onHover={(e) => this.onHover(e)}
              />
            );
          })}
        </div>
          <Overlay menu={this.state.menu} id = {this.state.id}/>
      </>
    );
  }
}
