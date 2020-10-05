import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import './SingleItem.css'

const SingleItem = (props) => {
  const { date, title, email } = props.singleRegisterData

  const [userData, setUserData] = useState(null)
  const { loggedInUser } = useContext(UserContext)
  const {volunteeringData} = useContext(UserContext)
  const singleUser = loggedInUser.email === email

  useEffect(() => {
    const userItem = volunteeringData.find(data => data.title === title)
    setUserData(userItem)
  }, [title, volunteeringData])
  return (
    <>
      {
        singleUser && userData &&
        <div className="card-style">
          <div className="row d-flex flex-wrap">
            <div className="col-md-3">
              <img className="img-fluid rounded img-size" src={userData.img} alt=""/>
            </div>
            <div className="col-md-6">
              <h4>{title}</h4>
              <h5>{date}</h5>
            </div>
            <div className="col-md-3 mt-5"><button style={{ width: '115px', marginTop:'63px' }} className="btn btn-danger">Cancel</button></div>
          </div>
        </div>
      }
    </>
  );
};

export default SingleItem;