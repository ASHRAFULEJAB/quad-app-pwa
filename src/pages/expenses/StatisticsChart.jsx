import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto"; // Automatically import necessary parts of Chart.js

const StatisticsChart = () => {
  // Utility functions for generating data and colors
  const Utils = {
    CHART_COLORS: {
      green: "#8AB53E",
      grey: "#D3D3D3",
    },
    numbers: function ({ count, min, max }) {
      const arr = [];
      for (let i = 0; i < count; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
      }
      return arr;
    },
    transparentize: function (color, opacity) {
      const alpha = 1 - opacity;
      return color.replace(/[^,]+(?=\))/, alpha);
    },
    months: function ({ count }) {
      return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].slice(0, count);
    },
  };

  const DATA_COUNT = 7;
  const labels = Utils.months({ count: DATA_COUNT });

  // Setup data for the chart
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Hgb",
        data: [90, 110, 150, 85, 95, 100, 105], // Your data points
        backgroundColor: function (context) {
          return context.dataIndex === 2
            ? Utils.CHART_COLORS.green
            : Utils.CHART_COLORS.grey;
        },
        borderRadius: 60,
        borderSkipped: false,
        barPercentage: 0.5, // Adjusts the thickness of the bars
        categoryPercentage: 0.5, // Adjusts spacing between bars
      },
    ],
  };

  // Config for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },

      tooltip: {
        enabled: true, // Disable tooltips
      },
      annotation: {
        annotations: {
          topLabel: {
            type: "label",
            content: ["150 Hgb"],
            color: "#8AB53E",
            backgroundColor: "rgba(0,0,0,0)",
            font: {
              size: 14,
              weight: "bold",
            },
            xValue: "Wed",
            yValue: 150,
            yAdjust: -20,
          },
          bottomLabel: {
            type: "label",
            content: ["74 Hgb"],
            color: "#8AB53E",
            backgroundColor: "rgba(0,0,0,0)",
            font: {
              size: 14,
              weight: "bold",
            },
            xValue: "Wed",
            yValue: 74,
            yAdjust: 20,
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: -10,
        max: 160,
        ticks: {
          stepSize: 20,
        },
        grid: {
          drawBorder: false,
          color: "#F1F1F1",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <div className="mb-6">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default StatisticsChart;
