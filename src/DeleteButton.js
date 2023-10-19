const DeleteButton = ({ text, color, backgroundColor }) => {
  return (
    <button
      style={{
        color: color ? color : "red",
        backgroundColor: backgroundColor ?? "black",
      }}
    >
      {text}
    </button>
  );
};

export default DeleteButton;
