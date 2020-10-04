import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/logo.png';
import userIcon from '../../logos/users-alt.png';
import plusIcon from '../../logos/plus.png';


const AdminPage = () => {
  return (
    <div className="container-fluid mt-4 px-5">
      <div className="row">
        <div className="col-md-3">
          <Link to="/home"><img className="mb-5" height="60" src={logo} alt="" /></Link>
          <div style={{ cursor: 'pointer' }} className="text-primary"><img style={{ width: '20px' }} src={userIcon} alt="" /> Volunteer register list</div>
          <div style={{ cursor: 'pointer' }} className="mt-4"><img style={{ width: '20px' }} src={plusIcon} alt="" /> Add Event</div>
        </div>
      </div>
      <div className="col-md-9"></div>
    </div>
  );
};

export default AdminPage;