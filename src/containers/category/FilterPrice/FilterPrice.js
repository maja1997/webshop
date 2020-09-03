import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';
import { debounce } from 'lodash';
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Slider,
  Input,
  Box,
} from '@material-ui/core';
import * as shopActions from 'redux/shop/ShopActions';
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

function FilterPrice({
  filters: { price },
  applyFillter,
  fetchProducts,
}) {
  const classes = useStyles();
  const { categoryId } = useParams();
  const debounceFetch = useCallback(
    debounce(() => fetchProducts(categoryId), 250, { leading: false }),
    [fetchProducts],
  );

  const handleChange = (event, newValue) => {
    applyFillter({ price: newValue });
    debounceFetch();
  };

  const handleLeftInputChange = (event) => {
    const lowerVal = event.target.value === '' ? '' : Number(event.target.value);
    const higherVal = price[1];
    applyFillter({ price: [lowerVal, higherVal] });
    debounceFetch();
  };

  const handleRightInputChange = (event) => {
    const higherVal = event.target.value === '' ? '' : Number(event.target.value);
    const lowerVal = price[0];
    applyFillter({ price: [lowerVal, higherVal] });
    debounceFetch();
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
          value={price}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          max={200}
          min={5}
        />
        <Box className={classes.inputContainer} justifyContent="space-around" flexDirection="row">
          <Input
            className={classes.input}
            value={price[0]}
            margin="dense"
            onChange={handleLeftInputChange}
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
            value={price[1]}
            margin="dense"
            onChange={handleRightInputChange}
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

const mapStateToProps = ({ shop: { filters } }) => ({
  filters,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(shopActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FilterPrice);
