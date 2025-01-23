import React, { useEffect, useState } from "react";

function CountryList({ onSelectCountry }) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/available-countries`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log("Fetched countries:", data);
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="country-list">
      <h2>Available Countries</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.countryCode}>
            <button onClick={() => onSelectCountry(country.countryCode)}>
              {country.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;