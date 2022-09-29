import React from 'react';
import SingleCard from '../SingleCard/SingleCard';
import './Cards.css'

const Cards = () => {
    return (
        <div className='cards-com'>
           <h3>Select today’s exercise</h3> 
            <SingleCard />
           
        </div>
    );
};

export default Cards;