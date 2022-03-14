import React, { useEffect, useState } from "react";
import axios from "axios";

const Countries = () => {
  const [data, setData] = useState([]);
  const [hello, setHello] = useState("hello les amis");

  // useEffect is called when the component is mounted
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(function (response) {
      setData(response.data);
    });
  }, []);

  return (
    <div className="countries">
      <h1>Countries</h1>
      {hello}
      <ul>
        {data.map((country, index) => (
          <li key={index}>
            {country.translations.fra.common}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
