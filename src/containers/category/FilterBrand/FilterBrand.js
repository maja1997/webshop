import React, { useState } from 'react';
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '0 50px',
  },
  checkBox: {
    width: 70,
  },
});

const sizes = ['ae', 'aerie'];

function FilterBrand() {
  const classes = useStyles();
  const [checkState, setCheckState] = useState({
    ae: true,
    aerie: true,
  });

  const handleChange = (event) => {
    setCheckState({ ...checkState, [event.target.name]: event.target.checked });
  };

  return (
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>Brands</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.root}>
        <FormGroup>
          {sizes.map((size) => (
            <FormControlLabel
              className={classes.checkBox}
              control={(
                <Checkbox
                  checked={checkState.checkedB}
                  onChange={handleChange}
                  name={size}
                  color="primary"
                />
                )}
              label={size.toUpperCase()}
            />
          ))}
        </FormGroup>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default FilterBrand;
