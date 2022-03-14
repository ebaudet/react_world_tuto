import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);

  // useEffect is called when the component is mounted
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(function (response) {
      setData(response.data);
    });
  }, []);

  return (
    <div className="countries">
      <h1>Pays ({data.length})</h1>
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max={data.length}
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
      </ul>
      <ul>
        {data.slice(0, rangeValue).map((country, index) => (
          <Cards key={index} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
