import React, { useState, useEffect } from 'react';
import { } from '../../../utils/apiRequests';
import { postComment, getSingleComments } from '../../../utils/apiRequests';
import CommentsCard from './CommentsCard';

const PostNewComment = ({article_ID}) => 
{

    const [commentBox, setCommentBox] = useState("");
    const [finalComment, setFinalComment] = useState("")
    



    const onChangeHandler = (event) => {
        setCommentBox(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        postComment(commentBox, article_ID)
        setFinalComment(commentBox)
    }

if(finalComment === "")
{
    return <> 
    <form onSubmit={onSubmitHandler}>
       <label>comment box:  </label>
       <input onChange={onChangeHandler}></input>
        <button>Post</button>
    </form>
    </>
}

    return <> 
    <form onSubmit={onSubmitHandler}>
       <label>comment box:  </label>
       <input onChange={onChangeHandler}></input>
        <button>Post</button>
    </form>
    <h3>cooljmessy</h3>
    <p>Posted now. it has 0 votes. </p>
    <p>{finalComment}</p>
    </>
}

export default PostNewComment


