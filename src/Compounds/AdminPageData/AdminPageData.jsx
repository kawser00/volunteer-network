import React from 'react';
import './AdminPageData.css'
import deleteImg from '../../logos/trash.png'

const AdminPageData = (props) => {
  const {name, email, title, date, _id} = props.userData

  function deleteData(id) {
    props.volunteerData(id)
    fetch(`http://localhost:5000/delete/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(result => {})
  }
  return (
    <div className="d-flex">
    <span className="mb-2 margin">{name}</span>
    <span className="mb-2 margin">{email}</span>
    <span className="mb-2 margin">{date}</span>
    <span className="mb-2 space">{title}</span>
    <span onClick={() => deleteData(`${_id}`)} className="mb-2 between" > <img className="dlt-img" src={deleteImg} alt=""/></span> <br/>
    </div>
  );
};

export default AdminPageData;