import React from 'react'
import Navbar from './Components/Others/Navbar'
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Products from './Components/Prtoducts/Products'
import Register from './Components/Register/Register'
import Profile from './Components/Profile/Profile'

function App() {
  return (
    <div>
    <Router>
    <Navbar />
    <Routes>
        <Route path='' element= {<Home />} />
        <Route path='/about'>
        <Route path='about1' element= {<About />} />
        
        </Route>
        <Route path='/products' element= {<Products />} />
        <Route path='/profile' element= {<Profile />} />
        <Route path= '/register' element= {<Register />} />
    
      </Routes>
      </Router> 
    </div>
  )
}

export default App
