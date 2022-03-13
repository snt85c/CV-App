export default function FontOverlay(props) {
  let displayValue = "none";

  if (props.id === "Font") {
    displayValue = "flex";
  }
  if (props.menu === "none") {
    displayValue = "none";
  }

  return (
    <>
      <div className="overlay fontOverlay" style={{ display: displayValue }}>
        <div className="overlayTitle">
        {props.id}
        </div>
        <div>
          <div className="clickableText" onClick={() => props.font("Ubuntu")}>
            Ubuntu
          </div>
          <div
            className="clickableText"
            onClick={() => props.font("'Courier New', Courier, monospace")}
          >
            Courier
          </div>
          <div
            className="clickableText"
            onClick={() => props.font("'Times New Roman', Times, serif")}
          >
            Times New Roman
          </div>
        </div>
        <div>Size</div>
      </div>
    </>
  );
}
