import React from 'react';
import './Information.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Information = ({info,handleReadTime,addedToCart}) => {
    const {coverImg,authorProfile,name,publishedDate,readTime,title} = info;
    
    return (
        <div className='information'>
            <img src={coverImg} alt="" />
           <div className="read-time">
           <div className="author">
               <img src={authorProfile} alt="" />
                <div className="author-info">
                    <h3>{name}</h3>
                    <p> {publishedDate} </p>
                </div>
            </div>
            <p>{readTime} min read  <FontAwesomeIcon onClick={()=>addedToCart(info)}   icon={faBookmark} /></p>
           </div>
           <h1 className='title'> {title} </h1>
           <div>
           <span className='beginners'>#beginners</span> 
           <span> #programming</span>
           </div>
        <a onClick={()=> handleReadTime(readTime)}>Mark as read</a>
        </div>
    );
};

export default Information;