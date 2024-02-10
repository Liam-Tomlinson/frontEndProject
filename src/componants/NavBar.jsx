import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { getTopics } from '../../utils/apiRequests';

const NavBar = () => 
{
    const [topicsObject, settopicsObject] = useState([]);

    useEffect(() => {
        getTopics()
        .then((results) => {
         settopicsObject(results)       
        }) 
        
     }, [])



    return < >
    <div className="navbar">
      <Link to="/">Home</Link>
      {
         topicsObject.map((item) => {
            const url = '/topics/' + item.slug
            return <Link to={url}>{item.slug}</Link>
          
          })
      }
      
    </div>
    </>

}

export default NavBar;