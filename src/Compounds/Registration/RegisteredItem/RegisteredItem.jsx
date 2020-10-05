import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import Header from '../../Header/Header';
import SingleItem from '../../SingleItem/SingleItem';

const RegisteredItem = () => {
  const {volunteeringData} = useContext(UserContext)
  const [registeredData, setRegisteredData] = useState()
  console.log(volunteeringData);

  useEffect(() => {
    fetch('http://localhost:5000/registerData')
    .then(res => res.json())
    .then(data => {
      setRegisteredData(data)
    })
  }, [])

  return (
    <div className="container-fluid">
      <Header />
      <div className="row my-5">
        <div className="d-flex flex-wrap">
        {
          registeredData &&
          registeredData.map(singleRegisterData => <SingleItem singleRegisterData={singleRegisterData} key={singleRegisterData._id}></SingleItem>)
        }
        </div>
      </div>
    </div>
  );
};

export default RegisteredItem;