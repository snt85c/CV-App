import MenuIcon from "./MenuIcon";
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
      fontMenu: "none",
    };
  }

  fontOnClick = (e) => {
    console.log(e.target.id);
    this.setState(() => {
      if (this.state.fontMenu === "none") {
        return { fontMenu: "block" };
      }
      return { fontMenu: "none" };
    });
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
                onClick={this.fontOnClick}
              />
            );
          })}
        </div>
        <div>
          <div
            className="overlay"
            style={{ display: this.state.fontMenu }}
          ></div>
        </div>
      </>
    );
  }
}
