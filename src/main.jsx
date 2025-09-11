import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import Stairs from './components/common/Stairs.jsx'
import Navbarcontex from './context/Navbarcontex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Stairs >
   
     <Navbarcontex>
      < App/>
     </Navbarcontex>
   </Stairs>
 
   </BrowserRouter>
  </StrictMode>,
)
