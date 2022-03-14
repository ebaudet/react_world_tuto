import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          end
          to="/"
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          end
          to="/a-propos"
        >
          <li>À propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
