import React from 'react';
import './Volunteering.css'
import { useState } from 'react';
import SingleVolunteering from '../SingleVolunteering/SingleVolunteering';
import fakeData from './VolunteeringData'

const Volunteering = () => {
  const [volunteeringData] = useState(fakeData)
  console.log(volunteeringData);

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