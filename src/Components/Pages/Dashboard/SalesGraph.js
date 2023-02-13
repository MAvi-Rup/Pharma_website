import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

const SalesGraph = () => {
  const [salesData] = useState([
    {
      id: 1,
      month: "January",
      revenue: 25000
    },
    {
      id: 2,
      month: "February",
      revenue: 28000
    },
    {
      id: 3,
      month: "March",
      revenue: 32000
    },
    {
      id: 4,
      month: "April",
      revenue: 35000
    },
    {
      id: 5,
      month: "May",
      revenue: 37000
    }
  ]);

  const data = {
    labels: salesData.map(sale => sale.month),
    datasets: [
      {
        label: "Revenue (in USD)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 99, 132, 0.4)",
        hoverBorderColor: "rgba(255, 99, 132, 1)",
        data: salesData.map(sale => sale.revenue)
      }
    ]
  };

  return (
    <div>
      <h2>Sales Report</h2>
      <Bar data={data} />
    </div>
  );
};

export default SalesGraph;
