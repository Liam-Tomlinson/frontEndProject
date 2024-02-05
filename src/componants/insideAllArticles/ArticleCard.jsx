import React, { useState, useEffect } from 'react';


const ArticlesCard = (item) => {

    console.log(item.item)
   return  <div>
        <h3>{item.item.title}</h3>
        <p >Written by {item.item.author}</p>
        <img src={item.item.article_img_url} alt="article picture" />
    </div>


}

export default ArticlesCard
