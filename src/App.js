import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/home/home.component';

import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={HomePage} />
      </Fragment>
    </Router>
  );
}

export default App;
