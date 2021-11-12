import "./input.css";

function InputTayler({ id, type, label, value, handler, ...rest }) {
  return (
    <>
      <div class="group">
        <input
          id={id}
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
