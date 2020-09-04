import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Typography } from '@material-ui/core';

const data = [
  {
    name: 'Jackets', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Jeans', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Skirts', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Shoes', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Hats', uv: 1890, pv: 4800, amt: 2181,
  },
];

const getIntroOfPage = (label) => {
  if (label === 'Page A') {
    return 'Page A is about jackets';
  } if (label === 'Page B') {
    return 'Page B is about shoes';
  } if (label === 'Page C') {
    return 'Page C is about skirts';
  } if (label === 'Page D') {
    return 'Page D is about jeans';
  } if (label === 'Page E') {
    return 'Page E is about hats';
  }
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
      </div>
    );
  }

  return null;
};

export default function PageBarChart() {
  return (
    <div>
      <Typography align="center">
        Visites per page
      </Typography>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="pv" barSize={20} fill="#8884d8" />
      </BarChart>
    </div>
  );
}
