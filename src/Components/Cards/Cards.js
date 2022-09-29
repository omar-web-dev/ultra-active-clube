import React from 'react';
import SingleCard from '../SingleCard/SingleCard';
import './Cards.css'

const Cards = ({gymInfos}) => {
    // console.log(gymInfos);
    return (
        <div className='cards-com'>
           <h3>Select today’s exercise</h3> 
           <div className='single-card-com'>
           {gymInfos.map(gymInfo => <SingleCard key={gymInfo.id}  gymInfo={gymInfo}/>)}  
           </div>
        </div>
    );
};

export default Cards;