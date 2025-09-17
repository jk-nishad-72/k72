import React, { useRef } from 'react'
import { Link, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
import FullScreenNabar from './components/Navigation/FullScreenNabar'


const App = () => {



  return (
    <div >
      < Navbar />
      <FullScreenNabar />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/agence' element={< Agence />} />
        <Route path='/projects' element={< Projects />} />

      </Routes>

    </div>
  )
}

export default App