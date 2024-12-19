import React from "react";
import Calculator from "../CalculatorAppComponents/Calculator";
import ToggleTheme from "../CalculatorAppComponents/ToggleTheme";

export default function CalculatorApp() {
  return (
    <>
  
    <div className="CalculatorApp">
    <ToggleTheme/>
      <Calculator />
      <p className="developer">
        Developed by 👨🏽‍💻 <span>Houssam Zaz</span>
      </p>
    </div>
    </>
  );
};
