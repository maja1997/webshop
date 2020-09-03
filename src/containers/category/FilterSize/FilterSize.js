import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { debounce } from 'lodash';
import * as shopActions from 'redux/shop/ShopActions';
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

const allSizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

function FilterSize({ filters: { sizes }, applyFillter, fetchProducts }) {
  const classes = useStyles();
  const { categoryId } = useParams();

  const debounceFetch = useCallback(
    debounce(() => fetchProducts(categoryId), 250, { leading: false }),
    [fetchProducts],
  );

  const handleChange = (event) => {
    const targetSize = event.target.name;
    let newSizes;
    if (sizes.includes(event.target.name)) {
      newSizes = sizes.filter((size) => size !== targetSize);
      applyFillter({ sizes: newSizes });
    } else {
      newSizes = [...sizes, targetSize];
      applyFillter({ sizes: newSizes });
    }
    debounceFetch();
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
          {allSizes.map((size) => (
            <FormControlLabel
              className={classes.checkBox}
              control={(
                <Checkbox
                  checked={sizes.includes(size)}
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

const mapStateToProps = ({ shop: { filters } }) => ({
  filters,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(shopActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FilterSize);
