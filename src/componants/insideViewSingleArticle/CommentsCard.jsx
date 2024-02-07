import React, { useState, useEffect } from 'react';

const CommentsCard = (item) => 
{
    return <>
    <h3>{item.item.author}</h3>
    <p>Posted at {item.item.created_at}. it has {item.item.votes} votes. </p>
    <p>{item.item.body}</p>
    </>
}

export default CommentsCard