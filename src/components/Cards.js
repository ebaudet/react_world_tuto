import React from "react";

const Cards = ({country}) => {
  return (
    <li className="card">
        <img src={country.flags.png} alt={"drapeau de " + country.translations.fra.common} />
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
        {country.population} habitants
      </div>
    </li>
  );
};

export default Cards;
