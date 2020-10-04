import React, { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Volunteering from '../Volunteering/Volunteering';



const Home = () => {
  const {setVolunteeringData} = useContext(UserContext)
  useEffect(() => {
    fetch('http://localhost:5000/data')
    .then(res => res.json())
    .then(data => {
      setVolunteeringData(data)
    })
  }, [setVolunteeringData])
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Volunteering></Volunteering>
    </div>
  );
};

export default Home;