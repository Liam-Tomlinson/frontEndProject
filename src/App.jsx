import { useState } from 'react'
import './App.css'
import AllArticles from './componants/AllArticles'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewSingleArticle from './componants/ViewSingleArticle';


function App() {
  const [articleID, setarticleID] = useState(0)

  return (<>
  <Routes >
   <Route path='article/:article_ID' element={<ViewSingleArticle/>}></Route>
   <Route path='/' element={<AllArticles/>}></Route>
  </Routes>
  </>
  
   )
}

export default App
