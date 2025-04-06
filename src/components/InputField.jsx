function InputField({ data, label, id, type, onChange, value, name }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
      />
    </>
  );
}

export default InputField;
