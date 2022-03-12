function Input({ stateValue, name, data, func}) {
  return (
    <label>
      {name}
      <input
        className="input"
        id={stateValue}
        value = {data[stateValue]}
        type="text"
        onChange={func}
      ></input>
    </label>
  );
}

export default Input;
