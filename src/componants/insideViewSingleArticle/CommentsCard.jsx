import React, { useState, useEffect } from 'react';
import DeleteButton from './DeleteButton';

const CommentsCard = (item) => 
{
    const [isDeleted, setisDeleted] = useState(false);

    if(isDeleted === false)
    {
        return <div className='div3'>
        <h3>{item.item.author}</h3>
        <p>Posted at {item.item.created_at}. it has {item.item.votes} votes. </p>
        <p>{item.item.body}</p>
        <DeleteButton setisDeleted={setisDeleted} comment_Id={item.item.comment_id}/>
        </div>
    }
    else {
        return <div className='div3'>
            <p >This comment has been deleted.</p>
        </div>
    }
  
}

export default CommentsCard