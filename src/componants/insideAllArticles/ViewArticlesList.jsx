import React, { useState, useEffect } from 'react';
import { getArticlesList } from '../../../utils/apiRequests';
import ArticlesCard from './ArticleCard';

const ViewArticlesList = () => 
{

    const [articlesList, setarticlesList] = useState([]);


    useEffect(() => {
        getArticlesList()
        .then((results) => setarticlesList(results))
     }, [])

   
    return (
       <div>
          {articlesList.map((item) => {
        return <ArticlesCard key={item.article_id} item={item}/>
      }) } 
       </div>
      
       
        )

}




export default ViewArticlesList