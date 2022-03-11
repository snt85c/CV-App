function Input({ id, name, func,value }) {
  
  return (
    <label>
      {name}
      <input
        className="input"
        id={id}
        type="text"
        onChange={func}
        value= {value[id]}
      ></input>
    </label>
  );
}

export default Input;
