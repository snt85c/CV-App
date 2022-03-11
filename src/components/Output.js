function Output({ name, data }) {
  return (
    <>
      <label className="outputLabel">
        {name}: {data}
      </label>
    </>
  );
}

export default Output;
