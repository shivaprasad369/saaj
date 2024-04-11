import axios from 'axios'
import React, { useState } from 'react'

export default function Fetch() {
    const [img,setImg]=useState("")

  const [img2,setImg2]=useState("")
  const [img3,setImg3]=useState("")
  const [img4,setImg4]=useState("")
  async function handleImage(id){
   await axios.get(`https://server-442v.onrender.com/${id}`).then((data)=>{
    if(data===null){
      alert("There no image found")
    return false;
    }
    else{
      setImg(data.data.data.photo)
      console.log(data.data.data.photo)
    }
   })
  }
  return [{
    img,
    handleImage
  }]
}
