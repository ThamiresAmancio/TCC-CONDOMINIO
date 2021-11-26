import "./input.css";

function InputTayler({ id, list, type, placeholder, label, value, handler, ...rest }) {
  return (
    <>
      <div class="group">
        <input
          id={id}
          list={list}
          placeholder={placeholder}
          typeof={type}
          {...rest}
          value={value}
          onChange={handler}
          type={type}
        />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>{label}</label>
      </div>
    </>
  );
}

export default InputTayler;