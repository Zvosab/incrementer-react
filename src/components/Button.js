const Button = (props) => {
  return (
    <button id={props.id} onClick={props.onClick}>
      {props.Name}
    </button>
  );
};

export default Button;
