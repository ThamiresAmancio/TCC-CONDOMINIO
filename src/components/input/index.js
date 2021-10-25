import { Container } from "./styles";

function InputHoshi({ id, label, value, handler, ...rest }) {
  return (
    <Container>
      <input
        id={id}
        {...rest}
        placeholder=" "
        value={value}
        onChange={handler}
      />
      <label htmlFor={id}>{label}</label>
    </Container>
  );
}

export default InputHoshi;