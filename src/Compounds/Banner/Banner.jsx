import React from 'react';
import './Banner.css'

const Banner = () => {
  return (
    <div className="container-fluid form-style my-5">
      <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
      <div className="my-4">
        <input className="searchBox position-relative" type="text" placeholder="Search...."/>
        <input className="searchBtn btn btn-primary position-absolute" type="submit" value="Search"/>
      </div>
    </div>
  );
};

export default Banner;