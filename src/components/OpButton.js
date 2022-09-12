function OpButton({ dispatch, operator }) {
  return (
    <button onClick={() => dispatch({ type: "operator", payload: operator })}>
      {operator}
    </button>
  );
}

export default OpButton;
