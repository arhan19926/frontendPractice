import { useReducer, useState } from "react";
import "./style.css";

const reducer = (state: any, action: any) => {
  if (action.type === "INCR") {
    return state += 1;
  }
  if (action.type === "DECR") {
    return state != 0 ? (state -= 1) : state;
  }
};

export const UseReducer = () => {
  //   const [number, setNumber] = useState(0);
  const initialData = 10;

  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div className="button2" onClick={() => dispatch({ type: "DECR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
        <div className="button2" onClick={() => dispatch({ type: "INCR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
    </>
  );
};
