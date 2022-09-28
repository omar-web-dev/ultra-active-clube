import React from 'react';
import Activity from '../Activity/Activity';
import Cards from '../Cards/Cards';
import './Home.css'
const Home = () => {
    return (
        <div className='home-com'>
          <h1>I am a Home</h1> 
          <Cards />
          <Activity /> 
        </div>
    );
};

export default Home;