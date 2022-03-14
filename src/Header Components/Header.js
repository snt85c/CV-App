import  MainMenu  from "./MainMenu";
import { FiGithub } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";


function Header(props) {
  return (
    <div className="inline sticky">
      <FiGithub className="logo"/>
      <MainMenu font={props.font} size={props.size}/>
      <AiOutlineMenu className="logo"/>
    </div>
  );
}

export default Header;
