import "./App.css";
import React, { useReducer } from "react";

const initialState = { first: "", second: "", operator: "" };

function reducer(state, { type, payload, previous }) {
  switch (type) {
    case "number":
      return {
        ...state,
        first: previous.toString() + payload.toString(),
      };
    case "operator":
      return {
        ...state,
        first: "",
        second: previous,
        operator: payload,
      };
    case "eval":
      let result = 0;

      if (state.first === "" || state.second === "" || state.operator === "") {
        return state;
      }

      switch (state.operator) {
        case "x":
          result = parseFloat(state.first) * parseFloat(state.second);
          break;
        case "/":
          result = parseFloat(state.second) / parseFloat(state.first);
          break;
        case "+":
          result = parseFloat(state.first) + parseFloat(state.second);
          break;
        case "-":
          result = parseFloat(state.second) - parseFloat(state.first);
          break;
        default:
          break;
      }

      return {
        ...state,
        first: result,
        second: "",
        operator: "",
      };
    case "ac":
      return {
        ...state,
        first: "",
        second: "",
        operator: "",
      };
    default:
      return initialState;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="display">
          <h4>{state.second}</h4>
          <h4>{state.operator}</h4>
          <h3>{state.first}</h3>
        </div>
        <NumButton dispatch={dispatch} num={1} prev={state.first}></NumButton>
        <NumButton dispatch={dispatch} num={2} prev={state.first}></NumButton>
        <NumButton dispatch={dispatch} num={3} prev={state.first}></NumButton>
        <NumButton dispatch={dispatch} num={4} prev={state.first}></NumButton>
        <NumButton dispatch={dispatch} num={5} prev={state.first}></NumButton>
        <NumButton dispatch={dispatch} num={6} prev={state.first}></NumButton>
        <NumButton dispatch={dispatch} num={7} prev={state.first}></NumButton>
        <NumButton dispatch={dispatch} num={8} prev={state.first}></NumButton>
        <NumButton dispatch={dispatch} num={9} prev={state.first}></NumButton>
        <NumButton dispatch={dispatch} num={0} prev={state.first}></NumButton>
        <button>.</button>
        <button onClick={() => dispatch({ type: "eval" })}>=</button>
        <button className="span2row" onClick={() => dispatch({ type: "ac" })}>
          AC
        </button>
        <button
          onClick={() =>
            dispatch({ type: "operator", payload: "x", previous: state.first })
          }
        >
          x
        </button>
        <button
          onClick={() =>
            dispatch({ type: "operator", payload: "/", previous: state.first })
          }
        >
          /
        </button>
        <button
          onClick={() =>
            dispatch({ type: "operator", payload: "-", previous: state.first })
          }
        >
          -
        </button>
        <button
          onClick={() =>
            dispatch({ type: "operator", payload: "+", previous: state.first })
          }
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;

function NumButton({ dispatch, num, prev }) {
  return (
    <button
      onClick={() => dispatch({ type: "number", payload: num, previous: prev })}
    >
      {num}
    </button>
  );
}
