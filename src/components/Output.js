function Output({ name, data }) {
  let nameA = name;
  if(nameA === "Name" || nameA === "Surname"){
    nameA = ""

  }else{
    nameA += ":"
  }
  console.log(data)
  return (
    <>
      <label className="outputLabel">{nameA}</label>
      <div className={name + "OutputLabel"}>{data}</div>
    </>
  );
}

export default Output;
