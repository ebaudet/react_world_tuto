import React from "react";

const Cards = (props) => {
  return (
    <li className="card">
        <img src={props.country.flags.png} alt={"drapeau de " + props.country.translations.fra.common} />
      <div className="infos">
        <h2>{props.country.translations.fra.common}</h2>
        {props.country.population} habitants
      </div>
    </li>
  );
};

export default Cards;
