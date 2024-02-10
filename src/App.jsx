import { useState } from 'react'
import './App.css'
import AllArticles from './componants/AllArticles'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewSingleArticle from './componants/ViewSingleArticle';
import ViewUsers from './componants/ViewUsers';
import NavBar from './componants/NavBar';
import ViewArticlesByTopics from './componants/ViewArticleByTopics';


function App() {

  return (<>
  <NavBar />
  <Routes >
   <Route path='article/:article_ID' element={<ViewSingleArticle/>}></Route>
   <Route path='/' element={<AllArticles/>}></Route>
   <Route path='/login' element={<ViewUsers/>}></Route>
   <Route path='topics/:topic_name' element={<ViewArticlesByTopics/>} ></Route>
  </Routes>
  </>
   )
}

export default App
