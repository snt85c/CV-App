export default function MenuIcon(props) {
  return (
      <div
        id={props.id}
        className="mainMenuIcon"
        onClick={props.onClick}
        onMouseEnter={props.onHover}
      >
        <props.import className="icon" />
        <div className="mobhide">{props.id}</div>
      </div>
  );
}
