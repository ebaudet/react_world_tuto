import React from "react";

const Cards = ({country, n}) => {
  return (
    <li className="card">
        <img src={country.flags.svg} alt={"drapeau de " + country.translations.fra.common} />
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
        <h4>{country.capital}</h4>
        <p>Pop. {country.population.toLocaleString()} ({n}ème)</p>
      </div>
    </li>
  );
};

export default Cards;
