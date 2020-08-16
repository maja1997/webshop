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
    width: 60,
  },
});

const sizes = ['36', '37', '38', '39', '40', '41'];

function FilterSizeSneakers() {
  const classes = useStyles();
  const [checkState, setCheckState] = useState({
    36: false,
    37: false,
    38: false,
    39: false,
    40: false,
    41: false,
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
        <Typography className={classes.heading}>Sizes</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.root}>
        <FormGroup row>
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

export default FilterSizeSneakers;
