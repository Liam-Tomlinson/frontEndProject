import React, { useState, useEffect } from 'react';
import { getSingleArticle } from '../../utils/apiRequests';
import { useParams } from 'react-router-dom';

const ViewSingleArticle = () => 
{
    const [articleBody, setArticleBody] = useState([]);
    const { article_ID } = useParams();
  

    useEffect(() => {
        getSingleArticle(article_ID)
        .then((results) => setArticleBody(results.data.data[0]))
     }, [])

    return <>
    <h1>{articleBody.title}</h1>
    <h3>Written by {articleBody.author}</h3>
    <img src={articleBody.article_img_url} alt="article picture" />
    <p>{articleBody.body}</p> 
    </>
}
    

export default ViewSingleArticle


// {results.data.data[0].title}