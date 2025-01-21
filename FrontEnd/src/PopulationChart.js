import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, Tooltip, Legend);

const PopulationChart = ({ populationData }) => {
  const years = populationData.map((item) => item.year);
  const populations = populationData.map((item) => item.value);

  const data = {
    labels: years,
    datasets: [
      {
        label: "Population",
        data: populations,
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.3)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
  };

  return (
    <div>
      <h2>Population Over Time</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default PopulationChart;
