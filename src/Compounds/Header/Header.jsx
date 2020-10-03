import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../logos/logo.png'

const Header = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand">
  <Link to="/" className="navbar-brand">
    <img height="60" src={logo} alt=""/>
  </Link>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/home" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link">Donation</Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link">Event</Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link">Blog</Link>
      </li>
      <li className="nav-item">
      <Link to="/registration"><button className="btn btn-primary head-btn">Register</button></Link>
      </li>
      <li className="nav-item">
        <button className="btn btn-dark head-btn">Admin</button>
      </li>
    </ul>
</nav>
    </div>
  );
};

export default Header;
