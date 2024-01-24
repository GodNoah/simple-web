import React, { useState, useEffect } from 'react'
import style from '../Style/Products.module.css'

function Products() {
  
  const Base_URL = 'https://jsonplaceholder.typicode.com'
  const [posts, setPosts] = useState([]);  
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${Base_URL}/posts`)
      const data = await response.json()

      console.log(data)

      setPosts(data)
      
    }
    fetchData()
  }, [])



  

  return (
    <div>
    <h1> Products </h1>
    
    <ul>
    <h3>Links</h3>
    {  
      posts.map((post) => {
        return <li className={style.litag} key={post.id}>
        <p>{post.body}</p>
        </li>
      })
    }
    </ul>
      
    </div>
  )
}

export default Products 
