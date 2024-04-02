import React from 'react'
import Headers from './components/Headers'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import About from './components/About/About'

const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Headers />
         <Routes>
            <Route path='/' element={<About />}/>
         </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default App