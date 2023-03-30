import React, { useEffect } from 'react';
import './Cart.css'

const Cart = ({readTime ,setReadTime}) => {
    
useEffect(()=>{
    const getReadTime = localStorage.getItem("readTime");
    setReadTime(getReadTime)
 
},[readTime]);
    return (
        <div>
            <h1>ashd {readTime} </h1>
        </div>
    );
};

export default Cart;