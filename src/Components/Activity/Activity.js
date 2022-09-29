import React, { useState } from 'react';
import UserPro from '../UserPro/UserPro';
import './Activity.css'

const Activity = () => {

    const [brack,getBrack] = useState('')
    let brackTime = JSON.parse(localStorage.getItem("brack"))
    if(brack){
        localStorage.setItem("brack" , JSON.stringify(brack))
    }

    // // console.log(time);
    // const timeInt = parseInt(time)
    // const newTime = timeInt 
    return (
        <div className='activity-com'>
            <UserPro getBrack={getBrack} />
            <div className='exercise-details'>
                <div>
                    <h3>Exercise Details</h3>
                </div>
                <div className="time-calc">
                    <h4 >Exercise time</h4>
                    <p> seconds</p>
                </div>
                <div className="break-time">
                    <h4>Break time</h4>
                    <p>{brackTime?brackTime:"00"} seconds</p>
                </div>
            </div>
        </div>
    );
}; 

export default Activity;