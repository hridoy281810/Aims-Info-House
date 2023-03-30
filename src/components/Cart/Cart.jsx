import React, { useEffect } from 'react';
import './Cart.css'

const Cart = ({readTime ,setReadTime}) => {
    
useEffect(()=>{
    const getReadTime = localStorage.getItem("readTime");
    setReadTime(getReadTime)
 
},[readTime]);
    return (
        <div className='cart'>
            <div className="spent-time">
                <p>Spent time on read : 177 min</p>
            </div>
            <div className="add-cart">
                <h3>Bookmarked Blogs :</h3>
                <div className="add-cart-title">
                <p>Master Microsoft Power Platform and Become an In-Demand!</p>
                </div>
            </div>
            <h1>ashd {readTime} </h1>
        </div>
    );
};

export default Cart;