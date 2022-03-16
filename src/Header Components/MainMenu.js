import MenuIcon from "./MenuIcon";
import Overlay from "./Overlay";
import { FiSettings } from "react-icons/fi";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import { AiOutlineFontColors } from "react-icons/ai";
import { BsBrush } from "react-icons/bs";
import { AiOutlineLayout } from "react-icons/ai";
import { GoCloudDownload } from "react-icons/go";
import { useState } from "react";

export default function MainMenu(props) {

  const [value, setValue] = useState({menu:"none", id:""})

  function onClick(e){
    let target = e.currentTarget.id;
    if(value.menu === "none"){
      return setValue({menu:"block", id:target})
    }
    return setValue({menu:"none"})
  };

  function onHover(e){
    let target = e.currentTarget.id;
    if(value.menu === "block"){
      setValue({...value,id:target})
    }
  };

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
                onClick={(e) => onClick(e)}
                onHover={(e) => onHover(e)}
              />
            );
          })}
        </div>
          <Overlay 
          font={props.font}
          size={props.size}
          menu={value.menu} 
          id = {value.id} 
          style={{displayValue: value.menu}}/>
      </>
    );
}
