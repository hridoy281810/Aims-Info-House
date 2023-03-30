import React from 'react';
import './Header.css'
import navimg from '../../img/Ellipse 1.png'
const Header = () => {
    return (
        <div>
            <nav className='header'>
            <div className="nav-title">
                <h1>Aims Info House</h1>
            </div>
            <img src={navimg} alt="" />


        </nav>
        <hr />
        </div>
    );
};

export default Header;