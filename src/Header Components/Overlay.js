import FontOverlay from "./FontOverlay";
import StyleOverlay from "./StyleOverlay";
import LayoutOverlay from "./LayoutOverlay";

export default function Overlay(props) {
  return (
    <>
      <FontOverlay id={props.id} menu={props.menu} font={props.font} size={props.size}/>
      <StyleOverlay id={props.id} menu={props.menu} />
      <LayoutOverlay id={props.id} menu={props.menu}/>
    </>
  );
}
