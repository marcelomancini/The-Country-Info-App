# The-Country-Info-App

Country Info App

This is a full-stack application that allows users to view a list of countries and explore detailed information about each country, including:

A list of border countries (if applicable).

Historical population data displayed in a chart.

The country’s flag.

The backend is built with Node.js and Express, while the frontend is built with React. The application integrates external APIs to fetch the necessary data.

Features

Country List Page:

Displays a list of countries retrieved from the backend.

Each country name is clickable and navigates to a detailed view of that country.

Country Info Page:

Shows detailed information about the selected country:

Country Name prominently displayed.

Country Flag retrieved from the backend.

Border Countries Widget: Lists all neighboring countries with clickable links.

Population Chart: Displays historical population data using a line chart.

Technologies Used

Backend

Node.js

Express

node-fetch for external API requests

Frontend

React

React Router for navigation

Chart.js and react-chartjs-2 for displaying population data in a chart

External APIs

Date Nager API: Provides information about available countries and their borders.

Countries Now API: Used to fetch population data and flag images.

Installation and Setup

Backend

Clone the repository.

Navigate to the backend folder.

Install dependencies:

npm install

Start the server:

node server.js

The backend will run on http://localhost:5000.

Frontend

Navigate to the frontend folder.

Install dependencies:

npm install

Start the development server:

npm start

The frontend will run on http://localhost:3000.

API Endpoints

Backend Endpoints

/api/available-countries

Method: GET

Description: Retrieves a list of available countries from the Date Nager API.


/api/country-info/:countryCode

Method: GET

Description: Fetches detailed information about a specific country, including border countries, population data, and the country’s flag.



Usage

Open the frontend in your browser at http://localhost:3000.

Explore the list of countries.

Click on a country to view its detailed information.
