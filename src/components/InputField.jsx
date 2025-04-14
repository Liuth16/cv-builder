function InputField({ label, id, type, onChange, value, name, disabled }) {
  if (type === "textarea") {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <textarea
          type={type}
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          disabled={disabled}
          rows={5}
        />
      </>
    );
  }
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
    </>
  );
}

export default InputField;
