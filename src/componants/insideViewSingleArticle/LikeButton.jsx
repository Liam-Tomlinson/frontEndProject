import React, { useState, useEffect } from 'react';
import { patchArticle } from '../../../utils/apiRequests';

const LikeButton = ({articleBody}) => 
{

   
    const [articleVotes, setArticleVotes] = useState(0);
    




    const voteUpClickHandler = (event) => {

        event.preventDefault()
        setArticleVotes(articleVotes + 1)
     
            const newVote = 1
            patchArticle(articleBody.article_id, newVote) 
    }

    const voteDownClickHandler = (event) => {
        event.preventDefault()
        setArticleVotes(articleVotes - 1)

        const newVote = -1
        patchArticle(articleBody.article_id, newVote) 
    }


    return <>
     <button onClick={voteUpClickHandler}>Vote Up 👆 {articleVotes + articleBody.votes} </button>
     <button onClick={voteDownClickHandler}>Vote Down 👇</button>
    </>
   
}

export default LikeButton

