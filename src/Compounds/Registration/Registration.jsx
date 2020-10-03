import React from 'react';
import './Registration.css';
import logo from '../../logos/logo.png'
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import fakeData from '../Volunteering/VolunteeringData'

const Registration = () => {
  const {key} = useParams()
  const [volunteeringData] = useState(fakeData)
  const volunteerItem = volunteeringData.find (data => data.key === key)

  return (
    <div>
      <div className="container-fluid text-center my-5">
        <Link to="/home"><img className="mb-5" height="60" src={logo} alt="" /></Link>
        <div className="w-50 form-style m-auto">
          <h3 className="font-weight-bold text-left mb-5">Register as a Volunteer</h3>
          <form className="">
          <div className="form-group">
              <input type="text" className="form-control"  placeholder="Full Name" required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username or Email" required />
            </div>
            <div className="form-group">
              <input type="date" className="form-control"  placeholder="Date" required />
            </div>
            <div className="form-group">
              <input type="text" className="form-control"  placeholder="Description" required />
            </div>
            <div className="form-group">
              <input type="text" className="form-control font-weight-bold"  defaultValue={volunteerItem.title} disabled />
            </div>
            
            <button type="submit" className="btn btn-primary w-100 my-4">Registration</button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Registration;