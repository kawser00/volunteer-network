import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './SingleItem.css'

const SingleItem = (props) => {
  const { loggedInUser } = useContext(UserContext)
  const {volunteeringData} = useContext(UserContext)
  const { date, title, email } = props.singleRegisterData
  const singleUser = loggedInUser.email === email
  const userData = volunteeringData.title === title
  return (
    <>
      {
        singleUser &&
        <div className="card-style">
          <div className="row d-flex flex-wrap">
            <div className="col-md-3">
              <img src={userData.img} alt=""/>
            </div>
            <div className="col-md-6">
              <h4>{title}</h4>
              <h5>{date}</h5>
            </div>
            <div className="col-md-3 mt-5"><button style={{ width: '115px' }} className="btn btn-danger">Cancel</button></div>
          </div>
        </div>
      }
    </>
  );
};

export default SingleItem;