import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Navbar from './Navbar/Navbar.jsx'
import Landing from './Pages/Landing.jsx'
import About from './Pages/About.jsx'
import Projects from './Pages/Projects.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <script src="./index.css"></script>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
