import React from 'react';
import Blog from '../Blog/Blog';
import SingleCard from '../SingleCard/SingleCard';
import './Cards.css'

const Cards = ({gymInfos,setTimes,handelCard}) => {
    // console.log(setTimes);
    return (
        <div className='cards-com'>
           <h3>Select today’s exercise</h3> 
           <div className='single-card-com'>
           {gymInfos.map(gymInfo => <SingleCard  handelCard={handelCard} key={gymInfo.id}  gymInfo={gymInfo}/>)}  
           </div>
                {/* <Blog/> */}
        </div>
    );
};

export default Cards;