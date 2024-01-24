import React, { useEffect, useState } from 'react'
import axios from 'axios'
function TestThree() {
    const [name , setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
        
    
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post('https://6d89-2400-ac40-60e-196b-3d80-cf08-a27e-1530.ngrok-free.app/api/products', {
                name: name,
                email: email,
                password: password,
            }, 
            {
            headers: {
                'Content-Type': 'application/json'
            }});
            console.log(resp);
    
        } catch (error) {
            console.log(error.response);
        }
    };


  return (
    <div>
    <form>
    <input type='text' placeholder='Name' name='name' onChange={(e) => {setName(e.target.value)}}></input>
    <input type='email' placeholder='Email' name='email' onChange={(e) => {setEmail(e.target.value)}}></input>
    <input type='password' placeholder='Password' name='password' onChange={(e) => {setPassword(e.target.value)}}></input>
    
    
    <button onClick={handleSubmit}>Click</button>
    
    
    
</form>
      
    </div>
  )
}



export default TestThree
