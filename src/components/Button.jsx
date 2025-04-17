function Button({ text, buttonClass, onClick, disabled }) {
  return (
    <div>
      <button className={buttonClass} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
}

export default Button;
