import React, { useContext, useEffect } from 'react';
import './Volunteering.css'
import SingleVolunteering from '../SingleVolunteering/SingleVolunteering';
import { UserContext } from '../../App';
import Spinner from '../../logos/spinner1.gif'


const Volunteering = () => {
  const { volunteeringData, setVolunteeringData } = useContext(UserContext)
  useEffect(() => {
    fetch('https://enigmatic-river-92376.herokuapp.com/data')
      .then(res => res.json())
      .then(data => {
        setVolunteeringData(data)
        document.getElementById('spinner1').style.display = 'none';
      })
  }, [setVolunteeringData])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-flex flex-wrap">
        <img id="spinner1" src={Spinner} alt=""/>
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