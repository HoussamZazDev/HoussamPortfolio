
import React, { useState, useRef } from "react";
import "./App.css"; 

function App() {

  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");


  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    setMessage(`Vous avez choisi : ${event.target.value}`);
  };


  const [options, setOptions] = useState(["Option 1", "Option 2", "Option 3"]);
  const [newOption, setNewOption] = useState("");

  const addOption = () => {
    if (newOption.trim() && !options.includes(newOption)) {
      setOptions([...options, newOption]);
      setNewOption("");
    }
  };

  const checkboxesRef = useRef([]);

  const toggleAllCheckboxes = (isChecked) => {
    checkboxesRef.current.forEach((checkbox) => {
      if (checkbox) checkbox.checked = isChecked;
    });
  };

  return (
    <div className="app">
      <h1>Atelier ReactJS : Composants Dynamiques</h1>


      <div className="section">
        <h2>1. Rendu Conditionnel</h2>
        <p>{message || "Faites un choix pour voir le message"}</p>
      </div>


      <div className="section">
        <h2>2. Radio Buttons</h2>
        <label>
          <input
            type="radio"
            name="options"
            value="Option A"
            onChange={handleRadioChange}
          />
          Option A
        </label>
        <label>
          <input
            type="radio"
            name="options"
            value="Option B"
            onChange={handleRadioChange}
          />
          Option B
        </label>
        <label>
          <input
            type="radio"
            name="options"
            value="Option C"
            onChange={handleRadioChange}
          />
          Option C
        </label>
      </div>


      <div className="section">
        <h2>3. Select Dynamique</h2>
        <select>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="add-option">
          <input
            type="text"
            placeholder="Nouvelle option"
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
          />
          <button onClick={addOption}>Ajouter</button>
        </div>
      </div>


      <div className="section">
        <h2>4. Checkboxes avec useRef</h2>
        <button onClick={() => toggleAllCheckboxes(true)}>Tout Sélectionner</button>
        <button onClick={() => toggleAllCheckboxes(false)}>Tout Désélectionner</button>
        <div className="checkboxes">
          {["Option 1", "Option 2", "Option 3", "Option 4"].map((item, index) => (
            <label key={index}>
              <input
                type="checkbox"
                ref={(el) => (checkboxesRef.current[index] = el)}
              />
              {item}
            </label>
          ))}


          
        </div>
      </div>
    </div>
  );
}

export default App;
