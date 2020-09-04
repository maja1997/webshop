import React from 'react';
import ProductPieChart from 'containers/dashboard/ProductPieChart';
import PageBarChart from 'containers/dashboard/PageBarChart';
import MonthlySalesChart from 'containers/dashboard/MonthlySalesChart';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  charts: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    margin: '20px 0',
  },
}));

function DashboardPage() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.header} variant="h2" align="center">Site analytics</Typography>

      <div className={classes.charts}>
        <ProductPieChart />
        <PageBarChart />
        <MonthlySalesChart />
      </div>
    </div>
  );
}

export default DashboardPage;
