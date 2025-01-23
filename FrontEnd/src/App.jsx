import React, { useState, useEffect } from "react";
import CountryList from "./components/CountryList";
import CountryInfo from "./components/CountryInfo";
import "./styles.css";

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <div className="app">
      <h1>Country Info App</h1>
      {selectedCountry ? (
        <CountryInfo
          countryCode={selectedCountry}
          onBack={() => setSelectedCountry(null)}
        />
      ) : (
        <CountryList onSelectCountry={setSelectedCountry} />
      )}
    </div>
  );
}

export default App;