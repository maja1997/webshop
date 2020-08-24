import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
