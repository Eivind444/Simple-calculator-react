import "./App.css";
import React, { useReducer } from "react";
import NumButton from "./components/NumButton";
import OpButton from "./components/OpButton";

const initialState = { first: "", second: "", operator: "" };

function reducer(state, { type, payload }) {
  switch (type) {
    case "number":
      return {
        ...state,
        first: state.first.toString() + payload.toString(),
      };
    case "operator":
      return {
        ...state,
        first: "",
        second: state.first,
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
    case ".":
      if (state.first.includes(".")) {
        return state;
      } else {
        return {
          ...state,
          first: state.first.toString() + payload.toString(),
        };
      }
    default:
      return initialState;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = ["x", "/", "-", "+"];

  return (
    <div className="wrapper">
      <div className="container">
        <div className="display">
          <h4>{state.second}</h4>
          <h4>{state.operator}</h4>
          <h3>{state.first}</h3>
        </div>
        {numbers.map((number) => {
          return <NumButton dispatch={dispatch} num={number}></NumButton>;
        })}
        <button
          onClick={() =>
            dispatch({ type: ".", payload: ".", previous: state.first })
          }
        >
          .
        </button>
        <button onClick={() => dispatch({ type: "eval" })}>=</button>
        <button className="span2row" onClick={() => dispatch({ type: "ac" })}>
          AC
        </button>
        {operators.map((operator) => {
          return <OpButton dispatch={dispatch} operator={operator}></OpButton>;
        })}
      </div>
    </div>
  );
}

export default App;
