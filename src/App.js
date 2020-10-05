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
import RegisteredItem from './Compounds/RegisteredItem/RegisteredItem';
import AdminPage from './Compounds/AdminPage/AdminPage';


export const UserContext = createContext()


function App() {
  const [loggedInUser, setLoggedInUser] = useState({ isSignIn: false })
  const [volunteeringData, setVolunteeringData] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/data')
      .then(res => res.json())
      .then(data => {
        setVolunteeringData(data)
      })
  }, [setVolunteeringData])

  return (
    <div style={{ background: '#F8FAFC' }}>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser, volunteeringData, setVolunteeringData }}>
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
            <Route path="/item">
              <RegisteredItem></RegisteredItem>
            </Route>
            <Route path="/admin">
              <AdminPage></AdminPage>
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>

  );
}

export default App;
