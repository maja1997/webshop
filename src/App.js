import React, { useEffect } from 'react';
import {
  Switch, Route, Redirect, BrowserRouter as Router,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import LandingPage from 'containers/landing/LandingPage';
import NavBar from 'components/NavBar';
import SignIn from 'containers/user/SignIn';
import { auth, createUserDocument } from 'firebase/firebase.util';
import SignUp from 'containers/user/SignUp';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from 'redux/user/UserActions';
import CategoryPage from 'containers/category/CategoryPage';
import ProductPage from 'containers/product/ProductPage/ProductPage';
import CheckoutPage from 'containers/checkout/CheckoutPage';

function App({ currentUser, setCurrentUser }) {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);

        userRef.onSnapshot((onSnapshot) => {
          setCurrentUser({
            id: onSnapshot.id,
            ...onSnapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <>
      <CssBaseline />
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/sign-in" render={() => (currentUser ? (<Redirect to="/" />) : (<SignIn />))} />
          <Route path="/sign-up" render={() => (currentUser ? (<Redirect to="/" />) : (<SignUp />))} />
          <Route exact path="/categories/:categoryId">
            <CategoryPage />
          </Route>
          <Route path="/categories/:categoryId/:productId">
            <ProductPage />
          </Route>
          <Route exact path="/checkout">
            <CheckoutPage />
          </Route>
        </Switch>
        {/* footer */}
      </Router>
    </>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(userActions, dispatch);

//  App komponenta samo setuje usera,
//  nigde ga ne koristi i zato nam ne treba prvi parametar kod connect
export default connect(mapStateToProps, mapDispatchToProps)(App);
