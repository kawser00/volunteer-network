import React, {useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import SingleItem from '../SingleItem/SingleItem';
import Spinner from '../../logos/spinner1.gif'


const RegisteredItem = () => {
  const [registeredData, setRegisteredData] = useState()

  useEffect(() => {
    fetch('https://enigmatic-river-92376.herokuapp.com/registerData')
    .then(res => res.json())
    .then(data => {
      setRegisteredData(data)
      document.getElementById('spinner1').style.display='none';
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
        <img id="spinner1" src={Spinner} alt=""/>
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