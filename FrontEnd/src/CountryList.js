import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAvailableCountries } from "./services/api";

const CountryListPage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getAvailableCountries();
      setCountries(data);
    };
    fetchCountries();
  }, []);

  return (
    <div>
      <h1>Available Countries</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.countryCode}>
            <Link to={`/country/${country.countryCode}`}>
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryListPage;