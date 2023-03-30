import React from 'react';
import './Information.css';
import chek from '../../img/anis.jpg'

const Information = () => {
    return (
        <div className='information'>
            <img src={chek} alt="" />
           <div className="read-time">
           <div className="author">
                <h1>sfdh;ias;hfd</h1>
                <div className="author-info">
                    <h3>mohammad anis</h3>
                    <p>Mar 14 (4 Days ago)</p>
                </div>
            </div>
            <p>12 min read</p>
           </div>
        </div>
    );
};

export default Information;