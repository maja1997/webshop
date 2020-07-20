import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { auth } from 'firebase/firebase.util';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 85,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar({ currentUser, history }) {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar variant="" color="transparent" position="static">
      <Toolbar className={classes.toolbar}>
        {matches ? (
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        ) : null}
        <Typography variant="h4" className={classes.title}>
          Clothop
        </Typography>
        {!matches ? (
          <>
            <Button component={Link} to="/" size="large" color="inherit">Shop</Button>
            <Button size="large" color="inherit">Contact</Button>
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
});

export default withRouter(connect(mapStateToProps)(NavBar));
