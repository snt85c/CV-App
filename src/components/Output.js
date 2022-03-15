
function Output({ name, data, size}) {
  let nameA = name;
  if(nameA === "Name" || nameA === "Surname"){
    nameA = ""

  }else{
    nameA += ":"
  }
  return (
    <>
      <label className="outputLabel">{nameA}</label>
      <div className={name + "OutputLabel"} style={{fontSize:size+"vw"}}>{data}</div>
    </>
  );
}

export default Output;
