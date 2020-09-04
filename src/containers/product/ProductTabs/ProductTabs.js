import React from 'react';
import {
  AppBar,
  Tab,
  Tabs,
  makeStyles,
  Typography,
} from '@material-ui/core';
import TabPanel from 'components/TabPanel';
import ReactPlayer from 'react-player';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function ProductTabs({ product }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Details" />
          <Tab label="Comments" />
          <Tab label="Videos" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography className={classes.detailsTitle} variant="h5">
          Details:
        </Typography>
        <Typography className={classes.description} variant="body1">
          <ul>
            {product.description.map((bullet) => <li>{bullet}</li>)}
          </ul>
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        No comments...
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ReactPlayer
          url={product.video}
        />
      </TabPanel>
    </div>
  );
}

export default ProductTabs;
