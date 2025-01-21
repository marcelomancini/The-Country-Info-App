import { useState } from 'react'


import './App.css'
import CountryInfo from './CountryList'
//import './CountryInfo'
//import './BorderCountries.jsx'
//import './PopulationChart.jsx'
/***Tasks:**

1. **Country List Page**
- Display a list of countries fetched from the endpoint.
- Each country name should be clickable and navigate the user to the Country Info Page.
2. **Country Info Page**
- Display detailed information about the selected country, including:
    - **Country Name**: Displayed prominently at the top.
    - **Country Flag**: Displayed alongside the country name using the URL fetched from the backend.
- **Border Countries Widget**:
    - Show a list of countries that border the selected country.
    - Each border country name should be clickable and navigate the user to the corresponding Country Info Page.
- **Population Chart**:
    - Implement a chart that shows the country’s population over time.
    - The X-axis should represent years, and the Y-axis should represent the population.
*/
function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <CountryInfo/>
      <h1>My Country Info App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
