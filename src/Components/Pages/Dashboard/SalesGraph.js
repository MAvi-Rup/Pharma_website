import React from 'react';
import { LineChart,Line, YAxis, XAxis, Tooltip, AreaChart, Area } from 'recharts';

const SalesGraph = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='container d-flex flex-wrap'> 
          <LineChart className='p-3' width={550} height={500} data={data} >
            <Line dataKey={'investment'}>TK</Line>
            <Line dataKey={'sell'}></Line>
            <Line dataKey={'revenue'}></Line>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <XAxis dataKey='month'></XAxis>
          </LineChart>
          <AreaChart className='p-3' width={550} height={500} data={data}>
              <Area dataKey={'investment'}></Area>
              <Area dataKey={'sell'}></Area>
              <Area dataKey={'revenue'}></Area>
              <YAxis></YAxis>
            <Tooltip></Tooltip>
            <XAxis dataKey='month'></XAxis>

          </AreaChart>
        </div>

       
    );
};

export default SalesGraph;