import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticlesList } from '../../utils/apiRequests';
import ArticlesCard from './insideAllArticles/ArticleCard';

const ViewArticlesByTopics = () => 
{
    const { topic_name } = useParams();
    const [articlesList, setarticlesList] = useState([]);


    useEffect(() => {
        getArticlesList()
        .then((results) => {
         setarticlesList(results)
         setIsLoading(false)         
        }) 
        
     }, [])

    return <div>
         <h1>{topic_name} Articles</h1>
     {articlesList.map((item) => {
        console.log(item.topic)
        if(item.topic === topic_name)
        {
            return <ArticlesCard key={item.article_id} item={item}/>
        }
       
      }) } 
    </div>
    
    
    
    
   
}

export default ViewArticlesByTopics