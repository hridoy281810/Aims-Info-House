import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Information from '../Information/Information';
import './Main.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {

    const [information,setInformation] = useState([])
    const [readTime ,setReadTime] = useState(0)
    const [carts, setCart] = useState([]);
    useEffect(()=>{
        fetch(`data.json`)
        .then(res => res.json())
        .then(data => setInformation(data))
    },[])

    const handleReadTime = (time)=> {
        const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
        if(previousReadTime){
            const sum = previousReadTime + time;
            localStorage.setItem("readTime", sum);
            setReadTime(sum);
            }
            else{
            localStorage.setItem("readTime", time);
            setReadTime(time);
            }
    }


    useEffect(()=>{
      const getReadTime = localStorage.getItem("readTime");
      setReadTime(getReadTime)
   
  },[readTime]);

  const addedToCart = (food) => {
    const getCart = carts.find(cart => cart.id === food.id);
    if (getCart) {
      toast("You have already attached this information, please attach another one!!!")
        return;
    }

    const newCart = [...carts, food];
    setCart(newCart);
    addToDb(food.title)
}
    return (
        <div>
      <div className="main-container">
       <div className="info-container">
        {
            information.map(info =>  <Information 
              key={info.id}
              info={info}
              handleReadTime={handleReadTime}
              addedToCart={addedToCart}
            ></Information> )
        }
       
       </div>
        <div className="cart-container">
       <div className="cart">
       <div className="spent-time">
                <p>Spent time on read : {readTime} min</p>
            </div>
            <div className="add-cart">
                <h3>Bookmarked Blogs :{carts.length}</h3>       
               {
                carts.map(cart =>  <Cart
                    cart={cart}
                            key={cart.id}
                            ></Cart>)
               }

            </div>
       </div>            
        </div>
      </div>
      <ToastContainer></ToastContainer>
        </div>
    );
};

export default Main;