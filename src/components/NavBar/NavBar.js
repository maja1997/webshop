import React, { useCallback, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  makeStyles,
  TextField,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { debounce } from 'lodash';
import { Autocomplete } from '@material-ui/lab';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import * as searchActions from 'redux/search/search.actions';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { auth } from 'firebase/firebase.util';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 110,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  searchOption: {
    color: 'black',
    textDecoration: 'none',
    width: '100%',
  },
}));

function NavBar({
  currentUser,
  searchProducts,
  history,
  fetchSearchResults,
  searchLoading,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const debounceFetch = useCallback(
    debounce((name) => fetchSearchResults(name), 350),
    [fetchSearchResults],
  );
  const optionToRender = (option) => (
    <Link className={classes.searchOption} to={`/categories/${option.type}/${option.id}`}>
      {option.name}
    </Link>
  );

  return (
    <AppBar variant="" color="transparent" position="static">
      <Toolbar className={classes.toolbar}>
        {matches ? (
          <IconButton onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        ) : null}
        <Menu
          id="long-menu"
          keepMounted
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: 48 * 4.5,
              width: '20ch',
            },
          }}
        >
          <Button component={Link} to="/" size="large" color="inherit">Shop</Button>
          {
              currentUser ? (
                <Button size="large" color="inherit" onClick={() => auth.signOut()}>
                  SIGN OUT
                </Button>
              ) : (
                <Button component={Link} to="/sign-in" size="large" color="inherit">Sign In</Button>
              )
            }
          {
              currentUser ? (
                null
              ) : (
                <Button component={Link} to="/sign-up" size="large" color="inherit">Sign Up</Button>
              )
            }
        </Menu>
        <Typography variant="h4" className={classes.title}>
          Bella Ciao
        </Typography>
        <Autocomplete
          id="combo-box-demo"
          options={searchProducts}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          loading={searchLoading}
          loadingText="loading..."
          renderInput={(params) => (
            <TextField
              {...params}
              label="search"
              variant="outlined"
              onChange={(e) => debounceFetch(e.target.value)}
            />
          )}
          renderOption={optionToRender}
        />
        {!matches ? (
          <>
            <Button component={Link} to="/" size="large" color="inherit">Shop</Button>
            {
              currentUser ? (
                <Button size="large" color="inherit" onClick={() => auth.signOut()}>
                  SIGN OUT
                </Button>
              ) : (
                <Button component={Link} to="/sign-in" size="large" color="inherit">Sign In</Button>
              )
            }
            {
              currentUser ? (
                null
              ) : (
                <Button component={Link} to="/sign-up" size="large" color="inherit">Sign Up</Button>
              )
            }

          </>
        ) : null}
        <IconButton onClick={() => history.push('/checkout')} color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  searchProducts: state.search.searchedProducts,
  searchLoading: state.search.loading,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(searchActions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
