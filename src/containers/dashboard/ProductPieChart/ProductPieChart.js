import React from 'react';
import {
  PieChart, Pie, Legend, Tooltip,
} from 'recharts';
import { Typography, makeStyles } from '@material-ui/core';

const data01 = [
  { name: 'Jeans', value: 400 }, { name: 'Sneakers', value: 300 },
  { name: 'Skirts', value: 300 }, { name: 'Jackets', value: 200 },
  { name: 'Hats', value: 278 },
];

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  title: {
    position: 'absolute',
    top: 50,
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
});
export default function ProductPieChart() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} align="center">Percentage of product sales by type</Typography>
      <PieChart width={400} height={400}>
        <Pie dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
        <Tooltip />
      </PieChart>
    </div>
  );
}
