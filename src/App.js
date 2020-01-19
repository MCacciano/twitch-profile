import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/home/home.component';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={HomePage} />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
