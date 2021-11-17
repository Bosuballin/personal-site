import React from "react";
import { Bar, Chart } from "react-chartjs-2";
import { Container } from "react-bootstrap";

const data = {
  labels: [
    "Windows & Setup",
    "Computer Systems & Hardware",
    "Design-Layer (Color Theory, Typography, Photoshop)",
    "Front End (HTML5, CSS, Javascript, React, Bootstrap, jQuery)",
    "Back End (Node, Express, RESTful API, Postman)",
    "Authentication & Security",
    "Data Layer (MongoDB, Mongoose)",
  ],
  datasets: [
    {
      label: "Proficiency",
      data: [10, 10, 9, 9, 8, 7, 6],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: "y",
  responsive: true,
  plugins: {
    tooltip: {
      titleFont: { weight: "600", size: 15 },
      callbacks: {
        label: function (context) {
          var label = context.dataset.label || "";

          return label;
        },
      },
    },
    legend: { display: false, position: "right" },
    title: { display: false },
  },
  scales: {
    y: {
      ticks: {
        color: "white",
        font: function (context) {
          var width = context.chart.width;
          var size = Math.round(width / 50);
          return {
            size: size,
            weight: 600,
            family: "'Montserrat', sans-serif",
          };
        },
        mirror: true,
      },
      grid: {
        display: false,
      },
      beginAtZero: true,
    },
    x: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
};

const HorizontalBarChart = () => (
  <>
    <Container className="chart-container">
      <div id="skills" className="chart-header">
        <h2 className="skills-title align-center my-2 pt-2 pb-5">Skills</h2>
        <div className="links"></div>
      </div>
      <Bar data={data} options={options} />
    </Container>
  </>
);

export default HorizontalBarChart;
