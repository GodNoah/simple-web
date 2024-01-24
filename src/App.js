import React from 'react'
import Navbar from './Components/Others/Navbar'
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Products from './Components/Prtoducts/Products'
import Register from './Components/Register/Register'
import Profile from './Components/Profile/Profile'
import Login from './Components/Register/Login'
import TestOne from './Test/TestOne'
import TestTwo from './Test/TestTwo'
import TestThree from './Test/TestThree'
import TestFour from './Test/TestFour'


function App() {
  return (
    <div>
    <Router>
    <Navbar />
    <Routes>
        <Route path='' element= {<Home />} />
        
        <Route path='about' element= {<About />} />
        
        
        <Route path='/products' element= {<Products />} >
        </Route>
        <Route path='/profile' element= {<Profile />} />
        <Route path= '/register' element= {<Register />} />
        <Route path= '/login' element= {<Login />} />
        <Route path='*' element= {<h1>404</h1>}></Route>
        <Route path='/test' element= {<TestOne></TestOne>}></Route>
        <Route path='/test2' element= {<TestTwo></TestTwo>}></Route>
        <Route path='/test3' element= {<TestThree></TestThree>}></Route>
        <Route path='/test4' element= {<TestFour></TestFour>}></Route>
    
    
        

        
      </Routes>
      </Router> 
    </div>
  )
}

export default App
