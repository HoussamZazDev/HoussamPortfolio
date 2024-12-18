
import React, { useState } from "react";

export default function KeysWindow ({ handleButton, history }){


  const sciKeys = ["sin", "cos", "ln", "log", "tan", "π", "e", "^", "!", "√",];

  const basicKeys = [
    "7",
    "8",
    "9",
    "*",
    "/",
    "4",
    "5",
    "6",
    "-",
    "(",
    "1",
    "2",
    "3",
    "+",
    ")",
    ".",
    "0",
    "DEL",
    "AC",
    "=",
  ];


  let [isClock, setIsClock] = useState(true);
  const svgCalculator = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-calculator" viewBox="0 0 16 16"><path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/></svg>;
  const svgHistory =  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-clock-history" viewBox="0 0 16 16"><path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"/><path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"/><path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"/></svg>;




  const toggleIcon = () => {
      setIsClock(!isClock);

    
    }

 



  return (
    <div className="keysWindow">
      <div className="keys_scientific">
        {sciKeys.map((item, index) => (
          <button className="SciButtons"
            style={{ display : isClock ? "grid" : "none"}}
            key={index} onClick={() => handleButton(item)}>
            {item}
          </button>

          
        ))}
        <div className="historyDisplay" style={{display : !isClock ? "flex" : "none"}}>
          <ul>
            {history.map((item, index) => (
            <li key={index}>
              <strong>{item.operation}</strong> = {item.compute}
            </li>
          ))}</ul>
        </div>

        <button onClick={toggleIcon} id="buttonHistory" className="grow">{isClock ?  svgHistory : svgCalculator}</button>
      </div>
      <div className="line"></div>
      <div className="keys_basic">
        {basicKeys.map((item, index) => (
          <button
            key={index}
            className={`${item >= "0" && item <= "9" ? "number" : ""} ${
              item === "=" && "equal"
            }`}
            onClick={() => handleButton(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
