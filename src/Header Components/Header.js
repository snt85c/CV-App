import  MainMenu  from "./MainMenu";
import { FiGithub } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";


function Header({font}) {
  return (
    <div className="inline sticky">
      <FiGithub className="logo"/>
      <MainMenu font={font}/>
      <AiOutlineMenu className="logo"/>
    </div>
  );
}

export default Header;
