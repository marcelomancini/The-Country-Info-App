import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function PopulationChart({ populationData }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Track chart instance

  useEffect(() => {
    
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    
    if (chartRef.current && populationData) {
      const ctx = chartRef.current.getContext("2d");

      chartInstance.current= new Chart(ctx, {
        type: "line",
        data: {
          labels: populationData.map((data) => data.year),
          datasets: [
            {
              label: "Population",
              data: populationData.map((data) => data.value),
              borderColor: "rgba(75, 192, 192, 1)",
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: "Year",
              },
            },
            y: {
              title: {
                display: true,
                text: "Population",
              },
            },
          },
        },
      });
    }
    // Cleanup on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [populationData]);

  return <canvas ref={chartRef} />;
}

export default PopulationChart;