import React from 'react';
import './SingleCard.css'

const SingleCard = ({gymInfo}) => {
    console.log(gymInfo);

    const {name,picture,registered,age,time} = gymInfo
    return (
        <div className='card'>
            <img src={picture} alt="images" />
            <div className="card-contain">
                <h4 className="name">{name}</h4>
                <p className='des'>{registered}</p>
                <p className='age'>For Age : {age}</p>
                <p className='time'>Time required : {time}</p>
                <button>Add To List</button>
            </div>
        </div>
    );
};

export default SingleCard;