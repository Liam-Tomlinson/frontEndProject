import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserListCard = ({item}) => 
{
    return <Link to={'/'}>
    <div>
    <img src={item.avatar_url} alt="user avatar" />
    <h3>{item.username}</h3>
    <p >{item.username}</p>   
    </div>  
    </Link>  
}

export default UserListCard