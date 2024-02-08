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

     if(isLoading) return <p >Please wait while we contact the server and load your content. Please note that if the server has not been active for 15 minutes it may take upto 50 seconds for it to respond.</p>
   
    return (
       <div>
          {articlesList.map((item) => {
        return <ArticlesCard key={item.article_id} item={item}/>
      }) } 
       </div>
      
       
        )

}




export default ViewArticlesList