import React from "react";

const Cards = ({country, n, selection}) => {
  return (
    <li className="card">
        <img src={country.flags.svg} alt={"drapeau de " + country.translations.fra.common} />
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
        <h4>{country.capital}</h4>
        {selection == "population" && (
            <p>Pop. {country.population.toLocaleString()} ({n}ème) <a href={"https://fr.wikipedia.org/wiki/"+country.translations.fra.common} target="_blank" rel="noreferrer">wiki</a></p>
        )}
        {selection == "area" && (
            <p>Superficie {country.area.toLocaleString()}km<sup>2</sup> ({n}ème) <a href={"https://fr.wikipedia.org/wiki/"+country.translations.fra.common} target="_blank" rel="noreferrer">wiki</a></p>
        )}
        {selection == "density" && (
            <p>Densité {(country.population / country.area).toLocaleString()}hab./km<sup>2</sup> ({n}ème) <a href={"https://fr.wikipedia.org/wiki/"+country.translations.fra.common} target="_blank" rel="noreferrer">wiki</a></p>
        )}
      </div>
    </li>
  );
};

export default Cards;
