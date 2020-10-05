import React, { useContext } from 'react';
import './Volunteering.css'
import SingleVolunteering from '../SingleVolunteering/SingleVolunteering';
import { UserContext } from '../../App';

const Volunteering = () => {
  const { volunteeringData } = useContext(UserContext)

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-flex flex-wrap">
          {
            volunteeringData.map(volunteeringData => <SingleVolunteering volunteeringData={volunteeringData}
              key={volunteeringData.key}></SingleVolunteering>)
          }
        </div>
      </div>
    </div>
  );
};

export default Volunteering;