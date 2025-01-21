import React from "react";
import { Link } from "react-router-dom";

const BorderCountriesWidget = ({ borderCountries }) => {
  return (
    <div>
      <h2>Border Countries</h2>
      <ul>
        {borderCountries.map((country) => (
          <li key={country}>
            <Link to={`/country/${country}`}>{country}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BorderCountriesWidget;