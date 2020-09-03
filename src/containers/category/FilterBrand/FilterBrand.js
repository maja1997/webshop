import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';
import { debounce } from 'lodash';
import * as shopActions from 'redux/shop/ShopActions';
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

const allBrands = ['ae', 'aerie'];

function FilterBrand({ filters: { brands }, fetchProducts, applyFillter }) {
  const classes = useStyles();
  const { categoryId } = useParams();

  const debounceFetch = useCallback(
    debounce(() => fetchProducts(categoryId), 250, { leading: false }),
    [fetchProducts],
  );

  const handleChange = (event) => {
    const targetBrand = event.target.name;
    let newBrands;
    if (brands.includes(event.target.name)) {
      newBrands = brands.filter((size) => size !== targetBrand);
      applyFillter({ brands: newBrands });
    } else {
      newBrands = [...brands, targetBrand];
      applyFillter({ brands: newBrands });
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
        <Typography className={classes.heading}>Brands</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.root}>
        <FormGroup>
          {allBrands.map((brand) => (
            <FormControlLabel
              className={classes.checkBox}
              control={(
                <Checkbox
                  checked={brands[brand]}
                  onChange={handleChange}
                  name={brand}
                  color="primary"
                />
                )}
              label={brand.toUpperCase()}
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterBrand);
