import React, { useState } from 'react'
import axios from 'axios'
function TestFour() {
    const [users, setUsers] = useState({
        name: '',
        email : '', 
        Password: '', 
        Phone: '', 
        Address: '', 
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsers((prevUsers) => ({
          ...prevUsers,
          [name]: value,
        }));
      };
    

    const handler = async (e) => {
        e.preventDefault()
      try {
        const response = await axios.post('https://946a-2400-ac40-60e-4c80-482e-985a-1e2e-20cb.ngrok-free.app/api/products', users)
        const datas = await response.data
        
        console.log('Response', datas );
      } catch (error) {
        console.log(error.response)
      }
    } 
    
  return (

    <div>
    <form>
    <input type='text' name='User' placeholder='User Name' onChange={handleChange}></input>
    <input type='email' name='email' placeholder='email' onChange={handleChange}></input>
    <input type='number' name='number' placeholder='Phone number' onChange={handleChange}></input>
    <input type='text' name='address' placeholder='Address' onChange={handleChange}></input>
    <input type='password' name='password' placeholder='Password' onChange={handleChange}></input>
    
    <button onClick={handler}>Click</button>
    </form>
      
    </div>
  )
}

export default TestFour
