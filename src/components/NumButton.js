function NumButton({ dispatch, num, prev }) {
  return (
    <button onClick={() => dispatch({ type: "number", payload: num })}>
      {num}
    </button>
  );
}

export default NumButton;
