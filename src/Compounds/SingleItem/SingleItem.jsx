import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import './SingleItem.css'

const SingleItem = (props) => {
  const { _id, date, title, email } = props.singleRegisterData

  const [userData, setUserData] = useState([])
  const { loggedInUser } = useContext(UserContext)
  const { volunteeringData } = useContext(UserContext)
  const singleUser = loggedInUser.email === email

  useEffect(() => {
    const userItem = volunteeringData.find(data => data.title === title)
    setUserData(userItem)
  }, [title, volunteeringData])

  function deleteData(id) {
    console.log(userData);
    props.volunteerData(id)
    fetch(`https://enigmatic-river-92376.herokuapp.com/delete/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => { })
  }
  return (
    <>
      {
        singleUser && userData &&
        <div className="card-style col-md-5 d-flex">
            <img className="img-fluid rounded img-size mr-3" src={userData.img} alt="" />
          <div className="">
            <h4>{title}</h4>
            <h5>{date}</h5>
          </div>
          <div className="mt-5">
            <button onClick={() => deleteData(`${_id}`)} style={{ width: '115px', marginTop: '63px' }} className="btn btn-danger">Cancel</button>
          </div>
        </div>
      }
    </>
  );
};

export default SingleItem;