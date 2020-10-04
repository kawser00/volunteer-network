import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const RegisteredItem = () => {
  const {volunteeringData} = useContext(UserContext)
  console.log(volunteeringData);
  return (
    <div>
      
    </div>
  );
};

export default RegisteredItem;