import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Policy from './pages/Policy'
import 'flowbite/dist/flowbite.min.css'; 
import { initFlowbite } from 'flowbite';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    initFlowbite();
  }, []);


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
