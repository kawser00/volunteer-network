import React, { useContext } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig'
import googleImg from '../../logos/google.png';
import logo from '../../logos/logo.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Login = () => {
  const {setLoggedInUser} = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  //********Google sign in */
  var provider = new firebase.auth.GoogleAuthProvider();
  const googleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        const {displayName, email} = result.user;
        const signInUser = {
          name: displayName,
          email: email,
        }
        setLoggedInUser(signInUser)
        history.replace(from);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  return (
    <div className="container-fluid text-center my-5">
      <Link to="/home"><img className="mb-5" height="60" src={logo} alt="" /></Link>
      <div style={{ height: '70vh' }} className=" w-50 box-style m-auto d-flex align-items-center justify-content-center">
        <div className="">
          <h3 className="font-weight-bold text-center mb-4">Login With</h3>
          <div onClick={googleSignIn} className="logIn d-flex">
            <span><img style={{ width: '23px' }} src={googleImg} alt="" /></span>
            <span className="text-dark font-weight-bold m-auto">Continue with Google</span>
          </div>
          <div className="mt-3">
            <span className="font-weight-bold">Don’t have an account?</span>
            <span style={{ cursor: 'pointer' }} className="text-primary"> Create an account</span>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;