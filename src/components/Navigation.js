import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          end
          to="/"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          end
          to="/a-propos"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          <li>À propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
