import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ViewSingleArticle from '../ViewSingleArticle';


const ArticlesCard = (item) => {
       

    return <Link to={`/article/${item.item.article_id}`}>
    <div className='div1'>
        <h3>{item.item.title}</h3>
        <p >👩‍💻 {item.item.author}</p>
        <img src={item.item.article_img_url} alt="article picture" />    
    </div>
    </Link>
}




export default ArticlesCard
