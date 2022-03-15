
function Output({ name, data, size}) {
  let nameA = name;
  if(nameA === "Name" || nameA === "Surname"){
    nameA = ""

  }else{
    nameA += ":"
  }

  function namesurname(){
    if(nameA !== "Name" || nameA !== "Surname"){
      return "block" 
    }
    return "none"
  }

  return (
    <>
      <label className="outputLabel" style={{display:{namesurname}}}>{nameA}</label>
      <div className={name + "OutputLabel"} style={{fontSize:size+"vw"}}>{data}</div>
    </>
  );
}

export default Output;
