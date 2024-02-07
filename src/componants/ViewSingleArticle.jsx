import React, { useState, useEffect } from 'react';
import { getSingleArticle, getSingleComments } from '../../utils/apiRequests';
import { useParams } from 'react-router-dom';
import CommentsCard from './insideViewSingleArticle/CommentsCard';
import LikeButton from './insideViewSingleArticle/LikeButton';

const ViewSingleArticle = () => 
{
    const [articleBody, setArticleBody] = useState([]);
    const [articleComments, setArticleComments] = useState([]);
    const { article_ID } = useParams();
    

    useEffect(() => {
        getSingleArticle(article_ID)
        .then((results) => setArticleBody(results.data.data[0]))
     }, [])

     useEffect(() => {
        getSingleComments(article_ID)
        .then((results) => setArticleComments(results.data.comments))

     }, [])

     console.log(articleBody, '<-articlebody')

    

    return <>
    <h1>{articleBody.title}</h1>
    <LikeButton articleBody={articleBody}/>
    <h3>Written by {articleBody.author}</h3>
    <img src={articleBody.article_img_url} alt="article picture" />
    <p>{articleBody.body}</p> 
    <h3 > View comments</h3>
    <div>
        {articleComments.map((item) => {
            return <CommentsCard key={item.comment_id} item={item} />
        })}
    </div>
    </>
}
    

export default ViewSingleArticle

