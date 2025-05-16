import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar/Navbar.jsx'
// import HamburgerMenu from './Navbar/Hamburger/HamburgerMenu.jsx'
import Landing from './Pages/Landing.jsx'
import Projects from './Pages/Projects.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <script src="./index.css"></script>
    <Navbar />
    <Landing />
  </StrictMode>,
)
