import React, { useState } from 'react';
import UserPro from '../UserPro/UserPro';
import './Activity.css'

const Activity = ({times}) => {
    const [brack,getBrack] = useState('')
    let brackTime = JSON.parse(localStorage.getItem("brack"))
    if(brack){
        localStorage.setItem("brack" , JSON.stringify(brack))
    }

    function diffToast(){
        alert("this Error:  ./node_modules/react-toastify/dist/react-toastify.esm.mjs Cant import the named export cloneElement from non EcmaScript module (only default export is available)");
    }

    return (
        <div className='activity-com'>
            <UserPro getBrack={getBrack} />
            <div className='exercise-details'>
                <div>
                    <h3>Exercise Details</h3>
                </div>
                <div className="time-calc">
                    <h4 >Exercise time</h4>
                    <p> {times?times:"00"} seconds</p>
                </div>
                <div className="break-time">
                    <h4>Break time</h4>
                    <p>{brackTime?brackTime:"00"} seconds</p>
                </div>
                <button onClick={diffToast} >Activity Completed</button>
            </div>
        </div>
    );
}; 

export default Activity;