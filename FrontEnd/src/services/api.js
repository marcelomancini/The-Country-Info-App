const BASE_URL = "http://localhost:5000/api";

export const getAvailableCountries = async () => {
  const response = await fetch(`${BASE_URL}/available-countries`);
  return response.json();
};

export const getCountryInfo = async (countryCode) => {
  const response = await fetch(`${BASE_URL}/country-info/${countryCode}`);
  return response.json();
};
