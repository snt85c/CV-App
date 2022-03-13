export default function FontOverlay(props) {
    let display = "none"

  if (props.id === "Font") {
      display = "block" 
  }
  if(props.menu === "none"){
      display = "none"
  }
 
    return (
      <>
        <div
          className="overlay"
          style={{ display: display, width: "15%"}}
        >
          {props.id}
          <div>
          <div className="clickableText" onClick={()=>props.font("-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif")}>Ubuntu</div>
            <div className="clickableText"onClick={()=>props.font("'Courier New', Courier, monospace")}>Courier</div>
            <div className="clickableText"onClick={()=>props.font("'Times New Roman', Times, serif")}>Times New Roman</div>
          </div>
          <div>Size</div>
        </div>
      </>
    );
  } 
  

