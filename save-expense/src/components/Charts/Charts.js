import React from "react";

import { Bar } from "react-chartjs-2";

const Charts = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novembor",
    "December",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "spendings ₨",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        height: "50%",
        width: "40%",
        data: [22, 10, 5, 2, 20, 30, 45, 20, 19, 67, 4, 77],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default Charts;
