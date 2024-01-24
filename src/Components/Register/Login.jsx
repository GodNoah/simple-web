import React from 'react'
import { useState } from 'react'
import style from'../Style/Register.module.css'
import { Link } from 'react-router-dom'

function Login() {
    const [formData, setFormData] = useState(
        { 
            email: '',
            password: '',  
        }
    )
    const [formDataError, setFormDataError] = useState ({
        email: false , 
        password: false
    })
    const formHandle = (e) => {
         e.preventDefault();

    

         

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
    <form className={style.form} onSubmit={formHandle}>
               <input type='email' value={formData.email} name='email' placeholder='email' onChange={handleChange} onBlur={handleEmailBlur} />
            {formDataError.email && (
                <p style={{ color: 'red', transition: '0.4s ease-in' }}>Email must include '@' symbol</p>
              )}            
            <input type='password' value={formData.password} name='password' placeholder='password' onChange={handleChange} />

            <p>New Here? <Link to="/register">Log in</Link> </p>

            <button >Submit</button>
    </form>

    </div>
  )
  
}

export default Login

