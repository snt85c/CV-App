export default function LayoutOverlay(props){
    let displayValue = "none"
    if (props.id === "Layout") {
      displayValue = "block" 
    }
    if(props.menu === "none"){
      displayValue = "none"
    }
    return (
        <>
        <div
          className="overlay layoutOverlay"
          style={{ display: displayValue}}
        >
          <div className="overlayTitle">
        {props.id}
        </div>
        </div>
      </>
    )
}