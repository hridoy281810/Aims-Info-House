import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Information from '../Information/Information';
import './Main.css'

const Main = () => {
    const [information,setInformation] = useState([])
    const [readTime ,setReadTime] = useState(0)
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
            setReadTime(sum)
            }
            else{
            localStorage.setItem("readTime", time);
            setReadTime(time)
            }
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
            ></Information> )
        }
       
       </div>
        <div className="cart-container">
         <Cart readTime={readTime}
          setReadTime={setReadTime}
         ></Cart>
        </div>
       
      </div>
        </div>
    );
};

export default Main;