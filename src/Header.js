import  MainMenu  from "./Header Components/MainMenu";
import { FiGithub } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";


function Header() {
  return (
    <div className="inline sticky">
      <FiGithub className="logo"/>
      <MainMenu />
      <AiOutlineMenu className="logo"/>
    </div>
  );
}

export default Header;
