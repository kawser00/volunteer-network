import React, {useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import SingleItem from '../SingleItem/SingleItem';

const RegisteredItem = () => {
  const [registeredData, setRegisteredData] = useState()

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
    <div className="container-fluid">
      <Header />
      <div className="row my-5">
        <div className="d-flex flex-wrap w-75 m-auto justify-content-between">
        {
          registeredData &&
          registeredData.map(singleRegisterData => <SingleItem singleRegisterData={singleRegisterData} key={singleRegisterData._id} volunteerData={volunteerData}></SingleItem>)
        }
        </div>
      </div>
    </div>
  );
};

export default RegisteredItem;