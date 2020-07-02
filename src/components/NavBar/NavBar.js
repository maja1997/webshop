import React from 'react';
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 100,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar() {
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
          THE SHOP
        </Typography>
        {!matches ? (
          <>
            <Button size="large" color="inherit">Shop</Button>
            <Button size="large" color="inherit">Contact</Button>
            <Button size="large" color="inherit">Sign In</Button>
            <Button size="large" color="inherit">Sign Up</Button>
          </>
        ) : null}
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
