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
import PrivateRoute from './Compounds/PrivateRoute/PrivateRoute';
import { createContext } from 'react';
import { useState } from 'react';
import NoMatch from './Compounds/NoMatch/NoMatch';


export const UserContext = createContext()


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [volunteeringData, setVolunteeringData] = useState([])

  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser, volunteeringData, setVolunteeringData}}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute path="/registration/:key">
          <Registration></Registration>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
