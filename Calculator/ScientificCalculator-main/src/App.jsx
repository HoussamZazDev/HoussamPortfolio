import React from "react";
import Calculator from "./Components/Calculator";
import ToggleTheme from "./Components/ToggleTheme";

export default function App() {
  return (
    <>
  
    <div className="App">
    <ToggleTheme/>
      <Calculator />
      <p className="developer">
        Developed by 👨🏽‍💻 <span>Houssam Zaz</span>
      </p>
    </div>
    </>
  );
};
