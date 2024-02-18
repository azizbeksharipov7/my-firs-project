import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Info = () => {
  const {category}=useParams()
  console.log(category);
  const [data, setData]=useState([])

  async function fetchData() {
    return await fetch(`${import.meta.env.VITE_API_URL}/products?category=${category}`)
    .then((res)=> res.json())
    .then((json)=>setData(json))
    
  }

  useEffect(()=>{
    fetchData();

  }, [category]);
  console.log(data);

  return (
    <div>Info</div>
  )
}


export default Info