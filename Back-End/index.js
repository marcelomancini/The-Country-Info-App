const express = require('express');
const fetch = require('node-fetch').default;

const app = express();
const port = 5000;

app.use(express.json());

app.get('/api/available-countries', async (req, res) => {
    try {
        console.log(fetch);
        const response = await fetch("https://date.nager.at/api/v3/AvailableCountries");

        const countries = await response.json();
        res.json(countries);
    } catch (error) {
        console.log("error -> ", error)
        res.status(500).json({ error: "Error fetching available countries" });
    }
});

app.get("/api/country-info/:countryCode", async (req, res) => {
    const { countryCode } = req.params;
    try{
        //THIS IS FOR COUNTRY BESIDE ONE ANOTHER
        const bordersResponse = await fetch(`https://date.nager.at/api/v3/countryInfo/${countryCode}`);
        const bordersData = await bordersResponse.json();

        //THIS IS FOR POPULATION
        const populationResponse = await fetch(`https://countriesnow.space/api/v0.1/countries/population`);
        const populationData = await populationResponse.json();
        
        //THIS IS FOR FLAG
        const flagResponse = await fetch(`https://countriesnow.space/api/v0.1/countries/flag/images/`);
        const flagData = await flagResponse.json();

        const flagInfo = flagData.data.find((country) => country.iso2 === countryCode);
        //ALL THE DATA
        const countryInfo = {
            borderCountries: bordersData.borders,
            populationData: populationData.data.find((country) => country.code === flagInfo.iso3),
            flagURL: flagInfo.flag,
        };

        res.json(countryInfo);
    }catch(error){
        res.status(500).json({ error: "Error fetching country information" });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
