const Button = ({ id, onClick, Name }) => {
  return (
    <button id={id} onClick={onClick}>
      {Name}
    </button>
  );
};

export default Button;
