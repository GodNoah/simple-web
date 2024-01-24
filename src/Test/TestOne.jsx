import React, { useEffect, useState } from 'react'
import axios from 'axios'

const url = 'https://946a-2400-ac40-60e-4c80-482e-985a-1e2e-20cb.ngrok-free.app/api/products'

function TestOne() {
  const [posts, setPosts] = useState([]); 
  const fetchData = async () => {
  try {
    const response = await axios(url);
    const data = response.data 
    console.log(data)
  }catch (err) {
    console.log(err.response)
  }
} 

 useEffect(() => {
    fetchData()
 }, [])

  return (
    <div>
        <h2>First Data Fetch</h2>
    </div>
  )
}

export default TestOne
