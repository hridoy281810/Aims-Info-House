import React from 'react';
import Information from '../Information/Information';
import './Main.css'

const Main = () => {
    return (
        <div>
      <div className="main-container">
       <div className="info-container">
        <Information></Information>
       </div>
        <div className="cart-container">

        </div>
       
      </div>
        </div>
    );
};

export default Main;