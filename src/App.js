import React, { useEffect } from 'react';
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
import RegisteredItem from './Compounds/Registration/RegisteredItem/RegisteredItem';


export const UserContext = createContext()


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [volunteeringData, setVolunteeringData] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/data')
    .then(res => res.json())
    .then(data => {
      setVolunteeringData(data)
    })
  }, [setVolunteeringData])

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
        <Route path="/registration/:key">
          <Registration></Registration>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/item">
          <RegisteredItem></RegisteredItem>
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
