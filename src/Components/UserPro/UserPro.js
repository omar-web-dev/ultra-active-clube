import React from 'react';
import './UserPro.css'

const UserPro = () => {
    return (
        <div className='user-pro-com'>
            <div className='user-pro'>
                <img src={'https://i.ibb.co/sqR0jBT/1655542833192-2.jpg'} alt="user_image" />
                <div className='user-info'>
                    <h4>Omar Farruk</h4>
                    <p>Noakhali || Chittagong || BD</p>
                </div>
            </div>
            <div className="body-info">
                <div>
                    <h3 >51 <span className='kg'>kg</span></h3>
                    <p>Weight</p>
                </div>
                <div>
                    <h3 >5.4 <span className='kg'>ins</span></h3>
                    <p>Height</p>
                </div>
                <div>
                    <h3 >21<span className='kg'>yrs</span></h3>
                    <p>Age</p>
                </div>
            </div>
            <div>
                <h3>Add A Break</h3>
            </div>
            <div className="body-info">
                <div>
                    <h4 className='s10 '>10 <span className='s'>s</span></h4>
                </div>
                <div>
                    <h4  className='s10'  >20<span className='s'>s</span></h4>
                </div>
                <div>
                    <h4 className='s10'  >30<span className='s'>s</span></h4>
                </div>
                <div  className='s10 active-brack'>
                    <h4 >40<span className='s'>s</span></h4>
                </div>
                <div>
                    <h4  className='s10' >50<span className='s'>s</span></h4>
                </div>
            </div>
        </div>
    );
};

export default UserPro;