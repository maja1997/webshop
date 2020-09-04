import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import { Typography } from '@material-ui/core';

const data = [
  {
    name: 'January', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Februar', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'March', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'April', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'May', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'June', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

export default function MonthlySalesChart() {
  return (
    <div>
      <Typography align="center">
        Monthly product sales
      </Typography>
      <AreaChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
}
