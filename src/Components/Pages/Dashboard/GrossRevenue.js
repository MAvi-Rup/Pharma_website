import React from 'react';
import { ComposedChart, Line, Bar, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './GrossRevenue.css';

const data = [
  { Month: 'Jan', MonthlySales: 4000, MonthlyCost: 2400, Profit: 1600 },
  { Month: 'Feb', MonthlySales: 3000, MonthlyCost: 1398, Profit: 1602 },
  { Month: 'Mar', MonthlySales: 2000, MonthlyCost: 9800, Profit: 2200 },
  { Month: 'Apr', MonthlySales: 2780, MonthlyCost: 3908, Profit: 3472 },
  { Month: 'May', MonthlySales: 1890, MonthlyCost: 4800, Profit: 4290 },
  { Month: 'Jun', MonthlySales: 2390, MonthlyCost: 3800, Profit: 690 },
  { Month: 'Jul', MonthlySales: 3490, MonthlyCost: 4300, Profit: 190 },
  { Month: 'Aug', MonthlySales: 4000, MonthlyCost: 2400, Profit: 1600 },
  { Month: 'Sep', MonthlySales: 3000, MonthlyCost: 1398, Profit: 1602 },
  { Month: 'Oct', MonthlySales: 2000, MonthlyCost: 9800, Profit: 2200 },
  { Month: 'Nov', MonthlySales: 2780, MonthlyCost: 3908, Profit: 3472 },
  { Month: 'Dec', MonthlySales: 1890, MonthlyCost: 4800, Profit: 4290 },
];

const GrossRevenue = () => {
  return (
    <div className="chart-container mt-5">
      <ComposedChart
        width={800}
        height={400}
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="Month" />
        <YAxis label={{ value: "Amount ($)", angle: -90, position: 'left' }} />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="Profit" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="MonthlyCost" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="MonthlySales" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default GrossRevenue;
