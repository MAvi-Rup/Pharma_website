import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 2000 },
  { name: "Apr", sales: 2780 },
  { name: "May", sales: 1890 },
  { name: "Jun", sales: 2390 },
  { name: "Jul", sales: 3490 },
  { name: "Aug", sales: 2000 },
  { name: "Sep", sales: 2780 },
  { name: "Oct", sales: 1890 },
  { name: "Nov", sales: 2390 },
  { name: "Dec", sales: 3490 }
];

const SalesBarChart = () => {
  return (
    <BarChart width={800} height={500} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="sales" fill="#8884d8" />
    </BarChart>
  );
};

export default SalesBarChart;
