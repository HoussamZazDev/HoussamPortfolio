import React from "react";
import Calculator from "../CalculatorAppComponents/Calculator";
import ToggleTheme from "../CalculatorAppComponents/ToggleTheme";
import NavBar from "../AppComponents/NavBar";

export default function CalculatorApp() {
  return (
    <>
  <NavBar applogoname={"Calculator"} />
    <div className="CalculatorApp" style={{marginTop : '70px'}}>
    
    <ToggleTheme/>
      <Calculator />
      <p className="developer">
        Developed by 👨🏽‍💻 <span>Houssam Zaz</span>
      </p>
    </div>
    </>
  );
};
