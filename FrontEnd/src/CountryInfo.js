import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCountryInfo } from "./services/api";
import BorderCountriesWidget from "./BorderCountriesWidget";
import PopulationChart from "./PopulationChart";

const CountryInfoPage = () => {
  const { countryCode } = useParams();
  const [countryInfo, setCountryInfo] = useState(null);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      const data = await getCountryInfo(countryCode);
      setCountryInfo(data);
    };
    fetchCountryInfo();
  }, [countryCode]);

  if (!countryInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>
        {countryInfo.name}
        <img
          src={countryInfo.flagURL}
          alt={`${countryInfo.name} flag`}
          style={{ marginLeft: 10, width: 50, height: 30 }}
        />
      </h1>
      <BorderCountriesWidget borderCountries={countryInfo.borderCountries} />
      <PopulationChart populationData={countryInfo.populationData} />
      <Link to="/">Back to Country List</Link>
    </div>
  );
};

export default CountryInfoPage;
