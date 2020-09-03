import React, { useState } from 'react';
import {
  makeStyles, Typography, Paper, Button,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { toast } from 'react-toastify';
import { signInWithGoogle, auth } from 'firebase/firebase.util';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'url(https://wallpapercrafter.com/uploads/posts/72719-___fashion-clothing-jean-jacket-and-denim-hd.jpg)',
    minHeight: 'calc(100vh - 100px)',
    padding: 100,
    [theme.breakpoints.down('md')]: {
      padding: 0,
    },
  },
  form: {
    display: 'flex',
    margin: '0 auto',
    flexDirection: 'column',
    flexWrap: 'wrap',
    textAlign: 'center',
    maxWidth: 700,
    padding: '80px 100px',
  },
  input: {
    marginBottom: 30,
  },
  title: {
    marginBottom: 40,
  },
  buttonGroup: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();

  const notify = ({ message }) => {
    toast.error(message, { position: toast.POSITION.TOP_RIGHT, autoClose: 6000 });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (err) {
      notify(err);
    }
  };

  return (
    <div className={classes.root}>
      <Paper
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className={classes.form}
      >
        <Typography variant="h4" className={classes.title}>
          I already have an account
        </Typography>
        <Typography variant="h6" className={classes.title}>
          Sign in with your email and password
        </Typography>
        <TextField
          required
          id="email"
          type="email"
          label="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
          className={classes.input}
        />
        <TextField
          required
          id="password"
          type="password"
          label="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
          className={classes.input}
        />
        <div className={classes.buttonGroup}>
          <Button onClick={handleSubmit} className={classes.btn} variant="contained">
            Submit
          </Button>
          <Button
            color="secondary"
            className={classes.btn}
            variant="contained"
            onClick={signInWithGoogle}
          >
            Sign in with google
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default SignIn;
