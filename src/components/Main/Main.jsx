import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Information from '../Information/Information';
import './Main.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {

  const [information, setInformation] = useState([])
  const [readTime, setReadTime] = useState(0)
  const [carts, setCart] = useState([]);
  useEffect(() => {
    fetch(`data.json`)
      .then(res => res.json())
      .then(data => setInformation(data))
  }, [])

  const handleReadTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const sum = previousReadTime + time;
      localStorage.setItem("readTime", sum);
      setReadTime(sum);
    }
    else {
      localStorage.setItem("readTime", time);
      setReadTime(time);
    }
  }


  useEffect(() => {
    const getReadTime = localStorage.getItem("readTime");
    setReadTime(getReadTime)

  }, [readTime]);

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
            information.map(info => <Information
              key={info.id}
              info={info}
              handleReadTime={handleReadTime}
              addedToCart={addedToCart}
            ></Information>)
          }

          {/* ..................  */}
          <div className='question'>
            <h4>Difference Between Props and States?</h4>
            <p><span >Answer:</span> </p>
            <p>Props: Through props data can be sent from one component to another component and from one component to multiple components, I mean component inside the component, inside the component like this, data can be sent inside but through props, data can only be sent from bottom to top. Cannot be sent.Data sent through props cannot be modified and is read only</p>
            <p>State: data is sent between states.The state is limited to a specific location.State data can be read and modified.Cannot be sent from component to other component in data state. </p>
          </div>
          <div className='question'>
            <h4>How the useState  works?</h4>
            <p><span >Answer:</span> </p>
            <p>useState:
              useState is React Hook. A specific argument and it calls the function. Through the function, the data from various processes is called and stored in the argument and the data is returned as an array. Various operations are performed with the data.</p>
          </div>
          <div className='question'>
            <h4>useeffect How many types of work and what?</h4>
            <p><span >Answer:</span> </p>
            <p>useeffect:</p>
            <ul>
              <li>Fetching data from any api</li>
              <li>Updating DOM</li>
              <li>Setting Any Subciptions</li>
              <li>Set timer</li>
            </ul>
          </div>
          <div className='question'>
            <h4>how dose react work?</h4>
            <p><span >Answer:</span> </p>
            <p>React:
              React is a component-based JavaScript library.Through this we can create user interface.React manages components using a virtual DOM. <br />
              Here are the functions of React:
            </p>
            <ul>
              <li>Defining components</li>
              <li>Component mounting</li>
              <li>Rendering the component</li>
            </ul>

          </div>
        </div>
        <div className="cart-container">
          <div className="cart">
            <div className="spent-time">
              <p>Spent time on read : {readTime} min</p>
            </div>
            <div className="add-cart">
              <h3>Bookmarked Blogs :{carts.length}</h3>
              {
                carts.map(cart => <Cart
                  cart={cart}
                  key={cart.id}
                ></Cart>)
              }

            </div>

          </div>
        </div>
        {/* q-answer  */}

        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Main;