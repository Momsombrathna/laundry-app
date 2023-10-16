import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Home from './components/Home'
import Color from './components/Color'
import Brand from './components/Brand'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/color" element={<Color />} />
          <Route path="/brand" element={<Brand />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
