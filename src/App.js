//react core modules
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import components
import Home from './components/pages/Home.jsx';
import Nav from './components/molecules/Nav.jsx';
import Login from './components/pages/Login.jsx';
import SignUp from './components/pages/SignUp.jsx';
import DisplayPackages from './components/molecules/DisplayPackages.jsx';
import Navbar from './components/molecules/Navbar';

import LandingPage from './components/pages/LandingPage';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/home" component={LandingPage} exact />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
