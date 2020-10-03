import React from 'react';
import './App.css';
import Home from './Compounds/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Registration from './Compounds/Registration/Registration';
import Login from './Compounds/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/registration/:key">
          <Registration></Registration>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
