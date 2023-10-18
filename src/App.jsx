import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Home from './components/Home'
import Color from './components/Color'
import Brand from './components/Brand'
import Note from './components/Note'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToastContainer theme='colored' 
        limit={2} 
        autoClose={1000} 
        pauseOnHover
        draggable={false}
        pauseOnFocusLoss={false}>
      </ToastContainer>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/color" element={<Color />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/note" element={<Note />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
