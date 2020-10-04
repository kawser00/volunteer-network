import React, { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Volunteering from '../Volunteering/Volunteering';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Volunteering></Volunteering>
    </div>
  );
};

export default Home;