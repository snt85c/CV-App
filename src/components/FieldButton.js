function FieldButton({ name, func, id }) {
  return (
    <div id={id}className="fieldButton" onClick={func}>
      {name}
    </div>
  );
}

export default FieldButton;
