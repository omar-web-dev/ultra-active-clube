import './Header.css'
import React from 'react';

// const home = () => {

// }
const Header = () => {
    return (
        <nav>
            <div className="">
                <img className='logo' src={'https://i.ibb.co/3Fs58N6/logo.png'} alt='logo'/> 
            </div>
            <ul>
                <li >Home</li>
                <li>Blog </li>
            </ul>
        </nav>
    );
};

export default Header;