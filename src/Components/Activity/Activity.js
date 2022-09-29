import React from 'react';
import UserPro from '../UserPro/UserPro';
import './Activity.css'

const Activity = () => {
    return (
        <div className='activity-com'>
            <UserPro />
            <div className='exercise-details'>
                <div>
                    <h3>Exercise Details</h3>
                </div>
                <div className="time-calc">
                    <h4 >Exercise time</h4>
                    <p>200 seconds</p>
                </div>
                <div className="break-time">
                    <h4>Break time</h4>
                    <p>30 seconds</p>
                </div>
            </div>
        </div>
    );
}; 

export default Activity;