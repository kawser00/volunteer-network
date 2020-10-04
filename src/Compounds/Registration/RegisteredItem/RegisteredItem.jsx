import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../App';
import Header from '../../Header/Header';

const RegisteredItem = () => {
  const {volunteeringData} = useContext(UserContext)
  console.log(volunteeringData);

  useEffect(() => {
    fetch('http://localhost:5000/registerData')
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }, [])

  return (
    <div>
      <Header />
    </div>
  );
};

export default RegisteredItem;