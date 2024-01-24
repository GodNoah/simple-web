import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Images/logo.png'
import '../Style/Navbar.css'
import style from '../Style/Button.module.css'

function Navbar() {

  return (
    <div>
    <nav>
      <img className="logo" src={logo} alt='sss'></img>
      <ul>
        <Link className={style.link} to='/'>Home</Link>
        <Link className={style.link} to='/about'>About</Link>
        <Link className={style.link} to='/products'>Products</Link>
        <Link className={style.link} to='/profile'>Profile</Link>
      </ul>
    
      
      <Link className={style.buttonStyle} to='/register'>
          Register
          </Link>
     
    </nav>
      
    </div>
  )
}

export default Navbar
