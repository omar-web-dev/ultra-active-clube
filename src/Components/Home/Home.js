import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Blog from '../Blog/Blog';
import Cards from '../Cards/Cards';
import Header from '../Header/Header';
import './Home.css'



const Home = () => {
    const [gymInfos, setGymInfos] = useState([])
    const [times,setTimes] = useState(0) 
    function handelCard(previseTime){
      const sum = parseFloat(times) + parseFloat(previseTime)
      setTimes(sum)
    }

    
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
              <Header />
                {/* <img className='logo' src={'https://i.ibb.co/3Fs58N6/logo.png'} alt='logo'/>  */}
            <Cards setTimes={setTimes} gymInfos={gymInfos}  handelCard={handelCard}/>
            </div>
            <Activity times={times}/> 
          </div>
          <div className='extra'>
          <Blog />
          </div>
        </div>
    );
};

export default Home;