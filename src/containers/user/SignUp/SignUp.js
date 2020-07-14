import React, { useState } from 'react';
import { auth, createUserDocument } from 'firebase/firebase.util';
import {
  makeStyles, Typography, Paper, Button,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: 'url(https://wallpapercrafter.com/uploads/posts/72719-___fashion-clothing-jean-jacket-and-denim-hd.jpg)',
    minHeight: 'calc(100vh - 100px)',
    padding: 100,
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
  },
}));

function SignUp() {
  const [displayName, setdisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const classes = useStyles();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
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
      // todo
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
