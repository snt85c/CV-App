export default function MenuIcon(props) {
  let classes = "icon"
  if(props.id === "Download"){
    classes ="icon downloadButton"
  }
  return (
      <div
        id={props.id}
        className="mainMenuIcon"
        onClick={props.onClick}
        onMouseEnter={props.onHover}
      >
        <props.import className={classes} />
        <div className="mobhide">{props.id}</div>
      </div>
  );
}
