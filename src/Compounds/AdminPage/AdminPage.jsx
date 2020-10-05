import React, { useEffect, useState } from 'react';
import './AdminPage.css'
import { Link } from 'react-router-dom';
import logo from '../../logos/logo.png';
import userIcon from '../../logos/users-alt.png';
import plusIcon from '../../logos/plus.png';
import AdminPageData from '../AdminPageData/AdminPageData';

const AdminPage = () => {
  const [registeredData, setRegisteredData] = useState()
  const [isRegister, setIsRegister] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/registerData')
      .then(res => res.json())
      .then(data => {
        setRegisteredData(data)
      })
  }, [])

  const volunteerData = (id) => {
    const userItem = registeredData.filter(data => data._id !== id)
    setRegisteredData(userItem)
  }

  return (
    <div className="container-fluid mt-4 px-3 d-flex">
      <div className="col-md-2 bg-white">
        <Link to="/home"><img className="mb-5" height="50" src={logo} alt="" /></Link>
        <div onClick={() => setIsRegister(true)} style={{ cursor: 'pointer' }} className="text-primary"><img style={{ width: '20px' }} src={userIcon} alt="" /> Volunteer register list</div>
        <div onClick={() => setIsRegister(false)} style={{ cursor: 'pointer' }} className="mt-4"><img style={{ width: '20px' }} src={plusIcon} alt="" /> Add Event</div>
      </div>
      <div className="col-md-10">
        <h3>Volunteer Register List</h3>
        <div className="p-4 bg-white border-style">
          {
            isRegister ?
            <div>
            <ul className="d-flex justify-content-between text-muted title-style">
              <li className="">Name</li>
              <li className="">Email ID</li>
              <li className="">Registration Date </li>
              <li className="">Volunteer List</li>
              <li className="">Action</li>
            </ul>
            <div className="">
              {
                registeredData &&
                registeredData.map(userData => <AdminPageData userData={userData} key={userData._id} volunteerData={volunteerData} ></AdminPageData>)
              }
            </div>
          </div>
          :
          <div className="">
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Email</label>
                  <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="form-group col-md-6">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group">
                  <label>Description:</label>
                  <textarea className="form-control" rows="5" cols="63" id="comment"></textarea>
                </div>
                <div className="form-group col-md-6">
                  <label>Banner</label> <br />
                  <input type="file" />
                </div>
                <button className="btn btn-primary text-center" type="submit">Submit</button>
              </div>
            </form>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default AdminPage;