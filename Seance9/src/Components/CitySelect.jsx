import React,{ useState, useSyncExternalStore } from "react";

export default function CitySelect(){

    const [selectedCity, setSelectedCity] = useState("");
    const [cities, setCities] = useState(['Paris', 'Assilah', 'London', "Oaxaca", 'New York']);

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    const addCity = () => {
        setCities([...cities, 'Tokyo']);
    };



    return(
        <div>
            <h3>Select your city :</h3>
            <button onClick={addCity}>Add Tokyo</button>
            <select value={selectedCity} onChange={handleCityChange}>

            {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
            ))}

            </select>

            <p>Selected City : {selectedCity}</p>
        </div>
    )
}