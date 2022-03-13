export default function FontOverlay(props) {
    console.log(props.style)
  return (
    <>
      <div className="overlay" style={{ display: props.menu }}>
        {props.id}
        <div>ocaca</div>
      </div>
    </>
  );
}
