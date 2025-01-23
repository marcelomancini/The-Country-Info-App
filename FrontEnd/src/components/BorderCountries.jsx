import React from "react";

function BorderCountries({ borders }) {
  if (!borders || borders.length === 0) {
    return <p>No border countries.</p>;
  }

  return (
    <ul >
      {borders.map((border) => (
        <li key={border.countryCode}>
          {border.commonName} ({border.officialName})
          </li>
      ))}
    </ul>
  );
}

export default BorderCountries;