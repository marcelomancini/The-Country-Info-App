import React, { useEffect, useState } from "react";
import PopulationChart from "./PopulationChart";
import BorderCountries from "./BorderCountries";


function CountryInfo({ countryCode, onBack }) {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/country-info/${countryCode}`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching country info:", error);
        setLoading(false);
      });
  }, [countryCode]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!country) {
    return <div>Country not found.</div>;
  }

  return (
    <div className="country-info">
      <button onClick={onBack}>Back to List</button>
      <div className="BORDERS">
        <div>
          <h2>{country.populationData.country}</h2>
          <img src={country.flagURL} alt={`Flag of ${country.populationData.name}`} width="200" />
        </div>
        <div>
          <h3>Border Countries</h3>
          <BorderCountries borders={country.borderCountries} />
        </div>
      </div>
      <h3>Population Over Time</h3>
      <div className="Chart"> <PopulationChart populationData={country.populationData.populationCounts} /> </div>
    </div>
  );
}

export default CountryInfo;