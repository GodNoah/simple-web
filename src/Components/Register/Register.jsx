import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import style from '../Style/Register.module.css'
function Register() {
    const [formData, setFormData] = useState(
        {
            user: '', 
            email: '',
            password: '',  
        }
    )
    const [formDataError, setFormDataError] = useState ({
        email: false , 
        password: false
    })
    const formHandle = (e) => {
        // e.preventDefault();

    }

    const handleChange =(e)=> {
        setFormData({...formData, [e.target.name]: e.target.value})
        console.log(formData)
    }

    const handleEmailBlur = (e) => {
      if(!formData.email.includes('@')) {
        setFormDataError({...formDataError, email : true})
      }else {
        setFormDataError({...formDataError, email: false})
      }
    }
  return (
    <div>
    <form className={style.form}>
            <input type='text' value={formData.user} name='user' placeholder='User Name' onChange={handleChange}  />
            <input type='email' value={formData.email} name='email' placeholder='email' onChange={handleChange} onBlur={handleEmailBlur} />
            {formDataError.email && (
                <p style={{ color: 'red', transition: '0.4s ease-in' }}>Email must include '@' symbol</p>
              )}            
            <input type='password' value={formData.password} name='password' placeholder='password' onChange={handleChange} />

            <p>Aalready have an account? <Link to="#">Log in</Link> </p>

            <button >Submit</button>
    </form>

    </div>
  )
}

export default Register
