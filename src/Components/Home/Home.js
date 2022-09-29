import React from 'react';
import Activity from '../Activity/Activity';
import Cards from '../Cards/Cards';

import './Home.css'
const Home = () => {
    return (
        <div className='home-com'>
          <div className='cards-area'>
            <div className="home">
                <img className='logo' src={'https://i.ibb.co/3Fs58N6/logo.png'} alt='logo'/> 
                <Cards />
            </div>
            <Activity /> 
          </div>
        </div>
    );
};

export default Home;