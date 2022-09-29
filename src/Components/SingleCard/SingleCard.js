import React from 'react';
import './SingleCard.css'

const SingleCard = () => {
    return (
        <div className="single-card-com">
            <div className='card'>
                <img src={'https://i.ibb.co/xFQMdrV/1.png'} alt="images" />
                <div className="card-contain">
                    <h4 className="name">Name</h4>
                    <p className='des'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
                    </p>
                    <p className='age'>For Age : 20-25</p>
                    <p className='time'>Time required : 30</p>
                    <button>Add To Lard</button>
                </div>
            </div>
            <div className='card'>
                <img src={'https://i.ibb.co/xFQMdrV/1.png'} alt="images" />
                <div className="card-contain">
                    <h4 className="name">Name</h4>
                    <p className='des'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
                    </p>
                    <p className='age'>For Age : 20-25</p>
                    <p className='time'>Time required : 30</p>
                    <button>Add To Lard</button>
                </div>
            </div>
            <div className='card'>
                <img src={'https://i.ibb.co/xFQMdrV/1.png'} alt="images" />
                <div className="card-contain">
                    <h4 className="name">Name</h4>
                    <p className='des'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
                    </p>
                    <p className='age'>For Age : 20-25</p>
                    <p className='time'>Time required : 30</p>
                    <button>Add To Lard</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;