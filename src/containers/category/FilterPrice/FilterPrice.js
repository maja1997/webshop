import React, { useState } from 'react';
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Slider,
  Input,
  Box,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  expansionPanelDetails: {
    display: 'block',
  },
  inputContainer: {
    display: 'flex',
  },
});

function FilterPrice() {
  const classes = useStyles();
  const [value, setValue] = useState([1000, 50000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLeftInputChange = (event) => {
    setValue([event.target.value === '' ? '' : Number(event.target.value), value[1]]);
  };

  const handleRightInputChange = (event) => {
    setValue([value[0], event.target.value === '' ? '' : Number(event.target.value)]);
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 50000) {
      setValue(50000);
    }
  };

  return (
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>Price</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails
        className={classes.expansionPanelDetails}
      >
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          max={10000}
          min={500}
        />
        <Box className={classes.inputContainer} justifyContent="space-around" flexDirection="row">
          <Input
            className={classes.input}
            value={value[0]}
            margin="dense"
            onChange={handleLeftInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
          <Input
            className={classes.input}
            value={value[1]}
            margin="dense"
            onChange={handleRightInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Box>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default FilterPrice;
