import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Cards from '../Cards/Cards';
import './Home.css'



const Home = () => {
    const [gymInfos, setGymInfos] = useState([])
    const [times,setTimes] = useState('') 
    let newArry = []

    console.log(times);
    
    useEffect(()=>{
      fetch(`gym.json`)
      .then(res=>res.json())
      .then(data=>setGymInfos(data))
    },[])
    // console.log(gymInfos);
    return (
        <div className='home-com'>
          <div className='cards-area'>
            <div className="home">
                <img className='logo' src={'https://i.ibb.co/3Fs58N6/logo.png'} alt='logo'/> 
                <Cards setTimes={setTimes} gymInfos={gymInfos} />
            </div>
            <Activity /> 
          </div>
        </div>
    );
};

export default Home;