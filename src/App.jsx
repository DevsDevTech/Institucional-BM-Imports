import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Policy from './pages/Policy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/policy' element={<Policy />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
