import "./input.css";

function InputTayler({ id, type, placeholder, label, value, handler, ...rest }) {
  return (
    <>
      <div class="group">
        <input
          id={id}
          placeholder={placeholder}
          typeof={type}
          {...rest}
          value={value}
          onChange={handler}
          type="text"
          required
        />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>{label}</label>
      </div>
    </>
  );
}

export default InputTayler;
