import { useState } from "react";
import "./style.css";
export const UseState = () => {
  const [number, setNumber] = useState(0);

  const handleIncr = ()=>{
    return setNumber(number+10);
  }

  const handleDecr = ()=>{
    return setNumber(number-10);
  }

  return (
    <>
      <div className="center_div">
        <p>{number}</p>
        <div className="button2" onClick={()=>{handleDecr()}}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
        <div className="button2" onClick={()=>{handleIncr()}}>
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
