import { useState } from 'react'
import './App.css'
import AllArticles from './componants/AllArticles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AllArticles/>
  )
}

export default App
