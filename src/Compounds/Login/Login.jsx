import React from 'react';
import './Login.css';
import googleImg from '../../logos/google.png';
import logo from '../../logos/logo.png'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container-fluid text-center my-5">
      <Link to="/home"><img className="mb-5" height="60" src={logo} alt="" /></Link>
      <div style={{height:'70vh'}} className=" w-50 form-style m-auto d-flex align-items-center justify-content-center">
        <div className="">
        <h3 className="font-weight-bold text-center mb-4">Login With</h3>
        <div className="logIn d-flex">
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