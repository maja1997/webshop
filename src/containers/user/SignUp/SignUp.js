import React, { useState } from 'react';
import { auth, createUserDocument } from 'firebase/firebase.util';
import {
  makeStyles, Typography, Paper, Button,
} from '@material-ui/core';
import { toast } from 'react-toastify';
import TextField from '@material-ui/core/TextField';

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

function SignUp() {
  const [displayName, setdisplayName] = useState('');
  const [displayNameError, setDisplayNameError] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const classes = useStyles();

  const notify = ({ message }) => {
    toast.error(message, { position: toast.POSITION.TOP_RIGHT, autoClose: 6000 });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return;
    }

    if (displayName.length < 4) {
      setDisplayNameError('sorry that name is too short');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserDocument(user, { displayName });
      setdisplayName('');
      setEmail('');
      setPassword('');
      setconfirmPassword('');
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
          I do not have an account
        </Typography>
        <Typography variant="h6" className={classes.title}>
          Sign up with your email and password
        </Typography>
        <TextField
          required
          id="displayName"
          type="text"
          label="displayName"
          onChange={(event) => {
            setdisplayName(event.target.value);
          }}
          value={displayName}
          className={classes.input}
          helperText={displayNameError}
          error={displayNameError}
        />
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
        <TextField
          required
          id="confirmPassword"
          type="password"
          label="confirmPassword"
          onChange={(event) => {
            setconfirmPassword(event.target.value);
          }}
          value={confirmPassword}
          className={classes.input}
        />
        <div className={classes.buttonGroup}>
          <Button onClick={handleSubmit} className={classes.btn} variant="contained">
            SIGN UP
          </Button>

        </div>
      </Paper>
    </div>
  );
}

export default SignUp;
