export default function MenuIcon(props) {
  return (
    <>
      <div onClick={props.onClick} className="mainMenuIcon">
        <props.import className="icon" id={props.id} />
        <div className="mobhide">{props.id}</div>
      </div>
    </>
  );
}
