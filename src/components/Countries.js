import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const continents = [
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
    "Antarctica",
  ];
  const [selectedContinent, setSelectedContinent] = useState("");
  const selections = ["population", "area", "density"];
  const [selectedSelection, setSelectedSelection] = useState("population");

  // useEffect is called when the component is mounted
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(function (response) {
      setData(response.data);
    });
  }, []);

  return (
    <div className="countries">
      <h1>
        Pays (
        {Math.min(
          rangeValue,
          data.filter((country) =>
            country.continents[0].includes(selectedContinent)
          ).length
        )}
        /
        {
          data.filter((country) =>
            country.continents[0].includes(selectedContinent)
          ).length
        }
        )
      </h1>
      {selections.map((selection) => (
        <li>
          <input
          type="radio"
          id={selection}
          name="selectionRadio"
          checked={selection === selectedSelection}
          onChange={(e) => setSelectedSelection(e.target.id)}
          />
          <label htmlFor={selection}>{selection}</label>
        </li>
      ))}
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max={
            data.filter((country) =>
              country.continents[0].includes(selectedContinent)
            ).length
          }
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {continents.map((continent) => (
          <li>
            <input
              type="radio"
              id={continent}
              name="continentRadio"
              checked={continent === selectedContinent}
              onChange={(e) => setSelectedContinent(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {selectedContinent && (
        <button onClick={() => setSelectedContinent("")}>
          Annuler la selection
        </button>
      )}
      <ul>
        {data
          .filter((country) =>
            country.continents[0].includes(selectedContinent)
          )
          .sort((a, b) => (selectedSelection == "population" && b.population - a.population) || (selectedSelection == "area" && b.area - a.area) || (selectedSelection == "density" && b.population / b.area - a.population / a.area))
          .slice(0, rangeValue)
          .map((country, index) => (
            <Cards key={index} country={country} n={index + 1} selection={selectedSelection} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
