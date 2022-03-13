export default function StyleOverlay(props) {
  let display = "none";
  if (props.id === "Style") {
    display = "block";
  }
  if (props.menu === "none") {
    display = "none";
  }
  return (
    <>
      <div className="overlay" style={{ display: display, width: "28%" }}>
        Color
      </div>
      <div
        className="overlay"
        style={{
          display: display,
          width: "15%",
          backgroundColor: "white",
          left: "50%",
          color: "black",
        }}
      >
        Background
      </div>
    </>
  );
}
