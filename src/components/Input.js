function Input({ id, name, func}) {
  
  return (
    <label>
      {name}
      <input
        className="input"
        id={id}
        type="text"
        onChange={func}
      ></input>
    </label>
  );
}

export default Input;
