import { useEffect, useState } from "react";
import "./style.css";
export const UseEffect = () => {
  const [number, setNumber] = useState(0);

  const handleIncr = ()=>{
    return setNumber(number+10);
  }

  useEffect(()=>{
    document.title = `Chats(${number})`;

  },[number])

  return (
    <>
        <p>{number}</p>
      <div className="center_div">
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
