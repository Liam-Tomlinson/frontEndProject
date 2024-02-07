import React, { useState, useEffect } from 'react';
import { getArticlesList } from '../../../utils/apiRequests';
import ArticlesCard from './ArticleCard';

const ViewArticlesList = () => 
{

    const [articlesList, setarticlesList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        getArticlesList()
        .then((results) => {
         setarticlesList(results)
         setIsLoading(false)         
        }) 
        
     }, [])

     if(isLoading) return <p >Please wait while we contact the database and load your content.</p>
   
    return (
       <div>
          {articlesList.map((item) => {
        return <ArticlesCard key={item.article_id} item={item}/>
      }) } 
       </div>
      
       
        )

}




export default ViewArticlesList