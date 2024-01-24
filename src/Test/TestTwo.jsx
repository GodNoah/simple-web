import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from '../Components/Style/Button.module.css'

const url = 'https://946a-2400-ac40-60e-4c80-482e-985a-1e2e-20cb.ngrok-free.app/api/products'

function TestTwo() {
    const [posts, setPosts] = useState([]) 

    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Accept: 'application/json',
          },
        });
        const data = response.data; 
        console.log('Response:', data.title);
        console.log('Response:', data.body);
    
        setPosts(data);
        

      } catch (err) {
        console.error(err);
      }
    };
    
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <center>
    <div>
    <h1>Fetched data</h1>
    { 
      posts.map((post) => {
        return <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.price}</p>
        
        </div>
      })

    }
  
    </div>  
    </center>

  )
}


export default TestTwo
