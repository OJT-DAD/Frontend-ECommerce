import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all';
import { Provider } from 'react-redux';

import './includes/bootstrap';
import './App.css';
import App from './App';
import configureStore from './redux/cofigureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);