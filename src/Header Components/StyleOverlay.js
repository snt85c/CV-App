export default function StyleOverlay(props) {
  let displayValue = "none";
  if (props.id === "Style") {
    displayValue = "block";
  }
  if (props.menu === "none") {
    displayValue = "none";
  }
  return (
    <>
      <div
        className="overlay styleOverlayColor"
        style={{ display: displayValue }}
      >
        <div className="overlayTitle">Color</div>
      </div>
      <div
        className="overlay styleOverlayBackground"
        style={{
          display: displayValue,
        }}
      >
        <div className="overlayTitle">Background</div>
      </div>
    </>
  );
}
