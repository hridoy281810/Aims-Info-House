import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart'>

<div className="add-cart-title">
                    <p>{cart.title}</p>
                </div>
        </div>
    );
};

export default Cart;