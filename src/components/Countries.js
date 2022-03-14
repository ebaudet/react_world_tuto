import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const continents = ["Africa", "America", "Asia", "Europe", "Oceania", "Antarctica"];
  const [selectedContinent, setSelectedContinent] = useState("");

  // useEffect is called when the component is mounted
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(function (response) {
      setData(response.data);
    });
  }, []);

  return (
    <div className="countries">
      <h1>
        Pays ({Math.min(rangeValue, data.filter((country) => country.continents[0].includes(selectedContinent)).length)}/{data.filter((country) => country.continents[0].includes(selectedContinent)).length})
      </h1>
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max={data.filter((country) => country.continents[0].includes(selectedContinent)).length}
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {continents.map((continent) => (
          <li>
            <input
              type="radio"
              id={continent}
              name="continentRadio"
              onChange={(e) => setSelectedContinent(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedContinent))
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country, index) => (
            <Cards key={index} country={country} id={index + 1} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
