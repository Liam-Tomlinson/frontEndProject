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

     console.log(articlesList[0])
   
    return (
       <div>
          {articlesList.map((item) => {
        return <ArticlesCard item={item}/>
      }) } 
       </div>
      
       
        )

}


// searchResults.map((item, index) => {
//     return <ItemCard key={index} item={item}/>


export default ViewArticlesList