export default function LayoutOverlay(props){
    let display = "none"
    if (props.id === "Layout") {
        display = "block" 
    }
    if(props.menu === "none"){
        display = "none"
    }
    return (
        <>
        <div
          className="overlay"
          style={{ display: display, width: "60%", height: "60%"}}
        >
          {props.id}
        </div>
      </>
    )
}