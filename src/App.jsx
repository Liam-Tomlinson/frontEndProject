import { useState } from 'react'
import './App.css'
import AllArticles from './componants/AllArticles'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewSingleArticle from './componants/ViewSingleArticle';
import ViewUsers from './componants/ViewUsers';


function App() {

  return (<>
  <Routes >
   <Route path='article/:article_ID' element={<ViewSingleArticle/>}></Route>
   <Route path='/' element={<AllArticles/>}></Route>
   <Route path='/login' element={<ViewUsers/>}></Route>
  </Routes>
  </>
   )
}

export default App
