import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import LandingPage from 'containers/landing/LandingPage';
import NavBar from 'components/NavBar';
import SignIn from 'containers/user/SignIn';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            sdfsdfsa
          </Route>
        </Switch>
        {/* footer */}
      </Router>
    </>
  );
}

export default App;
